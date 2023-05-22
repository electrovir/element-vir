import {property} from 'lit/decorators.js';
import {DeclarativeElement} from '../declarative-element';
import {PropertyInitMapBase} from './element-properties';
import {
    isObservablePropertyHandlerCreator,
    isObservablePropertyHandlerInstance,
} from './observable-property/observable-property-handler';

function assertValidPropertyName<PropertyInitGeneric extends PropertyInitMapBase>(
    propKey: any,
    element: DeclarativeElement,
    elementTagName: string,
): asserts propKey is keyof PropertyInitGeneric {
    if (typeof propKey !== 'string' && typeof propKey !== 'number' && typeof propKey !== 'symbol') {
        throw new Error(
            `Property name must be a string, got type '${typeof propKey}' from: '${String(
                propKey,
            )}' for '${elementTagName.toLowerCase()}'`,
        );
    }
    if (!(propKey in element)) {
        throw new Error(
            `Property '${String(propKey)}' does not exist on '${elementTagName.toLowerCase()}'.`,
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

    function verifyProperty(propertyKey: PropertyKey) {
        if (verifyExists) {
            assertValidPropertyName(propertyKey, element, element.tagName);
        } else {
            /**
             * No need to check if it's already a property or not, as the property function already
             * makes that check.
             */
            property()(element, propertyKey);
        }
    }

    function valueGetter(target: any, propertyKey: keyof PropertyInitGeneric | symbol) {
        verifyProperty(propertyKey);

        return elementAsProps[propertyKey];
    }

    const propsProxy = new Proxy({} as Record<PropertyKey, unknown>, {
        get: valueGetter,
        set: (target, propertyKey: keyof PropertyInitGeneric | symbol, newValue) => {
            verifyProperty(propertyKey);

            const existingObservablePropertyHandler =
                element.observablePropertyHandlerMap[propertyKey];

            function setValueOnElement(value: typeof newValue) {
                /**
                 * We need to at least set the property on target so we can detect it in "ownKeys"
                 * and "getOwnPropertyDescriptor". We don't need duplicates of the values stored in
                 * target but doing so makes console logging more effective it actually works).
                 */
                target[propertyKey] = value;
                elementAsProps[propertyKey] = value;
            }

            if (isObservablePropertyHandlerCreator(newValue)) {
                newValue = newValue.init();
            }

            /** If we're using an existing observable property */
            if (isObservablePropertyHandlerInstance(newValue)) {
                if (
                    existingObservablePropertyHandler &&
                    newValue !== existingObservablePropertyHandler
                ) {
                    newValue.addMultipleListeners(
                        existingObservablePropertyHandler.getAllListeners(),
                    );
                    /** Remove listeners from old property handlers so they can be garbage collected. */
                    existingObservablePropertyHandler.removeAllListeners();
                } else {
                    newValue.addListener(true, (newObservableValue) => {
                        setValueOnElement(newObservableValue);
                    });
                }

                element.observablePropertyHandlerMap[propertyKey] = newValue;
            } else {
                if (existingObservablePropertyHandler) {
                    existingObservablePropertyHandler.setValue(newValue);
                } else {
                    setValueOnElement(newValue);
                }
            }

            return true;
        },
        ownKeys: (target) => {
            return Reflect.ownKeys(target);
        },
        getOwnPropertyDescriptor(target, propertyName) {
            if (propertyName in target) {
                return {
                    get value() {
                        return valueGetter(target, propertyName);
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
