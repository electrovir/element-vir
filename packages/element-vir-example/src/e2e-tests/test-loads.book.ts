import {css, defineElement, html, testId} from 'element-vir';
import {defineBookTest} from '../test-util.js';

const LoadTestElement = defineElement()({
    tagName: 'load-test-element',
    testIds: ['content'],
    render({testIds}) {
        return html`
            <div ${testId(testIds.content)}>The book app loaded successfully.</div>
        `;
    },
});

export const loadTest = await defineBookTest(
    'load test',
    {
        styles: css`
            :host {
                display: flex;
                flex-direction: column;
                gap: 8px;
            }
        `,
        render() {
            return html`
                <${LoadTestElement}></${LoadTestElement}>
            `;
        },
    },
    {
        async 'renders the book app loads page'({e2eUtil, page}) {
            await e2eUtil.expect(page.getByTestId(LoadTestElement.testIds.content)).toBeVisible();
        },
    },
);
