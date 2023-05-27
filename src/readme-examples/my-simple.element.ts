import {defineElementNoInputs, html} from '..';

export const MySimple = defineElementNoInputs({
    tagName: 'my-simple',
    renderCallback() {
        return html`
            <span>Hello there!</span>
        `;
    },
});
