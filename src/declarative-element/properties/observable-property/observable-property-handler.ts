import {typedHasProperty} from '@augment-vir/common';
import {PropertyInitMapBase} from '../element-properties';

export const observablePropertyHandlerMarkerKey =
    '_is_element_vir_observable_property_handler' as const;

export type ObservablePropertyListener<T> = (value: T) => void;

export type ObservablePropertyHandlerMap<OriginalPropertyMap extends PropertyInitMapBase> = Partial<
    Record<keyof OriginalPropertyMap, ObservablePropertyHandler<any, any>>
>;

export type AllowObservablePropertySetter<OriginalPropertyMap extends PropertyInitMapBase> = {
    [Prop in keyof OriginalPropertyMap]:
        | OriginalPropertyMap[Prop]
        | ObservablePropertyHandler<any, Required<OriginalPropertyMap>[Prop]>;
};

export type FlattenObservablePropertyGetters<OriginalPropertyMap extends PropertyInitMapBase> = {
    [Prop in keyof OriginalPropertyMap]: OriginalPropertyMap[Prop] extends ObservablePropertyHandler<
        infer SetValue,
        infer GetValue
    >
        ? GetValue
        : Exclude<OriginalPropertyMap[Prop], ObservablePropertyHandler<any, any>>;
};

export type FlattenObservablePropertySetters<OriginalPropertyMap extends PropertyInitMapBase> = {
    [Prop in keyof OriginalPropertyMap]: OriginalPropertyMap[Prop] extends ObservablePropertyHandler<
        infer SetValue,
        infer GetValue
    >
        ? SetValue
        : Exclude<OriginalPropertyMap[Prop], ObservablePropertyHandler<any, any>>;
};

export type ObservablePropertyHandler<SetValue, GetValue> = {
    [observablePropertyHandlerMarkerKey]: true;
    setValue(input: SetValue): void;
    getValue(): GetValue;
    /** Add the given listener. */
    addListener(fireImmediately: boolean, listener: ObservablePropertyListener<GetValue>): void;
    /**
     * Remove the given listener by reference. If the listener indeed existed and was removed, this
     * function will return true. Otherwise, it returns false.
     */
    removeListener(listener: ObservablePropertyListener<GetValue>): boolean;
    /** Remove all previously added listeners. Returns the number of listeners removed. */
    removeAllListeners(): number;
    /**
     * Get all currently attached listeners. This is used to attach listeners when a new handler
     * needs to replace the current handler.
     */
    getAllListeners(): ReadonlySet<ObservablePropertyListener<GetValue>>;
    addMultipleListeners(listeners: ReadonlySet<ObservablePropertyListener<GetValue>>): void;
};

export function isObservablePropertyHandler(
    input: unknown,
): input is ObservablePropertyHandler<any, any> {
    return (
        typedHasProperty(input, observablePropertyHandlerMarkerKey) &&
        input[observablePropertyHandlerMarkerKey] === true
    );
}
