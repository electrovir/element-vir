import {assert} from '@augment-vir/assert';
import {describe, it, testWeb} from '@augment-vir/test';
import {html as buildLitTemplate} from 'lit';
import {type HTMLTemplateResult} from '../lit-exports/all-lit-exports.js';
import {insertAndRemoveValues} from '../util/array.js';
import {type TemplateTransform} from './template-transform-type.js';
import {
    type ValueTransformCallback,
    getTransformedTemplate,
    transformTemplate,
} from './transform-template.js';

function captureTemplate(strings: TemplateStringsArray, ...values: unknown[]) {
    return {
        strings,
        values,
    };
}

function noTransform(): ReturnType<ValueTransformCallback> {
    return undefined;
}

type CapturedTemplate = Readonly<{
    strings: TemplateStringsArray;
    values: unknown[];
}>;

function applyTransform(captured: CapturedTemplate, transformValue: ValueTransformCallback) {
    const transformed = transformTemplate({
        inputTemplateStrings: captured.strings,
        inputValues: captured.values,
        transformValue,
    });
    const valueTransforms = transformed.valuesTransform(captured.values);

    return {
        templateStrings: transformed.templateStrings,
        strings: [...transformed.templateStrings],
        raw: [...transformed.templateStrings.raw],
        values: insertAndRemoveValues(
            captured.values,
            valueTransforms.valueInsertions,
            valueTransforms.valueIndexDeletions,
        ),
        valueTransforms,
    };
}

function replaceValues({
    targets,
    replacement,
    extraValues,
}: Readonly<{
    targets: unknown[];
    replacement: string;
    extraValues: unknown[];
}>): ValueTransformCallback {
    return (lastNewString, currentLitString, currentValue) => {
        return targets.includes(currentValue)
            ? {
                  replacement,
                  getExtraValues: extraValues.length ? () => extraValues : undefined,
              }
            : undefined;
    };
}

