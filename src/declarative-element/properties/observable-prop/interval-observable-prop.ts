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
    /** Interval duration in Milliseconds. */
    intervalMs: number;
};

export type IntervalObservableProp<ValueType, UpdateInputType> = Omit<
    UpdatableObservableProp<ValueType, UpdateInputType>,
    'triggerUpdate'
> & {
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
};

export function createIntervalObservableProp<ValueType, UpdateInputType = undefined>(
    setup: IntervalObservablePropSetup<ValueType, UpdateInputType>,
): IntervalObservableProp<ValueType, UpdateInputType> {
    let latestInputs = setup.initInput;
    const baseObservableProp = createUpdatableObservableProp(setup);
    let latestIntervalId: number | undefined = undefined;

    function updateValue(inputs?: UpdateInputType): ValueType {
        if (inputs) {
            latestInputs = inputs;
        }
        return baseObservableProp.triggerUpdate(latestInputs);
    }

    const shouldRunInterval: boolean = !!setup.intervalMs && setup.intervalMs !== Infinity;

    function resumeInterval() {
        if (shouldRunInterval && latestIntervalId == undefined) {
            latestIntervalId = window.setInterval(() => {
                updateValue();
            }, setup.intervalMs);
        }
    }

    resumeInterval();

    const observablePropertyWithInterval: IntervalObservableProp<ValueType, UpdateInputType> =
        Object.assign(baseObservableProp, {
            forceUpdate: updateValue as UpdaterCallback<ValueType, UpdateInputType>,
            pauseInterval() {
                if (latestIntervalId != undefined) {
                    window.clearInterval(latestIntervalId);
                    latestIntervalId = undefined;
                }
            },
            resumeInterval,
        });

    return observablePropertyWithInterval;
}
