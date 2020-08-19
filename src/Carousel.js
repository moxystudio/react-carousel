import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';

import { animateProperty } from './util';

const INERTIAL_SCROLL_TIMEOUT = 100; // Anything below this value might cause issues in iOS devices
const TOUCH_SCROLLING_VELOCITY_THRESHOLD = 0.001;

const RESIZE_TIMEOUT = 200;

const classnames = (...args) => (
    args
        .map((arg) => (
            typeof arg === 'string' ?
                arg :
                arg && Object
                    .entries(arg)
                    .filter(([k, v]) => k !== 'undefined' && v)
                    .map(([k, _]) => k)
                    .join(' ')
        ))
        .filter((arg) => arg)
        .join(' ')
);

const noop = () => {};

class Carousel extends Component {
    state = {
        current: 0,
        slideCount: React.Children.count(this.props.children),
        dragging: false,
        animating: false,
    };

    containerRef = createRef();
    sliderRef = createRef();

    animating = false;
    autoplayInterval = null;
    lastTouch = {};
    touchScrolling = false;
    touching = false;
    velocity = {};

    drag = {
        isActive: false,
        initialIndex: 0,
        initialMousePos: {
            clientX: undefined,
            clientY: undefined,
        },
        finalMousePos: {
            clientX: undefined,
            clientY: undefined,
        },
    };

    inertialScrollHandler = debounce(() => {
        this.swapSlides()
            .then(() => {
                this.touchScrolling = false;

                if (!this.touching) { this.snapCurrentToPosition(); }
            });
    }, INERTIAL_SCROLL_TIMEOUT);

