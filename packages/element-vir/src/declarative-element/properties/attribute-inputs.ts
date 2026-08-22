import {kebabCaseToCamelCase} from '@augment-vir/common';
import {assignInput} from './assign-inputs.js';

function getPrototypePropertyNames(prototype: object | null): ReadonlyArray<string> {
    return prototype && prototype !== Object.prototype
        ? [
              ...Object.getOwnPropertyNames(prototype),
              ...getPrototypePropertyNames(Object.getPrototypeOf(prototype)),
          ]
        : [];
}

const lowerCasedNativeHtmlPropertyNames = new Set(
    /** Allow this file to be executed even when inside non-browser environments. */
    typeof HTMLElement === 'undefined'
        ? []
        : getPrototypePropertyNames(HTMLElement.prototype).map((propertyName) => {
              return propertyName.toLowerCase();
          }),
);

/** Matches `defineElement`'s native `HTMLElement` input restriction at runtime. */
function isBlockedHtmlAttributeInputName(inputName: string) {
    return (
        inputName === 'class' ||
        (typeof HTMLElement !== 'undefined' && inputName in HTMLElement.prototype) ||
        lowerCasedNativeHtmlPropertyNames.has(inputName.toLowerCase())
    );
}

/** Assigns a host attribute's string value to its matching camel-cased element input. */
export function assignInputFromAttribute({
    attributeName,
    element,
}: Readonly<{
    attributeName: string;
    element: Element;
}>) {
    const inputName = kebabCaseToCamelCase(attributeName);
    if (isBlockedHtmlAttributeInputName(inputName)) {
        return;
    }

    const attributeValue = element.getAttribute(attributeName);
    assignInput({
        element,
        inputKey: inputName,
        value: attributeValue ?? undefined,
    });
}

/** Assigns every eligible host attribute to its matching camel-cased element input. */
export function assignInputsFromAttributes({
    element,
}: Readonly<{
    element: Element;
}>) {
    element.getAttributeNames().forEach((attributeName) => {
        assignInputFromAttribute({
            attributeName,
            element,
        });
    });
}
