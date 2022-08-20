import {assign, defineElement, html} from '..';
import {MySimpleWithPropsElement} from './my-simple-with-props.element';

export const MyAppWithPropsElement = defineElement({
    tagName: 'my-app-with-props-element',
    renderCallback: () => html`
        <h1>My App</h1>
        <${MySimpleWithPropsElement}
            ${assign(MySimpleWithPropsElement, {
                currentEmail: 'user@example.com',
                currentUsername: 'user',
            })}
        >
        </${MySimpleWithPropsElement}>
    `,
});
