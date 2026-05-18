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
    stringNames: ReadonlyArray<string>,
): void {
    const requiredNameStart = [
        elementTagName,
        '-',
    ].join('');

    stringNames.forEach((stringName) => {
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

/**
 * Map of slot names to their runtime values. Slot names that already start with the element's tag
 * name are kept as-is; legacy slot names without the tag-name prefix are auto-rewritten at runtime
 * to `${ElementTagName}-slot-${Name}` and this type reflects that.
 *
 * @category Internal
 */
export type SlotNamesMap<
    ElementTagName extends string,
    SlotNames extends ReadonlyArray<string>,
> = Readonly<{
    [Name in ArrayElement<SlotNames>]: Name extends `${ElementTagName}-${string}`
        ? Name
        : `${ElementTagName}-slot-${Name}`;
}>;

/**
 * Converts an array of slot names into a {@link SlotNamesMap}.
 *
 * Slot names that start with the element's tag name pass through unchanged. Slot names that do not
 * are transformed into the legacy `${tagName}-slot-${name}` format so existing elements that
 * pre-date the tag prefix convention keep working.
 *
 * @category Internal
 */
export function createSlotNamesMap<
    ElementTagName extends CustomElementTagName,
    SlotNames extends ReadonlyArray<string>,
>(
    elementTagName: ElementTagName,
    slotNames: SlotNames | undefined,
): SlotNamesMap<ElementTagName, SlotNames> {
    if (!slotNames) {
        return {} as SlotNamesMap<ElementTagName, SlotNames>;
    }
    const requiredNameStart = [
        elementTagName,
        '-',
    ].join('');
    const slotNamesMap: Record<string, string> = arrayToObject(
        slotNames,
        (slotName) => {
            const value = slotName.startsWith(requiredNameStart)
                ? slotName
                : [
                      elementTagName,
                      'slot',
                      slotName,
                  ].join('-');
            return {
                key: slotName,
                value,
            };
        },
        {
            useRequired: true,
        },
    );

    return slotNamesMap as SlotNamesMap<ElementTagName, SlotNames>;
}
