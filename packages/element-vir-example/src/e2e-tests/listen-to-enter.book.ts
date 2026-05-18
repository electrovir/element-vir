import {defineElement, html, listenToEnter, testId} from 'element-vir';
import {defineBookTest} from '../test-util.js';

const ListenToEnterElement = defineElement()({
    tagName: 'listen-to-enter-element',
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
                ${listenToEnter(() => {
                    updateState({
                        count: state.count + 1,
                    });
                })}
            >
                enter only
            </button>
            <span ${testId(testIds.count)}>${state.count}</span>
        `;
    },
});

export const listenToEnterTest = await defineBookTest(
    'listen to enter',
    {
        render() {
            return html`
                <${ListenToEnterElement}></${ListenToEnterElement}>
            `;
        },
    },
    {
        async 'Enter activates'({e2eUtil, page}) {
            const target = page.getByTestId(ListenToEnterElement.testIds.target);
            await target.focus();
            await target.press('Enter');
            await e2eUtil
                .expect(page.getByTestId(ListenToEnterElement.testIds.count))
                .toHaveText('1');
        },
        async 'Space does not activate'({e2eUtil, page}) {
            const target = page.getByTestId(ListenToEnterElement.testIds.target);
            await target.focus();
            await target.press('Space');
            await e2eUtil
                .expect(page.getByTestId(ListenToEnterElement.testIds.count))
                .toHaveText('0');
        },
    },
);
