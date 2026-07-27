import {type ObservableListener, isObservableBase} from 'observavir';
import {property} from '../../lit-exports/base-lit-exports.js';
import {type DeclarativeElement} from '../declarative-element.js';
import {ElementPropertyType, createPropertyCollisionError} from './assign-inputs.js';
import {type PropertyInitMapBase} from './element-properties.js';

/**
 * Used for a map of all observables registered to an element instance.
 *
 * @category Internal
 */
export type ObservableListenerMap<OriginalPropertyMap extends PropertyInitMapBase> = Partial<
    Record<keyof OriginalPropertyMap, ObservableListener<any> | undefined>
>;

/**
 * Binds the given property key as a reactive property on the given element.
 *
 * @category Internal
 */
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
    if (!(propKey in element)) {
        throw new Error(
            `Property '${String(propKey)}' does not exist on '${elementTagName.toLowerCase()}'.`,
        );
    }
}

/**
 * Creates an internal proxy for setting inputs and state properties and then updating them on the
 * element itself so they will trigger lit's change detection.
 *
 * @category Internal
 */
export function createElementPropertyProxy<PropertyInitGeneric extends PropertyInitMapBase>(
    element: DeclarativeElement,
    shouldAlreadyExist: boolean,
): PropertyInitGeneric {
    /**
     * Lit element updates state and inputs by setting them directly on the element, so we must do
     * that here. DeclarativeElement's types, however, do not expose this behavior, so we add that
     * back in here.
     */
    const elementAsProps = element as DeclarativeElement & PropertyInitGeneric;

    function assertPropertyIsReadable(propertyKey: PropertyKey) {
        if (shouldAlreadyExist) {
            assertValidPropertyName(propertyKey, element, element.tagName);
        }
    }

    function valueGetter(target: any, propertyKey: keyof PropertyInitGeneric | symbol) {
        assertPropertyIsReadable(propertyKey);

        return elementAsProps[propertyKey];
    }

    function setValue(
        target: Record<PropertyKey, unknown>,
        propertyKey: keyof PropertyInitGeneric | symbol,
        newValue: any,
    ) {
        /**
         * The inputs and state proxies write to the same element properties, so a key used by both
         * would silently overwrite the other.
         */
        if (
            (element.instanceInputs as object | undefined) !== propsProxy &&
            Object.hasOwn(element.instanceInputs, propertyKey)
        ) {
            throw createPropertyCollisionError({
                propertyKey,
                propertyType: ElementPropertyType.State,
                tagName: element.tagName,
            });
        }

        return writeValue(target, propertyKey, newValue);
    }

    /** Skips the collision check: clearing a colliding key must not be blocked by the collision. */
    function writeValue(
        target: Record<PropertyKey, unknown>,
        propertyKey: keyof PropertyInitGeneric | symbol,
        newValue: any,
    ) {
        assertPropertyIsReadable(propertyKey);
        if (!shouldAlreadyExist) {
            bindReactiveProperty(element, propertyKey);
        }

        const oldValue = elementAsProps[propertyKey];

        const existingPropertyListener: ObservableListener<any> | undefined =
            element.observablePropertyListenerMap[propertyKey];

        if (oldValue !== newValue && isObservableBase(oldValue) && existingPropertyListener) {
            /** Stop listening to the old value now that we have a new value */
            oldValue.removeListener(existingPropertyListener);
        }

        if (isObservableBase(newValue)) {
            /** If we're using an existing observable property */
            if (existingPropertyListener) {
                newValue.listen(false, existingPropertyListener);
            } else {
                function newListener() {
                    element.requestUpdate();
                }
                element.observablePropertyListenerMap[propertyKey] = newListener;
                newValue.listen(false, newListener);
            }
        } else if (isObservableBase(oldValue)) {
            /** Clear out old listener that is no longer used. */
            delete element.observablePropertyListenerMap[propertyKey];
        }

        /**
         * We need to at least set the property on target so we can detect it in "ownKeys" and
         * "getOwnPropertyDescriptor". We don't need duplicates of the values stored in target but
         * doing so makes console logging more effective it actually works).
         */
        target[propertyKey] = newValue;
        elementAsProps[propertyKey] = newValue;

        return true;
    }

    const propsProxy = new Proxy({} as Record<PropertyKey, unknown>, {
        get: valueGetter,
        set: setValue,
        deleteProperty(target, propertyKey: keyof PropertyInitGeneric | symbol) {
            /**
             * Lit's reactive property accessors live on the element's prototype so the value must
             * be cleared rather than deleted.
             */
            writeValue(target, propertyKey, undefined);

            return Reflect.deleteProperty(target, propertyKey);
        },
        ownKeys(target) {
            return Reflect.ownKeys(target);
        },
        getOwnPropertyDescriptor(target, propertyName) {
            if (propertyName in target) {
                /**
                 * A data descriptor rather than an accessor: every render spreads these proxies for
                 * `_lastRenderedProps`, which reads each value immediately anyway.
                 */
                return {
                    value: valueGetter(target, propertyName),
                    configurable: true,
                    enumerable: true,
                    writable: true,
                };
            }

            return undefined;
        },
        has(target, propertyName) {
            /** Match "get", which always reads from the element itself. */
            return Reflect.has(target, propertyName) || Reflect.has(element, propertyName);
        },
    });

    return propsProxy as PropertyInitGeneric;
}
