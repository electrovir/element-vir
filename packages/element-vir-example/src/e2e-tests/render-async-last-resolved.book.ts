import {wait} from '@augment-vir/common';
import {asyncProp, defineElement, html, listen, renderAsync, testId} from 'element-vir';
import {defineBookTest} from '../test-util.js';

const LastResolvedElement = defineElement()({
    tagName: 'render-async-last-resolved-element',
    state() {
        return {
            data: asyncProp<string, {value: string}>({
                defaultValue: 'first',
                async updateCallback({value}) {
                    await wait({
                        milliseconds: 250,
                    });
                    return `resolved: ${value}`;
                },
            }),
        };
    },
    testIds: [
        'fallback',
        'last',
        'trigger',
    ],
    render({state, testIds}) {
        return html`
            <button
                ${testId(testIds.trigger)}
                ${listen('click', () => {
                    state.data.update({
                        value: 'second',
                    });
                })}
            >
                trigger
            </button>
            <span ${testId(testIds.fallback)}>${renderAsync(state.data, 'loading')}</span>
            <span ${testId(testIds.last)}>
                ${renderAsync(state.data, 'loading', undefined, undefined, {
                    useLastResolvedValue: true,
                })}
            </span>
        `;
    },
});

export const renderAsyncLastResolvedTest = await defineBookTest(
    'render async last resolved',
    {
        render() {
            return html`
                <${LastResolvedElement}></${LastResolvedElement}>
            `;
        },
    },
    {
        async 'useLastResolvedValue keeps the previous value while resolving'({e2eUtil, page}) {
            const fallback = page.getByTestId(LastResolvedElement.testIds.fallback);
            const last = page.getByTestId(LastResolvedElement.testIds.last);

            await e2eUtil.expect(fallback).toHaveText('first');
            await e2eUtil.expect(last).toHaveText('first');

            await page.getByTestId(LastResolvedElement.testIds.trigger).click();

            await e2eUtil.expect(fallback).toHaveText('loading');
            await e2eUtil.expect(last).toHaveText('first');

            await e2eUtil.expect(fallback).toHaveText('resolved: second');
            await e2eUtil.expect(last).toHaveText('resolved: second');
        },
    },
);
