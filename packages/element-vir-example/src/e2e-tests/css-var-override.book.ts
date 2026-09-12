import {css, defineElement, html, testId} from 'element-vir';
import {defineBookTest} from '../test-util.js';

const CssVarOverrideChild = defineElement()({
    tagName: 'css-var-override-child',
    cssVars: {
        'css-var-override-child-color': 'rgb(1, 1, 1)',
    },
    styles({cssVars}) {
        return css`
            .target {
                color: ${cssVars['css-var-override-child-color'].value};
            }
        `;
    },
    testIds: ['target'],
    render({testIds}) {
        return html`
            <span ${testId(testIds.target)} class="target">var</span>
        `;
    },
});

const CssVarOverrideParent = defineElement()({
    tagName: 'css-var-override-parent',
    styles: css`
        ${CssVarOverrideChild} {
            --css-var-override-child-color: rgb(50, 100, 150);
        }
    `,
    render() {
        return html`
            <${CssVarOverrideChild}></${CssVarOverrideChild}>
        `;
    },
});

export const cssVarOverrideTest = await defineBookTest(
    'css var override',
    {
        render() {
            return html`
                <${CssVarOverrideParent}></${CssVarOverrideParent}>
            `;
        },
    },
    {
        async 'parent can override child cssVar via the host selector'({e2eUtil, page}) {
            const target = page
                .locator(CssVarOverrideChild.tagName)
                .getByTestId(CssVarOverrideChild.testIds.target);
            await e2eUtil.expect(target).toHaveCSS('color', 'rgb(50, 100, 150)');
        },
    },
);