describe(transformTemplate.name, () => {
    it('passes strings and raws through untouched when nothing is transformed', () => {
        const captured = captureTemplate`a${1}b${2}c`;
        const transformed = transformTemplate({
            inputTemplateStrings: captured.strings,
            inputValues: captured.values,
            transformValue: noTransform,
        });

        assert.deepEquals(
            [...transformed.templateStrings],
            [
                'a',
                'b',
                'c',
            ],
        );
        assert.deepEquals(
            [...transformed.templateStrings.raw],
            [
                'a',
                'b',
                'c',
            ],
        );
        assert.notStrictEquals(transformed.templateStrings, captured.strings);
        assert.deepEquals(transformed.valuesTransform(captured.values), {
            valueIndexDeletions: [],
            valueInsertions: [],
        });
    });

    it('falls back to the cooked string when raw has no entry for that index', () => {
        const inputTemplateStrings = Object.assign(
            [
                'a',
                'b',
            ],
            {
                raw: [
                    'a',
                ],
            },
        ) satisfies TemplateStringsArray as TemplateStringsArray;

        const transformed = transformTemplate({
            inputTemplateStrings,
            inputValues: [
                1,
            ],
            transformValue: noTransform,
        });

        assert.deepEquals(
            [...transformed.templateStrings.raw],
            [
                'a',
                'b',
            ],
        );
    });

    it('skips the value transform for the first template string and accumulates the last string', () => {
        const captured = captureTemplate`a${1}b${2}c`;
        const transformCalls: unknown[][] = [];
        transformTemplate({
            inputTemplateStrings: captured.strings,
            inputValues: captured.values,
            transformValue(lastNewString, currentLitString, currentValue) {
                transformCalls.push([
                    lastNewString,
                    currentLitString,
                    currentValue,
                ]);
                return undefined;
            },
        });

        assert.deepEquals(transformCalls, [
            [
                'a',
                'b',
                1,
            ],
            [
                'b',
                'c',
                2,
            ],
        ]);
    });

    it('asserts every template string, including the first', () => {
        const captured = captureTemplate`a${1}b${2}c`;
        const assertedStrings: string[] = [];
        transformTemplate({
            inputTemplateStrings: captured.strings,
            inputValues: captured.values,
            transformValue: noTransform,
            assertValidString(templateStringPart) {
                assertedStrings.push(templateStringPart);
            },
        });

        assert.deepEquals(assertedStrings, [
            'a',
            'b',
            'c',
        ]);
    });

    it('propagates string assertion failures', () => {
        const captured = captureTemplate`a${1}b`;
        assert.throws(
            () => {
                transformTemplate({
                    inputTemplateStrings: captured.strings,
                    inputValues: captured.values,
                    transformValue: noTransform,
                    assertValidString(templateStringPart) {
                        if (templateStringPart === 'b') {
                            throw new Error('invalid string');
                        }
                    },
                });
            },
            {
                matchMessage: 'invalid string',
            },
        );
    });

    it('merges a replacement into the previous string and deletes the value', () => {
        const captured = captureTemplate`a${1}b${2}c`;
        const transformed = transformTemplate({
            inputTemplateStrings: captured.strings,
            inputValues: captured.values,
            transformValue(lastNewString, currentLitString, currentValue) {
                return currentValue === 1
                    ? {
                          replacement: 'X',
                          getExtraValues: undefined,
                      }
                    : undefined;
            },
        });

        assert.deepEquals(
            [...transformed.templateStrings],
            [
                'aXb',
                'c',
            ],
        );
        assert.deepEquals(
            [...transformed.templateStrings.raw],
            [
                'aXb',
                'c',
            ],
        );
        assert.deepEquals(transformed.valuesTransform(captured.values), {
            valueIndexDeletions: [
                0,
            ],
            valueInsertions: [],
        });
    });

    it('merges the current string when extra values are empty', () => {
        const captured = captureTemplate`a${1}b${2}c`;
        const transformed = transformTemplate({
            inputTemplateStrings: captured.strings,
            inputValues: captured.values,
            transformValue(lastNewString, currentLitString, currentValue) {
                return currentValue === 1
                    ? {
                          replacement: 'X',
                          getExtraValues() {
                              return [];
                          },
                      }
                    : undefined;
            },
        });

        assert.deepEquals(
            [...transformed.templateStrings],
            [
                'aXb',
                'c',
            ],
        );
        assert.deepEquals(transformed.valuesTransform(captured.values), {
            valueIndexDeletions: [
                0,
            ],
            valueInsertions: [],
        });
    });

    it('splits strings for each extra value', () => {
        const captured = captureTemplate`a${1}b${2}c`;
        const transformed = transformTemplate({
            inputTemplateStrings: captured.strings,
            inputValues: captured.values,
            transformValue(lastNewString, currentLitString, currentValue) {
                return currentValue === 1
                    ? {
                          replacement: 'R',
                          getExtraValues() {
                              return [
                                  'x',
                                  'y',
                              ];
                          },
                      }
                    : undefined;
            },
        });

        assert.deepEquals(
            [...transformed.templateStrings],
            [
                'aR ',
                ' ',
                'b',
                'c',
            ],
        );
        assert.deepEquals(
            [...transformed.templateStrings.raw],
            [
                'aR ',
                ' ',
                'b',
                'c',
            ],
        );
        assert.deepEquals(transformed.valuesTransform(captured.values), {
            valueIndexDeletions: [
                0,
            ],
            valueInsertions: [
                {
                    index: 0,
                    values: [
                        'x',
                        'y',
                    ],
                },
            ],
        });
    });

    it('keeps raw escape sequences while splitting strings for extra values', () => {
        const captured = captureTemplate`a\n${1}b`;
        const transformed = transformTemplate({
            inputTemplateStrings: captured.strings,
            inputValues: captured.values,
            transformValue() {
                return {
                    replacement: 'R',
                    getExtraValues() {
                        return ['x'];
                    },
                };
            },
        });

        assert.deepEquals(
            [...transformed.templateStrings],
            [
                'a\nR ',
                'b',
            ],
        );
        assert.deepEquals(
            [...transformed.templateStrings.raw],
            [
                String.raw`a\nR `,
                'b',
            ],
        );
    });

    it('recomputes extra values from the values given to valuesTransform', () => {
        const captured = captureTemplate`a${1}b`;
        const transformed = transformTemplate({
            inputTemplateStrings: captured.strings,
            inputValues: captured.values,
            transformValue() {
                return {
                    replacement: 'R',
                    getExtraValues(currentValue) {
                        return [
                            currentValue,
                            currentValue,
                        ];
                    },
                };
            },
        });

        assert.deepEquals(
            transformed.valuesTransform([
                5,
            ]).valueInsertions,
            [
                {
                    index: 0,
                    values: [
                        5,
                        5,
                    ],
                },
            ],
        );
    });
});

