import {createFunctionalElement} from '../../functional-element/create-functional-element';
import {html} from '../../vir-html/vir-html';
import {ChildElement} from './child.element';

export const AppElement = createFunctionalElement({
    tagName: 'element-vir-test-app',
    inputs: {
        funnyNumber: Math.random(),
    },
    renderCallback: ({self, inputs}) => {
        return html`
            Welcome to the test app.
            <button @click=${() => (self.funnyNumber = Math.random())}>new number</button>
            <${ChildElement} .thingie=${inputs.funnyNumber}></${ChildElement}>
        `;
    },
});
