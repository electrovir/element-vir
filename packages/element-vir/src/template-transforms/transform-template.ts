import {type ArrayInsertion, insertAndRemoveValues} from '../util/array.js';
import {getAlreadyMappedTemplate, setMappedTemplate} from './nested-mapped-templates.js';
import {type AllValueTransforms, type TemplateTransform} from './template-transform-type.js';

export type ValueInsertion = {
    index: number;
    value: unknown;
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

export type TransformTemplateParams<PossibleValues> = Readonly<{
    inputTemplateStrings: TemplateStringsArray;
    inputValues: PossibleValues[];
    transformValue: ValueTransformCallback;
    assertValidString?: ((templateStringPart: string) => void) | undefined;
}>;

export function transformTemplate<PossibleValues>({
    inputTemplateStrings,
    inputValues,
    transformValue,
    assertValidString,
}: TransformTemplateParams<PossibleValues>): TemplateTransform {
    const newStrings: string[] = [];
    const newRaws: string[] = [];
    const valueIndexDeletions: AllValueTransforms['valueIndexDeletions'] = [];
    const valueTransforms: ((values: unknown[]) => ArrayInsertion<unknown>)[] = [];

    inputTemplateStrings.forEach((currentTemplateString, currentTemplateStringIndex) => {
        const lastNewStringsIndex = newStrings.length - 1;
        const lastNewString = newStrings[lastNewStringsIndex];
        const currentValueIndex = currentTemplateStringIndex - 1;
        const currentValue = inputValues[currentValueIndex];
        const currentRawLitString =
            inputTemplateStrings.raw[currentTemplateStringIndex] ?? currentTemplateString;

        if (assertValidString) {
            assertValidString(currentTemplateString);
        }

        const transformOutput: ReturnType<ValueTransformCallback> =
            typeof lastNewString === 'string'
                ? transformValue(lastNewString, currentTemplateString, currentValue)
                : undefined;

        if (!transformOutput) {
            newStrings.push(currentTemplateString);
            newRaws.push(currentRawLitString);
            return;
        }

        newStrings[lastNewStringsIndex] = [
            lastNewString,
            transformOutput.replacement,
        ].join('');
        newRaws[lastNewStringsIndex] = [
            newRaws[lastNewStringsIndex],
            transformOutput.replacement,
        ].join('');
        valueIndexDeletions.push(currentValueIndex);
        const getExtraValuesCallback = transformOutput.getExtraValues;
        const extraValues = getExtraValuesCallback ? getExtraValuesCallback(currentValue) : [];

        if (extraValues.length && getExtraValuesCallback) {
            newStrings[lastNewStringsIndex] += ' ';
            newRaws[lastNewStringsIndex] += ' ';
            extraValues.forEach((value, index) => {
                // don't insert the first time, we need n-1 inserts
                if (index) {
                    newStrings.push(' ');
                    newRaws.push(' ');
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
            newRaws.push(currentRawLitString);
        } else {
            newStrings[lastNewStringsIndex] += currentTemplateString;
            newRaws[lastNewStringsIndex] += currentRawLitString;
        }
    });

    const newTemplateStrings: TemplateStringsArray = Object.assign([], newStrings, {
        raw: newRaws,
    });

    return {
        templateStrings: newTemplateStrings,
        valuesTransform(values): AllValueTransforms {
            const insertions: ArrayInsertion<unknown>[] = valueTransforms.flatMap(
                (transformCallback) => transformCallback(values),
            );

            return {
                valueIndexDeletions,
                valueInsertions: insertions,
            };
        },
    };
}
