import {referenceEqualityCheck} from '../../../util/equality';
import {ObservableProp} from './observable-prop';
import {createSetterObservableProp} from './setter-observable-prop';

/** Function for updating the `UpdatableObservableProp`. */
export type UpdaterFunction<ValueType, UpdateInputType> = Exclude<
    UpdateInputType,
    undefined
> extends never
    ? /** If `UpdateInputType` is undefined, then we omit the inputs entirely. */
      () => ValueType
    : (inputs: UpdateInputType) => ValueType;

export type UpdatableObservableProp<ValueType, UpdateInputType> = ObservableProp<
    ValueType | Awaited<ValueType>
> & {
    /**
     * Trigger the `UpdatableObservableProp` to update itself. Requires the inputs that the
     * observable prop's updateCallback require.
     */
    triggerUpdate: UpdaterFunction<ValueType, UpdateInputType>;
    /**
     * The last value that was resolved. This will be undefined if there has never, so far, been a
     * resolved value.
     */
    latestResolvedValue: ValueType extends Promise<any>
        ? Awaited<ValueType> | undefined
        : ValueType;
};

/** Setup required for creating an `UpdatableObservableProp`. */
export type UpdatableObservablePropSetup<ValueType, UpdateInputType> = {
    /** Initial value for the observable prop. */
    initInput: UpdateInputType;
    /** The callback which will be called in order to update the observable prop. */
    updateCallback: UpdaterFunction<ValueType, UpdateInputType>;
    /**
     * The function used to determine if a new value is actually new. Defaults to simple reference
     * equality.
     */
    equalityCallback?: typeof referenceEqualityCheck | undefined;
};

/**
 * An ObservableProp that requires an updater callback on setup. Future updates then call this
 * updater callback rather than directly setting a value (`SetterObservableProp` merely sets a
 * value).
 */
export function createUpdatableObservableProp<ValueType, UpdateInputType = undefined>(
    /** Setup object required for creating the UpdatableObservableProp. */
    setup: UpdatableObservablePropSetup<ValueType, UpdateInputType>,
): UpdatableObservableProp<ValueType, UpdateInputType> {
    const areEqual = setup.equalityCallback ?? referenceEqualityCheck;

    const innerSimpleObservableProp = createSetterObservableProp(undefined as ValueType, areEqual);

    function updateValue(inputs: UpdateInputType): Promise<ValueType> | ValueType {
        const newValue = setup.updateCallback(inputs);

        if (newValue instanceof Promise) {
            const wrappedPromise = new Promise<ValueType>(async (resolve, reject) => {
                try {
                    const resolvedValue = await newValue;
                    observableWithUpdater.latestResolvedValue =
                        resolvedValue as UpdatableObservableProp<
                            ValueType,
                            UpdateInputType
                        >['latestResolvedValue'];

                    innerSimpleObservableProp.setValue(resolvedValue);

                    resolve(resolvedValue);
                } catch (error) {
                    reject(error);
                }
            });

            /** Set the promise so consumers know it's loading. */
            innerSimpleObservableProp.setValue(wrappedPromise as ValueType);

            return wrappedPromise;
        } else {
            innerSimpleObservableProp.setValue(newValue);
            observableWithUpdater.latestResolvedValue = newValue as UpdatableObservableProp<
                ValueType,
                UpdateInputType
            >['latestResolvedValue'];

            return newValue;
        }
    }

    const observableWithUpdater: UpdatableObservableProp<ValueType, UpdateInputType> =
        Object.assign(innerSimpleObservableProp, {
            triggerUpdate: updateValue as UpdaterFunction<ValueType, UpdateInputType>,
            latestResolvedValue: undefined as UpdatableObservableProp<
                ValueType,
                UpdateInputType
            >['latestResolvedValue'],
        });

    updateValue(setup.initInput);

    return observableWithUpdater;
}
