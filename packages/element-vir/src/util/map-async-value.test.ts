import {assert} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import {type AsyncValue} from 'observavir';
import {mapAsyncValue} from './map-async-value.js';

describe(mapAsyncValue.name, () => {
    it('preserves error', () => {
        const asyncValue = new Error('fake error') as AsyncValue<string>;

        const mappedValue = mapAsyncValue(asyncValue, (value) => {
            assert.tsType(value).equals<string>();
            return Number(value);
        });

        assert.tsType(mappedValue).equals<AsyncValue<number>>();
        assert.strictEquals<any, any>(mappedValue, asyncValue);
        assert.instanceOf(mappedValue, Error);
    });
    it('preserves promise', async () => {
        const asyncValue = Promise.resolve('42') as AsyncValue<string>;

        const mappedValue = mapAsyncValue(asyncValue, (value) => {
            assert.tsType(value).equals<string>();
            return Number(value);
        });

        assert.tsType(mappedValue).equals<AsyncValue<number>>();
        assert.instanceOf(mappedValue, Promise);
        assert.strictEquals(await mappedValue, 42);
        assert.strictEquals(await asyncValue, '42');
    });
    it('maps a resolved value', () => {
        const asyncValue = '5' as AsyncValue<string>;

        const mappedValue = mapAsyncValue(asyncValue, (value) => {
            assert.tsType(value).equals<string>();
            return Number(value);
        });

        assert.tsType(mappedValue).equals<AsyncValue<number>>();
        assert.strictEquals(mappedValue, 5);
    });
});
