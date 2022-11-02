import {css, defineElementNoInputs, html} from '..';
import {MySimpleElement} from './my-simple.element';

export const MyWithStylesAndInterpolatedSelectorElement = defineElementNoInputs({
    tagName: 'my-with-styles-and-interpolated-selector',
    styles: css`
        ${MySimpleElement} {
            background-color: blue;
        }
    `,
    renderCallback: () => html`
        <${MySimpleElement}></${MySimpleElement}>
    `,
});
