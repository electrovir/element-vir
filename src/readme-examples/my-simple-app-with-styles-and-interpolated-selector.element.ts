import {css, defineElement, html} from '..';
import {MySimpleElement} from './my-simple.element';

export const MySimpleWithStylesAndInterpolatedSelectorElement = defineElement({
    tagName: 'my-simple-with-styles-and-interpolated-selector-element',
    styles: css`
        ${MySimpleElement} {
            background-color: blue;
        }
    `,
    renderCallback: () => html`
        <${MySimpleElement}></${MySimpleElement}>
    `,
});
