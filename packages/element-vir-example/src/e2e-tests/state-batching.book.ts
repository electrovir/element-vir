import {defineElement, html, listen, testId} from 'element-vir';
import {defineBookTest} from '../test-util.js';

const StateBatchingElement = defineElement()({
    tagName: 'state-batching-element',
    state() {
        return {
            a: 0,
            b: 0,
        };
    },
    testIds: [
        'a',
        'b',
        'button',
    ],
    render({state, updateState, testIds}) {
        return html`
            <button
                ${testId(testIds.button)}
                ${listen('click', () => {
                    updateState({
                        a: state.a + 1,
                    });
                    updateState({
                        b: state.b + 1,
                    });
                })}
            >
                bump both
            </button>
            <span ${testId(testIds.a)}>${state.a}</span>
            <span ${testId(testIds.b)}>${state.b}</span>
        `;
    },
});

export const stateBatchingTest = await defineBookTest(
    'state batching',
    {
        render() {
            return html`
                <${StateBatchingElement}></${StateBatchingElement}>
            `;
        },
    },
    {
        async 'multiple synchronous updateState calls both land'({e2eUtil, page}) {
            await page.getByTestId(StateBatchingElement.testIds.button).click();
            await page.getByTestId(StateBatchingElement.testIds.button).click();
            await page.getByTestId(StateBatchingElement.testIds.button).click();
            await e2eUtil.expect(page.getByTestId(StateBatchingElement.testIds.a)).toHaveText('3');
            await e2eUtil.expect(page.getByTestId(StateBatchingElement.testIds.b)).toHaveText('3');
        },
    },
);
