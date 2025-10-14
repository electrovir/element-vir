import {arrayToObject, type ArrayElement} from '@augment-vir/common';
import {type CustomElementTagName} from '../custom-tag-name.js';

/**
 * Base requirement for all string names with the element tag name prepended.
 *
 * @category Internal
 */
export type BaseStringName<ElementTagName extends CustomElementTagName> =
    `${ElementTagName}-${string}`;

/**
 * Asserts that all the given string names for the given element are valid.
 *
 * @category Internal
 */
export function assertValidStringNames(
    elementTagName: CustomElementTagName,
    stringNames: Record<BaseStringName<CustomElementTagName>, any>,
): void {
    const requiredNameStart = [
        elementTagName,
        '-',
    ].join('');

    Object.keys(stringNames).forEach((stringName) => {
        if (!stringName.startsWith(requiredNameStart)) {
            throw new Error(
                `Invalid element string name '${stringName}' in '${elementTagName}': element string names must begin with the element's tag name.`,
            );
        }
    });
}

/**
 * Type safe mapping of string names to themself with the element tag name inserted.
 *
 * @category Internal
 */
export type StringNameMap<
    ElementTagName extends CustomElementTagName,
    NameType extends string,
    StringNames extends ReadonlyArray<string>,
> = Readonly<{
    [StringName in ArrayElement<StringNames>]: `${ElementTagName}-${NameType}-${StringName}`;
}>;

/**
 * Converts an array of string names into a `StringNameMap`.
 *
 * @category Internal
 */
export function createStringNameMap<
    ElementTagName extends CustomElementTagName,
    NameType extends string,
    StringNames extends ReadonlyArray<string>,
>(
    elementTagName: ElementTagName,
    nameType: NameType,
    stringNames: StringNames | undefined,
): StringNameMap<ElementTagName, NameType, StringNames> {
    if (!stringNames) {
        return {} as StringNameMap<ElementTagName, NameType, StringNames>;
    }
    const stringNameMap: Record<string, string> = arrayToObject(
        stringNames,
        (stringName) => {
            return {
                key: stringName,
                value: [
                    elementTagName,
                    nameType,
                    stringName,
                ].join('-'),
            };
        },
        {
            useRequired: true,
        },
    );

    return stringNameMap as StringNameMap<ElementTagName, NameType, StringNames>;
}
