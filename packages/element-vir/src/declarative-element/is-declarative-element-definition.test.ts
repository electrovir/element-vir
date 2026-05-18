import {AssertionError} from '@augment-vir/assert';
import {describe, itCases} from '@augment-vir/test';
import {nothing} from '../lit-exports/all-lit-exports.js';
import {defineElement} from './define-element.js';
import {
    assertDeclarativeElementDefinition,
    isDeclarativeElementDefinition,
} from './is-declarative-element-definition.js';

describe(assertDeclarativeElementDefinition.name, () => {
    itCases(assertDeclarativeElementDefinition, [
        {
            it: 'passes with a definition that has inputs',
            inputs: [
                defineElement()({
                    tagName: 'test-thing-984451',
                    render() {
                        return nothing;
                    },
                }),
            ],
            throws: undefined,
        },
        {
            it: 'passes with a definition that has no inputs',
            inputs: [
                defineElement()({
                    tagName: 'test-thing-158685',
                    render() {
                        return nothing;
                    },
                }),
            ],
            throws: undefined,
        },
        {
            it: 'rejects a number input',
            inputs: [
                5,
            ],
            throws: {
                matchMessage: 'Input is not a declarative element constructor',
            },
        },
        {
            it: 'rejects an empty object',
            inputs: [
                {},
            ],
            throws: {
                matchConstructor: AssertionError,
            },
        },
        {
            it: 'rejects a function missing required static properties',
            inputs: [
                () => undefined,
            ],
            throws: {
                matchConstructor: AssertionError,
            },
        },
    ]);
});

describe(isDeclarativeElementDefinition.name, () => {
    itCases(isDeclarativeElementDefinition, [
        {
            it: 'returns true for a real declarative element definition',
            input: defineElement()({
                tagName: 'is-decl-def-true',
                render() {
                    return nothing;
                },
            }),
            expect: true,
        },
        {
            it: 'returns false for a plain object',
            input: {},
            expect: false,
        },
        {
            it: 'returns false for a function without the expected static props',
            input: () => undefined,
            expect: false,
        },
        {
            it: 'returns false for undefined',
            input: undefined,
            expect: false,
        },
    ]);
});
