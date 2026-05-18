import {defineElement, html, testId, type HTMLTemplateResult} from 'element-vir';
import {defineBookTest} from '../test-util.js';

const NestedTemplatesElement = defineElement()({
    tagName: 'nested-templates-element',
    testIds: [
        'inner',
        'fn-result',
        'item-0',
        'item-1',
        'item-2',
    ],
    render({testIds}) {
        function renderItem(label: string, index: number): HTMLTemplateResult {
            const itemKey = `item-${index}` as 'item-0' | 'item-1' | 'item-2';
            return html`
                <li ${testId(testIds[itemKey])}>${label}</li>
            `;
        }

        const inner = html`
            <span ${testId(testIds.inner)}>inner content</span>
        `;
        const items = [
            'a',
            'b',
            'c',
        ];

        return html`
            <div>${inner}</div>
            <ul>
                ${items.map((label, index) => renderItem(label, index))}
            </ul>
            <span ${testId(testIds['fn-result'])}>${items.join(',')}</span>
        `;
    },
});

export const nestedTemplatesTest = await defineBookTest(
    'nested templates',
    {
        render() {
            return html`
                <${NestedTemplatesElement}></${NestedTemplatesElement}>
            `;
        },
    },
    {
        async 'nested HTMLTemplateResult is rendered in child position'({e2eUtil, page}) {
            await e2eUtil
                .expect(page.getByTestId(NestedTemplatesElement.testIds.inner))
                .toHaveText('inner content');
        },
        async 'array of templates renders each item'({e2eUtil, page}) {
            await e2eUtil
                .expect(page.getByTestId(NestedTemplatesElement.testIds['item-0']))
                .toHaveText('a');
            await e2eUtil
                .expect(page.getByTestId(NestedTemplatesElement.testIds['item-1']))
                .toHaveText('b');
            await e2eUtil
                .expect(page.getByTestId(NestedTemplatesElement.testIds['item-2']))
                .toHaveText('c');
            await e2eUtil
                .expect(page.getByTestId(NestedTemplatesElement.testIds['fn-result']))
                .toHaveText('a,b,c');
        },
    },
);
