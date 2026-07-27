import {assert} from '@augment-vir/assert';
import {createArray, getOrSet} from '@augment-vir/common';
import {describe, it, testWeb} from '@augment-vir/test';
import {defineElement} from '../declarative-element/define-element.js';
import {
    type MinimalDefinitionWithInputs,
    type MinimalElementDefinition,
} from './minimal-element-definition.js';
import {getAlreadyMappedTemplate, setMappedTemplate} from './nested-mapped-templates.js';
import {type TemplateTransform} from './template-transform-type.js';
import {getTransformedTemplate, transformTemplate} from './transform-template.js';
import {type HtmlInterpolation} from './vir-html/html-interpolation.js';
import {tagNameKeys} from './vir-html/tag-name-keys.js';
import {html} from './vir-html/vir-html.js';

const NestedTemplateA = defineElement()({
    tagName: 'nested-template-a',
    render() {
        return html`
            a
        `;
    },
});

const NestedTemplateB = defineElement()({
    tagName: 'nested-template-b',
    render() {
        return html`
            b
        `;
    },
});

const NestedTemplateWithInputs = defineElement<{label: string}>()({
    tagName: 'nested-template-with-inputs',
    render() {
        return '';
    },
});

function captureTemplate(strings: TemplateStringsArray, ...values: unknown[]) {
    return {
        strings,
        values,
    };
}

function createTransform(): TemplateTransform {
    const captured = captureTemplate`transform value`;
    return transformTemplate({
        inputTemplateStrings: captured.strings,
        inputValues: [],
        transformValue: () => undefined,
    });
}

