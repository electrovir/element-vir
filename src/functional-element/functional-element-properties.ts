import {InputName, InputObject} from '../vir-html/element-input';
export type PropertyInitMap = Record<InputName, unknown>;

export type FunctionalElementPropertyMap<PropertyInitGeneric extends PropertyInitMap> = {
    [Property in keyof PropertyInitGeneric]: ElementProperty<
        Property,
        PropertyInitGeneric[Property]
    >;
};

export type ElementProperty<KeyGeneric extends string | number | symbol, ValueGeneric> = {
    name: KeyGeneric;
    setProp(value: ValueGeneric): void;
    getProp(): ValueGeneric;
};

export type InputPropertyMap<PropertyInitGeneric extends PropertyInitMap> = Record<
    keyof PropertyInitGeneric,
    InputObject
>;
