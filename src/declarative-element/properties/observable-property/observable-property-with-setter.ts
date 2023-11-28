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
