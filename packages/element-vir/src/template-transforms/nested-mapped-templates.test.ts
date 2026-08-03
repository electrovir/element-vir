import {assert, assertWrap} from '@augment-vir/assert';
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

const NestedTemplateC = defineElement()({
    tagName: 'nested-template-c',
    render() {
        return html`
            c
        `;
    },
});

const NestedTemplateWithInputs = defineElement<{label: string}>()({
    tagName: 'nested-template-with-inputs',
    render({inputs}) {
        return html`
            ${inputs.label}
        `;
    },
});

const NestedTemplateOtherInputs = defineElement<{label: string}>()({
    tagName: 'nested-template-other-inputs',
    render({inputs}) {
        return html`
            ${inputs.label}
        `;
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

/**
 * A tag name is written directly into the cached template strings, so a cache collision between two
 * elements at one template literal site would silently render the wrong element. Every test here
 * reuses one template literal site across different interpolated elements.
 *
 * The helpers take `MinimalElementDefinition` rather than the concrete definition types because
 * `html` requires both tag slots of a single site to agree on one definition type, which a union of
 * real definitions cannot satisfy.
 */
describe('nested-mapped-templates tag name collisions at one site', () => {
    function buildTagSite(definition: MinimalElementDefinition) {
        // prettier-ignore
        return html`<${definition}></${definition}>`;
    }

    it('writes each element own tag name into the cached strings', () => {
        const aStrings = buildTagSite(NestedTemplateA).strings;
        const bStrings = buildTagSite(NestedTemplateB).strings;

        assert.deepEquals(
            [...aStrings],
            [
                '<nested-template-a></nested-template-a>',
            ],
        );
        assert.deepEquals(
            [...bStrings],
            [
                '<nested-template-b></nested-template-b>',
            ],
        );
        assert.notStrictEquals(aStrings, bStrings);
    });

    it('returns each element cached strings again when it comes back around', () => {
        const aStrings = buildTagSite(NestedTemplateA).strings;
        const bStrings = buildTagSite(NestedTemplateB).strings;
        const cStrings = buildTagSite(NestedTemplateC).strings;

        /** Identity, not content: losing it makes lit rebuild all of the element's children. */
        assert.strictEquals(buildTagSite(NestedTemplateA).strings, aStrings);
        assert.strictEquals(buildTagSite(NestedTemplateB).strings, bStrings);
        assert.strictEquals(buildTagSite(NestedTemplateC).strings, cStrings);
        assert.notStrictEquals(aStrings, bStrings);
        assert.notStrictEquals(bStrings, cStrings);
        assert.notStrictEquals(aStrings, cStrings);
    });

    it('stays correct while alternating between elements', () => {
        const definitions: ReadonlyArray<MinimalElementDefinition> = [
            NestedTemplateA,
            NestedTemplateB,
            NestedTemplateC,
        ];

        assert.deepEquals(
            createArray(12, (index) => {
                return [...buildTagSite(assertWrap.isDefined(definitions[index % 3])).strings].join(
                    '',
                );
            }),
            createArray(12, (index) => {
                const tagName = assertWrap.isDefined(definitions[index % 3]).tagName;

                return `<${tagName}></${tagName}>`;
            }),
        );
    });

    it('renders the element that was actually interpolated', async () => {
        buildTagSite(NestedTemplateA);
        assert.instanceOf(await testWeb.render(buildTagSite(NestedTemplateB)), NestedTemplateB);
        assert.instanceOf(await testWeb.render(buildTagSite(NestedTemplateA)), NestedTemplateA);
        assert.instanceOf(await testWeb.render(buildTagSite(NestedTemplateC)), NestedTemplateC);
    });

    it('keeps mismatched opening and closing tags separate', () => {
        function buildMismatchedSite({
            opening,
            closing,
        }: Readonly<{
            opening: MinimalElementDefinition;
            closing: MinimalElementDefinition;
        }>) {
            // prettier-ignore
            return html`<${opening}></${closing}>`;
        }

        assert.deepEquals(
            [
                ...buildMismatchedSite({
                    opening: NestedTemplateA,
                    closing: NestedTemplateB,
                }).strings,
            ],
            [
                '<nested-template-a></nested-template-b>',
            ],
        );
        assert.deepEquals(
            [
                ...buildMismatchedSite({
                    opening: NestedTemplateB,
                    closing: NestedTemplateA,
                }).strings,
            ],
            [
                '<nested-template-b></nested-template-a>',
            ],
        );
    });

    it('keeps a tag name string and a different element definition separate', () => {
        function buildEitherSite(definition: MinimalElementDefinition | string) {
            // prettier-ignore
            return html`<${definition}></${definition}>`;
        }

        const stringStrings = buildEitherSite('nested-template-c').strings;
        const definitionStrings = buildEitherSite(NestedTemplateA).strings;

        assert.deepEquals(
            [...stringStrings],
            [
                '<nested-template-c></nested-template-c>',
            ],
        );
        assert.deepEquals(
            [...definitionStrings],
            [
                '<nested-template-a></nested-template-a>',
            ],
        );
        assert.strictEquals(buildEitherSite('nested-template-c').strings, stringStrings);
        assert.strictEquals(buildEitherSite(NestedTemplateA).strings, definitionStrings);
    });

    it('keeps a definition separate from its own tag name as a string', () => {
        function buildEitherSite(definition: MinimalElementDefinition | string) {
            // prettier-ignore
            return html`<div><${definition}></${definition}></div>`;
        }

        /**
         * These two produce identical strings content but reach the cache through different keys:
         * the definition itself versus the shared tag name key.
         */
        const definitionStrings = buildEitherSite(NestedTemplateB).strings;
        const stringStrings = buildEitherSite('nested-template-b').strings;

        assert.deepEquals([...definitionStrings], [...stringStrings]);
        assert.strictEquals(buildEitherSite(NestedTemplateB).strings, definitionStrings);
        assert.strictEquals(buildEitherSite('nested-template-b').strings, stringStrings);
    });

    it('keeps assigned inputs on different elements separate', () => {
        function buildAssignedSite({
            opening,
            closing,
        }: Readonly<{
            opening: MinimalDefinitionWithInputs;
            closing: MinimalElementDefinition;
        }>) {
            // prettier-ignore
            return html`<${opening}></${closing}>`;
        }

        assert.deepEquals(
            [
                ...buildAssignedSite({
                    opening: NestedTemplateWithInputs.assign({
                        label: 'first',
                    }),
                    closing: NestedTemplateWithInputs,
                }).strings,
            ],
            [
                '<nested-template-with-inputs ',
                '></nested-template-with-inputs>',
            ],
        );
        assert.deepEquals(
            [
                ...buildAssignedSite({
                    opening: NestedTemplateOtherInputs.assign({
                        label: 'second',
                    }),
                    closing: NestedTemplateOtherInputs,
                }).strings,
            ],
            [
                '<nested-template-other-inputs ',
                '></nested-template-other-inputs>',
            ],
        );
    });

    it('renders the element and inputs that were actually assigned', async () => {
        function buildAssignedSite({
            opening,
            closing,
        }: Readonly<{
            opening: MinimalDefinitionWithInputs;
            closing: MinimalElementDefinition;
        }>) {
            // prettier-ignore
            return html`<div><${opening}></${closing}></div>`;
        }

        buildAssignedSite({
            opening: NestedTemplateWithInputs.assign({
                label: 'first',
            }),
            closing: NestedTemplateWithInputs,
        });
        const rendered = await testWeb.render<HTMLDivElement>(
            buildAssignedSite({
                opening: NestedTemplateOtherInputs.assign({
                    label: 'second',
                }),
                closing: NestedTemplateOtherInputs,
            }),
        );
        const child = rendered.querySelector('nested-template-other-inputs');

        assert.instanceOf(child, NestedTemplateOtherInputs);
        assert.isNull(rendered.querySelector('nested-template-with-inputs'));
        await child.updateComplete;
        assert.strictEquals(child.shadowRoot.textContent.trim(), 'second');
    });

    it('keeps a nested inner element from colliding at one outer site', () => {
        function buildNestedSite(inner: MinimalElementDefinition) {
            // prettier-ignore
            return html`<${NestedTemplateA}><${inner}></${inner}></${NestedTemplateA}>`;
        }

        assert.deepEquals(
            [...buildNestedSite(NestedTemplateB).strings],
            [
                '<nested-template-a><nested-template-b></nested-template-b></nested-template-a>',
            ],
        );
        assert.deepEquals(
            [...buildNestedSite(NestedTemplateC).strings],
            [
                '<nested-template-a><nested-template-c></nested-template-c></nested-template-a>',
            ],
        );
    });

    it('keeps a tag position element separate from a text position one', () => {
        function buildMixedSite({
            tagDefinition,
            textDefinition,
        }: Readonly<{
            tagDefinition: MinimalElementDefinition;
            textDefinition: MinimalElementDefinition;
        }>) {
            // prettier-ignore
            return html`<${tagDefinition}>${textDefinition}</${tagDefinition}>`;
        }

        const firstStrings = buildMixedSite({
            tagDefinition: NestedTemplateA,
            textDefinition: NestedTemplateB,
        }).strings;
        const secondStrings = buildMixedSite({
            tagDefinition: NestedTemplateA,
            textDefinition: NestedTemplateC,
        }).strings;

        /** Only the tag position element is written into the strings. */
        assert.deepEquals([...firstStrings], [...secondStrings]);
        /** The text position element still takes part in the cache key. */
        assert.notStrictEquals(firstStrings, secondStrings);
        assert.deepEquals(
            [...firstStrings],
            [
                '<nested-template-a>',
                '</nested-template-a>',
            ],
        );
    });

    it('does not collide across two sites that share one element', () => {
        function buildFirstSite(definition: MinimalElementDefinition) {
            // prettier-ignore
            return html`<${definition}></${definition}>`;
        }
        function buildSecondSite(definition: MinimalElementDefinition) {
            // prettier-ignore
            return html`<div><${definition}></${definition}></div>`;
        }

        assert.deepEquals(
            [...buildFirstSite(NestedTemplateA).strings],
            [
                '<nested-template-a></nested-template-a>',
            ],
        );
        assert.deepEquals(
            [...buildSecondSite(NestedTemplateA).strings],
            [
                '<div><nested-template-a></nested-template-a></div>',
            ],
        );
    });
});
