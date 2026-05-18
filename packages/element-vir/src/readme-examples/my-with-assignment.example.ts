import {defineElement} from 'element-vir';
import {html} from '../index.js';
import {MyWithInputs} from './my-with-inputs.example.js';

export const MyWithAssignment = defineElement()({
    tagName: 'my-with-assignment',
    render() {
        return html`
            <h1>My App</h1>
            <${MyWithInputs.assign({
                email: 'user@example.com',
                username: 'user',
            })}></${MyWithInputs}>
        `;
    },
});
