import {wait} from '@augment-vir/common';
import {defineElement, html, listen, renderAsync, testId} from 'element-vir';
import {defineBookTest} from '../test-util.js';

const RawPromiseElement = defineElement()({
    tagName: 'render-async-raw-promise-element',
    state() {
        return {
            data: undefined as undefined | {value: string | Error | Promise<string>},
        };
    },
    testIds: [
        'report',
        'trigger',
    ],
    render({state, updateState, testIds}) {
        return html`
            <button
                ${testId(testIds.trigger)}
                ${listen('click', async () => {
                    const pending = wait({
                        milliseconds: 150,
                    }).then(() => 'done');
                    updateState({
                        data: {
                            value: pending,
                        },
                    });
                    const resolved = await pending;
                    updateState({
                        data: {
                            value: resolved,
                        },
                    });
                })}
            >
                trigger
            </button>
            <span ${testId(testIds.report)}>
                ${state.data
                    ? renderAsync(
                          {
                              value: state.data.value,
                              lastResolvedValue: undefined,
                          },
                          'loading',
                      )
                    : 'idle'}
            </span>
        `;
    },
});

export const renderAsyncRawPromiseTest = await defineBookTest(
    'render async raw promise',
    {
        render() {
            return html`
                <${RawPromiseElement}></${RawPromiseElement}>
            `;
        },
    },
    {
        async 'renderAsync handles a raw Promise (not via asyncProp)'({e2eUtil, page}) {
            const report = page.getByTestId(RawPromiseElement.testIds.report);
            await e2eUtil.expect(report).toHaveText('idle');

            await page.getByTestId(RawPromiseElement.testIds.trigger).click();
            await e2eUtil.expect(report).toHaveText('done');
        },
    },
);
