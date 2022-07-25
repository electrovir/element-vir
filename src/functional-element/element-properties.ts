import {FunctionalElement} from './functional-element';

export type PropertyInitMapBase = Record<string, unknown>;

export type ElementProperty<KeyGeneric extends string | number | symbol, ValueGeneric> = {
    name: KeyGeneric;
    setProp(value: ValueGeneric): void;
    getProp(): ValueGeneric;
};

export type StaticElementPropertyDescriptor<PropName extends string, PropValue> = {
    propName: PropName;
    initValue: PropValue;
};

export type ElementPropertyDescriptorMap<PropertyInitGeneric extends PropertyInitMapBase> = {
    [Property in keyof PropertyInitGeneric]: StaticElementPropertyDescriptor<
        string,
        PropertyInitGeneric[Property]
    >;
};

function assertValidPropertyName<PropertyInitGeneric extends PropertyInitMapBase>(
    propertyName: any,
    propsInitMap: PropertyInitGeneric,
    elementTagName: string,
): asserts propertyName is keyof PropertyInitGeneric {
    if (typeof propertyName !== 'string') {
        throw new Error(
            `Property name must be a string, got type "${typeof propertyName}" from: "${String(
                propertyName,
            )}" for ${elementTagName.toLowerCase()}`,
        );
    }
    if (!(propertyName in propsInitMap)) {
        throw new Error(
            `Property name "${propertyName}" does not exist on ${elementTagName.toLowerCase()}.`,
        );
    }
}

export function createElementUpdaterProxy<PropertyInitGeneric extends PropertyInitMapBase>(
    element: FunctionalElement,
    propsInitMap: PropertyInitGeneric = {} as PropertyInitGeneric,
): PropertyInitGeneric {
    /**
     * List updates props by setting them directly on the element, so we must do that here.
     * FunctionalElement's types, however, do not expose this behavior, so we add that back in here.
     */
    const elementAsProps = element as FunctionalElement & PropertyInitGeneric;

    const propsProxy = new Proxy(
        {},
        {
            get: (_target, propertyName: keyof PropertyInitGeneric | symbol) => {
                assertValidPropertyName(propertyName, propsInitMap, element.tagName);
                return elementAsProps[propertyName];
            },
            set: (_target, propertyName: keyof PropertyInitGeneric | symbol, value) => {
                assertValidPropertyName(propertyName, propsInitMap, element.tagName);
                elementAsProps[propertyName] = value;
                return true;
            },
        },
    );

    return propsProxy as PropertyInitGeneric;
}

export function createPropertyDescriptorMap<PropertyInitGeneric extends PropertyInitMapBase>(
    propertyInit: PropertyInitGeneric | undefined,
): ElementPropertyDescriptorMap<PropertyInitGeneric> {
    if (!propertyInit) {
        return {} as ElementPropertyDescriptorMap<PropertyInitGeneric>;
    }
    return Object.keys(propertyInit)
        .filter((key): key is string => {
            if (typeof key === 'string') {
                return true;
            } else {
                throw new Error(`Property init cannot have non string keys: "${key}"`);
            }
        })
        .reduce(
            (
                accum: ElementPropertyDescriptorMap<PropertyInitGeneric>,
                currentKey: keyof PropertyInitGeneric,
            ): ElementPropertyDescriptorMap<PropertyInitGeneric> => {
                accum[currentKey] = {
                    propName: currentKey as keyof PropertyInitGeneric extends string
                        ? keyof PropertyInitGeneric
                        : never,
                    initValue: propertyInit[currentKey],
                };
                return accum;
            },
            {} as ElementPropertyDescriptorMap<PropertyInitGeneric>,
        );
}
