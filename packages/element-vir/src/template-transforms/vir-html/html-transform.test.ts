import {assert} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import {html as buildLitTemplate} from 'lit';
import {defineElement} from '../../declarative-element/define-element.js';
import {type HTMLTemplateResult} from '../../lit-exports/all-lit-exports.js';
import {type HtmlInterpolation} from './html-interpolation.js';
import {mapHtmlValues, transformHtmlTemplate} from './html-transform.js';
import {tagNameKeys} from './tag-name-keys.js';
import {html} from './vir-html.js';

const HtmlTransformChild = defineElement()({
    tagName: 'html-transform-child',
    render() {
        return '';
    },
});

const HtmlTransformWithInputs = defineElement<{label: string}>()({
    tagName: 'html-transform-with-inputs',
    render() {
        return '';
    },
});

/**
 * `buildLitTemplate` is aliased away from `html` so that the formatter leaves these templates
 * untouched: exact whitespace inside them is what's under test.
 */
function transform(litTemplate: HTMLTemplateResult) {
    return transformHtmlTemplate({
        ...litTemplate,
        values: mapHtmlValues(litTemplate.strings, litTemplate.values as HtmlInterpolation[]),
    });
}

function captureTemplate(strings: TemplateStringsArray, ...values: unknown[]) {
    return {
        strings,
        values,
    };
}

function captureConsoleErrors(callback: () => void) {
    const originalConsoleError = console.error;
    const logs: unknown[][] = [];
    console.error = (...args: unknown[]) => {
        logs.push(args);
    };
    try {
        callback();
    } finally {
        console.error = originalConsoleError;
    }
    return logs;
}

/** The transform logs the offending interpolation with `console.error` before it throws. */
function captureTagNameErrorMessage(callback: () => void): string {
    const errors: unknown[] = [];
    captureConsoleErrors(() => {
        try {
            callback();
        } catch (error) {
            errors.push(error);
        }
    });
    const error = errors[0];
    assert.isError(error);
    return error.message;
}