describe('nested-mapped-templates', () => {
    it('returns the same strings array across identical template literal sites', () => {
        function build(value: number) {
            return html`
                value: ${value}
            `;
        }
        assert.strictEquals(build(1).strings, build(2).strings);
    });

    it('differentiates cached strings by interpolated tag-name element', () => {
        function build(value: number) {
            return html`
                <${NestedTemplateA}></${NestedTemplateA}>
                count: ${value}
            `;
        }
        function buildOther(value: number) {
            return html`
                <${NestedTemplateB}></${NestedTemplateB}>
                count: ${value}
            `;
        }
        const aStrings = build(1).strings;
        const bStrings = buildOther(1).strings;
        assert.notStrictEquals(aStrings, bStrings);
    });

    it('caches separately per element at a single template literal site', () => {
        function build(definition: HtmlInterpolation) {
            return html`
                <div>${definition}</div>
            `;
        }

        assert.strictEquals(build(NestedTemplateA).strings, build(NestedTemplateA).strings);
        assert.notStrictEquals(build(NestedTemplateA).strings, build(NestedTemplateB).strings);
    });

    it('caches separately based on element key order', () => {
        function build({
            first,
            second,
        }: Readonly<{
            first: HtmlInterpolation;
            second: HtmlInterpolation;
        }>) {
            return html`
                <div>${first}${second}</div>
            `;
        }

        assert.notStrictEquals(
            build({
                first: NestedTemplateA,
                second: NestedTemplateB,
            }).strings,
            build({
                first: NestedTemplateB,
                second: NestedTemplateA,
            }).strings,
        );
    });

    it('shares one cache entry for all values without a tag name', () => {
        function build(value: HtmlInterpolation) {
            return html`
                <div>${value}</div>
            `;
        }

        const numberStrings = build(1).strings;
        assert.strictEquals(numberStrings, build('a string').strings);
        assert.strictEquals(numberStrings, build(null).strings);
        assert.strictEquals(numberStrings, build(undefined).strings);
    });

    it('re-transforms when an element key appears after a call without one', () => {
        function build(value: HtmlInterpolation) {
            return html`
                <span>${value}</span>
            `;
        }

        /**
         * Order matters here: the first call stores a template with no nested maps, so the second
         * call must not find a cached template even though the template strings key matches.
         */
        const withoutElementKey = build('a string');
        const withElementKey = build(NestedTemplateA);

        assert.notStrictEquals(withoutElementKey.strings, withElementKey.strings);
        assert.strictEquals(build('another string').strings, withoutElementKey.strings);
        assert.strictEquals(build(NestedTemplateA).strings, withElementKey.strings);
    });

    it('reuses cached strings for interpolated DOM elements', () => {
        function build(value: HtmlInterpolation) {
            return html`
                <p data-dom-element>${value}</p>
            `;
        }

        const firstStrings = build(document.createElement('span')).strings;
        assert.strictEquals(firstStrings, build(document.createElement('span')).strings);
        assert.strictEquals(firstStrings, build(document.createElement('div')).strings);
        /** A DOM element and a plain value at the same site must share one cache entry. */
        assert.strictEquals(firstStrings, build('a string').strings);
    });

    it('shares one cache entry per tag name for plain objects with a tag name', () => {
        function build(value: HtmlInterpolation) {
            return html`
                <p data-plain-object>${value}</p>
            `;
        }

        const firstStrings = build({
            tagName: 'plain-object-tag-name',
        }).strings;
        assert.strictEquals(
            firstStrings,
            build({
                tagName: 'plain-object-tag-name',
            }).strings,
        );
        assert.notStrictEquals(
            firstStrings,
            build({
                tagName: 'other-plain-object-tag-name',
            }).strings,
        );
    });

    it('stores and retrieves a template with no element keys', () => {
        const captured = captureTemplate`no element keys`;
        const transform = createTransform();

        assert.isUndefined(getAlreadyMappedTemplate(captured.strings, []));
        assert.deepEquals(setMappedTemplate(captured.strings, [], transform), {
            result: true,
            reason: 'set value at end of keys array',
        });
        assert.strictEquals(getAlreadyMappedTemplate(captured.strings, []), transform);
    });

    it('ignores values that have no tag name when building keys', () => {
        const captured = captureTemplate`ignored values`;
        const transform = createTransform();

        setMappedTemplate(
            captured.strings,
            [
                1,
                'a string',
                null,
                undefined,
                {
                    tagName: '',
                },
                {
                    tagName: 42,
                },
            ],
            transform,
        );

        assert.strictEquals(getAlreadyMappedTemplate(captured.strings, []), transform);
    });

    it('does not find a template stored without element keys when given element keys', () => {
        const captured = captureTemplate`missing nested maps`;
        setMappedTemplate(captured.strings, [], createTransform());

        assert.isUndefined(
            getAlreadyMappedTemplate(captured.strings, [
                NestedTemplateA,
            ]),
        );
    });

    it('does not find a template stored with element keys when given no element keys', () => {
        const captured = captureTemplate`nested only`;
        const transform = createTransform();
        setMappedTemplate(
            captured.strings,
            [
                NestedTemplateA,
            ],
            transform,
        );

        assert.isUndefined(getAlreadyMappedTemplate(captured.strings, []));
        assert.isUndefined(
            getAlreadyMappedTemplate(captured.strings, [
                NestedTemplateB,
            ]),
        );
        assert.strictEquals(
            getAlreadyMappedTemplate(captured.strings, [
                NestedTemplateA,
            ]),
            transform,
        );
    });

    it('keeps nested templates when a template without element keys is stored later', () => {
        const captured = captureTemplate`nested and top level`;
        const nestedTransform = createTransform();
        const topTransform = createTransform();

        setMappedTemplate(
            captured.strings,
            [
                NestedTemplateA,
            ],
            nestedTransform,
        );
        setMappedTemplate(captured.strings, [], topTransform);

        assert.strictEquals(getAlreadyMappedTemplate(captured.strings, []), topTransform);
        assert.strictEquals(
            getAlreadyMappedTemplate(captured.strings, [
                NestedTemplateA,
            ]),
            nestedTransform,
        );
    });

    it('keys element keys in order', () => {
        const captured = captureTemplate`ordered keys`;
        const transform = createTransform();
        setMappedTemplate(
            captured.strings,
            [
                NestedTemplateA,
                NestedTemplateB,
            ],
            transform,
        );

        assert.isUndefined(
            getAlreadyMappedTemplate(captured.strings, [
                NestedTemplateB,
                NestedTemplateA,
            ]),
        );
        assert.strictEquals(
            getAlreadyMappedTemplate(captured.strings, [
                NestedTemplateA,
                NestedTemplateB,
            ]),
            transform,
        );
    });

    it('uses the definition itself as the key for assigned inputs', () => {
        const captured = captureTemplate`assigned inputs key`;
        const transform = createTransform();
        setMappedTemplate(
            captured.strings,
            [
                NestedTemplateWithInputs.assign({
                    label: 'first',
                }),
            ],
            transform,
        );

        assert.strictEquals(
            getAlreadyMappedTemplate(captured.strings, [
                NestedTemplateWithInputs,
            ]),
            transform,
        );
        assert.strictEquals(
            getAlreadyMappedTemplate(captured.strings, [
                NestedTemplateWithInputs.assign({
                    label: 'second',
                }),
            ]),
            transform,
        );
    });

    it('prefers the tag interpolation key over the value itself', () => {
        const captured = captureTemplate`tag interpolation key`;
        const transform = createTransform();
        /** Production interpolation keys always come from the shared tag name registry. */
        const tagInterpolationKey = getOrSet(tagNameKeys, 'shared-interpolation-key', () => {
            return {
                tagName: 'shared-interpolation-key',
            };
        });

        setMappedTemplate(
            captured.strings,
            [
                {
                    tagName: 'shared-interpolation-key',
                    tagInterpolationKey,
                },
            ],
            transform,
        );

        assert.strictEquals(
            getAlreadyMappedTemplate(captured.strings, [
                {
                    tagName: 'shared-interpolation-key',
                    tagInterpolationKey,
                },
            ]),
            transform,
        );
        assert.strictEquals(
            getAlreadyMappedTemplate(captured.strings, [
                tagInterpolationKey,
            ]),
            transform,
        );
    });

    it('fails to store a template without a template strings key', () => {
        assert.deepEquals(
            setMappedTemplate(
                // @ts-expect-error: a missing template strings key
                undefined,
                [],
                createTransform(),
            ),
            {
                result: false,
                reason: 'key at index 0 not found',
            },
        );
        assert.isUndefined(
            getAlreadyMappedTemplate(
                // @ts-expect-error: a missing template strings key
                undefined,
                [],
            ),
        );
    });
});

