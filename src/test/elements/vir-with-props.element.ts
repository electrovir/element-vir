import {defineElementNoInputs, html} from '../..';

export const VirWithProps = defineElementNoInputs({
    tagName: 'vir-with-props',
    stateInit: {
        first: 1,
        second: 'two',
    },
    renderCallback: ({props}) => {
        return html`
            <span data-test-id="first">${props.first}</span>
            <span data-test-id="second">${props.second}</span>
        `;
    },
});
