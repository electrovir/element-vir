import {assert} from '@augment-vir/assert';
import {type RequiredKeysOf} from '@augment-vir/common';
import {describe, it} from '@augment-vir/test';
import {
    type CSSResult,
    type DeclarativeElementDefinitionOptions,
    type DeclarativeElementInit,
    type HtmlInterpolation,
    type InitCallback,
    type PropertyInitMapBase,
    type RenderCallback,
    type StylesCallback,
} from '../index.js';

type TestTagName = 'init-type-element';
type TestInputs = {myInput: string};
type TestState = {myState: number};
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type TestEvents = {};
type TestHostClassKeys = 'init-type-element-my-class';
type TestCssVarKeys = 'init-type-element-my-var';
type TestSlotNames = ['init-type-element-my-slot'];
type TestTestIds = ['my-test-id'];

type TestInit = DeclarativeElementInit<
    TestTagName,
    TestInputs,
    TestState,
    TestEvents,
    TestHostClassKeys,
    TestCssVarKeys,
    TestSlotNames,
    TestTestIds
>;

type ClashingStateInit<State extends PropertyInitMapBase> = DeclarativeElementInit<
    TestTagName,
    TestInputs,
    State,
    TestEvents,
    TestHostClassKeys,
    TestCssVarKeys,
    TestSlotNames,
    TestTestIds
>;

describe('DeclarativeElementInit', () => {
    it('only requires a tag name and a render callback', () => {
        assert.tsType<RequiredKeysOf<TestInit>>().equals<'tagName' | 'render'>();
    });

    it('types the render callback with all the element generics', () => {
        assert
            .tsType<TestInit['render']>()
            .equals<
                RenderCallback<
                    TestTagName,
                    TestInputs,
                    TestState,
                    TestEvents,
                    TestHostClassKeys,
                    TestCssVarKeys,
                    TestSlotNames,
                    TestTestIds
                >
            >();
        assert.tsType<ReturnType<TestInit['render']>>().equals<HtmlInterpolation>();
    });

    it('gives init and cleanup the same callback type', () => {
        assert
            .tsType<NonNullable<TestInit['init']>>()
            .equals<
                InitCallback<
                    TestTagName,
                    TestInputs,
                    TestState,
                    TestEvents,
                    TestHostClassKeys,
                    TestCssVarKeys,
                    TestSlotNames,
                    TestTestIds
                >
            >();
        assert.tsType<NonNullable<TestInit['cleanup']>>().equals<NonNullable<TestInit['init']>>();
        assert.tsType<ReturnType<NonNullable<TestInit['init']>>>().equals<undefined | void>();
    });

    it('omits state and updateState from the state callback params', () => {
        assert
            .tsType<keyof Parameters<NonNullable<TestInit['state']>>[0]>()
            .equals<
                'cssVars' | 'events' | 'host' | 'slotNames' | 'testIds' | 'dispatch' | 'inputs'
            >();
    });

    it('returns the state type from a valid state callback', () => {
        assert.tsType<ReturnType<NonNullable<TestInit['state']>>>().equals<TestState>();
    });

    it('replaces the state return type with an error for HTMLElement clashes', () => {
        assert
            .tsType<ReturnType<NonNullable<ClashingStateInit<{style: string}>['state']>>>()
            .equals<'ERROR: Cannot define an element state property that clashes with native HTMLElement properties: style'>();
    });

    it('replaces the state return type with an error for input clashes', () => {
        assert
            .tsType<ReturnType<NonNullable<ClashingStateInit<{myInput: number}>['state']>>>()
            .equals<'ERROR: Cannot define an element state property that clashes with input properties: myInput'>();
    });

    it('reports the HTMLElement clash before the input clash', () => {
        assert
            .tsType<
                ReturnType<
                    NonNullable<ClashingStateInit<{myInput: number; style: string}>['state']>
                >
            >()
            .equals<'ERROR: Cannot define an element state property that clashes with native HTMLElement properties: style'>();
    });

    it('accepts static styles or a styles callback', () => {
        assert
            .tsType<NonNullable<TestInit['styles']>>()
            .equals<
                | CSSResult
                | StylesCallback<TestTagName, TestHostClassKeys, TestCssVarKeys, TestSlotNames>
            >();
    });

    it('accepts partial definition options', () => {
        assert
            .tsType<NonNullable<TestInit['options']>>()
            .equals<Partial<DeclarativeElementDefinitionOptions>>();
    });

    it('requires slot names to be prefixed with the tag name', () => {
        function acceptSlotNames<const SlotNames extends ReadonlyArray<string>>(
            slotNames: NonNullable<
                DeclarativeElementInit<
                    TestTagName,
                    TestInputs,
                    TestState,
                    TestEvents,
                    TestHostClassKeys,
                    TestCssVarKeys,
                    SlotNames,
                    TestTestIds
                >['slotNames']
            >,
        ) {
            return slotNames;
        }

        acceptSlotNames([
            'init-type-element-my-slot',
        ]);
        // @ts-expect-error: slot names must start with the tag name
        acceptSlotNames([
            'my-slot',
        ]);
    });

    it('accepts test ids without a tag name prefix', () => {
        const testIds: NonNullable<TestInit['testIds']> = [
            'my-test-id',
        ];
        assert.isDefined(testIds);
    });
});
