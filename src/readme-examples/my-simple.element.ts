import {defineElementNoInputs, html} from '..';

export const MySimpleElement = defineElementNoInputs({
    tagName: 'my-simple',
    renderCallback: () => html`
        <span>Hello there!</span>
    `,
});
