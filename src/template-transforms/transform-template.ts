import {ArrayInsertion, insertAndRemoveValues} from '../util/array';
import {getAlreadyMappedTemplate, setMappedTemplate} from './nested-mapped-templates';

export type ValueInsertion = {
    index: number;
    value: unknown;
};

export type AllValueTransforms = {
    valueIndexDeletions: number[];
    valueInsertions: ArrayInsertion<unknown>[];
};

export type TemplateTransform = {
    templateStrings: TemplateStringsArray;
    valuesTransform(values: unknown[]): AllValueTransforms;
};

export type ValueTransformCallback = (
    lastNewString: string,
    currentLitString: string,
    currentValue: unknown,
) =>
    | {
          replacement: unknown;
          getExtraValues: ((currentValue: unknown) => unknown[]) | undefined;
      }
    | undefined;

type WeakMapElementKey = {
    tagName: string;
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
        if (!result.result) {
            throw new Error(`Failed to set template transform: ${result.reason}`);
        } else {
            transformedTemplateStrings.set(templateStringsKey, templateTransform);
        }
    }

    const valueTransforms = templateTransform.valuesTransform(values);

    const transformedValuesArray: PossibleValues[] = insertAndRemoveValues(
        values,
        valueTransforms.valueInsertions,
        valueTransforms.valueIndexDeletions,
    ) as PossibleValues[];

    return {
        strings: templateTransform.templateStrings,
        values: transformedValuesArray,
    };
}

export function transformTemplate<PossibleValues>(
    inputTemplateStrings: TemplateStringsArray,
    inputValues: PossibleValues[],
    transformValue: ValueTransformCallback,
    assertValidString?: (templateStringPart: string) => void,
): TemplateTransform {
    const newStrings: string[] = [];
    const newRaws: string[] = [];
    const valueIndexDeletions: AllValueTransforms['valueIndexDeletions'] = [];
    const valueTransforms: ((values: unknown[]) => ArrayInsertion<unknown>)[] = [];

    inputTemplateStrings.forEach((currentTemplateString, currentTemplateStringIndex) => {
        const lastNewStringsIndex = newStrings.length - 1;
        const lastNewString = newStrings[lastNewStringsIndex];
        const currentValueIndex = currentTemplateStringIndex - 1;
        const currentValue = inputValues[currentValueIndex];

        assertValidString && assertValidString(currentTemplateString);

        let transformOutput: ReturnType<ValueTransformCallback> | undefined = undefined;
        let extraValues: unknown[] = [];

        if (typeof lastNewString === 'string') {
            transformOutput = transformValue(lastNewString, currentTemplateString, currentValue);
            if (transformOutput) {
                newStrings[lastNewStringsIndex] = lastNewString + transformOutput.replacement;
                valueIndexDeletions.push(currentValueIndex);
                const getExtraValuesCallback = transformOutput.getExtraValues;
                extraValues = getExtraValuesCallback ? getExtraValuesCallback(currentValue) : [];

                if (extraValues.length && getExtraValuesCallback) {
                    newStrings[lastNewStringsIndex] += ' ';
                    extraValues.forEach((value, index) => {
                        // don't insert the first time, we need n-1 inserts
                        if (index) {
                            newStrings.push(' ');
                        }
                    });
                    valueTransforms.push((values): ArrayInsertion<unknown> => {
                        const latestCurrentValue = values[currentValueIndex];
                        const insertions = getExtraValuesCallback(latestCurrentValue);
                        return {
                            index: currentValueIndex,
                            values: insertions,
                        };
                    });
                    newStrings.push(currentTemplateString);
                } else {
                    newStrings[lastNewStringsIndex] += currentTemplateString;
                }
            }
        }

        if (!transformOutput) {
            newStrings.push(currentTemplateString);
        }

        const currentRawLitString = inputTemplateStrings.raw[currentTemplateStringIndex]!;
        if (transformOutput) {
            newRaws[lastNewStringsIndex] =
                newRaws[lastNewStringsIndex]! + transformOutput.replacement + currentRawLitString;
            if (extraValues.length) {
                extraValues.forEach(() => {
                    newRaws.push('');
                });
            }
        } else {
            newRaws.push(currentRawLitString);
        }
    });

    const newTemplateStrings: TemplateStringsArray = Object.assign([], newStrings, {
        raw: newRaws,
    });

    return {
        templateStrings: newTemplateStrings,
        valuesTransform(values): AllValueTransforms {
            const insertions: ArrayInsertion<unknown>[] = valueTransforms
                .map((transformCallback) => transformCallback(values))
                .flat();

            return {
                valueIndexDeletions,
                valueInsertions: insertions,
            };
        },
    };
}
