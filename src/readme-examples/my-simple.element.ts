import {defineElementNoInputs, html} from '../index';

export const MySimple = defineElementNoInputs({
    tagName: 'my-simple',
    renderCallback() {
        return html`
            <span>Hello there!</span>
        `;
    },
});
