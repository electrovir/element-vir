import {defineElement, html} from '../..';

export const VirWithInputs = defineElement<{
    first: number;
    second: string;
}>()({
    tagName: 'vir-with-inputs',
    renderCallback: ({inputs: inputs}) => {
        return html`
            <span data-test-id="first">${inputs.first}</span>
            <span data-test-id="second">${inputs.second}</span>
        `;
    },
});
