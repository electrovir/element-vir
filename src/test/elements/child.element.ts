import {css} from 'lit';
import {randomString} from '../../augments/string';
import {createFunctionalElement} from '../../functional-element/create-functional-element';
import {ElementEvent, elementEvent} from '../../functional-element/functional-element-event';
import {html} from '../../vir-html/vir-html';

export const ChildElement = createFunctionalElement({
    tagName: 'element-vir-test-child-element',
    styles: css`
        :host {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }
    `,
    propertyInit: {
        canvasWidth: window.innerWidth,
        inputNumber: undefined as number | undefined,
    },
    events: {
        speak: elementEvent<string>(),
        eat: elementEvent<number>(),
    },
    connectedCallback(element) {
        window.addEventListener('resize', () => {
            element.canvasWidth = window.innerWidth;
        });
    },
    renderCallback: ({props, dispatchEvent}) => {
        return html`
            <span>Child</span>
            <span>width: ${props.canvasWidth}</span>
            <span>input number: ${props.inputNumber}</span>
            <button
                @click=${() =>
                    dispatchEvent(new ElementEvent(ChildElement.events.speak, randomString()))}
            >
                click me
            </button>
        `;
    },
});
