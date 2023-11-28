import {
    UpdatableObservableProp,
    UpdatableObservablePropSetup,
    UpdaterCallback,
    createUpdatableObservableProp,
} from './updatable-observable-prop';

export type IntervalObservablePropSetup<ValueType, UpdateInputType> = UpdatableObservablePropSetup<
    ValueType,
    UpdateInputType
> & {
    /** Update interval. */
    updateInterval: {milliseconds: number};
    /**
     * If set to true, the interval observable prop will not automatically start its internal
     * interval.
     */
    startPaused?: boolean | undefined;
};

export type IntervalObservableProp<ValueType, UpdateInputType> = Omit<
    UpdatableObservableProp<ValueType, UpdateInputType>,
    'triggerUpdate'
> & {
    /** Manually force the observable prop to update outside of its normal interval. */
    forceUpdate: UpdaterCallback<ValueType, UpdateInputType>;
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

    function updateValue(newInputs?: UpdateInputType): ValueType {
        if (newInputs) {
            latestInputs = newInputs;
        }
        return baseObservableProp.triggerUpdate(latestInputs);
    }

    const shouldRunInterval: boolean =
        !!setup.updateInterval.milliseconds && setup.updateInterval.milliseconds !== Infinity;

    function resumeInterval() {
        if (shouldRunInterval && latestIntervalId == undefined) {
            latestIntervalId = window.setInterval(() => {
                updateValue();
            }, setup.updateInterval.milliseconds);
        }
    }

    if (!setup.startPaused) {
        resumeInterval();
    }

    function pauseInterval() {
        if (latestIntervalId != undefined) {
            window.clearInterval(latestIntervalId);
            latestIntervalId = undefined;
        }
    }

    const observablePropertyWithInterval: IntervalObservableProp<ValueType, UpdateInputType> =
        Object.assign(baseObservableProp, {
            forceUpdate: updateValue as UpdaterCallback<ValueType, UpdateInputType>,
            pauseInterval,
            resumeInterval,
            destroy: pauseInterval,
        });

    return observablePropertyWithInterval;
}
