import {asyncProp, defineElement, html, listen, renderAsync, testId} from 'element-vir';
import {defineBookTest} from '../test-util.js';

const RenderAsyncErrorElement = defineElement()({
    tagName: 'render-async-error-element',
    state() {
        return {
            data: asyncProp<string, {kind: 'ok' | 'fail'}>({
                updateCallback({kind}) {
                    if (kind === 'fail') {
                        return Promise.reject(new Error('boom'));
                    }
                    return Promise.resolve('resolved');
                },
            }),
        };
    },
    testIds: [
        'report',
        'success',
        'fail',
    ],
    render({state, testIds}) {
        return html`
            <button
                ${testId(testIds.success)}
                ${listen('click', () => {
                    state.data.update({
                        kind: 'ok',
                    });
                })}
            >
                load ok
            </button>
            <button
                ${testId(testIds.fail)}
                ${listen('click', () => {
                    state.data.update({
                        kind: 'fail',
                    });
                })}
            >
                load fail
            </button>
            <span ${testId(testIds.report)}>
                ${renderAsync(
                    state.data,
                    'loading...',
                    (resolved) => `resolved: ${resolved}`,
                    (error) => `error: ${error.message}`,
                )}
            </span>
        `;
    },
});

export const renderAsyncErrorTest = await defineBookTest(
    'render async error',
    {
        render() {
            return html`
                <${RenderAsyncErrorElement}></${RenderAsyncErrorElement}>
            `;
        },
    },
    {
        async 'renderAsync runs the resolutionRender on success'({e2eUtil, page}) {
            await page.getByTestId(RenderAsyncErrorElement.testIds.success).click();
            await e2eUtil
                .expect(page.getByTestId(RenderAsyncErrorElement.testIds.report))
                .toHaveText('resolved: resolved');
        },
        async 'renderAsync runs the errorRender on rejection'({e2eUtil, page}) {
            await page.getByTestId(RenderAsyncErrorElement.testIds.fail).click();
            await e2eUtil
                .expect(page.getByTestId(RenderAsyncErrorElement.testIds.report))
                .toHaveText('error: boom');
        },
    },
);