    debouncedResize = debounce(() => {
        this.setCurrent(this.state.current);
    }, RESIZE_TIMEOUT);

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyboardControlDown);
        window.addEventListener('keyup', this.handleKeyboardControlUp);
        window.addEventListener('resize', this.handleResize);

        this.containerRef.current.addEventListener('scroll', this.handleScroll);
        document.body.addEventListener('touchmove', this.handleTouchScroll, { passive: false });
        this.setCurrent(this.props.current ?? 0, { snap: true });

        this.setupAutoplay();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.autoplayIntervalMs !== this.props.autoplayIntervalMs) {
            this.setupAutoplay();
        }

        const { count } = React.Children;
        const slideCount = count(this.props.children);

        if (count(prevProps.children) !== slideCount) {
            this.setState({ slideCount });
        }

        const { current } = this.props;

        if (typeof current === 'number' && prevProps.current !== current) {
            this.setupAutoplay();
            this.setCurrent(current);
        }
    }

    componentWillUnmount() {
        window.clearInterval(this.autoplayInterval);

        this.containerRef.current.removeEventListener('scroll', this.handleScroll);

        window.removeEventListener('keydown', this.handleKeyboardControlDown);
        window.removeEventListener('keyup', this.handleKeyboardControlUp);
        window.removeEventListener('resize', this.handleResize);

        document.body.removeEventListener('touchmove', this.handleTouchScroll);

        this.inertialScrollHandler.cancel();
        this.debouncedResize.cancel();
    }

    render() {
        const {
            children,
            draggable,
            wrapperClassName,
            carouselClassName,
            sliderClassName,
            keyboardControl,
            disableNativeScroll,
            modifierCurrentClassName,
            modifierDraggableClassName,
            modifierDraggingClassName,
            modifierDisableScrollClassName,
        } = this.props;
        const { current, dragging } = this.state;
        const offset = this.offset();

        return (
            <div className={ classnames('rc-wrapper', wrapperClassName) }>
                <div
                    ref={ this.containerRef }
                    className={ classnames('rc', {
                        '-no-scroll': disableNativeScroll,
                        [modifierDisableScrollClassName]: disableNativeScroll,
                    }, carouselClassName) }
                    tabIndex={ keyboardControl ? '0' : '-1' }>
                    <div
                        ref={ this.sliderRef }
                        className={ classnames('rc-slider', {
                            '-draggable': draggable,
                            '-dragging': dragging,
                            [modifierDraggableClassName]: draggable,
                            [modifierDraggingClassName]: dragging,
                        }, sliderClassName) }
                        style={ offset > 0 ? { paddingLeft: offset, paddingRight: offset } : { } }
                        onDragStart={ this.handleSliderOnDragStart }
                        onMouseDown={ this.handleSliderMouseDown }
                        onMouseMove={ this.handleSliderMouseMove }
                        onMouseLeave={ this.handleSliderMouseLeave }
                        onMouseUp={ this.handleSliderMouseUp }
                        onTouchStart={ this.handleSliderTouchStart }
                        onTouchMove={ this.handleSliderTouchMove }
                        onTouchEnd={ this.handleSliderTouchEnd } >
                        { React.Children.toArray(children).map((child, i) => (
                            React.cloneElement(child, {
                                ...child.props,
                                key: i,
                                className: classnames('rc-slide', {
                                    '-current': current === i,
                                    [modifierCurrentClassName]: current === i,
                                }, child.props.className),
                                onMouseUp: (ev) => this.handleSlideMouseUp(ev, i),
                                onDragStart: (ev) => ev.preventDefault(),
                                onDrag: (ev) => ev.preventDefault(),
                            })
                        )) }
                    </div>
                </div>

                {this.renderArrows()}
                {this.renderDots()}
            </div>
        );
    }

    // ------------------------------------------------------------------------ Render props

    renderArrows = () => {
        if (!this.props.arrows) { return null; }

        const { renderArrows, infinite, arrowClassName, modifierLeftClassName, modifierRightClassName } = this.props;
        const { current, animating, dragging, slideCount } = this.state;

        if (typeof renderArrows === 'function') {
            return renderArrows({
                next: this.handleNext,
                previous: this.handlePrev,
                current,
                animating,
                dragging,
                slideCount,
            });
        }

        return (
            <>
                <button
                    className={ classnames('rc-arrow', '-left', arrowClassName, modifierLeftClassName) }
                    disabled={ animating || dragging || (!infinite && current === 0) }
                    onClick={ this.handlePrev }>
                    Prev
                </button>
                <button
                    className={ classnames('rc-arrow', '-right', arrowClassName, modifierRightClassName) }
                    disabled={ animating || dragging || (!infinite && current === slideCount - 1) }
                    onClick={ this.handleNext }>
                    Next
                </button>
            </>
        );
    };

    renderDots = () => {
        if (!this.props.dots) { return null; }

        const { renderDots, dotContainerClassName, dotClassName, modifierCurrentClassName } = this.props;
        const { current, animating, dragging, slideCount } = this.state;

        if (typeof renderDots === 'function') {
            return renderDots({
                setCurrent: this.setCurrent,
                current,
                animating,
                dragging,
                slideCount,
            });
        }

        const setCurrent = (i) => () => this.setCurrent(i);

        return (
            <div className={ classnames('rc-dots', dotContainerClassName) }>
                { Array.from({ length: slideCount }).map((_, i) => (
                    <button
                        className={ classnames('rc-dot', {
                            '-current': current === i,
                            [modifierCurrentClassName]: current === i,
                        }, dotClassName) }
                        key={ i }
                        onClick={ setCurrent(i) }>
                        {i}
                    </button>
                )) }
            </div>
        );
    };

    offset = () => {
        const { offset } = this.props;
        const { animating, dragging, current } = this.state;

        return typeof offset === 'function' ?
            offset({ animating, dragging, current }) :
            offset;
    };

    // ------------------------------------------------------------------------ state manipulation

    setStateAsync = (updater) => new Promise((resolve) => this.setState(updater, resolve));

    setupAutoplay = () => {
        const { autoplayIntervalMs } = this.props;

        window.clearInterval(this.autoplayInterval);

        if (autoplayIntervalMs > 0) {
            this.autoplayInterval = window.setInterval(() => {
                const { autoplayDirection } = this.props;

                switch (autoplayDirection) {
                case 'ltr':
                    this.handleNext({ source: 'autoplay' });
                    break;
                case 'rtl':
                    this.handlePrev({ source: 'autoplay' });
                    break;
                default:
                    break;
                }
            }, autoplayIntervalMs);
        }
    };

    setLastTouch = (ev) => {
        if (ev.touches[0]) {
            const { clientX: lastClientX, clientY: lastClientY, timestamp: lastTimestamp } = this.lastTouch;
            const { clientX, clientY } = ev.touches[0];
            const timestamp = performance.now();
            const deltaTimestamp = timestamp - lastTimestamp ?? timestamp;

            this.velocity = {
                x: (clientX - lastClientX ?? clientX) / deltaTimestamp,
                y: (clientY - lastClientY ?? clientY) / deltaTimestamp,
            };

            this.lastTouch = { timestamp, clientX, clientY };
        }
    };

    calculateCurrent = () => {
        const { children } = this.sliderRef.current;
        const { scrollLeft } = this.containerRef.current;
        const { draggable, swapOnDragMoveEnd } = this.props;

        let lowestDistance = Infinity;
        let closestChildIndex = null;

        for (let i = 0; i < children.length; i += 1) {
            const child = children[i];
            const distance = Math.abs(scrollLeft - child.offsetLeft);

            if (distance < lowestDistance) {
                lowestDistance = distance;
                closestChildIndex = i;
            } else {
                break;
            }
        }

        if (draggable && swapOnDragMoveEnd && !this.drag.isActive && closestChildIndex === this.drag.initialIndex) {
            const { initialIndex, initialMousePos, finalMousePos } = this.drag;

            if (finalMousePos.clientX > initialMousePos.clientX) {
                return Math.max(initialIndex - 1, 0);
            } else if (finalMousePos.clientX < initialMousePos.clientX) {
                return Math.min(initialIndex + 1, this.state.slideCount - 1);
            }
        }

        return closestChildIndex;
    };

    setCurrent = (i, options = {}) => {
        const { snap = false, source = 'user' } = options;
        const { current } = this.state;
        const {
            slideSnapDuration,
            slideSnapEasing,
            slideTransitionDuration,
            slideTransitionEasing,
        } = this.props;

        const containerScrollLeft = this.containerRef.current.scrollLeft;
        const targetOffsetLeft = this.sliderRef.current.children[i].offsetLeft;

        this.animating = true;
        this.setState({ animating: true });

        if (!snap) {
            this.props.beforeChange({ current, next: i, source });
        }

        return animateProperty({
            element: this.containerRef.current,
            property: 'scrollLeft',
            duration: snap ? slideSnapDuration : slideTransitionDuration,
            amount: targetOffsetLeft - containerScrollLeft - this.offset(),
            easing: snap ? slideSnapEasing : slideTransitionEasing,
        })
            .then(() => {
                this.animating = false;

                return this.setStateAsync({ current: i, animating: false });
            })
            .then(() => {
                if (!snap) {
                    this.props.afterChange({ previous: current, current: i, source });
                }
            });
    };

    snapCurrentToPosition = () => this.setCurrent(this.state.current, { snap: true });

    swapSlides = () => {
        const previous = this.state.current;
        const current = this.calculateCurrent();
        const shouldNotify = previous !== current;

        shouldNotify && this.props.beforeChange({ current: previous, next: current, source: 'user' });

        return this.setStateAsync({ current })
            .then(() => shouldNotify && this.props.afterChange({ previous, current, source: 'user' }));
    };

    shouldAllowCrossAxisScrolling = (ev) => {
        const velocityX = Math.abs(this.velocity.x ?? 0);
        const velocityY = Math.abs(this.velocity.y ?? 0);

        const path = ev.path || (ev.composedPath && ev.composedPath());
        const isVerticalTouchScroll = velocityY >= velocityX;

        if (!path.includes(this.containerRef.current) || isVerticalTouchScroll) {
            return true;
        }

        const {
            touching,
            props: { disableNativeScroll, touchCrossAxisScrollThreshold, touchSwipeVelocityThreshold },
        } = this;

        return (
            !disableNativeScroll ||
            (touching && velocityY > touchCrossAxisScrollThreshold && velocityX < touchSwipeVelocityThreshold)
        );
    };

    setDragActive = (ev) => {
        this.setState({ dragging: true });

        this.drag = {
            isActive: true,
            initialIndex: this.state.current,
            initialMousePos: {
                clientX: ev.clientX,
                clientY: ev.clientY,
            },
            finalMousePos: {
                clientX: undefined,
                clientY: undefined,
            },
        };
    };

    setDragInactive = (ev) => {
        this.drag = {
            ...this.drag,
            isActive: false,
            finalMousePos: {
                clientX: ev.clientX,
                clientY: ev.clientY,
            },
        };

        return this.setStateAsync({ dragging: false });
    };

    // ------------------------------------------------------------------------ Arrow events handlers

    handleNext = (options = {}) => {
        const { source = 'user' } = options;
        const { current, slideCount } = this.state;

        if (current === slideCount - 1 && !this.props.infinite) { return; }

        return this.setCurrent((this.state.current + 1) % this.state.slideCount, { source });
    };

    handlePrev = (options = {}) => {
        const { source = 'user' } = options;
        const { current } = this.state;

        if (current === 0 && !this.props.infinite) { return; }

        return this.setCurrent(this.state.current === 0 ? this.state.slideCount - 1 : this.state.current - 1, { source });
    };

    // ------------------------------------------------------------------------ Keyboard events handlers

    handleKeyboardControlDown = (ev) => {
        if (!this.props.keyboardControl || ev.target !== this.containerRef.current) { return; }

        // Prevent default scroll behaviour with left / right arrow keys
        if ([37, 39].includes(ev.keyCode)) {
            ev.preventDefault();
            ev.stopPropagation();
        }
    };

    handleKeyboardControlUp = (ev) => {
        if (!this.props.keyboardControl || ev.target !== this.containerRef.current) { return; }

        switch (ev.keyCode) {
        case 37:
            this.handlePrev();
            break;
        case 39:
            this.handleNext();
            break;
        default:
            break;
        }
    };

    // ------------------------------------------------------------------------ Mouse events handlers

    handleSliderOnDragStart = (ev) => {
        if (!this.props.draggable) { return; }

        this.setDragActive(ev);
    };

    handleSliderMouseMove = (ev) => {
        if (!this.props.draggable) { return; }

        // Allow dragging the slider when not grabbing a child element
        if (!this.drag.isActive && ev.buttons === 1) {
            this.setDragActive(ev);
        }

        if (this.drag.isActive) {
            this.containerRef.current.scrollLeft -= ev.movementX;
            this.swapSlides();
        }
    };

    handleSliderMouseUp = (ev) => {
        if (!this.props.draggable || !this.drag.isActive) { return; }

        this.setDragInactive(ev)
            .then(() => this.swapSlides())
            .then(() => {
                this.snapCurrentToPosition();

                this.drag = {
                    ...this.drag,
                    initalMousePos: {
                        clientX: undefined,
                        clientY: undefined,
                    },
                    finalMousePos: {
                        clientX: undefined,
                        clientY: undefined,
                    },
                };
            });
    };

    handleSliderMouseLeave = (ev) => {
        this.handleSliderMouseUp(ev);
    };

    handleSlideMouseUp = (ev, slideIndex) => {
        if (this.drag.isActive || this.state.current === slideIndex) { return; }

        ev.stopPropagation();

        this.setCurrent(slideIndex);
    };

    // ------------------------------------------------------------------------ Touch events handlers

    handleSliderTouchStart = (ev) => {
        // Note: iOS has a bug where `touchstart` will not be triggered
        // if user interrupts momentum scrolling with a touch

        this.setLastTouch(ev);
        this.touching = true;
    };

    handleSliderTouchMove = (ev) => {
        this.setLastTouch(ev);

        this.touchScrolling = Math.abs(this.velocity?.x ?? 0) > TOUCH_SCROLLING_VELOCITY_THRESHOLD;
    };

    handleSliderTouchEnd = (ev) => {
        this.setLastTouch(ev);
        this.touching = false;

        const { disableNativeScroll, touchSwipeVelocityThreshold } = this.props;

        if (disableNativeScroll && Math.abs(this.velocity.x) > touchSwipeVelocityThreshold) {
            if (this.velocity.x > 0) {
                this.handlePrev();
            } else {
                this.handleNext();
            }
        }

        if (!this.touchScrolling && !disableNativeScroll) {
            this.snapCurrentToPosition();
        }
    };

    // ------------------------------------------------------------------------ Scroll events handlers

    handleScroll = () => {
        if (this.animating) { return; }
        if (this.disableNativeScroll && this.velocity.x) { return; }

        this.swapSlides();

        if (this.touchScrolling) {
            this.inertialScrollHandler.cancel();
            this.inertialScrollHandler();
        }
    };

    handleTouchScroll = (ev) => {
        if (this.shouldAllowCrossAxisScrolling(ev)) { return; }

        ev.preventDefault();
    };

    // ------------------------------------------------------------------------ Resize events handlers
    handleResize = () => {
        if (this.props.resetCurrentOnResize) {
            this.debouncedResize.cancel();
            this.debouncedResize();
        }
    };
}

