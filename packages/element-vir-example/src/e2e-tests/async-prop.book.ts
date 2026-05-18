import {wait} from '@augment-vir/common';
import {asyncProp, defineElement, html, listen, renderAsync, testId} from 'element-vir';
import {defineBookTest} from '../test-util.js';

const AsyncPropElement = defineElement()({
    tagName: 'async-prop-element',
    state() {
        return {
            data: asyncProp<string, {value: string}>({
                async updateCallback({value}) {
                    await wait({
                        milliseconds: 100,
                    });
                    return `resolved: ${value}`;
                },
            }),
        };
    },
    testIds: [
        'report',
        'trigger-1',
        'trigger-2',
    ],
    render({state, testIds}) {
        return html`
            <button
                ${testId(testIds['trigger-1'])}
                ${listen('click', () => {
                    state.data.update({
                        value: 'one',
                    });
                })}
            >
                load one
            </button>
            <button
                ${testId(testIds['trigger-2'])}
                ${listen('click', () => {
                    state.data.update({
                        value: 'two',
                    });
                })}
            >
                load two
            </button>
            <span ${testId(testIds.report)}>${renderAsync(state.data, 'loading...')}</span>
        `;
    },
});

export const asyncPropTest = await defineBookTest(
    'async prop',
    {
        render() {
            return html`
                <${AsyncPropElement}></${AsyncPropElement}>
            `;
        },
    },
    {
        async 'asyncProp resolves and updates output'({e2eUtil, page}) {
            const report = page.getByTestId(AsyncPropElement.testIds.report);
            await e2eUtil.expect(report).toHaveText('loading...');

            await page.getByTestId(AsyncPropElement.testIds['trigger-1']).click();
            await e2eUtil.expect(report).toHaveText('resolved: one');

            await page.getByTestId(AsyncPropElement.testIds['trigger-2']).click();
            await e2eUtil.expect(report).toHaveText('resolved: two');
        },
    },
);
