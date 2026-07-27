import {assert} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import {defineElement} from 'element-vir';
import {
    type MinimalDefinitionWithInputs,
    type MinimalElementDefinition,
    hasTagName,
    isMinimalDefinitionWithInputs,
} from '../index.js';

const DefinitionWithInputs = defineElement<{label: string}>()({
    tagName: 'minimal-element-definition-test',
    render() {
        return 'hi';
    },
});

describe('MinimalElementDefinition', () => {
    it('matches an actual definition', () => {
        const TestElementDefinition = defineElement()({
            tagName: 'something-something-test-fad-time',
            render() {
                return 'hi';
            },
        });

        assert.tsType(TestElementDefinition).matches<MinimalElementDefinition>();
    });
});

describe('MinimalDefinitionWithInputs', () => {
    it('matches assigned inputs', () => {
        assert
            .tsType(
                DefinitionWithInputs.assign({
                    label: 'hi',
                }),
            )
            .matches<MinimalDefinitionWithInputs>();
    });
});

describe(isMinimalDefinitionWithInputs.name, () => {
    it('accepts assigned inputs', () => {
        assert.isTrue(
            isMinimalDefinitionWithInputs(
                DefinitionWithInputs.assign({
                    label: 'hi',
                }),
            ),
        );
    });

    it('accepts any object with a truthy marker property', () => {
        assert.isTrue(
            isMinimalDefinitionWithInputs({
                _elementVirIsMinimalDefinitionWithInputs: true,
            }),
        );
    });

    it('rejects values without a truthy marker property', () => {
        [
            DefinitionWithInputs,
            {
                _elementVirIsMinimalDefinitionWithInputs: false,
            },
            {},
            'a string',
            42,
            undefined,
            null,
        ].forEach((value) => {
            assert.isFalse(isMinimalDefinitionWithInputs(value));
        });
    });

    it('narrows the value type', () => {
        const value: unknown = DefinitionWithInputs.assign({
            label: 'hi',
        });

        if (isMinimalDefinitionWithInputs(value)) {
            assert.tsType(value).equals<MinimalDefinitionWithInputs>();
        }
    });
});

describe(hasTagName.name, () => {
    it('accepts values with a non-empty string tag name', () => {
        assert.isTrue(hasTagName(DefinitionWithInputs));
        assert.isTrue(
            hasTagName({
                tagName: 'some-tag',
            }),
        );
    });

    /** Elements have a `tagName` so they are indistinguishable from element definitions here. */
    it('accepts DOM elements', () => {
        assert.isTrue(hasTagName(document.createElement('div')));
    });

    it('rejects values without a usable tag name', () => {
        [
            {
                tagName: '',
            },
            {
                tagName: 42,
            },
            {
                tagName: undefined,
            },
            {},
            'div',
            42,
            undefined,
            null,
        ].forEach((value) => {
            assert.isFalse(hasTagName(value));
        });
    });

    it('narrows the value type', () => {
        const value: unknown = DefinitionWithInputs;

        if (hasTagName(value)) {
            assert.tsType(value).equals<MinimalElementDefinition>();
        }
    });
});
