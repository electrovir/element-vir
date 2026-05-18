import {defineElement, html, testId} from 'element-vir';
import {defineBookTest} from '../test-util.js';

const InputsChildElement = defineElement<{label: string; count: number}>()({
    tagName: 'inputs-child-element',
    testIds: ['output'],
    render({inputs, testIds}) {
        return html`
            <span ${testId(testIds.output)}>${inputs.label}: ${inputs.count}</span>
        `;
    },
});

export const inputsTest = await defineBookTest(
    'inputs',
    {
        state() {
            return {
                count: 0,
            };
        },
        render({state, updateState}) {
            return html`
                <button
                    @click=${() => {
                        updateState({
                            count: state.count + 1,
                        });
                    }}
                >
                    bump
                </button>
                <${InputsChildElement.assign({
                    label: 'count',
                    count: state.count,
                })}></${InputsChildElement}>
            `;
        },
    },
    {
        async 'inputs propagate from parent to child'({e2eUtil, page}) {
            const output = page.getByTestId(InputsChildElement.testIds.output);
            await e2eUtil.expect(output).toHaveText('count: 0');

            await page
                .getByRole('button', {
                    name: 'bump',
                })
                .click();
            await e2eUtil.expect(output).toHaveText('count: 1');
        },
    },
);
