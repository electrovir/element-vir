import {Duration, DurationUnit} from 'date-vir';
import {
    TriggerUpdateFunction,
    UpdatableObservableProp,
    UpdatableObservablePropSetup,
    createUpdatableObservableProp,
} from './updatable-observable-prop';

export type IntervalObservablePropSetup<ValueType, UpdateInputType> = UpdatableObservablePropSetup<
    ValueType,
    UpdateInputType
> & {
    /** Update interval. */
    updateInterval: Duration<DurationUnit.Milliseconds>;
    /**
     * If set to true, the interval observable prop will not automatically start its internal
     * interval.
     */
    startPaused?: boolean | undefined;
    /**
     * The minimum duration between triggers. If an automatic or manual trigger happens twice within
     * this duration, the second one will not do anything.
     */
    rateLimit?: Duration<DurationUnit.Milliseconds> | undefined;
};

export type IntervalObservableProp<ValueType, UpdateInputType> = Omit<
    UpdatableObservableProp<ValueType, UpdateInputType>,
    'triggerUpdate'
> & {
    /** Manually force the observable prop to update outside of its normal interval. */
    forceUpdate: TriggerUpdateFunction<ValueType, UpdateInputType>;
    /**
     * Pauses the update interval, if it isn't already paused. Use .resumeInterval() to start the
     * interval again. Under the hood, this actually clears the interval entirely.
     */
    pauseInterval(): void;
    /**
     * Resumes the update interval if it was paused. Under the hood, this creates a new interval
     * entirely, as .pauseInterval() actually clears it.
     */
    resumeInterval(): void;
    /** Cleans up the interval observable prop. */
    destroy(): void;
};

/**
 * This creates an updatable observable prop that will automatically update itself at the given
 * interval.
 */
export function createIntervalObservableProp<ValueType, UpdateInputType = undefined>(
    setup: IntervalObservablePropSetup<ValueType, UpdateInputType>,
): IntervalObservableProp<ValueType, UpdateInputType> {
    let latestInputs = setup.initInput;
    const baseObservableProp = createUpdatableObservableProp(setup);
    let latestIntervalId: number | undefined = undefined;
    let lastUpdateTimestamp = 0;
    const shouldRunInterval: boolean =
        setup.updateInterval.milliseconds > 0 &&
        Math.abs(setup.updateInterval.milliseconds) !== Infinity;
    let lastOutput: ValueType = baseObservableProp.value;
    baseObservableProp.addListener((value) => (lastOutput = value));

    function updateValue(...newInputs: [UpdateInputType] | []): ValueType {
        if (newInputs.length) {
            latestInputs = newInputs[0];
        }
        const now = Date.now();
        const shouldIgnoreDueToRateLimiting =
            setup.rateLimit &&
            setup.rateLimit.milliseconds > 0 &&
            now - lastUpdateTimestamp < setup.rateLimit?.milliseconds;

        if (shouldIgnoreDueToRateLimiting) {
            return lastOutput;
        }

        lastUpdateTimestamp = now;
        return baseObservableProp.triggerUpdate(latestInputs);
    }

    function resumeInterval() {
        if (shouldRunInterval && latestIntervalId == undefined) {
            latestIntervalId = window.setInterval(() => {
                updateValue();
            }, Math.ceil(setup.updateInterval.milliseconds));
        }
    }

    function pauseInterval() {
        if (latestIntervalId != undefined) {
            window.clearInterval(latestIntervalId);
            latestIntervalId = undefined;
        }
    }

    if (!setup.startPaused) {
        resumeInterval();
    }

    const originalDestroy = baseObservableProp.destroy;

    const observablePropertyWithInterval: IntervalObservableProp<ValueType, UpdateInputType> =
        Object.assign(baseObservableProp, {
            forceUpdate: updateValue as TriggerUpdateFunction<ValueType, UpdateInputType>,
            pauseInterval,
            resumeInterval,
            destroy() {
                pauseInterval();
                originalDestroy();
            },
        });

    return observablePropertyWithInterval;
}
