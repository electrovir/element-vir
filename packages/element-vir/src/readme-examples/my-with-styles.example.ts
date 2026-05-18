import {defineElement} from 'element-vir';
import {css, html} from '../index.js';

export const MyWithStyles = defineElement()({
    tagName: 'my-with-styles',
    styles: css`
        :host {
            display: flex;
            flex-direction: column;
            font-family: sans-serif;
        }

        span + span {
            margin-top: 16px;
        }
    `,
    render() {
        return html`
            <span>Hello there!</span>
            <span>How are you doing?</span>
        `;
    },
});