function createTagNameFunction(tagName: string) {
    return Object.assign(
        () => {
            return undefined;
        },
        {
            tagName,
        },
    );
}

describe('nested-mapped-templates element keys', () => {
    it('does not key the cache on interpolated DOM nodes', () => {
        const captured = captureTemplate`dom node keys`;
        const transform = createTransform();

        setMappedTemplate(
            captured.strings,
            [
                document.createElement('span'),
                document.createTextNode('text node'),
                document.createDocumentFragment(),
            ],
            transform,
        );

        assert.strictEquals(getAlreadyMappedTemplate(captured.strings, []), transform);
        assert.strictEquals(
            getAlreadyMappedTemplate(captured.strings, [
                document.createElement('div'),
                document.createTextNode('other text node'),
            ]),
            transform,
        );
    });

    it('reuses one cache entry across many fresh DOM node instances', async () => {
        function build(value: HtmlInterpolation) {
            return html`
                <p data-many-dom-nodes>${value}</p>
            `;
        }

        const allStrings = createArray(20, (index) => {
            return build(document.createElement(index % 2 ? 'span' : 'div')).strings;
        });

        assert.isLengthAtLeast(allStrings, 1);
        allStrings.forEach((strings) => {
            assert.strictEquals(strings, allStrings[0]);
        });

        const rendered = await testWeb.render<HTMLParagraphElement>(
            build(document.createElement('b')),
        );
        assert.instanceOf(rendered.querySelector('b'), HTMLElement);
    });

    it('computes the transform once for fresh objects that share a tag name', () => {
        const captured = captureTemplate`shared tag name transform`;
        const fallbackTagNames: string[] = [];
        function build(tagName: string) {
            return getTransformedTemplate(
                captured.strings,
                [
                    {
                        tagName,
                    },
                ],
                () => {
                    fallbackTagNames.push(tagName);
                    return createTransform();
                },
            );
        }

        const shared = build('shared-transform-tag');
        createArray(5, () => {
            return build('shared-transform-tag');
        });
        const other = build('different-transform-tag');

        assert.deepEquals(fallbackTagNames, [
            'shared-transform-tag',
            'different-transform-tag',
        ]);
        assert.strictEquals(build('shared-transform-tag').strings, shared.strings);
        assert.notStrictEquals(other.strings, shared.strings);
    });

    it('uses a function value as its own cache key', () => {
        const captured = captureTemplate`function tag name key`;
        const transform = createTransform();
        const first = createTagNameFunction('function-tag-name');
        const second = createTagNameFunction('function-tag-name');

        setMappedTemplate(
            captured.strings,
            [
                first,
            ],
            transform,
        );

        assert.strictEquals(
            getAlreadyMappedTemplate(captured.strings, [
                first,
            ]),
            transform,
        );
        assert.isUndefined(
            getAlreadyMappedTemplate(captured.strings, [
                second,
            ]),
        );
        assert.isUndefined(
            getAlreadyMappedTemplate(captured.strings, [
                {
                    tagName: 'function-tag-name',
                },
            ]),
        );
    });

    it('prefers the tag interpolation key over a function and over the shared tag name key', () => {
        const captured = captureTemplate`interpolation key priority`;
        const transform = createTransform();
        const interpolationKey = getOrSet(tagNameKeys, 'priority-interpolation-key', () => {
            return {
                tagName: 'priority-interpolation-key',
            };
        });
        const taggedFunction = Object.assign(createTagNameFunction('priority-function-tag'), {
            tagInterpolationKey: interpolationKey,
        });

        setMappedTemplate(
            captured.strings,
            [
                taggedFunction,
            ],
            transform,
        );

        assert.strictEquals(
            getAlreadyMappedTemplate(captured.strings, [
                interpolationKey,
            ]),
            transform,
        );
        assert.isUndefined(
            getAlreadyMappedTemplate(captured.strings, [
                createTagNameFunction('priority-function-tag'),
            ]),
        );
        assert.strictEquals(
            getAlreadyMappedTemplate(captured.strings, [
                {
                    tagName: 'a-totally-different-priority-tag',
                    tagInterpolationKey: interpolationKey,
                },
            ]),
            transform,
        );
    });

    it('keys a minimal definition with inputs on its definition identity', () => {
        const captured = captureTemplate`minimal definition with inputs key`;
        const transform = createTransform();
        const definition: MinimalElementDefinition = {
            tagName: 'minimal-nested-definition',
        };
        function withInputs(label: string): MinimalDefinitionWithInputs {
            return {
                _elementVirIsMinimalDefinitionWithInputs: true,
                definition,
                inputs: {
                    label,
                },
            };
        }

        setMappedTemplate(
            captured.strings,
            [
                withInputs('first'),
            ],
            transform,
        );

        assert.strictEquals(
            getAlreadyMappedTemplate(captured.strings, [
                withInputs('second'),
            ]),
            transform,
        );
        /** The nested definition is keyed by identity, not by tag name. */
        assert.isUndefined(
            getAlreadyMappedTemplate(captured.strings, [
                {
                    _elementVirIsMinimalDefinitionWithInputs: true,
                    definition: {
                        tagName: 'minimal-nested-definition',
                    },
                    inputs: {},
                },
            ]),
        );
        /**
         * The same plain object interpolated bare falls into the shared tag name key branch
         * instead, so it does not match the identity key stored above.
         */
        assert.isUndefined(
            getAlreadyMappedTemplate(captured.strings, [
                definition,
            ]),
        );

        const bareTransform = createTransform();
        setMappedTemplate(
            captured.strings,
            [
                definition,
            ],
            bareTransform,
        );

        assert.strictEquals(
            getAlreadyMappedTemplate(captured.strings, [
                {
                    tagName: definition.tagName,
                },
            ]),
            bareTransform,
        );
        assert.strictEquals(
            getAlreadyMappedTemplate(captured.strings, [
                withInputs('third'),
            ]),
            transform,
        );
    });

    it('surfaces the missing template strings key reason through getTransformedTemplate', () => {
        assert.throws(
            () => {
                getTransformedTemplate(
                    // @ts-expect-error: a missing template strings key
                    undefined,
                    [
                        NestedTemplateA,
                    ],
                    createTransform,
                );
            },
            {
                matchMessage: 'Failed to set template transform: key at index 0 not found',
            },
        );
        assert.deepEquals(
            setMappedTemplate(
                // @ts-expect-error: a missing template strings key
                undefined,
                [
                    NestedTemplateA,
                ],
                createTransform(),
            ),
            {
                result: false,
                reason: 'key at index 0 not found',
            },
        );
    });
});
