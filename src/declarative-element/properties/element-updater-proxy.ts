import {DeclarativeElement} from '../declarative-element';
import {AsyncStateHandler, AsyncStateInit} from './async-state';
import {PropertyInitMapBase} from './element-properties';

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

    function valueGetter(target: any, propertyKey: keyof PropertyInitGeneric | symbol) {
        if (verifyExists) {
            assertValidPropertyName(propertyKey, element, element.tagName);
        }

        const asyncState = element.asyncStateHandlerMap[propertyKey];

        if (asyncState) {
            return asyncState.getValue();
        } else {
            return elementAsProps[propertyKey];
        }
    }

    const propsProxy = new Proxy({} as Record<PropertyKey, unknown>, {
        get: valueGetter,
        set: (target, propertyKey: keyof PropertyInitGeneric | symbol, newValue) => {
            if (verifyExists) {
                assertValidPropertyName(propertyKey, element, element.tagName);
            }

            /**
             * We need to at least set the property on target so we can detect it in "ownKeys" and
             * "getOwnPropertyDescriptor". We don't need duplicates of the values stored in target
             * but doing so makes console logging more effective it actually works).
             */
            target[propertyKey] = newValue;
            const existingAsyncStateHandler = element.asyncStateHandlerMap[propertyKey];

            // if we're creating a new async prop
            if (newValue instanceof AsyncStateInit) {
                if (existingAsyncStateHandler) {
                    existingAsyncStateHandler.resetValue(newValue);
                } else {
                    const newHandler = new AsyncStateHandler(newValue, (handler) => {
                        // set the prop directly on the element so that lit catches updates
                        (element as DeclarativeElement & PropertyInitGeneric)[propertyKey] =
                            handler.getValue();
                    });
                    element.asyncStateHandlerMap[propertyKey] = newHandler;
                }
            } else {
                if (existingAsyncStateHandler) {
                    existingAsyncStateHandler.setValue(newValue);
                } else {
                    elementAsProps[propertyKey] = newValue;
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