Carousel.propTypes = {
    children: PropTypes.any.isRequired,

    arrows: PropTypes.bool,
    dots: PropTypes.bool,
    disableNativeScroll: PropTypes.bool,
    draggable: PropTypes.bool,
    infinite: PropTypes.bool,
    keyboardControl: PropTypes.bool,
    resetCurrentOnResize: PropTypes.bool,
    swapOnDragMoveEnd: PropTypes.bool,

    autoplayIntervalMs: PropTypes.number,
    autoplayDirection: PropTypes.oneOf(['ltr', 'rtl']),
    offset: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
    slideSnapEasing: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.oneOf(['linear', 'ease-in', 'ease-out', 'ease-in-out']),
    ]),
    slideSnapDuration: PropTypes.number,
    slideTransitionEasing: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.oneOf(['linear', 'ease-in', 'ease-out', 'ease-in-out']),
    ]),
    slideTransitionDuration: PropTypes.number,
    touchSwipeVelocityThreshold: PropTypes.number,
    touchCrossAxisScrollThreshold: PropTypes.number,

    current: PropTypes.number,
    beforeChange: PropTypes.func,
    afterChange: PropTypes.func,
    renderArrows: PropTypes.func,
    renderDots: PropTypes.func,

    wrapperClassName: PropTypes.string,
    carouselClassName: PropTypes.string,
    sliderClassName: PropTypes.string,
    arrowClassName: PropTypes.string,
    dotContainerClassName: PropTypes.string,
    dotClassName: PropTypes.string,
    modifierDraggableClassName: PropTypes.string,
    modifierDraggingClassName: PropTypes.string,
    modifierCurrentClassName: PropTypes.string,
    modifierDisableScrollClassName: PropTypes.string,
    modifierLeftClassName: PropTypes.string,
    modifierRightClassName: PropTypes.string,
};

Carousel.defaultProps = {
    arrows: false,
    dots: false,
    disableNativeScroll: false,
    draggable: false,
    infinite: false,
    keyboardControl: false,
    resetCurrentOnResize: true,
    swapOnDragMoveEnd: true,

    autoplayIntervalMs: 0,
    autoplayDirection: 'ltr',
    offset: 0,
    slideSnapEasing: 'ease-in-out',
    slideSnapDuration: 150,
    slideTransitionEasing: 'ease-in-out',
    slideTransitionDuration: 300,
    touchSwipeVelocityThreshold: 0.3,
    touchCrossAxisScrollThreshold: 0.45,

    beforeChange: noop,
    afterChange: noop,
};

export default Carousel;
