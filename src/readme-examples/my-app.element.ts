import {defineElement, html} from '..';
import {MySimpleElement} from './my-simple.element';

export const MyAppElement = defineElement({
    tagName: 'my-app-element',
    renderCallback: () => html`
        <h1>My App</h1>
        <${MySimpleElement}></${MySimpleElement}>
    `,
});
