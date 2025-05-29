import {defineElement} from 'element-vir';
import {css, html} from '../index.js';
import {MySimple} from './my-simple.element.js';

export const MyWithStylesAndInterpolatedSelector = defineElement()({
    tagName: 'my-with-styles-and-interpolated-selector',
    styles: css`
        ${MySimple} {
            background-color: blue;
        }
    `,
    render() {
        return html`
            <${MySimple}></${MySimple}>
        `;
    },
});
