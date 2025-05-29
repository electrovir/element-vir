import {defineElement} from 'element-vir';
import {html} from '../index.js';

export const MySimple = defineElement()({
    tagName: 'my-simple',
    render() {
        return html`
            <span>Hello there!</span>
        `;
    },
});
