import {typedHasProperty} from '@augment-vir/common';
import {PropertyInitMapBase} from '../element-properties';

export const observablePropertyHandlerInstanceMarkerKey =
    '_is_element_vir_observable_property_handler_instance' as const;
export const observablePropertyHandlerCreatorMarkerKey =
    '_is_element_vir_observable_property_handler_creator' as const;

export type ObservablePropertyListener<T> = (value: T) => void;

export type ObservablePropertyHandlerMap<OriginalPropertyMap extends PropertyInitMapBase> = Partial<
    Record<keyof OriginalPropertyMap, ObservablePropertyHandlerInstance<any, any>>
>;

export type AnyObservablePropertyType<SetValue, GetValue> =
    | ObservablePropertyHandlerCreator<SetValue, GetValue>
    | ObservablePropertyHandlerInstance<SetValue, GetValue>;

export type AllowObservablePropertySetter<
    OriginalPropertyMap extends PropertyInitMapBase,
    CurrentType extends Record<keyof OriginalPropertyMap, unknown>,
> = {
    [Prop in keyof CurrentType]: Prop extends keyof OriginalPropertyMap
        ? CurrentType[Prop] extends AnyObservablePropertyType<
              any,
              Required<OriginalPropertyMap>[Prop]
          >
            ? CurrentType[Prop]
            : Required<OriginalPropertyMap>[Prop]
        : never;
};

export type FlattenObservablePropertyGetters<OriginalPropertyMap extends PropertyInitMapBase> = {
    [Prop in keyof OriginalPropertyMap]: Extract<
        OriginalPropertyMap[Prop],
        AnyObservablePropertyType<any, any>
    > extends never
        ? Exclude<OriginalPropertyMap[Prop], AnyObservablePropertyType<any, any>>
        : Extract<
              OriginalPropertyMap[Prop],
              AnyObservablePropertyType<any, any>
          > extends AnyObservablePropertyType<infer SetValue, infer GetValue>
        ? GetValue | Exclude<OriginalPropertyMap[Prop], AnyObservablePropertyType<any, any>>
        : Exclude<OriginalPropertyMap[Prop], AnyObservablePropertyType<any, any>>;
};

export type FlattenObservablePropertySetters<
    OriginalPropertyMap extends PropertyInitMapBase,
    CurrentType extends Record<keyof OriginalPropertyMap, unknown>,
> = {
    [Prop in keyof CurrentType]: Extract<
        OriginalPropertyMap[Prop],
        AnyObservablePropertyType<any, any>
    > extends never
        ? OriginalPropertyMap[Prop]
        : Extract<
              OriginalPropertyMap[Prop],
              AnyObservablePropertyType<any, any>
          > extends AnyObservablePropertyType<infer SetValue, infer GetValue>
        ? CurrentType[Prop] extends AnyObservablePropertyType<SetValue, GetValue>
            ? CurrentType[Prop]
            : SetValue
        : OriginalPropertyMap[Prop];
};

export type ObservablePropertyHandlerCreator<SetValue, GetValue> = {
    [observablePropertyHandlerCreatorMarkerKey]: true;
    init(): ObservablePropertyHandlerInstance<SetValue, GetValue>;
};

export type ObservablePropertyHandlerInstance<SetValue, GetValue> = {
    [observablePropertyHandlerInstanceMarkerKey]: true;
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

export function isObservablePropertyHandlerCreator(
    input: unknown,
): input is ObservablePropertyHandlerCreator<any, any> {
    return (
        typedHasProperty(input, observablePropertyHandlerCreatorMarkerKey) &&
        input[observablePropertyHandlerCreatorMarkerKey] === true
    );
}

export function isObservablePropertyHandlerInstance(
    input: unknown,
): input is ObservablePropertyHandlerInstance<any, any> {
    return (
        typedHasProperty(input, observablePropertyHandlerInstanceMarkerKey) &&
        input[observablePropertyHandlerInstanceMarkerKey] === true
    );
}
