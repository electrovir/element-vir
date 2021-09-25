import {createFunctionalElement} from '../../functional-element/create-functional-element';
import {html} from '../../vir-html/vir-html';

export const ChildElement = createFunctionalElement({
    tagName: 'element-vir-test-child-element',
    inputs: {
        thingie: undefined,
    },
    renderCallback: ({inputs}) => {
        // console.dir(element);
        console.log(inputs.thingie);
        return html`
            Welcome to the test child element.
        `;
    },
});

console.log(ChildElement);
console.log(ChildElement.inputs.thingie);
