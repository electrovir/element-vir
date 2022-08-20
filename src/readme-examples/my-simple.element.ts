import {defineElement, html} from '..';

export const MySimpleElement = defineElement({
    tagName: 'my-simple-element',
    renderCallback: () => html`
        <span>Hello there!</span>
    `,
});
