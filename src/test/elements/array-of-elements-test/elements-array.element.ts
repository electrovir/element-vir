import {defineElement, html} from '../../..';

const ArrayAElement = defineElement({
    tagName: 'element-vir-test-a',
    renderCallback: () => {
        return html`
            A
        `;
    },
});

const ArrayBElement = defineElement({
    tagName: 'element-vir-test-b',
    renderCallback: () => {
        return html`
            B
        `;
    },
});

const ArrayCElement = defineElement({
    tagName: 'element-vir-test-c',
    renderCallback: () => {
        return html`
            C
        `;
    },
});

const ArrayDElement = defineElement({
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
