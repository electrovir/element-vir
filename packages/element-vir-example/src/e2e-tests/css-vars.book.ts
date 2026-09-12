import {css, defineElement, html, testId} from 'element-vir';
import {defineBookTest} from '../test-util.js';

const CssVarsElement = defineElement()({
    tagName: 'css-vars-element',
    cssVars: {
        'css-vars-element-color': 'rgb(123, 45, 67)',
    },
    styles({cssVars}) {
        return css`
            .target {
                color: ${cssVars['css-vars-element-color'].value};
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

export const cssVarsTest = await defineBookTest(
    'css vars',
    {
        render() {
            return html`
                <${CssVarsElement}></${CssVarsElement}>
            `;
        },
    },
    {
        async 'css var default value resolves in element styles'({e2eUtil, page}) {
            const target = page
                .locator(CssVarsElement.tagName)
                .getByTestId(CssVarsElement.testIds.target);
            await e2eUtil.expect(target).toHaveCSS('color', 'rgb(123, 45, 67)');
        },
    },
);
