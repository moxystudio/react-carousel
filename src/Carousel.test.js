import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';

import Carousel from './Carousel';

const SLIDE_COUNT = 10;
const renderSlides = () => (
    Array
        .from({ length: SLIDE_COUNT })
        .map((_, i) => <div key={ i }><img width="100" height="100" /></div>)
);

const sleep = (duration) => new Promise((resolve) => setTimeout(resolve, duration));
const slide = (container, index) => container.querySelector(`.rc-slide:nth-child(${index + 1})`);

const keyCodes = {
    ArrowLeft: 37,
    ArrowRight: 39,
};

const emulateKeyPress = (element, key) => {
    fireEvent.keyDown(element, { key, keyCode: keyCodes[key] });
    fireEvent.keyUp(element, { key, keyCode: keyCodes[key] });
};

describe('Carousel', () => {
    it('should render necessary wrappers', () => {
        const { container } = render(<Carousel>{renderSlides()}</Carousel>);

        expect(container.querySelectorAll('.rc-wrapper')).toHaveLength(1);
        expect(container.querySelectorAll('.rc-wrapper > .rc')).toHaveLength(1);
        expect(container.querySelectorAll('.rc-wrapper > .rc > .rc-slider')).toHaveLength(1);
        expect(container.querySelectorAll('.rc-slider > .rc-slide')).toHaveLength(10);
        expect(container.querySelectorAll('.rc-wrapper > .rc-arrow')).toHaveLength(0);
        expect(container.querySelectorAll('.rc-wrapper > .rc-dots')).toHaveLength(0);
    });

    it('should render navigation buttons if `arrows` prop is `true`', () => {
        const { container } = render(<Carousel arrows>{renderSlides()}</Carousel>);

        expect(container.querySelectorAll('.rc-arrow')).toHaveLength(2);
    });

    it('should render custom arrows if `arrows` prop is `true` and `renderArrows` is a function', () => {
        const { container } = render(
            <Carousel
                arrows
                renderArrows={ ({ next, previous }) => (
                    <>
                        <span data-testid="custom-arrow-left" className="custom-arrow -left" onClick={ previous } />
                        <span data-testid="custom-arrow-right" className="custom-arrow -right" onClick={ next } />
                    </>
                ) }>
                {renderSlides()}
            </Carousel>,
        );

        expect(container.querySelectorAll('.rc-arrow')).toHaveLength(0);
        expect(container.querySelectorAll('.custom-arrow')).toHaveLength(2);
    });

    it('should call beforeChange, afterChange with correct values on slide click', async () => {
        const props = {
            beforeChange: jest.fn(),
            afterChange: jest.fn(),
            slideTransitionDuration: 0,
            slideSnapDuration: 0,
        };

        const { container } = render(<Carousel { ...props }>{renderSlides()}</Carousel>);

        // Change from first to  third slide
        fireEvent.mouseUp(slide(container, 2));
        await wait(() => expect(props.beforeChange).toHaveBeenNthCalledWith(1, { current: 0, next: 2, source: 'user' }));
        await wait(() => expect(props.afterChange).toHaveBeenNthCalledWith(1, { previous: 0, current: 2, source: 'user' }));

        expect(container.querySelectorAll('.rc-slide.-current')).toHaveLength(1);
        expect(slide(container, 2).className).toContain('-current');

        // Change from third to sixth slide
        fireEvent.mouseUp(slide(container, 5));
        await wait(() => expect(props.beforeChange).toHaveBeenNthCalledWith(2, { current: 2, next: 5, source: 'user' }));
        await wait(() => expect(props.afterChange).toHaveBeenNthCalledWith(2, { previous: 2, current: 5, source: 'user' }));

        expect(container.querySelectorAll('.rc-slide.-current')).toHaveLength(1);
        expect(slide(container, 5).className).toContain('-current');

        // Change from sixth to sixth slide (no change)
        fireEvent.mouseUp(slide(container, 5));

        await sleep(50);
        expect(props.beforeChange).toHaveBeenCalledTimes(2);

        await sleep(50);
        expect(props.afterChange).toHaveBeenCalledTimes(2);
    });

    it('should navigate between slides using prev / next buttons', async () => {
        const props = {
            arrows: true,
            beforeChange: jest.fn(),
            afterChange: jest.fn(),
            slideTransitionDuration: 1,
            slideSnapDuration: 1,
        };

        const { getByText } = render(<Carousel { ...props }>{renderSlides()}</Carousel>);

        const prev = getByText('Prev');
        const next = getByText('Next');

        await wait(() => expect(next.disabled).toBe(false));

        fireEvent.click(next);
        await wait(() => expect(props.beforeChange).toHaveBeenNthCalledWith(1, { current: 0, next: 1, source: 'user' }));
        await wait(() => expect(props.afterChange).toHaveBeenNthCalledWith(1, { previous: 0, current: 1, source: 'user' }));

        fireEvent.click(next);
        await wait(() => expect(props.beforeChange).toHaveBeenNthCalledWith(2, { current: 1, next: 2, source: 'user' }));
        await wait(() => expect(props.afterChange).toHaveBeenNthCalledWith(2, { previous: 1, current: 2, source: 'user' }));

        fireEvent.click(prev);
        await wait(() => expect(props.beforeChange).toHaveBeenNthCalledWith(3, { current: 2, next: 1, source: 'user' }));
        await wait(() => expect(props.afterChange).toHaveBeenNthCalledWith(3, { previous: 2, current: 1, source: 'user' }));
    });

    it('should not navigate using keyboard if keyboardControl prop is false', async () => {
        const props = {
            slideTransitionDuration: 0,
            slideSnapDuration: 0,
            keyboardControl: false,
        };
        const { container } = render(<Carousel { ...props }>{renderSlides()}</Carousel>);

        const carousel = container.querySelector('.rc');

        emulateKeyPress(carousel, 'ArrowRight');
        await sleep(50);
        expect(slide(container, 0).className).toContain('-current');

        emulateKeyPress(carousel, 'ArrowLeft');
        await sleep(50);
        expect(slide(container, 0).className).toContain('-current');
    });

    it('should only navigate using keyboard if keyboardControl props is true and container is focused', async () => {
        const props = {
            slideTransitionDuration: 0,
            slideSnapDuration: 0,
            keyboardControl: true,
        };
        const { container } = render(<Carousel { ...props }>{renderSlides()}</Carousel>);

        const carousel = container.querySelector('.rc');

        // Without focusing carousel
        emulateKeyPress(document.body, 'ArrowRight');
        await sleep(50);
        expect(slide(container, 0).className).toContain('-current');

        emulateKeyPress(document.body, 'ArrowLeft');
        await sleep(50);
        expect(slide(container, 0).className).toContain('-current');

        // After focusing carousel
        emulateKeyPress(carousel, 'ArrowRight');
        await wait(() => expect(slide(container, 1).className).toContain('-current'));

        emulateKeyPress(carousel, 'ArrowLeft');
        await wait(() => expect(slide(container, 0).className).toContain('-current'));
    });

    it('should autoplay left to right', async () => {
        const props = {
            slideTransitionDuration: 1,
            slideSnapDuration: 1,
            autoplayIntervalMs: 5,
            autoplayDirection: 'ltr',
        };

        const { container } = render(<Carousel { ...props }>{renderSlides()}</Carousel>);

        const slide = (index) => container.querySelector(`.rc-slide:nth-child(${index + 1})`);

        expect(slide(0).className).toContain('-current');
        Array.from({ length: 9 }).forEach(async (_, i) => {
            await wait(() => expect(slide(i + 1).className).toContain('-current'));
        });
        await wait(() => expect(slide(0).className).toContain('-current'));
    });

    it('should autoplay right to left', async () => {
        const props = {
            slideTransitionDuration: 1,
            slideSnapDuration: 1,
            autoplayIntervalMs: 5,
            autoplayDirection: 'rtl',
        };

        const { container } = render(<Carousel { ...props }>{renderSlides()}</Carousel>);

        const slide = (index) => container.querySelector(`.rc-slide:nth-child(${index + 1})`);

        expect(slide(0).className).toContain('-current');
        Array.from({ length: 9 }).forEach(async (_, i) => {
            await wait(() => expect(slide(10 - i - 1).className).toContain('-current'));
        });
        await wait(() => expect(slide(0).className).toContain('-current'));
    });

    it('should not autoplay if autoplayIntervalMs is <= 0', async () => {
        const props = {
            slideTransitionDuration: 1,
            slideSnapDuration: 1,
            autoplayIntervalMs: 0,
            autoplayDirection: 'rtl',
        };

        const { container } = render(<Carousel { ...props }>{renderSlides()}</Carousel>);

        const slide = (index) => container.querySelector(`.rc-slide:nth-child(${index + 1})`);

        expect(slide(0).className).toContain('-current');
        await sleep(100);
        expect(slide(0).className).toContain('-current');
        await sleep(100);
        expect(slide(0).className).toContain('-current');
    });

    it('should autoplay and return the source correctly', async () => {
        const props = {
            slideTransitionDuration: 1,
            slideSnapDuration: 1,
            autoplayIntervalMs: 1,
            beforeChange: jest.fn(),
            afterChange: jest.fn(),
        };

        render(<Carousel { ...props }>{renderSlides()}</Carousel>);

        Array.from({ length: 9 }).forEach(async (_, i) => {
            await wait(() => expect(props.beforeChange).toHaveBeenNthCalledWith(1, { current: i, next: i + 1, source: 'autoplay' }));
            await wait(() => expect(props.afterChange).toHaveBeenNthCalledWith(1, { previous: i, current: i + 1, source: 'autoplay' }));
        });
    });

    [
        { prop: 'wrapperClassName', defaultClassname: 'rc-wrapper' },
        { prop: 'carouselClassName', defaultClassname: 'rc' },
        { prop: 'sliderClassName', defaultClassname: 'rc-slider' },
        { prop: 'arrowClassName', defaultClassname: 'rc-arrow' },
        { prop: 'dotContainerClassName', defaultClassname: 'rc-dots' },
        { prop: 'dotClassName', defaultClassname: 'rc-dot' },
    ].forEach(({ prop, defaultClassname }) => {
        it(`should append \`${prop}\` prop to default \`.${defaultClassname}\` classNames`, () => {
            const props = {
                arrows: true,
                dots: true,
                [prop]: 'custom-class',
            };

            const { container } = render(<Carousel { ...props }>{renderSlides()}</Carousel>);
            const el = container.querySelector(`.${defaultClassname}`);

            expect(el.className).toContain(defaultClassname);
            expect(el.className).toContain('custom-class');
        });

        it(`should ignore \`undefined\` value for \`${prop}\` prop`, () => {
            const props = {
                arrows: true,
                dots: true,
                [prop]: undefined,
            };

            const { container } = render(<Carousel { ...props }>{renderSlides()}</Carousel>);
            const el = container.querySelector(`.${defaultClassname}`);

            expect(el.className).toContain(defaultClassname);
            expect(el.className).not.toContain('undefined');
        });
    });

    it('should be controllable', async () => {
        const props = {
            arrows: true,
            beforeChange: jest.fn(),
            afterChange: jest.fn(),
            slideTransitionDuration: 1,
            slideSnapDuration: 1,
            current: 0,
        };

        const { container, rerender } = render(<Carousel { ...props }>{renderSlides()}</Carousel>);
        const slide = (index) => container.querySelector(`.rc-slide:nth-child(${index + 1})`);

        expect(slide(0).className).toContain('-current');

        rerender(<Carousel current={ 2 }>{renderSlides()}</Carousel>);
        await wait(() => expect(slide(2).className).toContain('-current'));

        rerender(<Carousel current={ 1 }>{renderSlides()}</Carousel>);
        await wait(() => expect(slide(1).className).toContain('-current'));

        rerender(<Carousel current={ 8 }>{renderSlides()}</Carousel>);
        await wait(() => expect(slide(8).className).toContain('-current'));
    });
});

