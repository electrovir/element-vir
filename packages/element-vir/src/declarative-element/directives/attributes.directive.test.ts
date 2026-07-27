import {assert, waitUntil} from '@augment-vir/assert';
import {arrayToObject} from '@augment-vir/common';
import {describe, it, testWeb} from '@augment-vir/test';
import {attributes, defineElement, html, nothing} from '../../index.js';
import {type AttributeValue, type AttributeValues} from './attributes.directive.js';

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
    it('includes the offending attribute name in the uppercase failure', async () => {
        await assert.throws(
            () =>
                testWeb.render(html`
                    <div
                        ${attributes({
                            // @ts-expect-error: attribute keys cannot have uppercase
                            someAttribute: 'value',
                        })}
                    ></div>
                `),
            {
                matchMessage: 'Cannot assign attribute name with uppercase letters: someAttribute',
                matchConstructor: Error,
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

        await waitUntil.deepEquals({}, () => readAllAttributes(innerDiv));
    });

    it('does nothing when the attributes argument is undefined', async () => {
        const TestElement = defineElement()({
            tagName: 'attributes-directive-undefined-test',
            render() {
                return html`
                    <div ${attributes(undefined)}>just a div</div>
                `;
            },
        });

        const fixture = await testWeb.render(html`
            <${TestElement}></${TestElement}>
        `);
        assert.instanceOf(fixture, TestElement);
        const innerDiv = fixture.shadowRoot.querySelector('div');
        assert.instanceOf(innerDiv, HTMLDivElement);
        assert.deepEquals(readAllAttributes(innerDiv), {});
    });

    it('converts each attribute value type', async () => {
        const fixture = await testWeb.render(html`
            <div
                ${attributes({
                    'string-value': 'hi',
                    'empty-string': '',
                    'true-value': true,
                    'false-value': false,
                    'zero-value': 0,
                    'number-value': 42,
                    'negative-value': -1,
                    'not-a-number': Number.NaN,
                    'bigint-value': 7n,
                    'null-value': null,
                    'undefined-value': undefined,
                    'nothing-value': nothing,
                })}
            ></div>
        `);
        assert.instanceOf(fixture, HTMLDivElement);

        assert.deepEquals(readAllAttributes(fixture), {
            'string-value': 'hi',
            'empty-string': '',
            'true-value': '',
            'zero-value': '0',
            'number-value': '42',
            'negative-value': '-1',
            'not-a-number': 'NaN',
            'bigint-value': '7',
        });
    });

    it('removes attributes that disappear from the attributes object entirely', async () => {
        const TestElement = defineElement<{includeSecond: boolean}>()({
            tagName: 'attributes-directive-disappearing-key',
            render({inputs}) {
                return html`
                    <div
                        ${attributes(
                            inputs.includeSecond
                                ? {
                                      'first-attribute': 'first',
                                      'second-attribute': 'second',
                                  }
                                : {
                                      'first-attribute': 'first',
                                  },
                        )}
                    ></div>
                `;
            },
        });

        const fixture = await testWeb.render(html`
            <${TestElement.assign({
                includeSecond: true,
            })}></${TestElement}>
        `);
        assert.instanceOf(fixture, TestElement);
        const innerDiv = fixture.shadowRoot.querySelector('div');
        assert.instanceOf(innerDiv, HTMLDivElement);
        assert.deepEquals(readAllAttributes(innerDiv), {
            'first-attribute': 'first',
            'second-attribute': 'second',
        });

        fixture.assignInputs({
            includeSecond: false,
        });

        await waitUntil.deepEquals(
            {
                'first-attribute': 'first',
            },
            () => readAllAttributes(innerDiv),
        );
    });

    it('leaves previously applied attributes alone when later given undefined', async () => {
        const TestElement = defineElement<{applyAttributes: boolean}>()({
            tagName: 'attributes-directive-later-undefined',
            render({inputs}) {
                return html`
                    <div
                        ${attributes(
                            inputs.applyAttributes
                                ? {
                                      'my-attribute': 'value',
                                  }
                                : undefined,
                        )}
                    ></div>
                `;
            },
        });

        const fixture = await testWeb.render(html`
            <${TestElement.assign({
                applyAttributes: true,
            })}></${TestElement}>
        `);
        assert.instanceOf(fixture, TestElement);
        const innerDiv = fixture.shadowRoot.querySelector('div');
        assert.instanceOf(innerDiv, HTMLDivElement);
        assert.deepEquals(readAllAttributes(innerDiv), {
            'my-attribute': 'value',
        });

        fixture.assignInputs({
            applyAttributes: false,
        });
        await fixture.updateComplete;

        assert.deepEquals(readAllAttributes(innerDiv), {
            'my-attribute': 'value',
        });
    });

    it('tracks applied attribute names per directive instance', async () => {
        const TestElement = defineElement<{keepSecond: boolean}>()({
            tagName: 'attributes-directive-separate-instances',
            render({inputs}) {
                return html`
                    <div
                        ${attributes({
                            'first-attribute': 'first',
                        })}
                        ${attributes({
                            'second-attribute': inputs.keepSecond ? 'second' : undefined,
                        })}
                    ></div>
                `;
            },
        });

        const fixture = await testWeb.render(html`
            <${TestElement.assign({
                keepSecond: true,
            })}></${TestElement}>
        `);
        assert.instanceOf(fixture, TestElement);
        const innerDiv = fixture.shadowRoot.querySelector('div');
        assert.instanceOf(innerDiv, HTMLDivElement);

        fixture.assignInputs({
            keepSecond: false,
        });

        await waitUntil.deepEquals(
            {
                'first-attribute': 'first',
            },
            () => readAllAttributes(innerDiv),
        );
    });

    it('rejects being attached anywhere but directly to an element', async () => {
        await assert.throws(
            async () => {
                await testWeb.render(html`
                    <div>
                        ${attributes({
                            'my-attribute': 'value',
                        })}
                    </div>
                `);
            },
            {
                matchMessage: 'attributes directive can only be attached directly to an element',
            },
        );
    });

    it('has proper types', () => {
        assert
            .tsType<AttributeValue>()
            .equals<string | number | boolean | bigint | undefined | null | typeof nothing>();
        assert.tsType<AttributeValue>().notMatches<symbol>();
        assert.tsType<AttributeValues['my-attribute']>().equals<AttributeValue>();

        attributes({
            // @ts-expect-error: symbols are not valid attribute values
            'my-attribute': Symbol('nope'),
        });
    });
});
