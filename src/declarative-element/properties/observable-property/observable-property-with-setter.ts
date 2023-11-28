import {referenceEqualityCheck} from '../../../util/equality';
import {ObservableProp, ObservablePropListener} from './observable-property';

export type SetterObservableProp<ValueType> = ObservableProp<ValueType> & {
    setValue(newValue: ValueType): void;
};

/**
 * Easy and quick way to create an ObservableProp. Includes a setValue method with equality checking
 * for easily emitting changes.
 */
export function createSetterObservableProp<ValueType>(
    initValue: ValueType,
    equalityCallback = referenceEqualityCheck,
): SetterObservableProp<ValueType> {
    const listeners = new Set<ObservablePropListener<ValueType>>();

    function fireListeners() {
        listeners.forEach((listener) => listener(observableProperty.value));
    }

    const observableProperty: SetterObservableProp<ValueType> = {
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
