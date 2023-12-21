import {property} from '../../lit-exports';
import {DeclarativeElement} from '../declarative-element';
import {PropertyInitMapBase} from './element-properties';
import {isElementVirStateSetup} from './element-vir-state-setup';
import {ObservablePropListener, isObservableProp} from './observable-prop/observable-prop';

/** Binds the given property key as a reactive property on the given element. */
export function bindReactiveProperty(element: HTMLElement, propertyKey: PropertyKey) {
    if (!(propertyKey in element)) {
        property()(element, propertyKey);
    }
}

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
            bindReactiveProperty(element, propertyKey);
        }
    }

    function valueGetter(target: any, propertyKey: keyof PropertyInitGeneric | symbol) {
        verifyProperty(propertyKey);

        return elementAsProps[propertyKey];
    }

    const propsProxy = new Proxy({} as Record<PropertyKey, unknown>, {
        get: valueGetter,
        set(target, propertyKey: keyof PropertyInitGeneric | symbol, rawNewValue) {
            const newValue = isElementVirStateSetup(rawNewValue)
                ? rawNewValue._elementVirStateSetup()
                : rawNewValue;

            verifyProperty(propertyKey);
            const oldValue = elementAsProps[propertyKey];

            function setValueOnElement(value: typeof newValue) {
                /**
                 * We need to at least set the property on target so we can detect it in "ownKeys"
                 * and "getOwnPropertyDescriptor". We don't need duplicates of the values stored in
                 * target but doing so makes console logging more effective it actually works).
                 */
                target[propertyKey] = value;
                elementAsProps[propertyKey] = value;
            }

            const existingPropertyListener: ObservablePropListener<any> | undefined =
                element.observablePropertyListenerMap[propertyKey];

            if (
                oldValue !== newValue &&
                isObservableProp(oldValue) &&
                existingPropertyListener?.length
            ) {
                /** Stop listening to the old value now that we have a new value */
                oldValue.removeListener(existingPropertyListener);
            }

            if (isObservableProp(newValue)) {
                /** If we're using an existing observable property */
                if (existingPropertyListener) {
                    newValue.addListener(existingPropertyListener);
                } else {
                    function newListener() {
                        element.requestUpdate();
                    }
                    element.observablePropertyListenerMap[propertyKey] = newListener;
                    newValue.addListener(newListener);
                }
            } else if (isObservableProp(oldValue)) {
                /** Clear out old listener that is no longer used. */
                element.observablePropertyListenerMap[propertyKey] = undefined;
            }

            setValueOnElement(newValue);

            return true;
        },
        ownKeys(target) {
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
        has(target, propertyName) {
            return Reflect.has(target, propertyName);
        },
    });

    return propsProxy as PropertyInitGeneric;
}
