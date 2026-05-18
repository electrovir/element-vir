import {defineElement, html, listenToActivate, testId} from 'element-vir';
import {defineBookTest} from '../test-util.js';

const ListenToActivateElement = defineElement()({
    tagName: 'listen-to-activate-element',
    state() {
        return {
            count: 0,
        };
    },
    testIds: [
        'target',
        'count',
    ],
    render({state, updateState, testIds}) {
        return html`
            <button
                ${testId(testIds.target)}
                ${listenToActivate(() => {
                    updateState({
                        count: state.count + 1,
                    });
                })}
            >
                activate me
            </button>
            <span ${testId(testIds.count)}>${state.count}</span>
        `;
    },
});

export const listenToActivateTest = await defineBookTest(
    'listen to activate',
    {
        render() {
            return html`
                <${ListenToActivateElement}></${ListenToActivateElement}>
            `;
        },
    },
    {
        async 'Enter key activates'({e2eUtil, page}) {
            const target = page.getByTestId(ListenToActivateElement.testIds.target);
            const count = page.getByTestId(ListenToActivateElement.testIds.count);

            await target.focus();
            await target.press('Enter');

            await e2eUtil.expect(count).toHaveText('1');
        },
        async 'Space key activates'({e2eUtil, page}) {
            const target = page.getByTestId(ListenToActivateElement.testIds.target);
            const count = page.getByTestId(ListenToActivateElement.testIds.count);

            await target.focus();
            await target.press('Space');

            await e2eUtil.expect(count).toHaveText('1');
        },
        async 'other keys do not activate'({e2eUtil, page}) {
            const target = page.getByTestId(ListenToActivateElement.testIds.target);
            const count = page.getByTestId(ListenToActivateElement.testIds.count);

            await target.focus();
            await target.press('a');
            await target.press('Tab');

            await e2eUtil.expect(count).toHaveText('0');
        },
    },
);
