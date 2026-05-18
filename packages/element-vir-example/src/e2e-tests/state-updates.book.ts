import {defineElement, html, listen, testId} from 'element-vir';
import {defineBookTest} from '../test-util.js';

const StateUpdatesElement = defineElement()({
    tagName: 'state-updates-element',
    state() {
        return {
            count: 0,
        };
    },
    testIds: [
        'increment',
        'count',
    ],
    render({state, updateState, testIds}) {
        return html`
            <button
                ${testId(testIds.increment)}
                ${listen('click', () => {
                    updateState({
                        count: state.count + 1,
                    });
                })}
            >
                increment
            </button>
            <span ${testId(testIds.count)}>${state.count}</span>
        `;
    },
});

export const stateUpdatesTest = await defineBookTest(
    'state updates',
    {
        render() {
            return html`
                <${StateUpdatesElement}></${StateUpdatesElement}>
            `;
        },
    },
    {
        async 'state updates trigger re-render'({e2eUtil, page}) {
            const countLocator = page.getByTestId(StateUpdatesElement.testIds.count);

            await e2eUtil.expect(countLocator).toHaveText('0');

            await page.getByTestId(StateUpdatesElement.testIds.increment).click();
            await e2eUtil.expect(countLocator).toHaveText('1');

            await page.getByTestId(StateUpdatesElement.testIds.increment).click();
            await page.getByTestId(StateUpdatesElement.testIds.increment).click();
            await e2eUtil.expect(countLocator).toHaveText('3');
        },
    },
);
