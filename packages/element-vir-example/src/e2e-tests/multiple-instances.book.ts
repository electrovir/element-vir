import {defineElement, html, listen, testId} from 'element-vir';
import {defineBookTest} from '../test-util.js';

const MultiInstanceElement = defineElement<{label: string}>()({
    tagName: 'multi-instance-element',
    state() {
        return {
            count: 0,
        };
    },
    render({state, updateState, inputs}) {
        return html`
            <button
                ${testId(`multi-instance-button-${inputs.label}`)}
                ${listen('click', () => {
                    updateState({
                        count: state.count + 1,
                    });
                })}
            >
                inc ${inputs.label}
            </button>
            <span ${testId(`multi-instance-count-${inputs.label}`)}>${state.count}</span>
        `;
    },
});

export const multipleInstancesTest = await defineBookTest(
    'multiple instances',
    {
        render() {
            return html`
                <${MultiInstanceElement.assign({
                    label: 'a',
                })}></${MultiInstanceElement}>
                <${MultiInstanceElement.assign({
                    label: 'b',
                })}></${MultiInstanceElement}>
            `;
        },
    },
    {
        async 'instances have isolated state'({e2eUtil, page}) {
            await page.getByTestId('multi-instance-button-a').click();
            await page.getByTestId('multi-instance-button-a').click();
            await page.getByTestId('multi-instance-button-b').click();

            await e2eUtil.expect(page.getByTestId('multi-instance-count-a')).toHaveText('2');
            await e2eUtil.expect(page.getByTestId('multi-instance-count-b')).toHaveText('1');
        },
    },
);
