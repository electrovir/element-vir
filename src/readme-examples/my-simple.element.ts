import {defineFunctionalElement, html} from '..';

export const MySimpleElement = defineFunctionalElement({
    tagName: 'my-simple-element',
    renderCallback: () => html`
        <span>Hello there!</span>
    `,
});
