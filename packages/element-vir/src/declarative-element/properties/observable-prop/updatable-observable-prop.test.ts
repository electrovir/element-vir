import {randomInteger} from '@augment-vir/common';
import {assert} from '@open-wc/testing';
import {assertThrows, assertTypeOf} from 'run-time-assertions';
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

        const syncObservableProp = createUpdatableObservableProp({
            initInput: undefined,
            updateCallback() {
                return value;
            },
        });

        assert.strictEqual(syncObservableProp.value, value);
        assert.strictEqual(syncObservableProp.latestResolvedValue, value);
    });

    it('handles init errors but throws errors in the triggerUpdate method', () => {
        const errorObservableProp = createUpdatableObservableProp({
            initInput: true,
            updateCallback(shouldFail: boolean) {
                if (shouldFail) {
                    throw new Error('intentionally failing the update callback');
                }
                return Math.random();
            },
        });

        /**
         * Does not throw the error when setting up the initial value. But this results in an
         * undefined value.
         */
        assert.strictEqual(errorObservableProp.latestResolvedValue, errorObservableProp.value);
        assert.isUndefined(errorObservableProp.latestResolvedValue);

        errorObservableProp.triggerUpdate(false);

        assert.strictEqual(errorObservableProp.latestResolvedValue, errorObservableProp.value);
        assert.isDefined(errorObservableProp.latestResolvedValue);

        assertThrows(() => errorObservableProp.triggerUpdate(true));
        assert.isDefined(errorObservableProp.latestResolvedValue);
    });

    it('can decide to not update', () => {
        const nonUpdatingObservableProp = createUpdatableObservableProp({
            initInput: true,
            updateCallback(shouldSkip: boolean, lastValue: number | undefined) {
                if (shouldSkip && lastValue != undefined) {
                    return lastValue;
                }
                return Math.random();
            },
        });

        assert.strictEqual(
            nonUpdatingObservableProp.latestResolvedValue,
            nonUpdatingObservableProp.value,
        );
        assert.isNumber(nonUpdatingObservableProp.latestResolvedValue);
        const firstValue = nonUpdatingObservableProp.latestResolvedValue;

        nonUpdatingObservableProp.triggerUpdate(false);

        assert.strictEqual(
            nonUpdatingObservableProp.latestResolvedValue,
            nonUpdatingObservableProp.value,
        );
        assert.notStrictEqual(nonUpdatingObservableProp.latestResolvedValue, firstValue);
        const secondValue = nonUpdatingObservableProp.latestResolvedValue;

        nonUpdatingObservableProp.triggerUpdate(true);

        assert.strictEqual(
            nonUpdatingObservableProp.latestResolvedValue,
            nonUpdatingObservableProp.value,
        );
        assert.strictEqual(nonUpdatingObservableProp.latestResolvedValue, secondValue);
    });

    it('allows updating without inputs', () => {
        const testObservableProp = createUpdatableObservableProp({
            initInput: 5,
            updateCallback(inputNumber) {
                return inputNumber * 2;
            },
        });

        assert.strictEqual(testObservableProp.latestResolvedValue, testObservableProp.value);
        assert.strictEqual(testObservableProp.latestResolvedValue, 10);

        testObservableProp.triggerUpdate();
        assert.strictEqual(testObservableProp.latestResolvedValue, 10);

        testObservableProp.triggerUpdate(30);
        assert.strictEqual(testObservableProp.latestResolvedValue, 60);

        testObservableProp.triggerUpdate();
        assert.strictEqual(testObservableProp.latestResolvedValue, 60);

        assert.strictEqual(testObservableProp.updateCount, 4);
    });
});