describe('html transform', () => {
    it('throws when a non-string non-definition is interpolated as a tag name', () => {
        assert.throws(
            () => {
                // @ts-expect-error: only definitions and strings name a tag
                const notATagName: string = 42;

                html`
                    <${notATagName}></${notATagName}>
                `;
            },
            {
                matchMessage: 'Got interpolated tag name but found no tag name',
            },
        );
    });

    it('writes both tags inline for a bare element definition', () => {
        const transformed = transform(
            buildLitTemplate`<div><${HtmlTransformChild}></${HtmlTransformChild}></div>`,
        );

        assert.deepEquals(
            [...transformed.templateStrings],
            [
                '<div><html-transform-child></html-transform-child></div>',
            ],
        );
        assert.deepEquals(
            [...transformed.templateStrings.raw],
            [
                '<div><html-transform-child></html-transform-child></div>',
            ],
        );
        assert.deepEquals(
            transformed.valuesTransform([
                HtmlTransformChild,
                HtmlTransformChild,
            ]),
            {
                valueIndexDeletions: [
                    0,
                    1,
                ],
                valueInsertions: [],
            },
        );
    });

    it('inserts an assign directive for assigned inputs on the opening tag only', () => {
        const assigned = HtmlTransformWithInputs.assign({
            label: 'hi',
        });
        const litTemplate = buildLitTemplate`<${assigned}></${HtmlTransformWithInputs}>`;
        const transformed = transform(litTemplate);

        assert.deepEquals(
            [...transformed.templateStrings],
            [
                '<html-transform-with-inputs ',
                '></html-transform-with-inputs>',
            ],
        );
        assert.deepEquals(
            [...transformed.templateStrings.raw],
            [
                '<html-transform-with-inputs ',
                '></html-transform-with-inputs>',
            ],
        );

        const valueTransforms = transformed.valuesTransform(litTemplate.values);
        assert.deepEquals(
            valueTransforms.valueIndexDeletions,
            [
                0,
                1,
            ],
        );
        const insertion = valueTransforms.valueInsertions[0];
        assert.isDefined(insertion);
        assert.isLengthExactly(valueTransforms.valueInsertions, 1);
        assert.strictEquals(insertion.index, 0);
        assert.isLengthExactly(insertion.values, 1);
        assert.notStrictEquals(insertion.values[0], assigned);
    });

    it('inserts nothing for assigned inputs on a closing tag', () => {
        const litTemplate = buildLitTemplate`<${HtmlTransformWithInputs}></${HtmlTransformWithInputs.assign(
            {
                label: 'hi',
            },
        )}>`;
        const transformed = transform(litTemplate);

        assert.deepEquals(
            [...transformed.templateStrings],
            [
                '<html-transform-with-inputs></html-transform-with-inputs>',
            ],
        );
        assert.deepEquals(transformed.valuesTransform(litTemplate.values).valueInsertions, []);
    });

    it('keeps attributes that follow an interpolated tag name', () => {
        const assigned = HtmlTransformWithInputs.assign({
            label: 'hi',
        });
        const transformed = transform(
            buildLitTemplate`<${assigned} data-extra="yes"></${HtmlTransformWithInputs}>`,
        );

        assert.deepEquals(
            [...transformed.templateStrings],
            [
                '<html-transform-with-inputs ',
                ' data-extra="yes"></html-transform-with-inputs>',
            ],
        );
    });

    it('writes a self closing tag inline when a space precedes the slash', () => {
        const transformed = transform(buildLitTemplate`<${HtmlTransformChild} />`);

        assert.deepEquals(
            [...transformed.templateStrings],
            [
                '<html-transform-child />',
            ],
        );
    });

    it('writes a self closing tag inline without a space before the slash', () => {
        const litTemplate = buildLitTemplate`<${HtmlTransformChild}/>`;
        const transformed = transform(litTemplate);

        assert.deepEquals(
            [...transformed.templateStrings],
            [
                '<html-transform-child/>',
            ],
        );
        assert.deepEquals(transformed.valuesTransform(litTemplate.values), {
            valueIndexDeletions: [
                0,
            ],
            valueInsertions: [],
        });
    });

    it('writes a self closing tag with assigned inputs without a space before the slash', () => {
        const litTemplate = buildLitTemplate`<${HtmlTransformWithInputs.assign({
            label: 'hi',
        })}/>`;
        const transformed = transform(litTemplate);

        assert.deepEquals(
            [...transformed.templateStrings],
            [
                '<html-transform-with-inputs ',
                '/>',
            ],
        );
        assert.isLengthExactly(transformed.valuesTransform(litTemplate.values).valueInsertions, 1);
    });

    it('writes a closing tag inline with trailing whitespace', () => {
        const transformed = transform(
            buildLitTemplate`<${HtmlTransformChild}></${HtmlTransformChild} >`,
        );

        assert.deepEquals(
            [...transformed.templateStrings],
            [
                '<html-transform-child></html-transform-child >',
            ],
        );
    });

    it('writes an interpolated tag name string inline without inserting any values', () => {
        const litTemplate = buildLitTemplate`<${'html-transform-string-tag'}></${'html-transform-string-tag'}>`;
        const transformed = transform(litTemplate);

        assert.deepEquals(
            [...transformed.templateStrings],
            [
                '<html-transform-string-tag></html-transform-string-tag>',
            ],
        );
        assert.deepEquals(transformed.valuesTransform(litTemplate.values).valueInsertions, []);
    });

    it('leaves strings in attribute position alone', () => {
        const litTemplate = buildLitTemplate`<div class=${'not-a-tag'}></div>`;
        const transformed = transform(litTemplate);

        assert.deepEquals(
            [...transformed.templateStrings],
            [
                '<div class=',
                '></div>',
            ],
        );
        assert.deepEquals(transformed.valuesTransform(litTemplate.values).valueIndexDeletions, []);
    });

    it('leaves element definitions in text position alone', () => {
        const litTemplate = buildLitTemplate`<div>${HtmlTransformChild}</div>`;
        const transformed = transform(litTemplate);

        assert.deepEquals(
            [...transformed.templateStrings],
            [
                '<div>',
                '</div>',
            ],
        );
        assert.deepEquals(transformed.valuesTransform(litTemplate.values).valueIndexDeletions, []);
    });

    it('leaves an interpolation with no surrounding strings alone', () => {
        const litTemplate = buildLitTemplate`${'not-a-tag'}`;
        const transformed = transform(litTemplate);

        assert.deepEquals(
            [...transformed.templateStrings],
            [
                '',
                '',
            ],
        );
        assert.deepEquals(transformed.valuesTransform(litTemplate.values).valueIndexDeletions, []);
    });

    it('includes the value name in the missing tag name error', () => {
        class NamedClass {
            public isNamed = true;
        }

        assert.strictEquals(
            captureTagNameErrorMessage(() => {
                transform(buildLitTemplate`<${NamedClass}></${'error-case-class'}>`);
            }),
            "Got interpolated tag name but found no tag name on the given value: 'NamedClass'",
        );
        assert.strictEquals(
            captureTagNameErrorMessage(() => {
                transform(buildLitTemplate`<${{}}></${'error-case-object'}>`);
            }),
            "Got interpolated tag name but found no tag name on the given value: 'Object'",
        );
        assert.strictEquals(
            captureTagNameErrorMessage(() => {
                transform(buildLitTemplate`<${42}></${'error-case-number'}>`);
            }),
            "Got interpolated tag name but found no tag name on the given value: 'Number'",
        );
        assert.strictEquals(
            captureTagNameErrorMessage(() => {
                transform(buildLitTemplate`<${undefined}></${'error-case-undefined'}>`);
            }),
            "Got interpolated tag name but found no tag name on the given value: 'undefined'",
        );
        assert.strictEquals(
            captureTagNameErrorMessage(() => {
                transform(
                    buildLitTemplate`<${{
                        tagName: 42,
                    }}></${'error-case-bad-tag-name'}>`,
                );
            }),
            "Got interpolated tag name but found no tag name on the given value: '42'",
        );
    });

    it('logs the offending interpolation before throwing', () => {
        const logs = captureConsoleErrors(() => {
            assert.throws(() => {
                transform(buildLitTemplate`<${42}></${'error-case-logged'}>`);
            });
        });

        assert.deepEquals(logs, [
            [
                {
                    lastNewString: '<',
                    currentTemplateString: '></',
                    currentValue: 42,
                },
            ],
        ]);
    });
});

