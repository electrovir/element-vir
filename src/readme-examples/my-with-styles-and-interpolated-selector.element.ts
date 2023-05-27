import {css, defineElementNoInputs, html} from '..';
import {MySimple} from './my-simple.element';

export const MyWithStylesAndInterpolatedSelector = defineElementNoInputs({
    tagName: 'my-with-styles-and-interpolated-selector',
    styles: css`
        ${MySimple} {
            background-color: blue;
        }
    `,
    renderCallback() {
        return html`
            <${MySimple}></${MySimple}>
        `;
    },
});
