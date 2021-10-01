import {css} from 'lit';
import {defineFunctionalElement, ElementEvent, eventInit, html, onDomCreated} from '../..';
import {randomString} from '../../augments/string';

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
    renderCallback: ({props, dispatchEvent}) => {
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
                    dispatchEvent(new ElementEvent(ChildElement.events.speak, randomString()));
                }}
            >
                emit event from child
            </button>
            <span>button handle: ${props.button?.tagName}</span>
        `;
    },
});
