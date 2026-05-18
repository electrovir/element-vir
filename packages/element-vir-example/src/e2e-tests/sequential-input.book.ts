import {defineElement, html, listen, testId} from 'element-vir';
import {defineBookTest} from '../test-util.js';

const SequentialInputChild = defineElement<{label: string}>()({
    tagName: 'sequential-input-child',
    state() {
        return {
            renderCount: 0,
        };
    },
    testIds: [
        'output',
        'render-count',
    ],
    render({inputs, state, updateState, testIds}) {
        updateState({
            renderCount: state.renderCount + 1,
        });
        return html`
            <span ${testId(testIds.output)}>${inputs.label}</span>
            <span ${testId(testIds['render-count'])}>${state.renderCount}</span>
        `;
    },
});

const SequentialInputParent = defineElement()({
    tagName: 'sequential-input-parent',
    state() {
        return {
            label: 'first',
        };
    },
    testIds: ['swap'],
    render({state, updateState, testIds}) {
        return html`
            <button
                ${testId(testIds.swap)}
                ${listen('click', () => {
                    updateState({
                        label: state.label === 'first' ? 'second' : 'first',
                    });
                })}
            >
                swap
            </button>
            <${SequentialInputChild.assign({
                label: state.label,
            })}></${SequentialInputChild}>
        `;
    },
});

export const sequentialInputTest = await defineBookTest(
    'sequential input',
    {
        render() {
            return html`
                <${SequentialInputParent}></${SequentialInputParent}>
            `;
        },
    },
    {
        async 'child receives updated input values without remounting'({e2eUtil, page}) {
            const output = page.getByTestId(SequentialInputChild.testIds.output);
            const renderCount = page.getByTestId(SequentialInputChild.testIds['render-count']);

            await e2eUtil.expect(output).toHaveText('first');
            const before = Number(await renderCount.textContent());

            await page.getByTestId(SequentialInputParent.testIds.swap).click();
            await e2eUtil.expect(output).toHaveText('second');

            const after = Number(await renderCount.textContent());
            e2eUtil.expect(after).toBeGreaterThan(before);
        },
    },
);
