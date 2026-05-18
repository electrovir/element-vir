import {defineElement, html, listen, renderIf, testId} from 'element-vir';
import {defineBookTest} from '../test-util.js';

const DetachReattachChild = defineElement()({
    tagName: 'detach-reattach-child',
    state() {
        return {
            count: 0,
        };
    },
    testIds: [
        'count',
        'inc',
    ],
    render({state, updateState, testIds}) {
        return html`
            <span ${testId(testIds.count)}>${state.count}</span>
            <button
                ${testId(testIds.inc)}
                ${listen('click', () => {
                    updateState({
                        count: state.count + 1,
                    });
                })}
            >
                inc
            </button>
        `;
    },
});

const DetachReattachParent = defineElement()({
    tagName: 'detach-reattach-parent',
    state() {
        return {
            mounted: true,
        };
    },
    testIds: ['toggle'],
    render({state, updateState, testIds}) {
        return html`
            <button
                ${testId(testIds.toggle)}
                ${listen('click', () => {
                    updateState({
                        mounted: !state.mounted,
                    });
                })}
            >
                toggle mount
            </button>
            ${renderIf(
                state.mounted,
                html`
                    <${DetachReattachChild}></${DetachReattachChild}>
                `,
            )}
        `;
    },
});

export const detachReattachTest = await defineBookTest(
    'detach reattach',
    {
        render() {
            return html`
                <${DetachReattachParent}></${DetachReattachParent}>
            `;
        },
    },
    {
        async 'detach + reattach creates a fresh state instance'({e2eUtil, page}) {
            const childCount = page.getByTestId(DetachReattachChild.testIds.count);
            await e2eUtil.expect(childCount).toHaveText('0');

            await page.getByTestId(DetachReattachChild.testIds.inc).click();
            await page.getByTestId(DetachReattachChild.testIds.inc).click();
            await e2eUtil.expect(childCount).toHaveText('2');

            await page.getByTestId(DetachReattachParent.testIds.toggle).click();
            await e2eUtil.expect(childCount).toHaveCount(0);

            await page.getByTestId(DetachReattachParent.testIds.toggle).click();
            await e2eUtil
                .expect(page.getByTestId(DetachReattachChild.testIds.count))
                .toHaveText('0');
        },
    },
);
