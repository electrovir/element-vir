import {defineElementNoInputs, html} from '..';
import {MySimple} from './my-simple.element';

export const MyApp = defineElementNoInputs({
    tagName: 'my-app',
    renderCallback() {
        return html`
            <h1>My App</h1>
            <${MySimple}></${MySimple}>
        `;
    },
});
