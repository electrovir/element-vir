export type PropertyInitMap = Record<string | number | symbol, unknown>;

export type FunctionalElementPropertyMap<PropertyInitGeneric extends object> = {
    [Property in keyof PropertyInitGeneric]: FunctionalElementProperty<
        Property,
        PropertyInitGeneric[Property]
    >;
};

export type FunctionalElementProperty<KeyGeneric extends string | number | symbol, ValueGeneric> = {
    name: KeyGeneric;
    setProp(value: ValueGeneric): void;
    getProp(): ValueGeneric;
};
