import {assignWithCleanup, defineElementNoInputs, html} from '..';
import {MyWithInputsElement} from './my-with-inputs.element';

export const MyWithCleanupElement = defineElementNoInputs({
    tagName: 'my-with-cleanup',
    renderCallback: () => html`
        <h1>My App</h1>
        <${MyWithInputsElement}
            ${assignWithCleanup(
                MyWithInputsElement,
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
        </${MyWithInputsElement}>
    `,
});