describe(getTransformedTemplate.name, () => {
    it('only builds the fallback transform once per template strings key', () => {
        const fallbackCallValues: number[] = [];
        function build(value: number) {
            const captured = captureTemplate`cached ${value} template`;
            return getTransformedTemplate(captured.strings, captured.values, () => {
                fallbackCallValues.push(value);
                return transformTemplate({
                    inputTemplateStrings: captured.strings,
                    inputValues: captured.values,
                    transformValue: noTransform,
                });
            });
        }

        const first = build(1);
        const second = build(2);

        assert.deepEquals(fallbackCallValues, [
            1,
        ]);
        assert.strictEquals(first.strings, second.strings);
        assert.deepEquals(second.values, [
            2,
        ]);
    });

    it('applies the cached transform to fresh values', () => {
        function build(value: number) {
            const captured = captureTemplate`applied ${value} template`;
            return getTransformedTemplate(captured.strings, captured.values, () => {
                return transformTemplate({
                    inputTemplateStrings: captured.strings,
                    inputValues: captured.values,
                    transformValue(lastNewString, currentLitString, currentValue) {
                        return {
                            replacement: String(currentValue),
                            getExtraValues(extraValue) {
                                return [
                                    extraValue,
                                ];
                            },
                        };
                    },
                });
            });
        }

        const first = build(1);
        const second = build(2);

        assert.deepEquals(
            [...first.strings],
            [
                'applied 1 ',
                ' template',
            ],
        );
        assert.deepEquals(first.values, [
            1,
        ]);
        /** The replacement string is cached from the first call but the values are not. */
        assert.deepEquals(
            [...second.strings],
            [
                'applied 1 ',
                ' template',
            ],
        );
        assert.deepEquals(second.values, [
            2,
        ]);
    });

    it('gives each template literal site its own cache entry', () => {
        const fallbackCalls: string[] = [];
        function buildFirstSite(value: number) {
            const captured = captureTemplate`cache site ${value} one`;
            return getTransformedTemplate(captured.strings, captured.values, () => {
                fallbackCalls.push('one');
                return transformTemplate({
                    inputTemplateStrings: captured.strings,
                    inputValues: captured.values,
                    transformValue: noTransform,
                });
            });
        }
        function buildSecondSite(value: number) {
            const captured = captureTemplate`cache site ${value} two`;
            return getTransformedTemplate(captured.strings, captured.values, () => {
                fallbackCalls.push('two');
                return transformTemplate({
                    inputTemplateStrings: captured.strings,
                    inputValues: captured.values,
                    transformValue: noTransform,
                });
            });
        }

        const firstSite = buildFirstSite(1);
        const secondSite = buildSecondSite(1);

        assert.notStrictEquals(firstSite.strings, secondSite.strings);
        assert.strictEquals(buildFirstSite(2).strings, firstSite.strings);
        assert.strictEquals(buildSecondSite(2).strings, secondSite.strings);
        assert.deepEquals(fallbackCalls, [
            'one',
            'two',
        ]);
    });

    /**
     * A no-op transform is the common case: most templates interpolate no element definitions at
     * all, so this path runs on nearly every render.
     */
    describe('with nothing to insert or remove', () => {
        function buildNoOp(value: number) {
            const captured = captureTemplate`no op ${value} template`;
            return {
                captured,
                transformed: getTransformedTemplate(captured.strings, captured.values, () => {
                    return transformTemplate({
                        inputTemplateStrings: captured.strings,
                        inputValues: captured.values,
                        transformValue: noTransform,
                    });
                }),
            };
        }

        it('returns the input values on every call', () => {
            assert.deepEquals(buildNoOp(1).transformed.values, [
                1,
            ]);
            assert.deepEquals(buildNoOp(2).transformed.values, [
                2,
            ]);
        });

        it('does not share a values array between calls', () => {
            assert.notStrictEquals(
                buildNoOp(1).transformed.values,
                buildNoOp(2).transformed.values,
            );
        });

        it('is unaffected by mutation of an earlier call returned values', () => {
            const first = buildNoOp(1);
            first.transformed.values.push(999);

            assert.deepEquals(buildNoOp(2).transformed.values, [
                2,
            ]);
        });

        it('returns values matching the ones it was given', () => {
            const first = buildNoOp(3);

            assert.deepEquals(first.transformed.values, first.captured.values);
        });

        it('handles a template with no interpolations at all', () => {
            function buildEmpty() {
                const captured = captureTemplate`no interpolations here`;
                return getTransformedTemplate(captured.strings, captured.values, () => {
                    return transformTemplate({
                        inputTemplateStrings: captured.strings,
                        inputValues: captured.values,
                        transformValue: noTransform,
                    });
                });
            }

            assert.isEmpty(buildEmpty().values);
            assert.isEmpty(buildEmpty().values);
        });
    });

    it('throws when the template strings key cannot be stored', () => {
        const captured = captureTemplate`unusable key`;
        function fallbackTransform(): TemplateTransform {
            return transformTemplate({
                inputTemplateStrings: captured.strings,
                inputValues: [],
                transformValue: noTransform,
            });
        }

        [
            undefined,
            null,
        ].forEach((badKey) => {
            assert.throws(
                () => {
                    getTransformedTemplate(
                        // @ts-expect-error: a missing template strings key
                        badKey,
                        [],
                        fallbackTransform,
                    );
                },
                {
                    matchMessage: 'Failed to set template transform: key at index 0 not found',
                },
            );
        });
    });
});

