import {css, defineElement, html, testId} from 'element-vir';
import {defineBookTest} from '../test-util.js';

const ShadowDomIsolationElement = defineElement()({
    tagName: 'shadow-dom-isolation-element',
    styles: css`
        .target {
            color: rgb(11, 22, 33);
        }
    `,
    testIds: ['target'],
    render({testIds}) {
        return html`
            <span ${testId(testIds.target)} class="target">isolated</span>
        `;
    },
});

export const shadowDomIsolationTest = await defineBookTest(
    'shadow dom isolation',
    {
        styles: css`
            /* This attempt to style the child's .target should NOT bleed through. */
            .target {
                color: rgb(200, 0, 0);
            }
        `,
        render() {
            return html`
                <${ShadowDomIsolationElement}></${ShadowDomIsolationElement}>
            `;
        },
    },
    {
        async 'parent styles do not bleed into child shadow DOM'({e2eUtil, page}) {
            const target = page
                .locator(ShadowDomIsolationElement.tagName)
                .getByTestId(ShadowDomIsolationElement.testIds.target);
            await e2eUtil.expect(target).toHaveCSS('color', 'rgb(11, 22, 33)');
        },
    },
);
