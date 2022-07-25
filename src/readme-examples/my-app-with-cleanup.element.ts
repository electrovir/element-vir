import {assignWithCleanup, defineFunctionalElement, html} from '..';
import {MySimpleWithPropsElement} from './my-simple-with-props.element';

export const MyAppWithPropsElement = defineFunctionalElement({
    tagName: 'my-app-with-cleanup',
    renderCallback: () => html`
        <h1>My App</h1>
        <${MySimpleWithPropsElement}
            ${assignWithCleanup(
                MySimpleWithPropsElement,
                {
                    currentEmail: 'user@example.com',
                    currentUsername: 'user',
                },
                (previousValue) => {
                    // here would be the cleanup code.
                    // In this specific example the value is just a string, so no cleanup is needed
                    // and the following line isn't actually doing anything.
                    previousValue.currentUsername.trim();
                },
            )}
        >
        </${MySimpleWithPropsElement}>
    `,
});
