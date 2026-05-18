import {css, defineElement, html} from 'element-vir';
import {defineBookTest} from '../test-util.js';

const CssElementInterpolationChild = defineElement()({
    tagName: 'css-element-interpolation-child',
    render() {
        return html`
            <span>child text</span>
        `;
    },
});

export const cssElementInterpolationTest = await defineBookTest(
    'css element interpolation',
    {
        styles: css`
            ${CssElementInterpolationChild} {
                background-color: rgb(33, 66, 99);
                display: block;
            }
        `,
        render() {
            return html`
                <${CssElementInterpolationChild}></${CssElementInterpolationChild}>
            `;
        },
    },
    {
        async 'css interpolated with an element selects by its tag name'({e2eUtil, page}) {
            const child = page.locator(CssElementInterpolationChild.tagName);
            await e2eUtil.expect(child).toHaveCSS('background-color', 'rgb(33, 66, 99)');
        },
    },
);
