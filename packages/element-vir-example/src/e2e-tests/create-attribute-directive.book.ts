import {createAttributeDirective, defineElement, html, testId} from 'element-vir';
import {defineBookTest} from '../test-util.js';

const {
    attributeDirective: dataKind,
    attributeName,
    attributeSelector,
} = createAttributeDirective('data-custom-kind');

const CreateAttributeDirectiveElement = defineElement()({
    tagName: 'create-attribute-directive-element',
    testIds: ['target'],
    render({testIds}) {
        return html`
            <span ${testId(testIds.target)} ${dataKind('demo')}>via directive</span>
        `;
    },
});

export const createAttributeDirectiveTest = await defineBookTest(
    'create attribute directive',
    {
        render() {
            return html`
                <${CreateAttributeDirectiveElement}></${CreateAttributeDirectiveElement}>
            `;
        },
    },
    {
        async 'directive sets the configured attribute name and value'({e2eUtil, page}) {
            const target = page.getByTestId(CreateAttributeDirectiveElement.testIds.target);
            await e2eUtil.expect(target).toHaveAttribute(attributeName, 'demo');
            await e2eUtil.expect(target).toHaveAttribute('data-custom-kind', 'demo');
        },
        'attributeSelector builds a matching css selector'({e2eUtil}) {
            e2eUtil.expect(attributeSelector('demo')).toBe('[data-custom-kind="demo"]');
        },
    },
);