describe(mapHtmlValues.name, () => {
    it('replaces strings in tag name positions with tag name keys', () => {
        const captured = captureTemplate`<${'mapped-tag'}></${'mapped-tag'}>`;
        const mapped = mapHtmlValues(captured.strings, [
            'mapped-tag',
            'mapped-tag',
        ]);

        assert.deepEquals(mapped, [
            {
                tagName: 'mapped-tag',
                tagInterpolationKey: {
                    tagName: 'mapped-tag',
                },
            },
            {
                tagName: 'mapped-tag',
                tagInterpolationKey: {
                    tagName: 'mapped-tag',
                },
            },
        ]);

        const first = mapped[0];
        assert.hasKey(first, 'tagInterpolationKey');
        assert.strictEquals(first.tagInterpolationKey, tagNameKeys['mapped-tag']);
    });

    it('leaves non-string values in tag name positions alone', () => {
        const captured = captureTemplate`<${HtmlTransformChild}></${HtmlTransformChild}>`;
        const mapped = mapHtmlValues(captured.strings, [
            HtmlTransformChild,
            HtmlTransformChild,
        ]);

        assert.deepEquals(mapped, [
            HtmlTransformChild,
            HtmlTransformChild,
        ]);
    });

    it('leaves strings outside of tag name positions alone', () => {
        const captured = captureTemplate`<div class=${'not-a-tag'}>${'also-not-a-tag'}</div>`;
        const mapped = mapHtmlValues(captured.strings, [
            'not-a-tag',
            'also-not-a-tag',
        ]);

        assert.deepEquals(mapped, [
            'not-a-tag',
            'also-not-a-tag',
        ]);
    });

    it('leaves values with no surrounding strings alone', () => {
        const captured = captureTemplate`${'not-a-tag'}`;
        const mapped = mapHtmlValues(captured.strings, [
            'not-a-tag',
        ]);

        assert.deepEquals(mapped, [
            'not-a-tag',
        ]);
    });
});

