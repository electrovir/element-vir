import {assert, waitUntil} from '@augment-vir/assert';
import {arrayToObject} from '@augment-vir/common';
import {describe, it, testWeb} from '@augment-vir/test';
import {attributes, defineElement, html} from '../../index.js';

function readAllAttributes(element: Element): Record<string, string> {
    const attributes = element.getAttributeNames();
    return arrayToObject(attributes, (attributeName) => {
        return {
            key: attributeName,
            value: element.getAttribute(attributeName),
        };
    }) as Record<string, string>;
}

describe('attributes directive', () => {
    it('applies attributes', async () => {
        const fixture = await testWeb.render(html`
            <div
                ${attributes({
                    exists: 'hi',
                    empty: '',
                    empty2: true,
                    removed: undefined,
                })}
            ></div>
        `);

        assert.instanceOf(fixture, HTMLDivElement);

        assert.deepEquals(readAllAttributes(fixture), {
            exists: 'hi',
            empty: '',
            empty2: '',
        });
    });
    it('fails on uppercase letters', async () => {
        await assert.throws(
            () =>
                testWeb.render(html`
                    <div
                        ${attributes({
                            // @ts-expect-error: attribute keys cannot have uppercase
                            Uppercase: '',
                        })}
                    ></div>
                `),
            {
                matchMessage: 'Cannot assign attribute name with uppercase letters',
            },
        );
    });
    it('removes an attribute', async () => {
        const TestElement = defineElement<{shouldRemoveAttribute?: boolean | undefined}>()({
            tagName: 'test-element-attributes-directive',
            render({inputs}) {
                return html`
                    <div
                        ${attributes({
                            'my-attribute': inputs.shouldRemoveAttribute ? undefined : 'value',
                        })}
                    ></div>
                `;
            },
        });

        const fixture = await testWeb.render(html`
            <${TestElement}></${TestElement}>
        `);
        assert.instanceOf(fixture, TestElement);
        const innerDiv = fixture.shadowRoot.querySelector('div');
        assert.instanceOf(innerDiv, HTMLDivElement);

        assert.deepEquals(readAllAttributes(innerDiv), {
            'my-attribute': 'value',
        });
        fixture.assignInputs({
            shouldRemoveAttribute: true,
        });

        await waitUntil.deepEquals(
            {
                'my-attribute': 'value',
            },
            () => readAllAttributes(innerDiv),
        );
    });
});
