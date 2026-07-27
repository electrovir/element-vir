import {AssertionError, assert, assertWrap} from '@augment-vir/assert';
import {getObjectTypedKeys, omitObjectKeys} from '@augment-vir/common';
import {describe, it, itCases, testWeb} from '@augment-vir/test';
import {nothing} from '../lit-exports/all-lit-exports.js';
import {html} from '../template-transforms/vir-html/vir-html.js';
import {
    DeclarativeElement,
    type DeclarativeElementDefinition,
    type StaticDeclarativeElementProperties,
} from './declarative-element.js';
import {defineElement} from './define-element.js';
import {
    assertDeclarativeElementDefinition,
    isDeclarativeElementDefinition,
} from './is-declarative-element-definition.js';

const DefinitionForGuardTests = defineElement()({
    tagName: 'definition-for-guard-tests',
    render() {
        return nothing;
    },
});

const allStaticProperties: Readonly<
    Record<keyof StaticDeclarativeElementProperties<any, any, any, any, any, any, any, any>, ''>
> = {
    assign: '',
    assignedInputs: '',
    cssVars: '',
    elementOptions: '',
    events: '',
    hostClasses: '',
    init: '',
    InputsType: '',
    render: '',
    slotNames: '',
    StateType: '',
    styles: '',
    tagName: '',
    testIds: '',
    UpdateStateType: '',
};

function createFakeDefinition(omitKeys: ReadonlyArray<keyof typeof allStaticProperties> = []) {
    return Object.assign(() => undefined, omitObjectKeys(allStaticProperties, omitKeys));
}

/**
 * Type-only statics are getters that throw when read, so reading any of them while checking a
 * definition would break every consumer of these guards.
 */
type ThrowingGetterDefinition = (() => undefined) &
    Record<keyof typeof allStaticProperties, unknown>;

