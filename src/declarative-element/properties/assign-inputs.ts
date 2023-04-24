import {getObjectTypedKeys} from '@augment-vir/common';
import {property} from 'lit/decorators.js';
import {DeclarativeElement} from '../declarative-element';
import {PropertyInitMapBase} from './element-properties';
import {isElementUpdaterProxy} from './element-updater-proxy';

function extractElementInstanceState(
    /** Marked as partial here so that normal Element instances can also be passed in here. */
    element: Partial<DeclarativeElement>,
): PropertyInitMapBase | undefined {
    const rawInstanceState = element.instanceState;
    if (isElementUpdaterProxy(rawInstanceState)) {
        return rawInstanceState;
    } else {
        return undefined;
    }
}

export function assignInputs(element: Element, inputs: object): void {
    const instanceState = extractElementInstanceState(element);

    getObjectTypedKeys(inputs).forEach((key) => {
        if (instanceState && key in instanceState) {
            throw new Error(
                `Cannot set input '${key}' on '${element.tagName}'. '${element.tagName}' already has a state property with the same name.`,
            );
        }
        /**
         * No need to check if it's already a property or not, as the property function already
         * makes that check.
         */
        property()(element, key);
        if ('instanceInputs' in element) {
            (element.instanceInputs as DeclarativeElement['instanceInputs'])[key] = inputs[key];
        } else {
            element[key] = inputs[key];
        }
    });
    markInputsAsHavingBeenSet(element);
}

export function markInputsAsHavingBeenSet(element: Element): void {
    if (!(element as DeclarativeElement).haveInputsBeenSet) {
        (element as DeclarativeElement).haveInputsBeenSet = true;
    }
}
