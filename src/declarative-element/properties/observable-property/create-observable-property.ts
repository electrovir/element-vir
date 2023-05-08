import {
    ObservablePropertyHandlerInstance,
    observablePropertyHandlerInstanceMarkerKey,
    ObservablePropertyListener,
} from './observable-property-handler';

export function createObservableProperty<ValueType>(
    initValue: ValueType,
): ObservablePropertyHandlerInstance<ValueType, ValueType> {
    const listeners = new Set<ObservablePropertyListener<ValueType>>();
    let value: ValueType = initValue;

    function fireListeners() {
        listeners.forEach((listener) => listener(value));
    }

    const propertyHandler: ObservablePropertyHandlerInstance<ValueType, ValueType> = {
        [observablePropertyHandlerInstanceMarkerKey]: true,
        setValue(newValue) {
            if (value !== newValue) {
                value = newValue;
                fireListeners();
            }
        },
        getValue() {
            return value;
        },
        addListener(fireImmediately, listener) {
            listeners.add(listener);
            if (fireImmediately) {
                listener(value);
            }
        },
        removeListener(listener) {
            return listeners.delete(listener);
        },
        removeAllListeners() {
            const size = listeners.size;
            listeners.clear();
            return size;
        },
        getAllListeners() {
            return listeners;
        },
        addMultipleListeners(newListeners) {
            newListeners.forEach((listener) => listeners.add(listener));
        },
    };

    return propertyHandler;
}
