import {defineElement} from 'element-vir';
import {html} from '../index.js';
import {MySimple} from './my-simple.example.js';

export const MyApp = defineElement()({
    tagName: 'my-app',
    render() {
        return html`
            <h1>My App</h1>
            <${MySimple}></${MySimple}>
        `;
    },
});
