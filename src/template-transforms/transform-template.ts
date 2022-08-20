import {typedHasOwnProperties} from 'augment-vir';
import {filterOutArrayIndexes} from '../augments/array';
import {FunctionalElementMarkerSymbol} from '../funtional-element-marker-symbol';
import {getAlreadyMappedTemplate, setMappedTemplate} from './nested-mapped-templates';

export type TemplateTransform = {
    templateStrings: TemplateStringsArray;
    valueIndexDeletions: number[];
};

export type ValueTransform = (value: unknown) => unknown;

export type CheckAndTransform<T> = {
    check: (
        lastNewString: string,
        currentLitString: string,
        currentValue: unknown,
    ) => currentValue is T;
    transform: (value: T) => unknown;
    name: string;
};

export function makeCheckTransform<T>(
    name: string,
    check: (
        lastNewString: string,
        currentLitString: string,
        currentValue: unknown,
    ) => currentValue is T,
    transform: (value: T) => unknown,
): CheckAndTransform<T> {
    return {
        name,
        check,
        transform,
    };
}

type WeakMapElementKey = {
    tagName: string;
    [FunctionalElementMarkerSymbol]: true;
};

type NestedTemplatesWeakMap = WeakMap<
    WeakMapElementKey,
    TemplateTransform | NestedTemplatesWeakMap
>;
type TemplatesWeakMap = WeakMap<TemplateStringsArray, TemplateTransform | NestedTemplatesWeakMap>;

/**
 * The transformed templates are written to a map so that we can preserve reference equality between
 * calls. Without maintaining reference equality between html`` calls, lit-element reconstructs all
 * of its children on every render.
 *
 * This is a WeakMap because we only care about the transformed array value as long as the original
 * template array key exists.
 */
const transformedTemplateStrings: TemplatesWeakMap = new WeakMap();

function extractElementValues(values: unknown[]): WeakMapElementKey[] {
    return values.filter((value): value is WeakMapElementKey => {
        return (
            typedHasOwnProperties(value, [
                'tagName',
                FunctionalElementMarkerSymbol,
            ]) &&
            !!value.tagName &&
            !!value[FunctionalElementMarkerSymbol]
        );
    });
}

export function getTransformedTemplate<PossibleValues>(
    templateStringsKey: TemplateStringsArray,
    values: PossibleValues[],
    fallbackTransform: () => TemplateTransform,
) {
    const alreadyTransformedTemplateStrings = getAlreadyMappedTemplate(templateStringsKey, values);

    const templateTransform: TemplateTransform =
        alreadyTransformedTemplateStrings ?? fallbackTransform();

    if (!alreadyTransformedTemplateStrings) {
        const result = setMappedTemplate(templateStringsKey, values, templateTransform);
        console.log('setting');
        if (!result.result) {
            throw new Error(`Failed to set template transform: ${result.reason}`);
        } else {
            transformedTemplateStrings.set(templateStringsKey, templateTransform);
        }
    }

    const transformedValuesArray: PossibleValues[] = filterOutArrayIndexes(
        values,
        templateTransform.valueIndexDeletions,
    ) as PossibleValues[];

    return {strings: templateTransform.templateStrings, values: transformedValuesArray};
}

export function transformTemplate<
    TransformsGeneric extends CheckAndTransform<any>[],
    PossibleValues,
>(
    inputTemplateStrings: TemplateStringsArray,
    inputValues: PossibleValues[],
    checksAndTransforms: TransformsGeneric,
    assertValidString?: (templateStringPart: string) => void,
): TemplateTransform {
    const newStrings: string[] = [];
    const newRaws: string[] = [];
    const valueDeletions: number[] = [];

    inputTemplateStrings.forEach((currentTemplateString, index) => {
        const lastNewStringsIndex = newStrings.length - 1;
        const lastNewString = newStrings[lastNewStringsIndex];
        const currentValueIndex = index - 1;
        const currentValue = inputValues[currentValueIndex];
        let validTransform: ValueTransform | undefined;

        assertValidString && assertValidString(currentTemplateString);

        if (typeof lastNewString === 'string') {
            validTransform = checksAndTransforms.find((checkAndTransform) => {
                return checkAndTransform.check(lastNewString, currentTemplateString, currentValue);
            })?.transform;

            if (validTransform) {
                newStrings[lastNewStringsIndex] =
                    lastNewString + validTransform(currentValue) + currentTemplateString;
                valueDeletions.push(currentValueIndex);
            }
        }
        if (!validTransform) {
            newStrings.push(currentTemplateString);
        }

        const currentRawLitString = inputTemplateStrings.raw[index]!;
        if (validTransform) {
            newRaws[lastNewStringsIndex] =
                newRaws[lastNewStringsIndex]! + validTransform(currentValue) + currentRawLitString;
        } else {
            newRaws.push(currentRawLitString);
        }
    });

    const newTemplateStrings: TemplateStringsArray = Object.assign([], newStrings, {
        raw: newRaws,
    });

    return {
        templateStrings: newTemplateStrings,
        valueIndexDeletions: valueDeletions,
    };
}
