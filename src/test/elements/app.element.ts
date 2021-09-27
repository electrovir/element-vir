import {createFunctionalElement} from '../../functional-element/create-functional-element';
import {html} from '../../vir-html/vir-html';
import {ChildElement} from './child.element';

export const AppElement = createFunctionalElement({
    tagName: 'element-vir-test-app',
    propertyInit: {
        funnyNumber: Math.random(),
    },
    renderCallback: ({props}) => {
        return html`
            Welcome to the test app.
            <button @click=${() => (props.funnyNumber = Math.random())}>new number</button>
            <${ChildElement} .inputNumber=${props.funnyNumber}></${ChildElement}>
        `;
    },
});
