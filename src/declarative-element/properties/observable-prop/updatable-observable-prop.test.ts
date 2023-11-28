import {randomInteger} from '@augment-vir/common';
import {assert} from '@open-wc/testing';
import {assertTypeOf} from 'run-time-assertions';
import {createUpdatableObservableProp} from './updatable-observable-prop';

describe(createUpdatableObservableProp.name, () => {
    it('has proper types', () => {
        const asyncObservableProp = createUpdatableObservableProp({
            initInput: undefined,
            async updateCallback() {
                return Promise.resolve(5);
            },
        });

        assertTypeOf(asyncObservableProp.latestResolvedValue).toEqualTypeOf<number | undefined>();
        assertTypeOf(asyncObservableProp.value).toEqualTypeOf<number | Promise<number>>();

        const syncObservableProp = createUpdatableObservableProp({
            initInput: undefined,
            updateCallback() {
                return 5;
            },
        });

        assertTypeOf(syncObservableProp.latestResolvedValue).toEqualTypeOf<number>();
        assertTypeOf(syncObservableProp.value).toEqualTypeOf<number>();
    });

    it('updates .value with a promise and then the resolved value', async () => {
        const value = randomInteger({min: 0, max: 100});

        const asyncObservableProp = createUpdatableObservableProp({
            initInput: undefined,
            async updateCallback() {
                return await Promise.resolve(value);
            },
        });

        assert.instanceOf(asyncObservableProp.value, Promise);
        assert.isUndefined(asyncObservableProp.latestResolvedValue);

        await asyncObservableProp.value;

        assert.strictEqual(asyncObservableProp.value, value);
        assert.strictEqual(asyncObservableProp.latestResolvedValue, value);
    });

    it('never uses promises when the updater is synchronous', () => {
        const value = randomInteger({min: 0, max: 100});

        const asyncObservableProp = createUpdatableObservableProp({
            initInput: undefined,
            updateCallback() {
                return value;
            },
        });

        assert.strictEqual(asyncObservableProp.value, value);
        assert.strictEqual(asyncObservableProp.latestResolvedValue, value);
    });
});
