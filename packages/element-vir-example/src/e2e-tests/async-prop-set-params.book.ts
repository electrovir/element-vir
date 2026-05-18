import {asyncProp, defineElement, html, listen, renderAsync, testId} from 'element-vir';
import {defineBookTest} from '../test-util.js';

let callCount = 0;

const SetParamsElement = defineElement()({
    tagName: 'async-prop-set-params-element',
    state() {
        return {
            data: asyncProp<string, {value: string}>({
                defaultValue: 'initial value',
                defaultParams: {
                    value: 'initial',
                },
                updateCallback({value}) {
                    callCount += 1;
                    return Promise.resolve(`${value} (call ${callCount})`);
                },
            }),
        };
    },
    testIds: [
        'report',
        'set-params',
        'force',
    ],
    render({state, testIds}) {
        return html`
            <button
                ${testId(testIds['set-params'])}
                ${listen('click', () => {
                    state.data.setParams({
                        value: 'updated',
                    });
                })}
            >
                set params
            </button>
            <button
                ${testId(testIds.force)}
                ${listen('click', () => {
                    state.data.forceUpdate();
                })}
            >
                force update
            </button>
            <span ${testId(testIds.report)}>${renderAsync(state.data, 'loading')}</span>
        `;
    },
});

export const asyncPropSetParamsTest = await defineBookTest(
    'async prop set params',
    {
        render() {
            return html`
                <${SetParamsElement}></${SetParamsElement}>
            `;
        },
    },
    {
        async 'setParams updates params without triggering the callback'({e2eUtil, page}) {
            const report = page.getByTestId(SetParamsElement.testIds.report);

            /** DefaultValue shows up; callback has not fired. */
            await e2eUtil.expect(report).toHaveText('initial value');

            await page.getByTestId(SetParamsElement.testIds['set-params']).click();
            /** SetParams should NOT have run the callback, so report is unchanged. */
            await e2eUtil.expect(report).toHaveText('initial value');

            await page.getByTestId(SetParamsElement.testIds.force).click();
            /** ForceUpdate runs the callback with the most recently set params. */
            await e2eUtil.expect(report).toContainText('updated');
        },
    },
);
