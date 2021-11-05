import {randomString} from 'augment-vir';
import {css} from 'lit';
import {defineFunctionalElement, ElementEvent, eventInit, html, onDomCreated} from '../..';

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
        speak: eventInit<string>(),
        eat: eventInit<number>(),
    },
    renderCallback: ({props, dispatchEvent, events, defaultDispatchEvent}) => {
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
                @click=${() => {
                    dispatchEvent(new ElementEvent(events.speak, randomString()));
                }}
            >
                emit event from child
            </button>
            <button @click=${() => defaultDispatchEvent(new ElementEvent(events.eat, 5))}>
                Emit default event
            </button>
            <span>button handle: ${props.button?.tagName}</span>
        `;
    },
});
