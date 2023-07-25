import {defineShape, isValidShape, unknownShape} from 'object-shape-tester';
import {PropertyInitMapBase} from '../element-properties';

export type ObservablePropertyListener<T> = (value: T) => void;

export type ObservablePropertyListenerMap<OriginalPropertyMap extends PropertyInitMapBase> =
    Partial<Record<keyof OriginalPropertyMap, ObservablePropertyListener<any> | undefined>>;

export type ObservableProperty<ValueType> = {
    /** Add the given listener. */
    addListener(listener: ObservablePropertyListener<ValueType>): boolean;
    /** Remove the given listener by reference. */
    removeListener(listener: ObservablePropertyListener<ValueType>): boolean;

    value: ValueType;
};

export const basicObservablePropertyShape = defineShape<ObservableProperty<any>>({
    addListener() {
        return false;
    },
    removeListener() {
        return false;
    },
    value: unknownShape(),
});

export function isObservableProperty<ValueType = unknown>(
    input: unknown,
): input is ObservableProperty<ValueType> {
    return isValidShape(input, basicObservablePropertyShape, {allowExtraKeys: true});
}
