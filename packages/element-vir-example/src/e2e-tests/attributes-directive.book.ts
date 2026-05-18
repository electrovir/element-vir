import {attributes, defineElement, html, listen, nothing, testId} from 'element-vir';
import {defineBookTest} from '../test-util.js';

const AttributesDirectiveElement = defineElement()({
    tagName: 'attributes-directive-element',
    state() {
        return {
            isDisabled: false,
        };
    },
    testIds: [
        'target',
        'toggle-disabled',
        'always-off',
    ],
    render({state, updateState, testIds}) {
        return html`
            <button
                ${testId(testIds['toggle-disabled'])}
                ${listen('click', () => {
                    updateState({
                        isDisabled: !state.isDisabled,
                    });
                })}
            >
                toggle disabled
            </button>
            <button
                ${testId(testIds.target)}
                ${attributes({
                    'data-fixed': 'fixed-value',
                    disabled: state.isDisabled,
                })}
            >
                target
            </button>
            <button
                ${testId(testIds['always-off'])}
                ${attributes({
                    'aria-pressed': nothing,
                    'data-empty-string-attr': '',
                })}
            >
                always off
            </button>
        `;
    },
});

export const attributesDirectiveTest = await defineBookTest(
    'attributes directive',
    {
        render() {
            return html`
                <${AttributesDirectiveElement}></${AttributesDirectiveElement}>
            `;
        },
    },
    {
        async 'fixed attribute is applied'({e2eUtil, page}) {
            const target = page.getByTestId(AttributesDirectiveElement.testIds.target);
            await e2eUtil.expect(target).toHaveAttribute('data-fixed', 'fixed-value');
        },
        async 'boolean true attribute applies, false removes it'({e2eUtil, page}) {
            const target = page.getByTestId(AttributesDirectiveElement.testIds.target);
            await e2eUtil.expect(target).not.toHaveAttribute('disabled');

            await page.getByTestId(AttributesDirectiveElement.testIds['toggle-disabled']).click();
            await e2eUtil.expect(target).toHaveAttribute('disabled', '');

            await page.getByTestId(AttributesDirectiveElement.testIds['toggle-disabled']).click();
            await e2eUtil.expect(target).not.toHaveAttribute('disabled');
        },
        async 'nothing sentinel results in attribute not being set'({e2eUtil, page}) {
            const target = page.getByTestId(AttributesDirectiveElement.testIds['always-off']);
            await e2eUtil.expect(target).not.toHaveAttribute('aria-pressed');
        },
        async 'empty string applies attribute with empty value'({e2eUtil, page}) {
            const target = page.getByTestId(AttributesDirectiveElement.testIds['always-off']);
            await e2eUtil.expect(target).toHaveAttribute('data-empty-string-attr', '');
        },
    },
);
