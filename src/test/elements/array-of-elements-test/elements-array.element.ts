import {defineFunctionalElement, html} from '../../..';

const ArrayAElement = defineFunctionalElement({
    tagName: 'element-vir-test-a',
    renderCallback: () => {
        return html`
            A
        `;
    },
});

const ArrayBElement = defineFunctionalElement({
    tagName: 'element-vir-test-b',
    renderCallback: () => {
        return html`
            B
        `;
    },
});

const ArrayCElement = defineFunctionalElement({
    tagName: 'element-vir-test-c',
    renderCallback: () => {
        return html`
            C
        `;
    },
});

const ArrayDElement = defineFunctionalElement({
    tagName: 'element-vir-test-d',
    renderCallback: () => {
        return html`
            D
        `;
    },
});

export const allTestArrayElements = [
    ArrayAElement,
    ArrayBElement,
    ArrayCElement,
    ArrayDElement,
];
