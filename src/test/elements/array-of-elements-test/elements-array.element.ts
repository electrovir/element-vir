import {defineElementNoInputs, html} from '../../..';

const ArrayAElement = defineElementNoInputs({
    tagName: 'element-vir-test-a',
    renderCallback() {
        return html`
            A
        `;
    },
});

const ArrayBElement = defineElementNoInputs({
    tagName: 'element-vir-test-b',
    renderCallback() {
        return html`
            B
        `;
    },
});

const ArrayCElement = defineElementNoInputs({
    tagName: 'element-vir-test-c',
    renderCallback() {
        return html`
            C
        `;
    },
});

const ArrayDElement = defineElementNoInputs({
    tagName: 'element-vir-test-d',
    renderCallback() {
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