const throwingGetterDefinition = Object.defineProperties(
    createFakeDefinition([
        'InputsType',
        'StateType',
        'UpdateStateType',
    ]),
    {
        InputsType: {
            configurable: true,
            enumerable: true,
            get(): never {
                throw new Error("'InputsType' getter was read");
            },
        },
        StateType: {
            configurable: true,
            enumerable: true,
            get(): never {
                throw new Error("'StateType' getter was read");
            },
        },
        UpdateStateType: {
            configurable: true,
            enumerable: true,
            get(): never {
                throw new Error("'UpdateStateType' getter was read");
            },
        },
    },
) as ThrowingGetterDefinition;

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
        {
            it: 'passes for a plain function that has all the expected static properties',
            inputs: [
                createFakeDefinition(),
            ],
            throws: undefined,
        },
        {
            it: 'passes for a subclass of a real definition',
            inputs: [
                class SubDefinition extends DefinitionForGuardTests {},
            ],
            throws: undefined,
        },
        {
            it: 'rejects an instance of a real definition',
            inputs: [
                new DefinitionForGuardTests(),
            ],
            throws: {
                matchMessage: 'Input is not a declarative element constructor',
            },
        },
        {
            it: 'rejects undefined',
            inputs: [
                undefined,
            ],
            throws: {
                matchMessage: 'Input is not a declarative element constructor',
            },
        },
    ]);

    it('reports the first missing static property', () => {
        assert.strictEquals(
            assertWrap.throws(() =>
                assertDeclarativeElementDefinition(
                    createFakeDefinition([
                        'render',
                        'cssVars',
                    ]),
                ),
            ).message,
            "missing prop 'cssVars'",
        );
    });

    it('requires every expected static property individually', () => {
        getObjectTypedKeys(allStaticProperties).forEach((staticProperty) => {
            assert.strictEquals(
                assertWrap.throws(
                    () =>
                        assertDeclarativeElementDefinition(
                            createFakeDefinition([
                                staticProperty,
                            ]),
                        ),
                    undefined,
                    staticProperty,
                ).message,
                `missing prop '${staticProperty}'`,
            );
        });
    });

    it('prepends the given fail message', () => {
        assert.strictEquals(
            assertWrap.throws(() => assertDeclarativeElementDefinition(5, 'my custom fail message'))
                .message,
            'my custom fail message: Input is not a declarative element constructor',
        );
        assert.strictEquals(
            assertWrap.throws(() =>
                assertDeclarativeElementDefinition(
                    createFakeDefinition([
                        'tagName',
                    ]),
                    'my custom fail message',
                ),
            ).message,
            "my custom fail message: missing prop 'tagName'",
        );
    });

    it('narrows the input type', () => {
        const input: unknown = DefinitionForGuardTests;

        assertDeclarativeElementDefinition(input);
        assert.tsType(input).equals<DeclarativeElementDefinition>();
    });

    it('rejects a rendered element instance', async () => {
        const fixture = await testWeb.render(html`
            <${DefinitionForGuardTests}></${DefinitionForGuardTests}>
        `);

        assert.throws(() => assertDeclarativeElementDefinition(fixture), {
            matchMessage: 'Input is not a declarative element constructor',
        });
    });

    it('rejects the abstract DeclarativeElement base class', () => {
        assert.throws(() => assertDeclarativeElementDefinition(DeclarativeElement), {
            matchMessage: 'undefined prop',
        });
    });

    it('rejects a static property that is present but undefined', () => {
        assert.strictEquals(
            assertWrap.throws(() =>
                assertDeclarativeElementDefinition(
                    Object.assign(createFakeDefinition(), {
                        tagName: undefined,
                    }),
                ),
            ).message,
            "undefined prop 'tagName'",
        );
    });

    it('allows an undefined assignedInputs', () => {
        assert.doesNotThrow(() =>
            assertDeclarativeElementDefinition(
                Object.assign(createFakeDefinition(), {
                    assignedInputs: undefined,
                }),
            ),
        );
    });

    it('never reads a real definition type-only getter', () => {
        assert.throws(() => DefinitionForGuardTests.InputsType, {
            matchMessage: "'InputsType' was called on definition-for-guard-tests",
        });
        assert.throws(() => DefinitionForGuardTests.StateType, {
            matchMessage: "'StateType' was called on definition-for-guard-tests",
        });
        assert.throws(() => DefinitionForGuardTests.UpdateStateType, {
            matchMessage: "'UpdateStateType' was called on definition-for-guard-tests",
        });

        assert.doesNotThrow(() => assertDeclarativeElementDefinition(DefinitionForGuardTests));
    });

    it('never reads a throwing type-only getter, even through the prototype chain', () => {
        const inheritingDefinition: typeof throwingGetterDefinition = Object.setPrototypeOf(
            () => undefined,
            throwingGetterDefinition,
        );

        assert.doesNotThrow(() => assertDeclarativeElementDefinition(throwingGetterDefinition));
        assert.doesNotThrow(() => assertDeclarativeElementDefinition(inheritingDefinition));
        assert.throws(() => inheritingDefinition.InputsType, {
            matchMessage: "'InputsType' getter was read",
        });
    });

    it('finds statics that only exist on the prototype chain', () => {
        class DeepSubDefinition extends class extends DefinitionForGuardTests {} {}

        assert.isEmpty(
            getObjectTypedKeys(allStaticProperties).filter((staticProperty) => {
                return Object.getOwnPropertyDescriptor(DeepSubDefinition, staticProperty);
            }),
        );
        assert.doesNotThrow(() => assertDeclarativeElementDefinition(DeepSubDefinition));
    });
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
        {
            it: 'returns false for null',
            input: null,
            expect: false,
        },
        {
            it: 'returns false for a function missing a single static property',
            input: createFakeDefinition([
                'UpdateStateType',
            ]),
            expect: false,
        },
        {
            it: 'returns true for a plain function with all the expected static properties',
            input: createFakeDefinition(),
            expect: true,
        },
        {
            it: 'returns false for an element instance',
            input: new DefinitionForGuardTests(),
            expect: false,
        },
        {
            it: 'returns false for the abstract DeclarativeElement base class',
            input: DeclarativeElement,
            expect: false,
        },
        {
            it: 'returns false for a function with an undefined static property',
            input: Object.assign(createFakeDefinition(), {
                render: undefined,
            }),
            expect: false,
        },
        {
            it: 'returns true with an undefined assignedInputs',
            input: Object.assign(createFakeDefinition(), {
                assignedInputs: undefined,
            }),
            expect: true,
        },
        {
            it: 'returns true without reading throwing type-only getters',
            input: throwingGetterDefinition,
            expect: true,
        },
        {
            it: 'returns false for a string',
            input: 'definition-for-guard-tests',
            expect: false,
        },
        {
            it: 'returns false for an array',
            input: [],
            expect: false,
        },
    ]);

    it('narrows the input type', () => {
        const input: unknown = DefinitionForGuardTests;

        if (isDeclarativeElementDefinition(input)) {
            assert.tsType(input).equals<DeclarativeElementDefinition>();
        } else {
            assert.tsType(input).equals<unknown>();
        }
    });
});
