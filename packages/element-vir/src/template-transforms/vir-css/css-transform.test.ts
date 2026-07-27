import {assert} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import {defineElement} from '../../declarative-element/define-element.js';
import {type MinimalElementDefinition} from '../minimal-element-definition.js';
import {transformCssTemplate} from './css-transform.js';

const CssTransformChild = defineElement()({
    tagName: 'css-transform-child',
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

describe(transformCssTemplate.name, () => {
    it('writes an element definition tag name inline and deletes its value', () => {
        const captured = captureTemplate`:host ${CssTransformChild} {color: red;}`;
        const transformed = transformCssTemplate(captured.strings, [
            CssTransformChild,
        ]);

        assert.deepEquals(
            [...transformed.templateStrings],
            [
                ':host css-transform-child {color: red;}',
            ],
        );
        assert.deepEquals(
            [...transformed.templateStrings.raw],
            [
                ':host css-transform-child {color: red;}',
            ],
        );
        assert.deepEquals(transformed.valuesTransform(captured.values), {
            valueIndexDeletions: [
                0,
            ],
            valueInsertions: [],
        });
    });

    it('writes a tag name inline in any position, including property values', () => {
        const captured = captureTemplate`content: '${CssTransformChild}';`;
        const transformed = transformCssTemplate(captured.strings, [
            CssTransformChild,
        ]);

        assert.deepEquals(
            [...transformed.templateStrings],
            [
                "content: 'css-transform-child';",
            ],
        );
    });

    it('leaves numbers alone', () => {
        const captured = captureTemplate`width: ${42}px;`;
        const transformed = transformCssTemplate(captured.strings, [
            42,
        ]);

        assert.deepEquals(
            [...transformed.templateStrings],
            [
                'width: ',
                'px;',
            ],
        );
        assert.deepEquals(transformed.valuesTransform(captured.values), {
            valueIndexDeletions: [],
            valueInsertions: [],
        });
    });

    it('writes any object with a non-empty string tag name inline', () => {
        const rawTagObject = {
            tagName: 'raw-tag-object',
        };
        const captured = captureTemplate`${rawTagObject} {color: red;}`;
        const transformed = transformCssTemplate(captured.strings, [
            rawTagObject,
        ]);

        assert.deepEquals(
            [...transformed.templateStrings],
            [
                'raw-tag-object {color: red;}',
            ],
        );
    });

    it('leaves objects with unusable tag names alone', () => {
        const unusableTagNames: ReadonlyArray<MinimalElementDefinition> = [
            {
                tagName: '',
            },
            {
                // @ts-expect-error: a tagName that is not a string
                tagName: 42,
            },
        ];

        unusableTagNames.forEach((value) => {
            const captured = captureTemplate`${value} {color: red;}`;
            const transformed = transformCssTemplate(captured.strings, [
                value,
            ]);

            assert.deepEquals(
                [...transformed.templateStrings],
                [
                    '',
                    ' {color: red;}',
                ],
            );
            assert.deepEquals(transformed.valuesTransform(captured.values), {
                valueIndexDeletions: [],
                valueInsertions: [],
            });
        });
    });
});
