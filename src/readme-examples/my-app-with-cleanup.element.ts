import {assignWithCleanup, defineElementNoInputs, html} from '..';
import {MySimpleWithInputsElement} from './my-simple-with-inputs.element';

export const MyAppWithAssignmentCleanupElement = defineElementNoInputs({
    tagName: 'my-app-with-cleanup',
    renderCallback: () => html`
        <h1>My App</h1>
        <${MySimpleWithInputsElement}
            ${assignWithCleanup(
                MySimpleWithInputsElement,
                {
                    email: 'user@example.com',
                    username: 'user',
                },
                (previousValue) => {
                    // here would be the cleanup code.
                    // In this specific example the value is just a string, so no cleanup is needed
                    // and the following line isn't actually doing anything.
                    previousValue.username.trim();
                },
            )}
        >
        </${MySimpleWithInputsElement}>
    `,
});
