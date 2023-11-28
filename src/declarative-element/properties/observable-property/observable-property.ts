import {defineShape, isValidShape, unknownShape} from 'object-shape-tester';
import {PropertyInitMapBase} from '../element-properties';

export type ObservablePropListener<T> = (value: T) => void;

export type ObservablePropListenerMap<OriginalPropertyMap extends PropertyInitMapBase> = Partial<
    Record<keyof OriginalPropertyMap, ObservablePropListener<any> | undefined>
>;

export type ObservableProp<ValueType> = {
    /** Add the given listener. */
    addListener(listener: ObservablePropListener<ValueType>): boolean;
    /** Remove the given listener by reference. */
    removeListener(listener: ObservablePropListener<ValueType>): boolean;

    value: ValueType;
};

export const basicObservablePropShape = defineShape<ObservableProp<any>>({
    addListener() {
        return false;
    },
    removeListener() {
        return false;
    },
    value: unknownShape(),
});

export function isObservableProp<ValueType = unknown>(
    input: unknown,
): input is ObservableProp<ValueType> {
    return isValidShape(input, basicObservablePropShape, {allowExtraKeys: true});
}
