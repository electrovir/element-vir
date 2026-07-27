import {check} from '@augment-vir/assert';
import {filterMap, getOrSet} from '@augment-vir/common';
import {
    canHoldProperties,
    hasTagName,
    isMinimalDefinitionWithInputs,
} from './minimal-element-definition.js';
import {type TemplateTransform} from './template-transform-type.js';
import {tagNameKeys} from './vir-html/tag-name-keys.js';

type WeakMapElementKey = {
    tagName: string;
};

/**
 * DOM nodes have a `tagName` but never contribute to a template transform, so keying the cache on
 * them would create an unbounded entry per node instance.
 */
function isDomNode(value: unknown): boolean {
    return canHoldProperties(value) && check.isNumber(value.nodeType);
}

type TemplateAndNested = {
    template: TemplateTransform | undefined;
    nested: NestedTemplatesWeakMap | undefined;
};
type NestedTemplatesWeakMap = WeakMap<WeakMapElementKey, TemplateAndNested>;
type TemplatesWeakMap = WeakMap<TemplateStringsArray, TemplateAndNested>;

function extractElementKeys(values: unknown[]): WeakMapElementKey[] {
    return filterMap(
        values,
        (value): WeakMapElementKey | undefined => {
            if (isMinimalDefinitionWithInputs(value)) {
                return value.definition;
            } else if (!hasTagName(value) || isDomNode(value)) {
                return undefined;
            } else if (value.tagInterpolationKey) {
                return value.tagInterpolationKey;
            } else if (check.isFunction(value)) {
                return value;
            } else {
                /**
                 * Any other object that merely carries a tag name gets a key shared by tag name so
                 * that the cache is not defeated by a new object on every render.
                 */
                return getOrSet(tagNameKeys, value.tagName, () => {
                    return {
                        tagName: value.tagName,
                    };
                });
            }
        },
        check.isTruthy,
    );
}

/**
 * The transformed templates are written to a map so that we can preserve reference equality between
 * calls. Without maintaining reference equality between html`` calls, lit-element reconstructs all
 * of its children on every render.
 *
 * This is a WeakMap because we only care about the transformed array value as long as the original
 * template array key exists.
 */
const transformedTemplateStrings: TemplatesWeakMap = new WeakMap();

export function getAlreadyMappedTemplate<PossibleValues>(
    templateStringsKey: TemplateStringsArray,
    values: PossibleValues[],
) {
    /**
     * This runs on every render, so the maps are walked directly instead of through the wrapper
     * objects that {@link setNestedValues} needs for its failure reasons.
     */
    return extractElementKeys(values).reduce(
        (parent: TemplateAndNested | undefined, elementKey) => {
            return parent?.nested?.get(elementKey);
        },
        transformedTemplateStrings.get(templateStringsKey),
    )?.template;
}

export function setMappedTemplate<PossibleValues>(
    templateStringsKey: TemplateStringsArray,
    values: PossibleValues[],
    valueToSet: TemplateTransform,
) {
    const elementKeys = extractElementKeys(values);
    return setNestedValues({
        map: transformedTemplateStrings,
        keys: [
            templateStringsKey,
            ...elementKeys,
        ],
        valueToSet,
    });
}

function getCurrentKeyAndValue(
    map: TemplatesWeakMap | NestedTemplatesWeakMap,
    keys: (TemplateStringsArray | WeakMapElementKey)[],
    index: number,
): {
    currentKey: TemplateStringsArray | WeakMapElementKey | undefined;
    currentTemplateAndNested: TemplateAndNested | undefined;
    reason: string;
} {
    const currentKey = keys[index];
    if (currentKey == undefined) {
        return {
            currentKey: undefined,
            currentTemplateAndNested: undefined,
            reason: `key at index ${index} not found`,
        };
    }

    const currentTemplateAndNested = map.get(currentKey as any);
    if (!currentTemplateAndNested) {
        return {
            currentKey,
            currentTemplateAndNested: undefined,
            reason: `key at index ${index} was not in the map`,
        };
    }

    return {
        currentKey,
        currentTemplateAndNested,
        reason: 'key and value exists',
    };
}

function setNestedValues({
    map,
    keys,
    valueToSet,
    index = 0,
}: Readonly<{
    map: TemplatesWeakMap | NestedTemplatesWeakMap;
    keys: (TemplateStringsArray | WeakMapElementKey)[];
    valueToSet: TemplateTransform;
    index?: number | undefined;
}>): {result: boolean; reason: string} {
    const {currentTemplateAndNested, currentKey, reason} = getCurrentKeyAndValue(map, keys, index);
    if (!currentKey) {
        return {
            result: false,
            reason,
        };
    }

    const nestedAndTemplate = currentTemplateAndNested ?? {
        nested: undefined,
        template: undefined,
    };
    if (!currentTemplateAndNested) {
        map.set(currentKey as any, nestedAndTemplate);
    }

    if (index === keys.length - 1) {
        nestedAndTemplate.template = valueToSet;
        return {
            result: true,
            reason: 'set value at end of keys array',
        };
    }

    const nestedWeakMap = nestedAndTemplate.nested ?? new WeakMap();

    if (!nestedAndTemplate.nested) {
        nestedAndTemplate.nested = nestedWeakMap;
    }

    return setNestedValues({
        map: nestedWeakMap,
        keys,
        valueToSet,
        index: index + 1,
    });
}
