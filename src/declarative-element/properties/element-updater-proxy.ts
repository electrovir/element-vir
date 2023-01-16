import {DeclarativeElement} from '../declarative-element';
import {PropertyInitMapBase} from './element-properties';

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

    const propsProxy = new Proxy({} as Record<PropertyKey, unknown>, {
        get: (target, propertyName: keyof PropertyInitGeneric | symbol) => {
            if (verifyExists) {
                assertValidPropertyName(propertyName, element, element.tagName);
            }

            return elementAsProps[propertyName];
        },
        set: (target, propertyName: keyof PropertyInitGeneric | symbol, newValue) => {
            if (verifyExists) {
                assertValidPropertyName(propertyName, element, element.tagName);
            }
            /**
             * Don't worry about storing the value (no need to have duplicates of teh values) but at
             * least set the property on target so we can detect it in "ownKeys" and
             * "getOwnPropertyDescriptor".
             */
            target[propertyName] = undefined;
            elementAsProps[propertyName] = newValue;

            return true;
        },
        ownKeys: (target) => {
            return Reflect.ownKeys(target);
        },
        getOwnPropertyDescriptor(target, propertyName) {
            if (propertyName in target) {
                return {
                    get value() {
                        return elementAsProps[propertyName];
                    },
                    configurable: true,
                    enumerable: true,
                };
            }

            return undefined;
        },
        has: (target, propertyName) => {
            return Reflect.has(target, propertyName);
        },
    });

    return propsProxy as PropertyInitGeneric;
}