const outputShapes: ReadonlyArray<
    Readonly<{
        description: string;
        captured: CapturedTemplate;
        transformValue: ValueTransformCallback;
        expectedStrings: string[];
        expectedRaw?: string[] | undefined;
        expectedValues: unknown[];
    }>
> = [
    {
        description: 'no transform at all',
        captured: captureTemplate`a${1}b${2}c`,
        transformValue: noTransform,
        expectedStrings: [
            'a',
            'b',
            'c',
        ],
        expectedValues: [
            1,
            2,
        ],
    },
    {
        description: 'zero interpolations',
        captured: captureTemplate`just text`,
        transformValue: noTransform,
        expectedStrings: [
            'just text',
        ],
        expectedValues: [],
    },
    {
        description: 'zero interpolations with a transform available',
        captured: captureTemplate`just text`,
        transformValue: replaceValues({
            targets: [
                undefined,
            ],
            replacement: 'X',
            extraValues: [],
        }),
        expectedStrings: [
            'just text',
        ],
        expectedValues: [],
    },
    {
        description: 'first interpolation transformed with no extra values',
        captured: captureTemplate`a${1}b${2}c`,
        transformValue: replaceValues({
            targets: [
                1,
            ],
            replacement: 'X',
            extraValues: [],
        }),
        expectedStrings: [
            'aXb',
            'c',
        ],
        expectedValues: [
            2,
        ],
    },
    {
        description: 'first interpolation transformed with one extra value',
        captured: captureTemplate`a${1}b${2}c`,
        transformValue: replaceValues({
            targets: [
                1,
            ],
            replacement: 'X',
            extraValues: [
                'x',
            ],
        }),
        expectedStrings: [
            'aX ',
            'b',
            'c',
        ],
        expectedValues: [
            'x',
            2,
        ],
    },
    {
        description: 'first interpolation transformed with two extra values',
        captured: captureTemplate`a${1}b${2}c`,
        transformValue: replaceValues({
            targets: [
                1,
            ],
            replacement: 'X',
            extraValues: [
                'x',
                'y',
            ],
        }),
        expectedStrings: [
            'aX ',
            ' ',
            'b',
            'c',
        ],
        expectedValues: [
            'x',
            'y',
            2,
        ],
    },
    {
        description: 'first interpolation transformed with three extra values',
        captured: captureTemplate`a${1}b${2}c`,
        transformValue: replaceValues({
            targets: [
                1,
            ],
            replacement: 'X',
            extraValues: [
                'x',
                'y',
                'z',
            ],
        }),
        expectedStrings: [
            'aX ',
            ' ',
            ' ',
            'b',
            'c',
        ],
        expectedValues: [
            'x',
            'y',
            'z',
            2,
        ],
    },
    {
        description: 'middle interpolation transformed',
        captured: captureTemplate`a${1}b${2}c${3}d`,
        transformValue: replaceValues({
            targets: [
                2,
            ],
            replacement: 'M',
            extraValues: [],
        }),
        expectedStrings: [
            'a',
            'bMc',
            'd',
        ],
        expectedValues: [
            1,
            3,
        ],
    },
    {
        description: 'last template string transformed',
        captured: captureTemplate`a${1}b${2}c`,
        transformValue: replaceValues({
            targets: [
                2,
            ],
            replacement: 'Z',
            extraValues: [],
        }),
        expectedStrings: [
            'a',
            'bZc',
        ],
        expectedValues: [
            1,
        ],
    },
    {
        description: 'last template string transformed with two extra values',
        captured: captureTemplate`a${1}b${2}c`,
        transformValue: replaceValues({
            targets: [
                2,
            ],
            replacement: 'Z',
            extraValues: [
                'q',
                'r',
            ],
        }),
        expectedStrings: [
            'a',
            'bZ ',
            ' ',
            'c',
        ],
        expectedValues: [
            1,
            'q',
            'r',
        ],
    },
    {
        description: 'adjacent interpolations both transformed',
        captured: captureTemplate`a${1}b${2}c`,
        transformValue: replaceValues({
            targets: [
                1,
                2,
            ],
            replacement: 'C',
            extraValues: [],
        }),
        expectedStrings: [
            'aCbCc',
        ],
        expectedValues: [],
    },
    {
        description: 'adjacent interpolations both transformed with one extra value each',
        captured: captureTemplate`a${1}b${2}c`,
        transformValue: replaceValues({
            targets: [
                1,
                2,
            ],
            replacement: 'C',
            extraValues: [
                'e',
            ],
        }),
        expectedStrings: [
            'aC ',
            'bC ',
            'c',
        ],
        expectedValues: [
            'e',
            'e',
        ],
    },
    {
        description: 'non adjacent interpolations transformed',
        captured: captureTemplate`a${1}b${2}c${3}d`,
        transformValue: replaceValues({
            targets: [
                1,
                3,
            ],
            replacement: 'X',
            extraValues: [],
        }),
        expectedStrings: [
            'aXb',
            'cXd',
        ],
        expectedValues: [
            2,
        ],
    },
    {
        description: 'escape sequence immediately before a transformed interpolation',
        captured: captureTemplate`\n${1}b`,
        transformValue: replaceValues({
            targets: [
                1,
            ],
            replacement: 'X',
            extraValues: [],
        }),
        expectedStrings: [
            '\nXb',
        ],
        expectedRaw: [
            String.raw`\nXb`,
        ],
        expectedValues: [],
    },
    {
        description: 'escape sequence immediately after a transformed interpolation',
        captured: captureTemplate`a${1}\t`,
        transformValue: replaceValues({
            targets: [
                1,
            ],
            replacement: 'X',
            extraValues: [],
        }),
        expectedStrings: [
            'aX\t',
        ],
        expectedRaw: [
            String.raw`aX\t`,
        ],
        expectedValues: [],
    },
    {
        description: 'every escape form around a transformed interpolation',
        captured: captureTemplate`\n\t\\A${1}\${end}`,
        transformValue: replaceValues({
            targets: [
                1,
            ],
            replacement: 'X',
            extraValues: [],
        }),
        expectedStrings: [
            '\n\t\\AX${end}',
        ],
        expectedRaw: [
            String.raw`\n\t\\AX\${end}`,
        ],
        expectedValues: [],
    },
    {
        description: 'escape sequences split apart by extra values',
        captured: captureTemplate`\n${1}\t`,
        transformValue: replaceValues({
            targets: [
                1,
            ],
            replacement: 'X',
            extraValues: [
                'x',
                'y',
            ],
        }),
        expectedStrings: [
            '\nX ',
            ' ',
            '\t',
        ],
        expectedRaw: [
            String.raw`\nX` + ' ',
            ' ',
            String.raw`\t`,
        ],
        expectedValues: [
            'x',
            'y',
        ],
    },
];

