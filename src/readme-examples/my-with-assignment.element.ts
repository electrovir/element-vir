import {defineElementNoInputs, html} from '..';
import {MyWithInputs} from './my-with-inputs.element';

export const MyWithAssignment = defineElementNoInputs({
    tagName: 'my-with-assignment',
    renderCallback() {
        return html`
            <h1>My App</h1>
            <${MyWithInputs.assign({
                email: 'user@example.com',
                username: 'user',
            })}></${MyWithInputs}>
        `;
    },
});
