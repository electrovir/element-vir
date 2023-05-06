import {randomString} from '@augment-vir/browser';
import {css} from 'lit';
import {defineElement, defineElementEvent, html, listen, onDomCreated} from '../..';
import {MyCustomEvent} from '../customEvent';

export const TestChildElement = defineElement<{
    width: number;
    displayNumber: number;
    myProp?: number;
}>()({
    tagName: 'element-vir-test-child',
    styles: ({hostClassSelectors, hostClassNames, cssVarValues}) => {
        return css`
            :host {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
            }

            span {
                background-color: ${cssVarValues.derp};
            }

            ${hostClassSelectors.testHostClass} {
                color: blue;
            }

            :host(.${hostClassNames.testHostClass}:hover) {
                color: pink;
            }

            ${hostClassSelectors.automaticallyApplied} {
                font-weight: bold;
            }
        `;
    },
    cssVars: {
        derp: 'white',
    },
    hostClasses: {
        testHostClass: false,
        automaticallyApplied: ({inputs}) => inputs.displayNumber === 15,
    },
    stateInit: {
        button: undefined as undefined | HTMLButtonElement,
    },
    events: {
        speak: defineElementEvent<string>(),
        eat: defineElementEvent<number>(),
    },
    renderCallback: ({state, inputs, dispatch, updateState, events}) => {
        // log here to make sure it's not rendering too often
        console.info('child rendering');
        return html`
            <span>Child ${inputs.myProp}</span>
            <span>width: ${inputs.width}</span>
            <span>input number: ${inputs.displayNumber}</span>
            <button
                ${onDomCreated((element) => {
                    if (element instanceof HTMLButtonElement) {
                        updateState({button: element});
                    } else {
                        console.error(element);
                        throw new Error(`obtained element is not a button!`);
                    }
                })}
                ${listen('click', () => {
                    dispatch(new events.speak(randomString()));
                })}
            >
                emit speak event
            </button>
            <button ${listen('click', () => dispatch(new MyCustomEvent(5)))}>
                emit custom event (logged to console)
            </button>
            <span>button handle: ${state.button?.tagName}</span>
        `;
    },
});
