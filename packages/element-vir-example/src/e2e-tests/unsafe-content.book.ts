import {css, defineElement, html, testId, unsafeCSS, unsafeHTML} from 'element-vir';
import {defineBookTest} from '../test-util.js';

const dynamicSelector = '.unsafe-styled-target';

const UnsafeContentElement = defineElement()({
    tagName: 'unsafe-content-element',
    styles: css`
        ${unsafeCSS(dynamicSelector)} {
            color: rgb(7, 14, 21);
        }
    `,
    testIds: [
        'html',
        'styled',
        'unsafe-bold',
    ],
    render({testIds}) {
        return html`
            <span ${testId(testIds.html)}>
                ${unsafeHTML(
                    `<strong data-test-id="${testIds['unsafe-bold']}">unsafe content</strong>`,
                )}
            </span>
            <span ${testId(testIds.styled)} class="unsafe-styled-target">styled</span>
        `;
    },
});

export const unsafeContentTest = await defineBookTest(
    'unsafe content',
    {
        render() {
            return html`
                <${UnsafeContentElement}></${UnsafeContentElement}>
            `;
        },
    },
    {
        async 'unsafeHTML parses raw HTML into the template'({e2eUtil, page}) {
            await e2eUtil
                .expect(page.getByTestId(UnsafeContentElement.testIds['unsafe-bold']))
                .toHaveText('unsafe content');
        },
        async 'unsafeCSS interpolates a literal selector into styles'({e2eUtil, page}) {
            await e2eUtil
                .expect(page.getByTestId(UnsafeContentElement.testIds.styled))
                .toHaveCSS('color', 'rgb(7, 14, 21)');
        },
    },
);
