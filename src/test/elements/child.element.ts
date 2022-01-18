import {randomString} from 'augment-vir';
import {css, defineElementEvent, defineFunctionalElement, html, listen, onDomCreated} from '../..';
import {MyCustomEvent} from '../customEvent';

export const ChildElement = defineFunctionalElement({
    tagName: 'element-vir-test-child-element',
    styles: css`
        :host {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }
    `,
    props: {
        width: -1,
        inputNumber: undefined as number | undefined,
        resizeListener: undefined as (() => void) | undefined,
        button: undefined as undefined | HTMLButtonElement,
    },
    events: {
        speak: defineElementEvent<string>(),
        eat: defineElementEvent<number>(),
    },
    renderCallback: ({props, dispatch, events, genericDispatch}) => {
        // log here to make sure it's not rendering too often
        console.info('child rendering');
        return html`
            <span>Child</span>
            <span>width: ${props.width}</span>
            <span>input number: ${props.inputNumber}</span>
            <button
                ${onDomCreated((element) => {
                    if (element instanceof HTMLButtonElement) {
                        props.button = element;
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
                Emit custom event
            </button>
            <span>button handle: ${props.button?.tagName}</span>
        `;
    },
});