describe('transformTemplate output shape', () => {
    outputShapes.forEach((shape) => {
        it(shape.description, () => {
            const result = applyTransform(shape.captured, shape.transformValue);

            assert.deepEquals(result.strings, shape.expectedStrings);
            assert.deepEquals(result.raw, shape.expectedRaw ?? shape.expectedStrings);
            assert.deepEquals(result.values, shape.expectedValues);
            /** Lit requires `strings` and `raw` to line up with each other and with the values. */
            assert.isLengthExactly([...result.raw], result.strings.length);
            assert.isLengthExactly([...result.strings], result.values.length + 1);
        });
    });
});

describe('transformTemplate lit compatibility', () => {
    async function renderTransformed(
        litTemplate: HTMLTemplateResult,
        transformValue: ValueTransformCallback,
    ) {
        const result = applyTransform(
            {
                strings: litTemplate.strings,
                values: litTemplate.values,
            },
            transformValue,
        );

        return await testWeb.render<HTMLDivElement>({
            ...litTemplate,
            strings: result.templateStrings,
            values: result.values,
        });
    }

    it('renders a transformed strings array with no extra values', async () => {
        const rendered = await renderTransformed(
            buildLitTemplate`<div class="lit-accepts-plain">${'alpha'}${'beta'}</div>`,
            replaceValues({
                targets: [
                    'alpha',
                ],
                replacement: 'inlined ',
                extraValues: [],
            }),
        );

        assert.instanceOf(rendered, HTMLDivElement);
        assert.strictEquals(rendered.textContent, 'inlined beta');
    });

    it('renders a transformed strings array split by extra values', async () => {
        const rendered = await renderTransformed(
            buildLitTemplate`<div class="lit-accepts-split">${'alpha'}|${'beta'}</div>`,
            replaceValues({
                targets: [
                    'alpha',
                ],
                replacement: 'R',
                extraValues: [
                    'one',
                    'two',
                ],
            }),
        );

        assert.strictEquals(rendered.textContent, 'R one two|beta');
    });
});

describe('transformTemplate value transforms', () => {
    it('reports deletion indexes for non adjacent transforms', () => {
        assert.deepEquals(
            applyTransform(
                captureTemplate`a${1}b${2}c${3}d`,
                replaceValues({
                    targets: [
                        1,
                        3,
                    ],
                    replacement: 'X',
                    extraValues: [],
                }),
            ).valueTransforms.valueIndexDeletions,
            [
                0,
                2,
            ],
        );
    });

    it('recomputes each transform extra values from the given values', () => {
        const captured = captureTemplate`a${1}b${2}c`;
        const transformed = transformTemplate({
            inputTemplateStrings: captured.strings,
            inputValues: captured.values,
            transformValue() {
                return {
                    replacement: 'R',
                    getExtraValues(currentValue) {
                        return [
                            currentValue,
                        ];
                    },
                };
            },
        });

        assert.deepEquals(
            transformed.valuesTransform([
                10,
                20,
            ]),
            {
                valueIndexDeletions: [
                    0,
                    1,
                ],
                valueInsertions: [
                    {
                        index: 0,
                        values: [
                            10,
                        ],
                    },
                    {
                        index: 1,
                        values: [
                            20,
                        ],
                    },
                ],
            },
        );
    });
});
