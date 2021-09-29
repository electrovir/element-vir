import {HTMLTemplateResult} from 'lit';
import {InputObject} from './element-input';

export type HtmlTemplateTransform = {
    templateStrings: TemplateStringsArray;
    valueIndexDeletions: number[];
};

type ValueTransform = (value: unknown) => unknown;

type ConstructorWithTagName = Function & {tagName: string};

function hasStaticTagName(currentValue: unknown): currentValue is ConstructorWithTagName {
    return typeof currentValue == 'function' && currentValue.hasOwnProperty('tagName');
}

type Checker<T> = {
    check: (
        lastNewString: string,
        currentLitString: string,
        currentValue: unknown,
    ) => currentValue is T;
    transform: (value: T) => unknown;
    name: string;
};

function makeCheckTransform<T>(
    name: string,
    check: (
        lastNewString: string,
        currentLitString: string,
        currentValue: unknown,
    ) => currentValue is T,
    transform: (value: T) => unknown,
): Checker<T> {
    return {
        name,
        check,
        transform,
    };
}

const checksAndTransforms: Checker<any>[] = [
    makeCheckTransform(
        'tag name interpolation',
        (lastNewString, currentLitString, currentValue): currentValue is ConstructorWithTagName => {
            const shouldHaveTagNameHere: boolean =
                (lastNewString.trim().endsWith('<') && !!currentLitString.match(/^[\s\n>]/)) ||
                (lastNewString?.trim().endsWith('</') && currentLitString.trim().startsWith('>'));
            const staticTagName = hasStaticTagName(currentValue);

            if (shouldHaveTagNameHere && !staticTagName) {
                console.error({
                    lastNewString,
                    currentLitString,
                    currentValue,
                });
                throw new Error(
                    `Got interpolated tag name but it wasn't of type VirElement: ${
                        (currentValue as any).prototype.constructor.name
                    }`,
                );
            }

            return shouldHaveTagNameHere && staticTagName;
        },
        (input) =>
            // cast is safe because the check method above verifies that this value is a VirElement
            input.tagName,
    ),
    makeCheckTransform(
        'property input name interpolation',
        (lastNewString, currentLitString, currentValue): currentValue is InputObject => {
            const surroundingsMatch = !!(
                lastNewString.endsWith('.') && currentLitString.startsWith('=')
            );
            const hasInputName = !!(currentValue as InputObject).inputName;

            if (hasInputName == undefined) {
                throw new Error(
                    `Tried to interpolate input from "${currentValue}" which lacked an inputName property. Surrounding text: "${lastNewString}", "${currentLitString}"`,
                );
            }

            return surroundingsMatch && hasInputName;
        },
        (input) => {
            return input.inputName;
        },
    ),
];

function isCustomElementTag(input: string): boolean {
    if (input.includes('</') && !input.trim().endsWith('</')) {
        const customTagName: boolean = !!input.trim().match(/<\/[\n\s]*(?:[^\s\n-]-)+[\s\n]/);
        return customTagName;
    }
    return false;
}

function stringValidator(input: string): void {
    if (isCustomElementTag(input)) {
        throw new Error(`Tags must be interpolated from their element class: ${input}`);
    }
}

export function transformTemplate(litTemplate: HTMLTemplateResult): HtmlTemplateTransform {
    const newStrings: string[] = [];
    const newRaws: string[] = [];
    const valueDeletions: number[] = [];

    litTemplate.strings.forEach((currentLitString, index) => {
        const lastNewStringsIndex = newStrings.length - 1;
        const lastNewString = newStrings[lastNewStringsIndex];
        const currentValueIndex = index - 1;
        const currentValue = litTemplate.values[currentValueIndex];
        let validTransform: ValueTransform | undefined;

        stringValidator(currentLitString);

        if (typeof lastNewString === 'string') {
            validTransform = checksAndTransforms.find((checkAndTransform) => {
                return checkAndTransform.check(lastNewString, currentLitString, currentValue);
            })?.transform;

            if (validTransform) {
                newStrings[lastNewStringsIndex] =
                    lastNewString + validTransform(currentValue) + currentLitString;
                valueDeletions.push(currentValueIndex);
            }
        }
        if (!validTransform) {
            newStrings.push(currentLitString);
        }

        const currentRawLitString = litTemplate.strings.raw[index]!;
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
