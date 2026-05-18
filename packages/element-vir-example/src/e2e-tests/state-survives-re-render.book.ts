import {defineElement, html, listen, testId} from 'element-vir';
import {defineBookTest} from '../test-util.js';

const StateSurvivesChild = defineElement<{label: string}>()({
    tagName: 'state-survives-child',
    state() {
        return {
            count: 0,
        };
    },
    testIds: [
        'count',
        'increment',
    ],
    render({state, updateState, inputs, testIds}) {
        return html`
            <span>${inputs.label}</span>
            <span ${testId(testIds.count)}>${state.count}</span>
            <button
                ${testId(testIds.increment)}
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

const StateSurvivesParent = defineElement()({
    tagName: 'state-survives-parent',
    state() {
        return {
            parentRenderCount: 0,
        };
    },
    testIds: [
        'bump',
        'render-count',
    ],
    render({state, updateState, testIds}) {
        const next = state.parentRenderCount + 1;
        return html`
            <button
                ${testId(testIds.bump)}
                ${listen('click', () => {
                    updateState({
                        parentRenderCount: next,
                    });
                })}
            >
                bump parent
            </button>
            <span ${testId(testIds['render-count'])}>${state.parentRenderCount}</span>
            <${StateSurvivesChild.assign({
                label: 'child',
            })}></${StateSurvivesChild}>
        `;
    },
});

export const stateSurvivesReRenderTest = await defineBookTest(
    'state survives re render',
    {
        render() {
            return html`
                <${StateSurvivesParent}></${StateSurvivesParent}>
            `;
        },
    },
    {
        async 'child state persists across parent re-renders'({e2eUtil, page}) {
            const childCount = page.getByTestId(StateSurvivesChild.testIds.count);
            await e2eUtil.expect(childCount).toHaveText('0');

            await page.getByTestId(StateSurvivesChild.testIds.increment).click();
            await page.getByTestId(StateSurvivesChild.testIds.increment).click();
            await e2eUtil.expect(childCount).toHaveText('2');

            await page.getByTestId(StateSurvivesParent.testIds.bump).click();
            await page.getByTestId(StateSurvivesParent.testIds.bump).click();

            await e2eUtil.expect(childCount).toHaveText('2');
        },
    },
);
