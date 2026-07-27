import {getObjectTypedKeys} from '@augment-vir/common';
import {type DeclarativeElement} from '../declarative-element.js';

/**
 * Which of an element's two property maps a value is being written to.
 *
 * @category Internal
 */
export enum ElementPropertyType {
    Input = 'input',
    State = 'state',
}

const collidingPropertyDescriptions: Readonly<Record<ElementPropertyType, string>> = {
    [ElementPropertyType.Input]: 'a state',
    [ElementPropertyType.State]: 'an input',
};

export function createPropertyCollisionError({
    propertyKey,
    propertyType,
    tagName,
}: Readonly<{
    propertyKey: PropertyKey;
    propertyType: ElementPropertyType;
    tagName: string;
}>) {
    const lowerCasedTagName = tagName.toLowerCase();

    return new Error(
        `Cannot set ${propertyType} '${String(propertyKey)}' on '${lowerCasedTagName}'. '${lowerCasedTagName}' already has ${collidingPropertyDescriptions[propertyType]} property with the same name.`,
    );
}

export function assignInputs(element: Element, inputs: object): void {
    const instanceState = (element as Partial<DeclarativeElement>).instanceState;
    const newInputKeys = getObjectTypedKeys(inputs);

    /** Validate every key first so that a collision leaves the element untouched. */
    newInputKeys.forEach((newInputKey) => {
        if (instanceState && Object.hasOwn(instanceState, newInputKey)) {
            throw createPropertyCollisionError({
                propertyKey: newInputKey,
                propertyType: ElementPropertyType.Input,
                tagName: element.tagName,
            });
        }
    });

    newInputKeys.forEach((newInputKey) => {
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
}
