import {defineElementNoInputs, html} from '..';

export const MySimpleElement = defineElementNoInputs({
    tagName: 'my-simple-element',
    renderCallback: () => html`
        <span>Hello there!</span>
    `,
});
