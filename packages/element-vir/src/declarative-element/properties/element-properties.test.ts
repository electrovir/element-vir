import {assert} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import {type PropertyInitMapBase} from './element-properties.js';

describe('PropertyInitMapBase', () => {
    it('allows any property key', () => {
        assert.tsType<keyof PropertyInitMapBase>().equals<PropertyKey>();
    });

    it('holds unknown values rather than any', () => {
        assert.tsType<PropertyInitMapBase[string]>().equals<unknown>();
        assert.tsType<PropertyInitMapBase[string]>().notMatches<string>();
    });

    it('accepts property maps with string, number, and symbol keys', () => {
        const symbolKey = Symbol.for('element-properties-test-key');
        const propertyMap = {
            stringKey: 'value',
            4: 'value',
            [symbolKey]: 'value',
        } satisfies PropertyInitMapBase;

        assert.tsType(propertyMap).matches<PropertyInitMapBase>();
    });
});
