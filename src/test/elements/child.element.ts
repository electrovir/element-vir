import {css} from 'lit';
import {randomString} from '../../augments/string';
import {defineFunctionalElement} from '../../functional-element/define-functional-element';
import {ElementEvent, eventInit} from '../../functional-element/element-events';
import {html} from '../../vir-html/vir-html';

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
        canvasWidth: window.innerWidth,
        inputNumber: undefined as number | undefined,
        resizeListener: undefined as (() => void) | undefined,
    },
    events: {
        speak: eventInit<string>(),
        eat: eventInit<number>(),
    },
    connectedCallback({props}) {
        props.resizeListener = () => {
            props.canvasWidth = window.innerWidth;
        };
        window.addEventListener('resize', props.resizeListener);
    },
    disconnectedCallback({props}) {
        if (props.resizeListener) {
            window.removeEventListener('resize', props.resizeListener);
        }
        props.resizeListener = undefined;
    },
    renderCallback: ({props, dispatchEvent}) => {
        // log here to make sure it's not rendering too often
        console.info('child rendering');
        return html`
            <span>Child</span>
            <span>width: ${props.canvasWidth}</span>
            <span>input number: ${props.inputNumber}</span>
            <button
                @click=${() => {
                    dispatchEvent(new ElementEvent(ChildElement.events.speak, randomString()));
                    // dispatchEvent(new ElementEvent(ChildElement.events.eat, randomString()));
                }}
            >
                emit event from child
            </button>
        `;
    },
});