describe('html transform tag name detection', () => {
    it('writes a self closing tag with attributes before the slash', () => {
        const transformed = transform(
            buildLitTemplate`<${HtmlTransformChild} data-self-closing="yes"/>`,
        );

        assert.deepEquals(
            [...transformed.templateStrings],
            [
                '<html-transform-child data-self-closing="yes"/>',
            ],
        );
        assert.deepEquals(
            [...transformed.templateStrings.raw],
            [
                '<html-transform-child data-self-closing="yes"/>',
            ],
        );
    });

    it('writes a self closing tag nested inside another element', () => {
        assert.deepEquals(
            [...transform(buildLitTemplate`<div><${HtmlTransformChild}/></div>`).templateStrings],
            [
                '<div><html-transform-child/></div>',
            ],
        );
        assert.deepEquals(
            [...transform(buildLitTemplate`<div><${HtmlTransformChild} /></div>`).templateStrings],
            [
                '<div><html-transform-child /></div>',
            ],
        );
    });

    it('writes a self closing tag with assigned inputs and a space before the slash', () => {
        const litTemplate = buildLitTemplate`<${HtmlTransformWithInputs.assign({
            label: 'hi',
        })} />`;
        const transformed = transform(litTemplate);

        assert.deepEquals(
            [...transformed.templateStrings],
            [
                '<html-transform-with-inputs ',
                ' />',
            ],
        );
        assert.isLengthExactly(transformed.valuesTransform(litTemplate.values).valueInsertions, 1);
    });

    it('keeps attributes after a bare definition tag name', () => {
        assert.deepEquals(
            [
                ...transform(
                    buildLitTemplate`<${HtmlTransformChild} data-plain="yes"></${HtmlTransformChild}>`,
                ).templateStrings,
            ],
            [
                '<html-transform-child data-plain="yes"></html-transform-child>',
            ],
        );
    });

    it('writes a lone closing tag inline', () => {
        const litTemplate = buildLitTemplate`</${HtmlTransformChild}>`;
        const transformed = transform(litTemplate);

        assert.deepEquals(
            [...transformed.templateStrings],
            [
                '</html-transform-child>',
            ],
        );
        assert.deepEquals(transformed.valuesTransform(litTemplate.values), {
            valueIndexDeletions: [
                0,
            ],
            valueInsertions: [],
        });
    });

    it('ignores a slash that is not the first character after the interpolation', () => {
        const litTemplate = buildLitTemplate`<${'not-a-tag'}a/>`;
        const transformed = transform(litTemplate);

        assert.deepEquals(
            [...transformed.templateStrings],
            [
                '<',
                'a/>',
            ],
        );
        assert.deepEquals(transformed.valuesTransform(litTemplate.values).valueIndexDeletions, []);
    });

    it('ignores a definition that follows a closing tag slash and precedes another slash', () => {
        const litTemplate = buildLitTemplate`</${HtmlTransformChild}/>`;
        const transformed = transform(litTemplate);

        assert.deepEquals(
            [...transformed.templateStrings],
            [
                '</',
                '/>',
            ],
        );
        assert.deepEquals(transformed.valuesTransform(litTemplate.values).valueIndexDeletions, []);
    });

    it('ignores a definition in an attribute value position', () => {
        const litTemplate = buildLitTemplate`<div class=${HtmlTransformChild}></div>`;
        const transformed = transform(litTemplate);

        assert.deepEquals(
            [...transformed.templateStrings],
            [
                '<div class=',
                '></div>',
            ],
        );
        assert.deepEquals(transformed.valuesTransform(litTemplate.values).valueIndexDeletions, []);
    });

    it('throws for a non definition value in a self closing tag name position', () => {
        assert.strictEquals(
            captureTagNameErrorMessage(() => {
                transform(buildLitTemplate`<${42}/>`);
            }),
            "Got interpolated tag name but found no tag name on the given value: 'Number'",
        );
        assert.strictEquals(
            captureTagNameErrorMessage(() => {
                transform(buildLitTemplate`<${42} />`);
            }),
            "Got interpolated tag name but found no tag name on the given value: 'Number'",
        );
    });
});

describe('mapHtmlValues tag name positions', () => {
    it('wraps a string in a self closing tag name position', () => {
        const captured = captureTemplate`<${'self-closing-mapped-tag'}/>`;
        const mapped = mapHtmlValues(captured.strings, [
            'self-closing-mapped-tag',
        ]);

        assert.deepEquals(mapped, [
            {
                tagName: 'self-closing-mapped-tag',
                tagInterpolationKey: {
                    tagName: 'self-closing-mapped-tag',
                },
            },
        ]);
        const first = mapped[0];
        assert.hasKey(first, 'tagInterpolationKey');
        assert.strictEquals(first.tagInterpolationKey, tagNameKeys['self-closing-mapped-tag']);
    });

    it('leaves a string alone when a slash is not the first character after it', () => {
        const captured = captureTemplate`<${'not-a-tag'}a/>`;

        assert.deepEquals(
            mapHtmlValues(captured.strings, [
                'not-a-tag',
            ]),
            [
                'not-a-tag',
            ],
        );
    });
});
