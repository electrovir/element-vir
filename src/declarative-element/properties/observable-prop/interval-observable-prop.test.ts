import {createDeferredPromiseWrapper, randomInteger} from '@augment-vir/common';
import {assert, waitUntil} from '@open-wc/testing';
import {createIntervalObservableProp} from './interval-observable-prop';

describe(createIntervalObservableProp.name, () => {
    it('uses promises when the updater is async', async () => {
        const deferredPromiseWrapper = createDeferredPromiseWrapper<number>();
        const value = randomInteger({min: 0, max: 100});

        const asyncObservableProp = createIntervalObservableProp({
            initInput: undefined,
            async updateCallback() {
                return deferredPromiseWrapper.promise;
            },
            updateInterval: {milliseconds: 10},
            startPaused: true,
        });

        assert.strictEqual(asyncObservableProp.updateCount, 1);
        assert.instanceOf(asyncObservableProp.value, Promise);
        assert.isUndefined(asyncObservableProp.latestResolvedValue);

        asyncObservableProp.resumeInterval();

        await waitUntil(() => {
            return asyncObservableProp.updateCount >= 2;
        });

        asyncObservableProp.pauseInterval();

        const afterCount = asyncObservableProp.updateCount;

        assert.instanceOf(asyncObservableProp.value, Promise);
        assert.isUndefined(asyncObservableProp.latestResolvedValue);

        deferredPromiseWrapper.resolve(value);

        await asyncObservableProp.value;

        assert.strictEqual(asyncObservableProp.value, value);
        assert.strictEqual(asyncObservableProp.latestResolvedValue, value);
        assert.strictEqual(asyncObservableProp.updateCount, afterCount);
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
            updateInterval: {milliseconds: 10},
            startPaused: true,
        });

        assert.strictEqual(asyncObservableProp.updateCount, updateCount);
        assert.strictEqual(asyncObservableProp.updateCount, 1);
        assert.strictEqual(asyncObservableProp.value, value + updateCount);
        assert.strictEqual(asyncObservableProp.latestResolvedValue, value + updateCount);

        asyncObservableProp.resumeInterval();
        await waitUntil(() => {
            return asyncObservableProp.updateCount >= 2;
        });
        asyncObservableProp.pauseInterval();

        assert.strictEqual(asyncObservableProp.updateCount, updateCount);
        assert.strictEqual(asyncObservableProp.value, value + updateCount);
        assert.strictEqual(asyncObservableProp.latestResolvedValue, value + updateCount);
    });

    it('can set input to falsy value', async () => {
        const possiblyUndefinedInputObservableProp = createIntervalObservableProp({
            initInput: 5 as number | undefined,
            updateCallback(inputValue) {
                return (inputValue ?? 0) * 2;
            },
            updateInterval: {milliseconds: 10},
            startPaused: true,
        });

        assert.strictEqual(possiblyUndefinedInputObservableProp.value, 10);
        assert.strictEqual(
            possiblyUndefinedInputObservableProp.latestResolvedValue,
            possiblyUndefinedInputObservableProp.value,
        );

        possiblyUndefinedInputObservableProp.resumeInterval();

        await waitUntil(() => possiblyUndefinedInputObservableProp.updateCount >= 2);

        possiblyUndefinedInputObservableProp.pauseInterval();

        assert.strictEqual(possiblyUndefinedInputObservableProp.value, 10);
        assert.strictEqual(
            possiblyUndefinedInputObservableProp.latestResolvedValue,
            possiblyUndefinedInputObservableProp.value,
        );

        const forcedResult = possiblyUndefinedInputObservableProp.forceUpdate(undefined);

        assert.strictEqual(possiblyUndefinedInputObservableProp.value, 0);
        assert.strictEqual(possiblyUndefinedInputObservableProp.value, forcedResult);
        assert.strictEqual(
            possiblyUndefinedInputObservableProp.latestResolvedValue,
            possiblyUndefinedInputObservableProp.value,
        );

        possiblyUndefinedInputObservableProp.resumeInterval();

        await waitUntil(() => possiblyUndefinedInputObservableProp.updateCount >= 4);
        assert.strictEqual(possiblyUndefinedInputObservableProp.value, 0);
        assert.strictEqual(possiblyUndefinedInputObservableProp.value, forcedResult);
        assert.strictEqual(
            possiblyUndefinedInputObservableProp.latestResolvedValue,
            possiblyUndefinedInputObservableProp.value,
        );
    });

    it('will automatically update', async () => {
        const possiblyUndefinedInputObservableProp = createIntervalObservableProp({
            initInput: 5 as number | undefined,
            updateCallback(inputValue) {
                return (inputValue ?? 0) * 2;
            },
            updateInterval: {milliseconds: 10},
        });

        await waitUntil(() => possiblyUndefinedInputObservableProp.updateCount >= 3);
    });
});
