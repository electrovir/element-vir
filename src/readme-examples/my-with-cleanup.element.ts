import {assignWithCleanup, defineElementNoInputs, html} from '../index';
import {MyWithInputs} from './my-with-inputs.element';

export const MyWithCleanup = defineElementNoInputs({
    tagName: 'my-with-cleanup',
    renderCallback() {
        return html`
            <h1>My App</h1>
            <${MyWithInputs}
                ${assignWithCleanup(
                    MyWithInputs,
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
            ></${MyWithInputs}>
        `;
    },
});
