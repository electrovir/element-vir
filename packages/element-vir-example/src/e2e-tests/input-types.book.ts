import {defineElement, html, listen, testId} from 'element-vir';
import {defineBookTest} from '../test-util.js';

const InputTypesChild = defineElement<{
    primitive: number;
    record: {key: string};
    list: ReadonlyArray<number>;
    callback: () => string;
}>()({
    tagName: 'input-types-child',
    state() {
        return {
            callbackResult: '',
        };
    },
    testIds: [
        'primitive',
        'object',
        'array',
        'callback-result',
        'callback-button',
    ],
    render({inputs, state, updateState, testIds}) {
        return html`
            <span ${testId(testIds.primitive)}>${inputs.primitive}</span>
            <span ${testId(testIds.object)}>${inputs.record.key}</span>
            <span ${testId(testIds.array)}>${inputs.list.join(',')}</span>
            <button
                ${testId(testIds['callback-button'])}
                ${listen('click', () => {
                    updateState({
                        callbackResult: inputs.callback(),
                    });
                })}
            >
                fire callback
            </button>
            <span ${testId(testIds['callback-result'])}>${state.callbackResult}</span>
        `;
    },
});

export const inputTypesTest = await defineBookTest(
    'input types',
    {
        render() {
            return html`
                <${InputTypesChild.assign({
                    primitive: 42,
                    record: {
                        key: 'value',
                    },
                    list: [
                        1,
                        2,
                        3,
                    ],
                    callback() {
                        return 'callback fired';
                    },
                })}></${InputTypesChild}>
            `;
        },
    },
    {
        async 'primitive input renders'({e2eUtil, page}) {
            await e2eUtil
                .expect(page.getByTestId(InputTypesChild.testIds.primitive))
                .toHaveText('42');
        },
        async 'object input renders'({e2eUtil, page}) {
            await e2eUtil
                .expect(page.getByTestId(InputTypesChild.testIds.object))
                .toHaveText('value');
        },
        async 'array input renders'({e2eUtil, page}) {
            await e2eUtil
                .expect(page.getByTestId(InputTypesChild.testIds.array))
                .toHaveText('1,2,3');
        },
        async 'callback input can be invoked from child'({e2eUtil, page}) {
            await page.getByTestId(InputTypesChild.testIds['callback-button']).click();
            await e2eUtil
                .expect(page.getByTestId(InputTypesChild.testIds['callback-result']))
                .toHaveText('callback fired');
        },
    },
);
