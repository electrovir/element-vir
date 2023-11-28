import {createDeferredPromiseWrapper, randomInteger} from '@augment-vir/common';
import {assert, waitUntil} from '@open-wc/testing';
import {createIntervalObservableProp} from './interval-observable-prop';

describe(createIntervalObservableProp.name, () => {
    it('uses promises when the updater is async', async () => {
        const deferredPromiseWrapper = createDeferredPromiseWrapper<number>();
        const value = randomInteger({min: 0, max: 100});
        let updateCount = 0;

        const asyncObservableProp = createIntervalObservableProp({
            initInput: undefined,
            async updateCallback() {
                updateCount++;
                return deferredPromiseWrapper.promise;
            },
            intervalMs: 100,
        });

        assert.instanceOf(asyncObservableProp.value, Promise);
        assert.isUndefined(asyncObservableProp.latestResolvedValue);

        await waitUntil(() => updateCount >= 2);

        assert.instanceOf(asyncObservableProp.value, Promise);
        assert.isUndefined(asyncObservableProp.latestResolvedValue);

        deferredPromiseWrapper.resolve(value);

        await asyncObservableProp.value;

        assert.strictEqual(asyncObservableProp.value, value);
        assert.strictEqual(asyncObservableProp.latestResolvedValue, value);
    });

    it('does not use promises when the updater is sync', async () => {
        const value = randomInteger({min: 0, max: 100});
        let updateCount = 0;

        const asyncObservableProp = createIntervalObservableProp({
            initInput: undefined,
            updateCallback() {
                updateCount++;
                return value + updateCount;
            },
            intervalMs: 100,
        });

        assert.strictEqual(asyncObservableProp.value, value + updateCount);
        assert.strictEqual(asyncObservableProp.latestResolvedValue, value + updateCount);

        await waitUntil(() => updateCount >= 2);

        assert.strictEqual(asyncObservableProp.value, value + updateCount);
        assert.strictEqual(asyncObservableProp.latestResolvedValue, value + updateCount);
    });
});
