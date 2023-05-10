import {getObjectTypedKeys} from '@augment-vir/common';
import {property} from 'lit/decorators.js';
import {DeclarativeElement} from '../declarative-element';

export function assignInputs(element: Element, inputs: object): void {
    const instanceState = (element as Partial<DeclarativeElement>).instanceState;

    getObjectTypedKeys(inputs).forEach((newInputKey) => {
        if (instanceState && newInputKey in instanceState) {
            throw new Error(
                `Cannot set input '${newInputKey}' on '${element.tagName}'. '${element.tagName}' already has a state property with the same name.`,
            );
        }
        /**
         * No need to check if it's already a property or not, as the property function already
         * makes that check.
         */
        property()(element, newInputKey);
        if ('instanceInputs' in element) {
            (element.instanceInputs as DeclarativeElement['instanceInputs'])[newInputKey] =
                inputs[newInputKey];
        } else {
            element[newInputKey] = inputs[newInputKey];
        }
    });

    /** Wipe out all inputs that weren't set to undefined (as expected) */
    if ('instanceInputs' in element) {
        getObjectTypedKeys(element.instanceInputs).forEach((existingKey) => {
            if (!(existingKey in inputs)) {
                (element.instanceInputs as DeclarativeElement['instanceInputs'])[existingKey] =
                    undefined;
            }
        });
    }

    markInputsAsHavingBeenSet(element);
}

export function markInputsAsHavingBeenSet(element: Element): void {
    if (!(element as DeclarativeElement).haveInputsBeenSet) {
        (element as DeclarativeElement).haveInputsBeenSet = true;
    }
}
