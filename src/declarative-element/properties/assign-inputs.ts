import {getObjectTypedKeys} from '@augment-vir/common';
import {property} from 'lit/decorators.js';
import {DeclarativeElement} from '../declarative-element';

export function assignInputs(element: Element, inputs: object): void {
    getObjectTypedKeys(inputs).forEach((key) => {
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
