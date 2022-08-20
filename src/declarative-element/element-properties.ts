import {DeclarativeElement} from './declarative-element';

export type PropertyInitMapBase = Record<PropertyKey, unknown>;

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
    propKey: any,
    element: DeclarativeElement,
    elementTagName: string,
): asserts propKey is keyof PropertyInitGeneric {
    if (typeof propKey !== 'string' && typeof propKey !== 'number' && typeof propKey !== 'symbol') {
        throw new Error(
            `Property name must be a string, got type "${typeof propKey}" from: "${String(
                propKey,
            )}" for ${elementTagName.toLowerCase()}`,
        );
    }
    if (!(propKey in element)) {
        throw new Error(
            `Property "${String(propKey)}" does not exist on ${elementTagName.toLowerCase()}.`,
        );
    }
}

export function createElementUpdaterProxy<PropertyInitGeneric extends PropertyInitMapBase>(
    element: DeclarativeElement,
    verifyExists: boolean,
): PropertyInitGeneric {
    /**
     * Lit element updates state and inputs by setting them directly on the element, so we must do
     * that here. DeclarativeElement's types, however, do not expose this behavior, so we add that
     * back in here.
     */
    const elementAsProps = element as DeclarativeElement & PropertyInitGeneric;

    const propsProxy = new Proxy(
        {},
        {
            get: (_target, propertyName: keyof PropertyInitGeneric | symbol) => {
                if (verifyExists) {
                    assertValidPropertyName(propertyName, element, element.tagName);
                }
                return elementAsProps[propertyName];
            },
            set: (_target, propertyName: keyof PropertyInitGeneric | symbol, value) => {
                if (verifyExists) {
                    assertValidPropertyName(propertyName, element, element.tagName);
                }
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
