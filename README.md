# element-vir

A wrapper for [lit-element](http://lit.dev) that adds type-safe custom element usage and I/O with declarative custom element definition.

Heroic. Reactive. Declarative. Type safe. Web components without compromise.

No need for an extra build step,<br>
no need for side effect imports, <br>
no need for unique file extensions,<br>
no need for extra static analysis tools,<br>
no need for a dedicated, unique syntax.<br>
_**It's just TypeScript.**_

Uses the power of _native_ JavaScript custom web elements, _native_ JavaScript template literals, _native_ JavaScript functions<sup>\*</sup>, _native_ HTML, and [lit-element](http://lit.dev).

[Works in every major web browser except Internet Explorer.](https://caniuse.com/mdn-api_window_customelements)

<sub>\*okay I hope it's obvious that functions are native</sub>

# Install

[Published on npm:](https://www.npmjs.com/package/element-vir)

```bash
npm i element-vir
```

Make sure to install this as a normal dependency (not just a dev dependency) because it needs to exist at run time.

# Usage

Most usage of this package is done through the `defineElement` or `defineElementNoInputs` functions. See the `DeclarativeElementInit` type for that function's inputs. These inputs are also described below with examples.

All of [`lit`](https://lit.dev)'s syntax and functionality is also available for use if you wish.

## Simple element definition

Use `defineElementNoInputs` to define your element if it's not going to accept any inputs (or just for now as you're getting started). It must be given an object with at least `tagName` and `renderCallback` properties (the types enforce this). Here is a bare-minimum example custom element:

<!-- example-link: src/readme-examples/my-simple.element.ts -->

```TypeScript
import {defineElementNoInputs, html} from 'element-vir';

export const MySimpleElement = defineElementNoInputs({
    tagName: 'my-simple',
    renderCallback: () => html`
        <span>Hello there!</span>
    `,
});
```

Make sure to export your element definition if you need to use it in other files.

## Using in other elements

To use already defined elements (like `my-simple-element` above), they must be interpolated into HTML templates like so:

<!-- example-link: src/readme-examples/my-app.element.ts -->

```TypeScript
import {defineElementNoInputs, html} from 'element-vir';
import {MySimpleElement} from './my-simple.element';

export const MyAppElement = defineElementNoInputs({
    tagName: 'my-app',
    renderCallback: () => html`
        <h1>My App</h1>
        <${MySimpleElement}></${MySimpleElement}>
    `,
});
```

This requirement ensures that the element is properly imported and registered with the browser. (Compare to pure [lit](http://lit.dev) where you must remember to import each element file as a side effect, or without actually referencing any of its exports in your code.)

If you wish to bypass this interpolation, make sure to [import the `html` tagged template directly from `lit`](https://lit.dev/docs/components/overview/), `import {html} from 'lit';`, instead of version contained in `element-vir`.

## Adding styles

Styles are added through the `styles` property when defining a declarative element (similar to [how they are defined in `lit`](https://lit.dev/docs/components/styles/)):

<!-- example-link: src/readme-examples/my-with-styles.element.ts -->

```TypeScript
import {css, defineElementNoInputs, html} from 'element-vir';

export const MyWithStylesElement = defineElementNoInputs({
    tagName: 'my-with-styles',
    styles: css`
        :host {
            display: flex;
            flex-direction: column;
            font-family: sans-serif;
        }

        span + span {
            margin-top: 16px;
        }
    `,
    renderCallback: () => html`
        <span>Hello there!</span>
        <span>How are you doing?</span>
    `,
});
```

### Element definition as style selector

Declarative element definitions can be used in the `css` tagged template just like in the `html` tagged template. This will be replaced by the element's tag name:

<!-- example-link: src/readme-examples/my-with-styles-and-interpolated-selector.element.ts -->

```TypeScript
import {css, defineElementNoInputs, html} from 'element-vir';
import {MySimpleElement} from './my-simple.element';

export const MyWithStylesAndInterpolatedSelectorElement = defineElementNoInputs({
    tagName: 'my-with-styles-and-interpolated-selector',
    styles: css`
        ${MySimpleElement} {
            background-color: blue;
        }
    `,
    renderCallback: () => html`
        <${MySimpleElement}></${MySimpleElement}>
    `,
});
```

## Defining and using Inputs

Define element inputs by using `defineElement` to define a declarative element. Pass your input type as a generic to the `defineElement` call. Then call _that_ with the normal definition input (like when using `defineElementNoInputs`).

To use an element's inputs for use in its template, grab `inputs` from `renderCallback`'s parameters and interpolate it into your HTML template:

<!-- example-link: src/readme-examples/my-with-inputs.element.ts -->

```TypeScript
import {defineElement, html} from 'element-vir';

export const MyWithInputsElement = defineElement<{
    username: string;
    email: string;
}>()({
    tagName: 'my-with-inputs',
    renderCallback: ({inputs}) => html`
        <span>Hello there ${inputs.username}!</span>
    `,
});
```

## Defining internal state

Define internal state with the `stateInit` property when defining an element. Grab it with `state` in `renderCallback` to use state. Grab `updateState` in `renderCallback` to update state:

<!-- example-link: src/readme-examples/my-with-update-state.element.ts -->

```TypeScript
import {defineElementNoInputs, html, listen} from 'element-vir';

export const MyWithUpdateStateElement = defineElementNoInputs({
    tagName: 'my-with-update-state',
    stateInit: {
        username: 'dev',
        email: undefined as string | undefined,
    },
    renderCallback: ({state, updateState}) => html`
        <span
            ${listen('click', () => {
                updateState({username: 'new name!'});
            })}
        >
            Hello there ${state.username}!
        </span>
    `,
});
```

### Assigning to properties (inputs)

Use the `assign` directive to assign properties to child custom elements:

<!-- example-link: src/readme-examples/my-with-assignment.element.ts -->

```TypeScript
import {assign, defineElementNoInputs, html} from 'element-vir';
import {MyWithInputsElement} from './my-with-inputs.element';

export const MyWithAssignmentElement = defineElementNoInputs({
    tagName: 'my-with-assignment',
    renderCallback: () => html`
        <h1>My App</h1>
        <${MyWithInputsElement}
            ${assign(MyWithInputsElement, {
                email: 'user@example.com',
                username: 'user',
            })}
        >
        </${MyWithInputsElement}>
    `,
});
```

## Other callbacks

There are two other callbacks you can define that are sort of similar to lifecycle callbacks. They are much simpler than lifecycle callbacks however.

-   `initCallback`: called right before the first render, has all state and inputs setup.
-   `cleanupCallback`: called when an element is removed from the DOM. (This is the same as the `disconnectedCallback` in standard HTMLElement classes.)

<!-- example-link: src/readme-examples/my-with-cleanup-callback.element.ts -->

```TypeScript
import {defineElementNoInputs, html} from 'element-vir';

export const MyWithAssignmentCleanupCallbackElement = defineElementNoInputs({
    tagName: 'my-with-cleanup-callback',
    stateInit: {
        intervalId: undefined as undefined | number,
    },
    initCallback: ({updateState}) => {
        updateState({
            intervalId: window.setInterval(() => console.log('hi'), 1000),
        });
    },
    renderCallback: () => html`
        <h1>My App</h1>
    `,
    cleanupCallback: ({state, updateState}) => {
        window.clearInterval(state.intervalId);
        updateState({
            intervalId: undefined,
        });
    },
});
```

## Element events (outputs)

Define events with `events` when defining a declarative element. Each event must be initialized with `defineElementEvent` and a type parameter. `defineElementEvent` accepts no inputs as it doesn't make sense for events to have default values.

To dispatch an event, grab `dispatch` from `renderCallback`'s parameters.

<!-- example-link: src/readme-examples/my-with-events.element.ts -->

```TypeScript
import {defineElementEvent, defineElementNoInputs, html, listen} from 'element-vir';

export const MyWithEventsElement = defineElementNoInputs({
    tagName: 'my-with-events',
    events: {
        logoutClick: defineElementEvent<void>(),
        randomNumber: defineElementEvent<number>(),
    },
    renderCallback: ({dispatch, events}) => html`
        <button ${listen('click', () => dispatch(new events.logoutClick(undefined)))}>
            log out
        </button>
        <button ${listen('click', () => dispatch(new events.randomNumber(Math.random())))}>
            generate random number
        </button>
    `,
});
```

### Listening to typed events (outputs)

Use the `listen` directive to listen to typed events emitted by your custom elements:

<!-- example-link: src/readme-examples/my-with-events.element.ts -->

```TypeScript
import {defineElementEvent, defineElementNoInputs, html, listen} from 'element-vir';

export const MyWithEventsElement = defineElementNoInputs({
    tagName: 'my-with-events',
    events: {
        logoutClick: defineElementEvent<void>(),
        randomNumber: defineElementEvent<number>(),
    },
    renderCallback: ({dispatch, events}) => html`
        <button ${listen('click', () => dispatch(new events.logoutClick(undefined)))}>
            log out
        </button>
        <button ${listen('click', () => dispatch(new events.randomNumber(Math.random())))}>
            generate random number
        </button>
    `,
});
```

`listen` can also be used to listen to native DOM events (like `click`) and the proper event type will be provided for the listener callback.

## Typed events without an element

Create a custom event type with `defineTypedEvent`. Make sure to include the type generic (like this: `defineTypedEvent<number>`) and call it twice, the second time with the event type string, (like this: `defineTypedEvent<number>()('my-event-type-name')`) to ensure type safety when using your event. Note that event type names should probably be unique, or they may clash with each other.

### Creating a typed event

<!-- example-link: src/readme-examples/my-custom-action.event.ts -->

```TypeScript
import {defineTypedEvent} from 'element-vir';

export const MyCustomActionEvent = defineTypedEvent<number>()('my-custom-action');
```

### Using a typed event

Both dispatching a custom event and listening to a custom event:

<!-- example-link: src/readme-examples/my-with-custom-events.element.ts -->

```TypeScript
import {defineElementNoInputs, html, listen} from 'element-vir';
import {MyCustomActionEvent} from './my-custom-action.event';

export const MyWithCustomEventsElement = defineElementNoInputs({
    tagName: 'my-with-custom-events',
    renderCallback: ({dispatch}) => html`
        <div
            ${listen(MyCustomActionEvent, (event) => {
                console.info(`Got a number! ${event.detail}`);
            })}
        >
            <div
                ${listen('click', () => {
                    dispatch(new MyCustomActionEvent(Math.random()));
                })}
            ></div>
        </div>
    `,
});
```

## Host classes

### Defining host classes

Host classes can be defined and used with type safety. Host classes are used to provide alternative styles for components. They are purely driven by CSS and are thus applied via the `class` HTML attribute.

Host classes that are defined with a callback will automatically get applied if that callback returns true after a render is executed. These are executed _after_ `renderCallback` is executed. When a definition is set to `false`, it's left to the element's consumer to apply the host class.

Apply host classes in the element's stylesheet by using a callback for the styles property.

<!-- example-link: src/readme-examples/my-with-host-class-definition.element.ts -->

```TypeScript
import {css, defineElementNoInputs, html} from 'element-vir';

export const MyWithHostClassDefinitionElement = defineElementNoInputs({
    tagName: 'my-with-host-class-definition',
    stateInit: {
        myProp: 'hello there',
    },
    hostClasses: {
        /**
         * Setting the value to false means this host class will not ever automatically be applied.
         * It will simply be a static member on the element for manual application in consumers when
         * desired.
         */
        styleVariationA: false,
        /**
         * This host class will be automatically applied if the given callback evaluated to true
         * after a call to renderCallback.
         */
        automaticallyAppliedVariation: ({state}) => {
            return state.myProp === 'foo';
        },
    },
    /**
     * Apply styles to the host classes by using a callback for "styles". The callback's argument
     * contains the host classes defined above in the "hostClasses" property.
     */
    styles: ({hostClassSelectors: hostClass}) => css`
        ${hostClass.automaticallyAppliedVariation} {
            color: blue;
        }

        ${hostClass.styleVariationA} {
            color: red;
        }
    `,
    renderCallback: ({state}) => html`
        ${state.myProp}
    `,
});
```

### Applying host classes

To apply a host class in a parent element, access the child element's `.hostClasses` property:

<!-- example-link: src/readme-examples/my-with-host-class-usage.element.ts -->

```TypeScript
import {defineElementNoInputs, html} from 'element-vir';
import {MyWithHostClassDefinitionElement} from './my-with-host-class-definition.element';

export const MyWithHostClassUsageElement = defineElementNoInputs({
    tagName: 'my-with-host-class-usage',
    renderCallback: () => html`
        <${MyWithHostClassDefinitionElement}
            class=${MyWithHostClassDefinitionElement.hostClasses.styleVariationA}
        ></${MyWithHostClassDefinitionElement}>
    `,
});
```

## CSS Vars

Typed CSS vars are created in a similar way as host classes:

<!-- example-link: src/readme-examples/my-with-css-vars.element.ts -->

```TypeScript
import {css, defineElementNoInputs, html} from 'element-vir';

export const MyWithCssVarsElement = defineElementNoInputs({
    tagName: 'my-with-css-vars',
    cssVars: {
        /**
         * The value assigned here ('blue') becomes the fallback value for this CSS var when used
         * via "cssVarValue".
         */
        myCssVar: 'blue',
    },
    styles: ({cssVarNames: cssVarName, cssVarValues: cssVarValue}) => css`
        :host {
            /* Set CSS vars (or reference the name directly) via "cssVarName" */
            ${cssVarName.myCssVar}: yellow;
            /* Use CSS vars with "cssVarValue". This includes a "var" wrapper and the assigned fallback value (which in this case is 'blue'). */
            color: ${cssVarValue.myCssVar};
        }
    `,
    renderCallback: () => html``,
});
```

## Custom Type Requirements

Use `wrapDefineElement` to compose `defineElement` and `defineElementNoInputs`. This is particularly useful to adding restrictions on the element `tagName`, but it can be used for restricting any of the inputs:

<!-- example-link: src/readme-examples/my-custom-define.ts -->

```TypeScript
import {wrapDefineElement} from 'element-vir';

export type VirTagName = `vir-${string}`;

export const {defineElement: defineVirElement, defineElementNoInputs: defineVirElementNoInputs} =
    wrapDefineElement<VirTagName>();

// add an optional assert callback
export const {
    defineElement: defineVerifiedVirElement,
    defineElementNoInputs: defineVerifiedVirElementNoInputs,
} = wrapDefineElement<VirTagName>({
    assertInputs: (inputs) => {
        if (!inputs.tagName.startsWith('vir-')) {
            throw new Error(`all custom elements must start with "vir-"`);
        }
    },
});

// add an optional transform callback
export const {
    defineElement: defineTransformedVirElement,
    defineElementNoInputs: defineTransformedVirElementNoInputs,
} = wrapDefineElement<VirTagName>({
    transformInputs: (inputs) => {
        return {
            ...inputs,
            tagName: inputs.tagName.startsWith('vir-') ? `vir-${inputs.tagName}` : inputs.tagName,
        };
    },
});
```

## Directives

The following custom [`lit` directives](https://lit.dev/docs/templates/custom-directives/) are contained within this package.

### onDomCreated

This directive should be used instead of trying to use `querySelector` directly on the custom element.

This triggers only once when the element it's attached has actually been created in the DOM. If it's attached element changes, the callback will be triggered again.

<!-- example-link: src/readme-examples/my-with-on-dom-created.element.ts -->

```TypeScript
import {defineElementNoInputs, html, onDomCreated} from 'element-vir';

export const MyWithOnDomCreatedElement = defineElementNoInputs({
    tagName: 'my-with-on-dom-created',
    renderCallback: () => html`
        <span
            ${onDomCreated((element) => {
                // logs a span element
                console.info(element);
            })}
        >
            Hello there!
        </span>
    `,
});
```

### onResize

This directive fulfills a common use case of triggering callbacks when something resizes. Instead of just tracking the _globally_ resizing window though, this allows you to track resizes of an individual element. The callback here is passed an object with a portion of the [`ResizeObserverEntry`](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry) properties (since not all properties are supported well in browsers).

<!-- example-link: src/readme-examples/my-with-on-resize.element.ts -->

```TypeScript
import {defineElementNoInputs, html, onResize} from 'element-vir';

export const MyWithOnResizeElement = defineElementNoInputs({
    tagName: 'my-with-on-resize',
    renderCallback: () => html`
        <span
            ${onResize((entry) => {
                // this will track resizing of this span
                // the entry parameter contains target and contentRect properties
                console.info(entry);
            })}
        >
            Hello there!
        </span>
    `,
});
```

### assign

Assign a value to one of a custom element's properties. This is explained in the **Assigning to properties (inputs)** section earlier in this README.

### listen

Listen to a specific event emitted from a custom element. This is explained in the **Listening to custom events (outputs)** section earlier in this README.

### assignWithCleanup

This directive is the same as the `assign` directive but it accepts an additional `cleanupCallback` input. Use this directive to assign values which need some kind of cleanup when they're overwritten. For example, a 3D rendering engine which uses the canvas that should free up memory when it's swapped out.

<!-- example-link: src/readme-examples/my-with-cleanup.element.ts -->

```TypeScript
import {assignWithCleanup, defineElementNoInputs, html} from 'element-vir';
import {MyWithInputsElement} from './my-with-inputs.element';

export const MyWithCleanupElement = defineElementNoInputs({
    tagName: 'my-with-cleanup',
    renderCallback: () => html`
        <h1>My App</h1>
        <${MyWithInputsElement}
            ${assignWithCleanup(
                MyWithInputsElement,
                {
                    email: 'user@example.com',
                    username: 'user',
                },
                (previousValue) => {
                    // here would be the cleanup code.
                    // In this specific example the value is just a string, so no cleanup is needed
                    // and the following line isn't actually doing anything.
                    previousValue.username.trim();
                },
            )}
        >
        </${MyWithInputsElement}>
    `,
});
```

### renderIf

Use the `renderIf` directive to easily render a template if a given condition is true.

<!-- example-link: src/readme-examples/my-with-render-if.element.ts -->

```TypeScript
import {defineElement, html, renderIf} from 'element-vir';

export const MyWithRenderIfElement = defineElement<{shouldRender: boolean}>()({
    tagName: 'my-simple-with-render-if',
    renderCallback: ({inputs}) => html`
        ${renderIf(
            inputs.shouldRender,
            html`
                I'm conditionally rendered!
            `,
        )}
    `,
});
```

### renderAsyncProp

Use the `renderAsyncProp` directive in conjunction with the `asyncProp` property definer and the `ensureAsyncProp` render callback property to seamlessly render and update element state:

<!-- example-link: src/readme-examples/my-with-async-prop.element.ts -->

```TypeScript
import {asyncProp, defineElement, html, renderAsyncProp} from 'element-vir';

async function loadSomething(endpoint: string) {
    // load something from the network
    const data = await (
        await fetch(
            [
                '',
                'api',
                endpoint,
            ].join('/'),
        )
    ).json();
    return data;
}

export const MyWithAsyncPropElement = defineElement<{endpointToHit: string}>()({
    tagName: 'my-simple-with-render-if',
    stateInit: {
        data: asyncProp(),
    },
    renderCallback: ({inputs, state, ensureAsyncProp}) => {
        /**
         * This creates a promise which automatically updates the state.loadsLater prop once the
         * promise resolves.
         */
        ensureAsyncProp({
            data: {
                createPromise: () => loadSomething(inputs.endpointToHit),
                updateIfThisChanges: inputs.endpointToHit,
            },
        });

        return html`
            Here's the data:
            <br />
            ${renderAsyncProp({
                asyncProp: state.data,
                fallback: 'Loading...',
                resolutionRender: (loadedData) => {
                    return html`
                        Got the data: ${loadedData}
                    `;
                },
            })}
        `;
    },
});
```

## Require all child custom elements to be declarative elements

To require all child elements to be declarative elements defined by this package, call `requireAllCustomElementsToBeDeclarativeElements` anywhere in your app. This is a global setting so do not enable it unless you want it to be true _everywhere_ in your current run-time. This should not be used if you're using custom elements from other libraries (unless they happen to also use this package to define their custom elements).

<!-- example-link: src/readme-examples/require-declarative-element.ts -->

```TypeScript
import {requireAllCustomElementsToBeDeclarativeElements} from 'element-vir';

requireAllCustomElementsToBeDeclarativeElements();
```

# Dev

## markdown out of date

If you see this: `Code in Markdown file(s) is out of date. Run without --check to update. code-in-markdown failed.`, run `npm run update-docs` to fix it.

## Testing source map errors

If you see

```
Error while reading source maps for ...
```

While running `npm test`, don't worry about it. Those only happen when tests fail.
