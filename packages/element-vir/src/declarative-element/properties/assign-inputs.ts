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

type ElementWithInstanceInputs = Element & Pick<DeclarativeElement, 'instanceInputs'>;
type ElementWithInstanceState = Element & Pick<DeclarativeElement, 'instanceState'>;

function hasInstanceInputs(element: Element): element is ElementWithInstanceInputs {
    return 'instanceInputs' in element;
}

function hasInstanceState(element: Element): element is ElementWithInstanceState {
    return 'instanceState' in element;
}

function assertInputDoesNotCollide({
    element,
    inputKey,
}: Readonly<{
    element: Element;
    inputKey: PropertyKey;
}>) {
    if (hasInstanceState(element) && Object.hasOwn(element.instanceState, inputKey)) {
        throw createPropertyCollisionError({
            propertyKey: inputKey,
            propertyType: ElementPropertyType.Input,
            tagName: element.tagName,
        });
    }
}

function writeInput({
    element,
    inputKey,
    value,
}: Readonly<{
    element: Element;
    inputKey: PropertyKey;
    value: unknown;
}>) {
    if (hasInstanceInputs(element)) {
        element.instanceInputs[inputKey] = value;
    } else {
        Reflect.set(element, inputKey, value);
    }
}

/** Assigns one input without changing any other input values. */
export function assignInput({
    element,
    inputKey,
    value,
}: Readonly<{
    element: Element;
    inputKey: PropertyKey;
    value: unknown;
}>) {
    assertInputDoesNotCollide({
        element,
        inputKey,
    });
    writeInput({
        element,
        inputKey,
        value,
    });
}

export function assignInputs(element: Element, inputs: object): void {
    const newInputKeys = getObjectTypedKeys(inputs);

    /** Validate every key first so that a collision leaves the element untouched. */
    newInputKeys.forEach((newInputKey) => {
        assertInputDoesNotCollide({
            element,
            inputKey: newInputKey,
        });
    });

    newInputKeys.forEach((newInputKey) => {
        writeInput({
            element,
            inputKey: newInputKey,
            value: inputs[newInputKey],
        });
    });

    /** Wipe out all inputs that weren't set to undefined (as expected) */
    if (hasInstanceInputs(element)) {
        getObjectTypedKeys(element.instanceInputs).forEach((existingKey) => {
            if (!(existingKey in inputs)) {
                writeInput({
                    element,
                    inputKey: existingKey,
                    value: undefined,
                });
            }
        });
    }
}
