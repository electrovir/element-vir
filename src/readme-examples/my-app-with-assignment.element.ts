import {assign, defineElementNoInputs, html} from '..';
import {MySimpleWithInputsElement} from './my-simple-with-inputs.element';

export const MyAppWithAssignmentElement = defineElementNoInputs({
    tagName: 'my-app-with-assignment-element',
    renderCallback: () => html`
        <h1>My App</h1>
        <${MySimpleWithInputsElement}
            ${assign(MySimpleWithInputsElement, {
                email: 'user@example.com',
                username: 'user',
            })}
        >
        </${MySimpleWithInputsElement}>
    `,
});
