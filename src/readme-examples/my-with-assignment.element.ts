import {assign, defineElementNoInputs, html} from '..';
import {MyWithInputsElement} from './my-with-inputs.element';

export const MyWithAssignmentElement = defineElementNoInputs({
    tagName: 'my-with-assignment',
    renderCallback: () => html`
        <h1>My App</h1>
        <${MyWithInputsElement}
            ${assign(MyWithInputsElement, {
                email: 'user@example.com',
                username: 'user',
            })}
        >
        </${MyWithInputsElement}>
    `,
});
