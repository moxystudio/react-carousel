import React, { useState, useReducer } from 'react';
import Carousel from '@moxy/react-carousel';
import { isArray } from 'lodash';
import classnames from 'classnames';

import styles from './index.module.css';

const renderSlides = (length = 10) => (
    Array
        .from({ length })
        .map((_, i) => (
            <img
                key={ i }
                src={ `https://placehold.it/300x300/${i}${i}${i}/fff` } />
        ))
);

const carouselProps = [
    [
        ['arrows', 'checkbox'],
        ['dots', 'checkbox'],
        ['disableNativeScroll', 'checkbox'],
        ['draggable', 'checkbox'],
        ['infinite', 'checkbox'],
        ['keyboardControl', 'checkbox'],
        ['resetCurrentOnResize', 'checkbox'],
        ['swapOnDragMoveEnd', 'checkbox'],
    ],
    [
        ['autoplayIntervalMs', 'number'],
        ['autoplayDirection', ['ltr', 'rtl']],
        ['offset', 'number'],
        ['slideSnapDuration', 'number'],
        ['slideSnapEasing', ['linear', 'ease-in', 'ease-out', 'ease-in-out']],
        ['slideTransitionDuration', 'number'],
        ['slideTransitionEasing', ['linear', 'ease-in', 'ease-out', 'ease-in-out']],
        ['touchSwipeVelocityThreshold', 'number'],
        ['touchCrossAxisScrollThreshold', 'number'],
        ['current', 'number'],
    ],
    [
        ['wrapperClassName', 'text'],
        ['carouselClassName', 'text'],
        ['sliderClassName', 'text'],
        ['arrowClassName', 'text'],
        ['dotContainerClassName', 'text'],
        ['dotClassName', 'text'],
        ['modifierDraggableClassName', 'text'],
        ['modifierDraggingClassName', 'text'],
        ['modifierCurrentClassName', 'text'],
        ['modifierLeftClassName', 'text'],
        ['modifierRightClassName', 'text'],
    ],
];

const renderInput = (prop, type, state, setState) => {
    const attr = type === 'checkbox' ? 'checked' : 'value';

    return (
        <label key={ prop } className={ styles.propSetterLabel }>
            {isArray(type) && (
                <select
                    className={ styles.propSetterInput }
                    onChange={ (ev) => setState({ [prop]: ev.target[attr] }) }
                    value={ state[prop] }>
                    {type.map((option) => (
                        <option key={ option } value={ option }>{ option }</option>
                    ))}
                </select>
            )}

            {!isArray(type) && (
                <input
                    className={ type === 'checkbox' ? styles.propSetterCheckbox : styles.propSetterInput }
                    { ...{
                        type,
                        [attr]: state[prop],
                        onChange: (ev) => setState({
                            [prop]: (
                                type === 'number' ? parseFloat(ev.target[attr]) : ev.target[attr]
                            ),
                        }),
                    } } />
            )}

            <span>{prop}</span>
        </label>
    );
};

// eslint-disable-next-line react/prop-types
const renderArrows = ({ previous, next }) => (
    <>
        <span className={ `${styles.customArrow} ${styles.customArrowLeft}` } onClick={ previous }>←</span>
        <span className={ `${styles.customArrow} ${styles.customArrowRight}` } onClick={ next }>→</span>
    </>
);

// eslint-disable-next-line react/prop-types
const renderDots = ({ setCurrent, current, slideCount }) => (
    <ul className="rc-dots">
        {Array.from({ length: slideCount }).map((_, i) => (
            <li
                className={ classnames(styles.customDot, { [styles.customDotCurrent]: current === i }) }
                key={ i }
                onClick={ () => setCurrent(i) } />
        ))}
    </ul>
);

// eslint-disable-next-line react/prop-types
const PropSetter = ({ children }) => {
    const [logCallbacks, setLogCallbacks] = useState(false);
    const [customRenderArrows, setCustomRenderArrows] = useState(false);
    const [customRenderDots, setCustomRenderDots] = useState(false);

    const [state, setState] = useReducer(
        (state, action) => ({ ...state, ...action }),
        {
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
            slideSnapDuration: 150,
            slideSnapEasing: 'ease-in-out',
            slideTransitionDuration: 300,
            slideTransitionEasing: 'ease-in-out',
            touchSwipeVelocityThreshold: 0.3,
            touchCrossAxisScrollThreshold: 0.45,
            offset: 100,
            current: 0,
            renderArrows: undefined,
            renderDots: undefined,
            wrapperClassName: undefined,
            carouselClassName: undefined,
            sliderClassName: undefined,
            arrowClassName: undefined,
            dotContainerClassName: undefined,
            dotClassName: undefined,
            modifierDraggableClassName: undefined,
            modifierDraggingClassName: undefined,
            modifierCurrentClassName: undefined,
            modifierLeftClassName: undefined,
            modifierRightClassName: undefined,
            modifierDisableScrollClassName: undefined,
        },
    );

    const callbacks = {
        beforeChange: logCallbacks ? (v) => console.log('beforeChange', v) : () => {},
        afterChange: logCallbacks ? (v) => console.log('afterChange', v) : () => {},
    };

    const renderProps = {
        renderArrows: customRenderArrows ? renderArrows : undefined,
        renderDots: customRenderDots ? renderDots : undefined,
    };

    return (
        <>
            <div className={ styles.propSetter }>
                {carouselProps.map((column, i) => (
                    <div key={ i } className={ styles.propSetterColumn }>
                        {column.map((item) => renderInput(...item, state, setState))}
                    </div>
                ))}
            </div>

            <div className={ styles.propSetter }>
                <div className={ styles.propSetterColumn }>
                    <label>
                        <input
                            type="checkbox"
                            checked={ customRenderArrows }
                            onChange={ (ev) => setCustomRenderArrows(ev.target.checked) } />
                        Use custom renderArrows
                    </label>

                    <label>
                        <input
                            type="checkbox"
                            checked={ customRenderDots }
                            onChange={ (ev) => setCustomRenderDots(ev.target.checked) } />
                        Use custom renderDots
                    </label>
                </div>

                <div className={ styles.propSetterColumn }>
                    <label>
                        <input
                            type="checkbox"
                            checked={ logCallbacks }
                            onChange={ (ev) => setLogCallbacks(ev.target.checked) } />
                        Log beforeChange and afterChange to console
                    </label>
                </div>
            </div>

            {children({ ...state, ...callbacks, ...renderProps })}
        </>
    );
};

const Home = () => (
    <div className={ styles.home }>
        <h1 className={ styles.title }>@moxy/react-carousel explorer</h1>

        <PropSetter>
            {(props) => (
                <Carousel { ...props }>
                    {renderSlides()}
                </Carousel>
            )}
        </PropSetter>
    </div>
);

export default Home;
