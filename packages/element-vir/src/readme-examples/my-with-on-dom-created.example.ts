import {defineElement} from 'element-vir';
import {html, onDomCreated} from '../index.js';

export const MyWithOnDomCreated = defineElement()({
    tagName: 'my-with-on-dom-created',
    render() {
        return html`
            <span
                ${onDomCreated((element) => {
                    // logs a span element
                    console.info(element);
                })}
            >
                Hello there!
            </span>
        `;
    },
});
