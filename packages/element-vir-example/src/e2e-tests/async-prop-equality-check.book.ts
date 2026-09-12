import {asyncProp, defineElement, html, listen, renderAsync, testId} from 'element-vir';
import {defineBookTest} from '../test-util.js';

let callCount = 0;
let nonceCounter = 0;

const EqualityCheckElement = defineElement()({
    tagName: 'async-prop-equality-check-element',
    state() {
        return {
            data: asyncProp<string, {key: string; nonce: number}>({
                equalityCheck(a, b) {
                    if (
                        a &&
                        typeof a === 'object' &&
                        'key' in a &&
                        b &&
                        typeof b === 'object' &&
                        'key' in b
                    ) {
                        return a.key === b.key;
                    }
                    return false;
                },
                updateCallback({key}) {
                    callCount += 1;
                    return Promise.resolve(`${key}#${callCount}`);
                },
            }),
        };
    },
    testIds: [
        'report',
        'same',
        'different',
    ],
    render({state, testIds}) {
        return html`
            <button
                ${testId(testIds.same)}
                ${listen('click', () => {
                    state.data.update({
                        key: 'same-key',
                        nonce: ++nonceCounter,
                    });
                })}
            >
                update same key
            </button>
            <button
                ${testId(testIds.different)}
                ${listen('click', () => {
                    state.data.update({
                        key: 'other-key',
                        nonce: ++nonceCounter,
                    });
                })}
            >
                update different key
            </button>
            <span ${testId(testIds.report)}>${renderAsync(state.data, 'loading')}</span>
        `;
    },
});

export const asyncPropEqualityCheckTest = await defineBookTest(
    'async prop equality check',
    {
        render() {
            return html`
                <${EqualityCheckElement}></${EqualityCheckElement}>
            `;
        },
    },
    {
        async 'custom equalityCheck treats matching keys as equal'({e2eUtil, page}) {
            const report = page.getByTestId(EqualityCheckElement.testIds.report);

            await page.getByTestId(EqualityCheckElement.testIds.same).click();
            await e2eUtil.expect(report).toContainText('same-key');
            const first = await report.textContent();

            /** Same key + different nonce → equalityCheck returns true → no update. */
            await page.getByTestId(EqualityCheckElement.testIds.same).click();
            await e2eUtil.expect(report).toHaveText((first ?? '').trim());

            /** Different key → equalityCheck returns false → update fires. */
            await page.getByTestId(EqualityCheckElement.testIds.different).click();
            await e2eUtil.expect(report).toContainText('other-key');
        },
    },
);
