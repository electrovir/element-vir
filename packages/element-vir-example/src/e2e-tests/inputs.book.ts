import {defineElement, html, listen, testId} from 'element-vir';
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

const RawAttributeInputElement = defineElement<{message: string | undefined}>()({
    tagName: 'raw-attribute-input-element',
    testIds: [
        'output',
        'update-attribute',
    ],
    render({host, inputs, testIds}) {
        return html`
            <span ${testId(testIds.output)}>${inputs.message}</span>
            <button
                ${testId(testIds['update-attribute'])}
                ${listen('click', () => {
                    host.setAttribute('message', 'updated attribute');
                })}
            >
                update raw attribute
            </button>
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
                <raw-attribute-input-element
                    message="initial attribute"
                ></raw-attribute-input-element>
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
        async 'raw host attributes propagate to inputs'({e2eUtil, page}) {
            const output = page.getByTestId(RawAttributeInputElement.testIds.output);
            await e2eUtil.expect(output).toHaveText('initial attribute');

            await page.getByTestId(RawAttributeInputElement.testIds['update-attribute']).click();
            await e2eUtil.expect(output).toHaveText('updated attribute');
        },
    },
);
