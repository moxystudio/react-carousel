# React Carousel

A React carousel component that aims to be as flexible as possible.

Installation
---

```sh
npm i -S @moxy/react-carousel
```

or

```sh
yarn add @moxy/react-carousel
```

This library is written in modern JavaScript and is published in both CommonJS
and ES module transpiled variants. If you target older browsers please make
sure to transpile accordingly.

Motivation
---

After analysing and testing a number of different carousel solutions for react,
[MOXY](https://moxy.studio) determined that none of the existing solutions
would be a good candidate the numerous projects that we develop as an agency.
As such, we set out to build an extensible, easy to use, small carousel
component.

This project is still a work in progress. You can see what is currently missing
in [Future Work](#future-work).

### How does `@moxy/react-carousel` differ from other packages?

- Uses the minimum amount of dependencies.
    - The only direct dependency is `lodash.debounce`.
- Does not highjack native scrolling functionality unless desired.
- Respects native browser scrolling behaviour (desktop and mobile), and only aims to augment its capabilities.
    - Once Safari fixes its issues with `scroll-snap` and programmatic manipulation of `scrollLeft` / `scrollTop`, js-based snapping behaviour can be dropped in favor of `scroll-snap`.
- Manipulates carousel state by changing `scrollLeft` property.
- Does not use inline styles for controlling behaviour (except [`offset`](#offset)); all behaviour is controlled via className exchange and CSS rules. All classNames can be customized.
- Developer / designer oriented: `@moxy/react-carousel` does not assume or enforce a particular style of carousel, and provides a lot of options for customizing its behaviour.
- Provides callbacks before and after current slide changes

Usage
---

`@moxy/react-carousel` does not make any assumptions on what elements your
slides represent. They can be a `<div>`, an `<img>`, or any other element. They
can also be react components, but you must be aware that the `key`,
`onMouseUp`, `onDragStart`, and `onDrag` will be overriden. `className` prop
will be appended to `@moxy/react-carousel`'s classNames.

### Basic usage

```js
import Carousel from '@moxy/react-carousel';

<Carousel>
    <div>Slide 1</div>
    <div>Slide 2</div>
    <div className="custom">Slide 3</div>
    <div>Slide 4</div>
</Carousel>
```

### Custom arrows rendering

```js
import Carousel from '@moxy/react-carousel';

<Carousel
    arrows
    renderArrows={ ({ previous, next }) => (
        <>
            <span onClick={ previous } />
            <span onClick={ next }>
        </>
    )}>
    <div>Slide 1</div>
    <div>Slide 2</div>
    <div>Slide 3</div>
    <div>Slide 4</div>
</Carousel>
```

There is a lot more than you can do, check out the
[demo](https://moxystudio.github.io/react-carousel), where you can easily
explore different prop values and prop combinations.

HTML Structure
---

```js
<Carousel arrows dots>
    <div>Slide 1</div>
    <img src={ slide2 } alt="Slide 2" />
    <div className="custom">Slide 3</div>
</Carousel>
```

will render:

```js
<div className="rc-wrapper">
    <div className="rc">
        <div className="rc-slider">
            <div className="rc-slide -current">Slide </div>
            <img className="rc-slide" src={ slide2 } alt="Slide 2" />
            <div class="rc-slide custom">Slide 3<div>
        </div>
    </div>

    <button className="rc-arrow -left">previous</button>
    <button className="rc-arrow -right">next</button>

    <div className="rc-dots">
        <button className="rc-dot -current" />
        <button className="rc-dot" />
        <button className="rc-dot" />
    </div>
</div>
```

CSS
---

There isn't one definitive implementation suitable for `@moxy/react-carousel`.

A [default stylesheet](src/styles.css) is shipped with the package, and can
be imported with:

```
import `@moxy/react-carousel/dist/styles.css`
```

You can use this stylesheet as is and build on top of it, or use it as
inspiration for your own styles. The default styles sets `.rc-slide` to
`display: inline-block`, and, `.rc-slider` to `white-space: nowrap` so that
slides are positioned horizontally. You could achieve the same effects with
`float`, `flexbox`, etc. Because the position for the current slide is
calculated based on the distance from the element to its parent, it also allows
for different size slides

Props
---

| **Prop**                        | **Type**               | **Required** | **Default**   |
| ---                             | ---                    | ---          | ---           |
| `children`                      | `any`                  | **yes**      | `undefined`   |
| `arrows`                        | `boolean`              | no           | `false`       |
| `dots`                          | `boolean`              | no           | `false`       |
| `disableNativeScroll`           | `boolean`              | no           | `false`       |
| `draggable`                     | `boolean`              | no           | `false`       |
| `infinite`                      | `boolean`              | no           | `false`       |
| `keyboardControl`               | `boolean`              | no           | `false`       |
| `resetCurrentOnResize`          | `boolean`              | no           | `true`        |
| `swapOnDragMoveEnd`             | `boolean`              | no           | `true`        |
| `autoplayIntervalMs`            | `number`               | no           | `0`           |
| `autoplayDirection`             | `string`               | no           | `'ltr'`       |
| `offset`                        | `number` or `function` | no           | `0`           |
| `slideSnapEasing`               | `string`               | no           | `ease-in-out` |
| `slideSnapDuration`             | `number`               | no           | `150`         |
| `slideTransitionEasing`         | `string`               | no           | `ease-in-out` |
| `slideTransitionDuration`       | `number`               | no           | `300`         |
| `touchSwipeVelocityThreshold`   | `number`               | no           | `0.3`         |
| `touchCrossAxisScrollThreshold` | `number`               | no           | `0.45`        |
| `current`                       | `number`               | no           | `undefined`   |
| `beforeChange`                  | `function`             | no           | `() => {}`    |
| `afterChange`                   | `function`             | no           | `() => {}`    |
| `renderArrows`                  | `function`             | no           | `undefined`   |
| `renderDots`                    | `function`             | no           | `undefined`   |
| `wrapperClassName`              | `string`               | no           | `undefined`   |
| `carouselClassName`             | `string`               | no           | `undefined`   |
| `sliderClassName`               | `string`               | no           | `undefined`   |
| `arrowClassName`                | `string`               | no           | `undefined`   |
| `dotContainerClassName`         | `string`               | no           | `undefined`   |
| `dotClassName`                  | `string`               | no           | `undefined`   |
| `modifierDraggableClassName`    | `string`               | no           | `undefined`   |
| `modifierDraggingClassName`     | `string`               | no           | `undefined`   |
| `modifierCurrentClassName`      | `string`               | no           | `undefined`   |
| `modifierLeftClassName`         | `string`               | no           | `undefined`   |
| `modifierRightClassName`        | `string`               | no           | `undefined`   |

API
---

#### `children`

Type: `any`

Default: `undefined`

`@moxy/react-carousel` assumes that any direct descendants of the `<Carousel>`
component are the slides that you wish to render. It makes no assumptions on
what those elements should be, or their dimensions.

#### `arrows`

Type: `boolean`

Default: `false`

Render previous / next buttons to navigate carousel. Default arrows are
rendered as `<button>` elements. `arrowClassName` and `modifierLeftClassName`
applied to the 'Previous' button, and `arrowClassName` and
`modifierRightClassName` are applied to 'Next' button.

#### `dots`

Type: `boolean`

Default: `false`

Render one button per slide to navigate / indicate carousel state. Default dots
are rendered as `<button>` elements. `dotClassName` is applied, as well as
`modifierCurrentClassName` to the button that matches the current slide.

#### `disableNativeScroll`

Type: `boolean`

Default: `false`

It `true`, `modifierDisableScrollClassName` is applied to `.rc` element

#### `draggable`

Type: `boolean`

Default: `false`

If `true`, enables grabbing and dragging the slider with the mouse to change
its scroll value.

NOTE: When `false`, it only prevents dragging with mouse, it does not prevent
dragging with touch events in devices that support it

#### `infinite`

Type: `boolean`

Default: `false`

If `true`, the carousel will navigate to the first / last slide if attempting
to navigate out of bounds

#### `keyboardControl`

Type: `boolean`

Default: `false`

If `true`, enables focusing the `.rc` element. While focused, you are able to
switch slides using the left and right arrow keys.

#### `resetCurrentOnResize`

Type: `boolean`

Default: `true`

If `true`, carousel will re-render with the current state after the window has
been resized. This operation is debounced by 200ms.

#### `swapOnDragMoveEnd`

Type: `boolean`

Default: `true`

If `true`, the carousel will change the current slide, to an adjacent one,
based on the direction of the drag movement.
Although, if the drag is enough to change the current slide by itself, it will
respect that behaviour.

*Notes: Only works if the `draggable` prop is set as `true`.*

#### `autoplayIntervalMs`

Type: `number`

Default: `0`

The number of milliseconds to wait between automatic slide advancement. A value
of `0` turns off autoplay.

#### `autoplayDirection`

Type: `oneOf(['ltr', 'rtl'])`

Default: `'ltr'`

The direction that the carousel should change the slides when
`autoplayIntervalMs > 0`. Can be one of:

- `'ltr'`: causes carousel to change slides from left to right
- `'rtl'`: causes carousel to change slides from right to left

#### `offset`

Type: `number` or `function`

Default: `0`

The horizontal padding given to `.rc-slider`.

If it is a number, is treated as a value in pixels.

If it is a function, its signature is:

```
({ animating: boolean, dragging: boolean, current: number }) => number
```

It is expected that the returned number represents a value in pixels.

#### `slideSnapEasing`

Type: `oneOf(['linear', 'ease-in', 'ease-out', 'ease-in-out'])`

Default: `ease-in-out`

Easing function applied to snapping animation.

#### `slideSnapDuration`

Type: `number`

Default: `150`

Number of milliseconds that the snapping animation takes to complete.

#### `slideTransitionEasing`

Type: `oneOf(['linear', 'ease-in', 'ease-out', 'ease-in-out'])`

Default: `ease-in-out`

Easing function applied to transition animation.

#### `slideTransitionDuration`

Type: `number`

Default: `300`

Number of milliseconds that the transition animation takes to complete.

#### `touchSwipeVelocityThreshold`

Type: `number`

Default: `0.3`

**Note**: Only applicable when `disableNativeScroll = true`.

The velocity in pixels per frame where a swipe causes the slide to change

#### `touchCrossAxisScrollThreshold`

Type: `number`

Default: `0.45`

**Note**: Only applicable when `disableNativeScroll = true`.

The velocity in pixels per frame in the cross axis (currently just y axis)
below where a diagonal swipe on the carousel will prevent vertical scrolling

#### `current`

Type: `number`

Default: `undefined`

If set, makes the Carousel as a [controlled
component](https://reactjs.org/docs/forms.html#controlled-components), allowing
you to control the current slide from outside the scope of the Carousel. This
will not disable any internal state management, and `beforeChange` /
`afterChange` props will still be called, so you will be responsible for
syncing your external state with the internal one of the Carousel.

#### `beforeChange`

Type: `function`

Default: `() => {}`

Callback function that is called before a slide change happens.

Its signature is `({ current: number, next: number }) => void`

#### `afterChange`

Type: `function`

Default: `() => {}`

Callback function that is called after a slide change happens. Function is only
called after transitions have ended and internal state is updated.

Its signature is `({ previous: number, current: number }) => void`

#### `renderArrows`

Type: `(props: object) => React.Node`

Default: `undefined`

If a function is provided to `renderArrows` prop, the default arrows will not
be rendered, and you may use this render prop to [render your own
arrows](#custom-arrows-rendering).

`props` has the following shape:

```js
{
    next: () => void,      // call this to change to the next (right) slide
    previous: () => void,  // call this to change to the previous (left) slide
    current: number,       // index of the current slide
    animating: boolean,    // boolean indicating that a transition or snap is happening
    dragging: boolean,     // boolean indicating that the carousel is being dragged by a mouse
    slideCount: number,    // number indicating how many slides are rendered by the carousel
}
```

#### `renderDots`

Type: `(props: object) => React.Node`

Default: `undefined`

If a function is provided to `renderDots` prop, the default dots will not
be rendered, and you may use this render prop to render your own dots.

`props` has the following shape:

```js
{
    setCurrent: (i: number) => void,  // call this to change to slide with index i
    current: number,                  // index of the current slide
    animating: boolean,               // boolean indicating that a transition or snap is happening
    dragging: boolean,                // boolean indicating that the carousel is being dragged by a mouse
}
```

### Appending element classNames

You may append the default classNames rendered by `<Carousel>` with your own classNames. Each type of
element has its own className, and some of them also have modifier classNames
applied.

#### `wrapperClassName`

Type: `string`

Default: `undefined`

Applied to top level element rendered by `<Carousel>`, `.rc-wrapper`. It will have
`.rc`, `.rc-arrow` and `.rc-dots` elements as its direct descendants.

#### `carouselClassName`

Type: `string`

Default: `undefined`

Applied to scrollable element.

Expected to have at least `overflow: x; -webkit-overflow-scrolling: touch` applied.

#### `sliderClassName`

Type: `string`

Default: `undefined`

Applied to slides container element. This element can be larger than the full
width of the viewport, and is scrolled by its direct parent, the `.rc` element

#### `arrowClassName`

Type: `string`

Default: `undefined`

Applied to "previous" and "next" `<button>` elements rendered by default when
`arrows` is `true` and no custom `renderArrows` prop is provided.

#### `dotContainerClassName`

Type: `string`

Default: `undefined`

Applied to container `<div>` element that holds the dots rendered by default
when `dots` is `true` and no custom `renderDots` prop is provided.

#### `dotClassName`

Type: `string`

Default: `undefined`

Applied to each individual `<button>` dot element rendered by default when
`dots` is `true` and no custom `renderDots` prop is provided.

### Appending modifier classNames

#### `modifierDraggableClassName`

Type: `string`

Default: `undefined`

Appended to `.rc-slider.-draggable` when `draggable` prop is true.

#### `modifierDraggingClassName`

Type: `string`

Default: `undefined`

Appended to `.rc-slider.-draggable.-dragging` when carousel is being dragged by
mouse. Useful to change icons.

#### `modifierCurrentClassName`

Type: `string`

Default: `undefined`

Appended to `.rc-slide.-current` and `.rc-dot.-current` elements. Represents
the currently selected slide / dot.

#### `modifierLeftClassName`

Type: `string`

Default: `undefined`

Appended to `.rc-arrow.-left` that switches to the previous (left) slide.

#### `modifierRightClassName`

Type: `string`

Default: `undefined`

Appended to `.rc-arrow.-right` that switches to the next (right) slide

Future work
---

- [ ] Infinite mode
    - [x] enable / disable
    - [x] bounce
    - [ ] wrap around
- [ ] Current slide placement options
    - [x] left
    - [ ] center
    - [ ] right
- [ ] Vertical carousel and vertical placement options
    - [ ] top
    - [ ] center
    - [ ] bottom
