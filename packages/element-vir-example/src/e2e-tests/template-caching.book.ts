import {defineElement, html, listen, testId, type HTMLTemplateResult} from 'element-vir';
import {defineBookTest} from '../test-util.js';

const TemplateCachingElement = defineElement()({
    tagName: 'template-caching-element',
    state() {
        return {
            count: 0,
        };
    },
    testIds: [
        'bump',
        'a',
        'b',
    ],
    render({state, updateState, testIds}) {
        function buildRow(label: 'a' | 'b', value: number): HTMLTemplateResult {
            return html`
                <span ${testId(testIds[label])}>${label}=${value}</span>
            `;
        }

        return html`
            <button
                ${testId(testIds.bump)}
                ${listen('click', () => {
                    updateState({
                        count: state.count + 1,
                    });
                })}
            >
                bump
            </button>
            ${buildRow('a', state.count)} ${buildRow('b', state.count * 2)}
        `;
    },
});

export const templateCachingTest = await defineBookTest(
    'template caching',
    {
        render() {
            return html`
                <${TemplateCachingElement}></${TemplateCachingElement}>
            `;
        },
    },
    {
        async 'template strings are reused across renders'({e2eUtil, page}) {
            await e2eUtil
                .expect(page.getByTestId(TemplateCachingElement.testIds.a))
                .toHaveText('a=0');
            await e2eUtil
                .expect(page.getByTestId(TemplateCachingElement.testIds.b))
                .toHaveText('b=0');

            await page.getByTestId(TemplateCachingElement.testIds.bump).click();
            await e2eUtil
                .expect(page.getByTestId(TemplateCachingElement.testIds.a))
                .toHaveText('a=1');
            await e2eUtil
                .expect(page.getByTestId(TemplateCachingElement.testIds.b))
                .toHaveText('b=2');

            await page.getByTestId(TemplateCachingElement.testIds.bump).click();
            await e2eUtil
                .expect(page.getByTestId(TemplateCachingElement.testIds.a))
                .toHaveText('a=2');
            await e2eUtil
                .expect(page.getByTestId(TemplateCachingElement.testIds.b))
                .toHaveText('b=4');
        },
    },
);
