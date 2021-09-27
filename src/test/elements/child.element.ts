import {css} from 'lit';
import {createFunctionalElement} from '../../functional-element/create-functional-element';
import {html} from '../../vir-html/vir-html';

export const ChildElement = createFunctionalElement({
    tagName: 'element-vir-test-child-element',
    styles: css`
        :host {
            display: flex;
            flex-direction: column;
        }
    `,
    propertyInit: {
        canvasWidth: window.innerWidth,
        inputNumber: undefined as number | undefined,
    },
    connectedCallback(element) {
        window.addEventListener('resize', () => {
            element.canvasWidth = window.innerWidth;
        });
    },
    renderCallback: ({props}) => {
        return html`
            <span>Child</span>
            <span>width: ${props.canvasWidth}</span>
            <span>input number: ${props.inputNumber}</span>
        `;
    },
});
