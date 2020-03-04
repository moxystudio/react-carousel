const easings = {
    linear: (v) => v,
    'ease-in': (v) => v * v,
    'ease-out': (v) => v * (2 - v),
    'ease-in-out': (v) => v < 0.5 ? 2 * v * v : -1 + ((4 - (2 * v)) * v),
};

const clamp = (number, min, max) => Math.min(Math.max(number, min), max);

const animateProperty = ({
    element,
    duration,
    amount,
    property,
    easing,
}) => (
    new Promise((resolve) => {
        let start = null;
        const propertyStart = element[property];

        const step = (timestamp) => {
            if (!start) { start = timestamp; }

            const elapsed = timestamp - start;
            const progress = clamp(elapsed / duration, 0, 1);

            element[property] = propertyStart + (amount * easings[easing || 'linear'](progress));

            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                resolve(element[property]);
            }
        };

        window.requestAnimationFrame(step);
    })
);

export default animateProperty;

