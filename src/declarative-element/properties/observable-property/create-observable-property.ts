import {referenceEqualityCheck} from '../../../util/equality';
import {ObservableProperty, ObservablePropertyListener} from './observable-property';

export type ObservablePropertyWithSetter<ValueType> = ObservableProperty<ValueType> & {
    setValue(newValue: ValueType): void;
};

/**
 * Easy and quick way to create an ObservableProperty. Includes a setValue method with equality
 * checking for easily emitting changes.
 */
export function createObservablePropertyWithSetter<ValueType>(
    initValue: ValueType,
    equalityCallback = referenceEqualityCheck,
): ObservablePropertyWithSetter<ValueType> {
    const listeners = new Set<ObservablePropertyListener<ValueType>>();

    function fireListeners() {
        listeners.forEach((listener) => listener(observableProperty.value));
    }

    const observableProperty: ObservablePropertyWithSetter<ValueType> = {
        value: initValue,
        setValue(newValue) {
            if (!equalityCallback(observableProperty.value, newValue)) {
                observableProperty.value = newValue;
                fireListeners();
            }
        },
        addListener(listener) {
            const shouldAddListener = !listeners.has(listener);

            if (shouldAddListener) {
                listeners.add(listener);
            }

            return shouldAddListener;
        },
        removeListener(listener) {
            return listeners.delete(listener);
        },
    };

    return observableProperty;
}

export type UpdaterCallback<ValueType, UpdateInputType> = Exclude<
    UpdateInputType,
    undefined
> extends never
    ? () => ValueType
    : (inputs: UpdateInputType) => ValueType;

export type ObservablePropertyWithUpdaterCallback<ValueType, UpdateInputType> =
    ObservableProperty<ValueType> & {
        triggerUpdate: UpdaterCallback<ValueType, UpdateInputType>;
    };

export type ObservablePropertyWithUpdaterSetup<ValueType, UpdateInputType> = {
    initInput: UpdateInputType;
    updateCallback: UpdaterCallback<ValueType, UpdateInputType>;
    equalityCallback?: typeof referenceEqualityCheck | undefined;
};

export function createObservablePropertyWithUpdater<ValueType, UpdateInputType = undefined>(
    setup: ObservablePropertyWithUpdaterSetup<ValueType, UpdateInputType>,
): ObservablePropertyWithUpdaterCallback<ValueType, UpdateInputType> {
    const areEqual = setup.equalityCallback ?? referenceEqualityCheck;

    const innerSimpleObservableProperty = createObservablePropertyWithSetter(
        setup.updateCallback(setup.initInput),
        areEqual,
    );

    function updateValue(inputs: UpdateInputType): Promise<ValueType> | ValueType {
        const newValue = setup.updateCallback(inputs);

        if (newValue instanceof Promise) {
            return new Promise<ValueType>(async (resolve, reject) => {
                try {
                    const resolvedValue = await newValue;

                    innerSimpleObservableProperty.setValue(resolvedValue);

                    resolve(resolvedValue);
                } catch (error) {
                    reject(error);
                }
            });
        } else {
            innerSimpleObservableProperty.setValue(newValue);

            return newValue;
        }
    }

    const observableWithUpdater: ObservablePropertyWithUpdaterCallback<ValueType, UpdateInputType> =
        Object.assign(innerSimpleObservableProperty, {
            triggerUpdate: updateValue as UpdaterCallback<ValueType, UpdateInputType>,
        });

    return observableWithUpdater;
}

export type ObservablePropertyWithIntervalSetup<ValueType, UpdateInputType> =
    ObservablePropertyWithUpdaterSetup<ValueType, UpdateInputType> & {
        /** Interval duration in Milliseconds. */
        intervalMs: number;
    };

export type ObservablePropertyWithInterval<ValueType, UpdateInputType> =
    ObservableProperty<ValueType> & {
        forceUpdate: UpdaterCallback<ValueType, UpdateInputType>;
        /**
         * Pauses the update interval, if it isn't already paused. Use .resumeInterval() to start
         * the interval again. Under the hood, this actually clears the interval entirely.
         */
        pauseInterval(): void;
        /**
         * Resumes the update interval if it was paused. Under the hood, this creates a new interval
         * entirely, as .pauseInterval() actually clears it.
         */
        resumeInterval(): void;
    };

export function createObservablePropertyWithIntervalUpdate<ValueType, UpdateInputType = undefined>(
    setup: ObservablePropertyWithIntervalSetup<ValueType, UpdateInputType>,
): ObservablePropertyWithInterval<ValueType, UpdateInputType> {
    let latestInputs = setup.initInput;
    const baseObservableProperty = createObservablePropertyWithUpdater(setup);
    let latestIntervalId: number | undefined = undefined;

    function updateValue(inputs?: UpdateInputType): ValueType {
        if (inputs) {
            latestInputs = inputs;
        }
        return baseObservableProperty.triggerUpdate(latestInputs);
    }

    function resumeInterval() {
        if (latestIntervalId == undefined) {
            latestIntervalId = window.setInterval(() => {
                updateValue();
            }, setup.intervalMs);
        }
    }

    resumeInterval();

    const observablePropertyWithInterval: ObservablePropertyWithInterval<
        ValueType,
        UpdateInputType
    > = Object.assign(baseObservableProperty, {
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
