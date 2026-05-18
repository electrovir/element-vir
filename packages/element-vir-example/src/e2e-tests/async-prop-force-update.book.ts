import {asyncProp, defineElement, html, listen, renderAsync, testId} from 'element-vir';
import {defineBookTest} from '../test-util.js';

let callCount = 0;

const ForceUpdateElement = defineElement()({
    tagName: 'async-prop-force-update-element',
    state() {
        return {
            data: asyncProp<number, {value: number}>({
                updateCallback({value}) {
                    callCount += 1;
                    return Promise.resolve(value + callCount * 1000);
                },
            }),
        };
    },
    testIds: [
        'report',
        'update',
        'force',
    ],
    render({state, testIds}) {
        return html`
            <button
                ${testId(testIds.update)}
                ${listen('click', () => {
                    state.data.update({
                        value: 1,
                    });
                })}
            >
                update(1)
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

export const asyncPropForceUpdateTest = await defineBookTest(
    'async prop force update',
    {
        render() {
            return html`
                <${ForceUpdateElement}></${ForceUpdateElement}>
            `;
        },
    },
    {
        async 'update with identical params is a no-op'({e2eUtil, page}) {
            const report = page.getByTestId(ForceUpdateElement.testIds.report);

            await page.getByTestId(ForceUpdateElement.testIds.update).click();
            const first = await report.textContent();

            await page.getByTestId(ForceUpdateElement.testIds.update).click();
            await e2eUtil.expect(report).toHaveText(String(first));
        },
        async 'forceUpdate re-runs the callback even with same params'({e2eUtil, page}) {
            const report = page.getByTestId(ForceUpdateElement.testIds.report);

            await page.getByTestId(ForceUpdateElement.testIds.update).click();
            const before = await report.textContent();

            await page.getByTestId(ForceUpdateElement.testIds.force).click();
            await e2eUtil.expect(report).not.toHaveText(String(before));
        },
    },
);
