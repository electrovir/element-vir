import {randomString} from 'augment-vir';
import {css} from 'lit';
import {defineElementEvent, defineElementNoInputs, html, listen, onDomCreated} from '../..';
import {MyCustomEvent} from '../customEvent';

export const TestChildElement = defineElementNoInputs({
    tagName: 'element-vir-test-child-element',
    styles: ({hostClass, cssVarValue, cssVarName}) => {
        // console.log({
        //     hostClass,
        //     cssVarValue: mapObject(cssVarValue, (key, value) => {
        //         return String(value);
        //     }),
        //     cssVarName: mapObject(cssVarName, (key, value) => {
        //         return String(value);
        //     }),
        // });
        return css`
            :host {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
            }

            span {
                background-color: ${cssVarValue.derp};
            }

            ${hostClass.testHostClass} {
                color: blue;
            }

            ${hostClass.automaticallyApplied} {
                font-weight: bold;
            }
        `;
    },
    cssVars: {
        derp: 'white',
    },
    hostClasses: {
        testHostClass: false,
        automaticallyApplied: ({props}) => props.inputNumber === 15,
    },
    stateInit: {
        width: -1,
        inputNumber: undefined as number | undefined,
        resizeListener: undefined as (() => void) | undefined,
        button: undefined as undefined | HTMLButtonElement,
    },
    events: {
        speak: defineElementEvent<string>(),
        eat: defineElementEvent<number>(),
    },
    renderCallback: ({props, dispatch, setProps, events, genericDispatch}) => {
        // log here to make sure it's not rendering too often
        console.info('child rendering');
        return html`
            <span>Child</span>
            <span>width: ${props.width}</span>
            <span>input number: ${props.inputNumber}</span>
            <button
                ${onDomCreated((element) => {
                    if (element instanceof HTMLButtonElement) {
                        setProps({button: element});
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
            <button ${listen('click', () => genericDispatch(new MyCustomEvent(5)))}>
                emit custom event (logged to console)
            </button>
            <span>button handle: ${props.button?.tagName}</span>
        `;
    },
});
