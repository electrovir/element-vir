import {assert} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import {assertValidStringNames, createSlotNamesMap, createStringNameMap} from './string-names.js';

describe(createSlotNamesMap.name, () => {
    it('passes through slot names that already start with the tag name', () => {
        const slotNames = createSlotNamesMap('my-element', [
            'my-element-header',
            'my-element-footer',
        ] as const);

        assert.deepEquals(slotNames, {
            'my-element-header': 'my-element-header',
            'my-element-footer': 'my-element-footer',
        });
    });

    it('falls back to legacy generation for slot names without the tag prefix', () => {
        const slotNames = createSlotNamesMap('my-element', [
            'header',
            'footer',
        ] as const);

        assert.deepEquals(slotNames as Record<string, string>, {
            header: 'my-element-slot-header',
            footer: 'my-element-slot-footer',
        });
    });

    it('mixes prefixed and unprefixed slot names within a single map', () => {
        const slotNames = createSlotNamesMap('my-element', [
            'my-element-header',
            'footer',
        ] as const);

        assert.deepEquals(slotNames as Record<string, string>, {
            'my-element-header': 'my-element-header',
            footer: 'my-element-slot-footer',
        });
    });

    it('preserves precise literal types for prefixed slot names', () => {
        const slotNames = createSlotNamesMap('my-element', [
            'my-element-header',
        ] as const);

        assert.tsType(slotNames['my-element-header']).equals<'my-element-header'>();
    });

    it('produces a precise literal type for legacy-generated slot names', () => {
        const slotNames = createSlotNamesMap('my-element', [
            'header',
        ] as const);

        assert.tsType(slotNames.header).equals<'my-element-slot-header'>();
        assert.strictEquals(slotNames.header, 'my-element-slot-header');
    });

    it('returns an empty map when given an empty array', () => {
        const slotNames = createSlotNamesMap('my-element', [] as const);

        assert.isEmpty(Object.keys(slotNames));
    });

    it('returns an empty map when given undefined', () => {
        const slotNames = createSlotNamesMap('my-element', undefined);

        assert.isEmpty(Object.keys(slotNames));
    });

    it('does not share references between calls', () => {
        const first = createSlotNamesMap('my-element', ['my-element-x'] as const);
        const second = createSlotNamesMap('my-element', ['my-element-x'] as const);

        assert.notStrictEquals(first, second);
        assert.deepEquals(first, second);
    });
});

describe(createStringNameMap.name, () => {
    it('generates test id names by joining tag name, type, and each name', () => {
        const testIds = createStringNameMap('my-element', 'test-id', [
            'submit-button',
            'cancel-button',
        ] as const);

        assert.deepEquals(testIds, {
            'submit-button': 'my-element-test-id-submit-button',
            'cancel-button': 'my-element-test-id-cancel-button',
        });
    });

    it('preserves precise literal types for each generated name', () => {
        const testIds = createStringNameMap('my-element', 'test-id', [
            'submit-button',
        ] as const);

        assert.tsType(testIds['submit-button']).equals<'my-element-test-id-submit-button'>();
    });

    it('returns an empty map when given an empty array', () => {
        const testIds = createStringNameMap('my-element', 'test-id', [] as const);

        assert.isEmpty(Object.keys(testIds));
    });

    it('returns an empty map when given undefined', () => {
        const testIds = createStringNameMap('my-element', 'test-id', undefined);

        assert.isEmpty(Object.keys(testIds));
    });
});

describe(assertValidStringNames.name, () => {
    it('passes when every string starts with the tag name and a dash', () => {
        assert.doesNotThrow(() =>
            assertValidStringNames('my-element', [
                'my-element-foo',
                'my-element-bar',
            ]),
        );
    });

    it('throws when a string does not start with the tag name', () => {
        assert.throws(
            () =>
                assertValidStringNames('my-element', [
                    'other-element-foo',
                ]),
            {
                matchMessage: "Invalid element string name 'other-element-foo'",
            },
        );
    });

    it('throws when a string is missing the trailing dash after the tag name', () => {
        assert.throws(
            () =>
                assertValidStringNames('my-element', [
                    'my-elementFoo',
                ]),
            {
                matchMessage: "Invalid element string name 'my-elementFoo'",
            },
        );
    });

    it('passes when given an empty array', () => {
        assert.doesNotThrow(() => assertValidStringNames('my-element', []));
    });
});
