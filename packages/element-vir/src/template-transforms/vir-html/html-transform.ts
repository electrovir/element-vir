/* eslint-disable @typescript-eslint/no-deprecated */

import {check} from '@augment-vir/assert';
import {getOrSet} from '@augment-vir/common';
import {assign} from '../../declarative-element/directives/assign.directive.js';
import {type HTMLTemplateResult} from '../../lit-exports/all-lit-exports.js';
import {
    type MinimalElementDefinition,
    hasTagName,
    isMinimalDefinitionWithInputs,
} from '../minimal-element-definition.js';
import {type TemplateTransform} from '../template-transform-type.js';
import {type ValueTransformCallback, transformTemplate} from '../transform-template.js';
import {type HtmlInterpolation} from './html-interpolation.js';
import {tagNameKeys} from './tag-name-keys.js';

export function mapHtmlValues(
    inputTemplateStrings: TemplateStringsArray,
    inputValues: HtmlInterpolation[],
): HtmlInterpolation[] {
    return inputValues.map((currentValue, currentValueIndex): HtmlInterpolation => {
        const lastString = inputTemplateStrings[currentValueIndex];
        const nextString = inputTemplateStrings[currentValueIndex + 1];

        /** Only a string can be an interpolated tag name, and this runs on every render. */
        if (lastString && nextString && check.isString(currentValue)) {
            const {shouldHaveTagNameHere} = classifyValue({
                lastNewString: lastString,
                currentTemplateString: nextString,
            });

            if (shouldHaveTagNameHere) {
                const replacement: MinimalElementDefinition = {
                    tagName: currentValue,
                    tagInterpolationKey: getOrSet(tagNameKeys, currentValue, () => {
                        return {
                            tagName: currentValue,
                        };
                    }),
                };

                return replacement;
            }
        }

        return currentValue;
    });
}

/** Characters that are allowed to directly follow an interpolated opening tag name. */
const openingTagNameFollower = /^[\s>/]/;
/** An interpolated closing tag name must be followed by the tag's `>`. */
const closingTagNameFollower = /^\s*>/;

function classifyValue({
    lastNewString,
    currentTemplateString,
}: Readonly<{
    lastNewString: string;
    currentTemplateString: string;
}>) {
    /** Only the end of this string is ever checked, so only its end needs trimming. */
    const trimmedLastNewString = lastNewString.trimEnd();
    const isOpeningTag =
        trimmedLastNewString.endsWith('<') && openingTagNameFollower.test(currentTemplateString);
    const isClosingTag =
        trimmedLastNewString.endsWith('</') && closingTagNameFollower.test(currentTemplateString);
    const shouldHaveTagNameHere: boolean = isOpeningTag || isClosingTag;

    return {
        isOpeningTag,
        shouldHaveTagNameHere,
    };
}

function transformHtml(
    ...[
        lastNewString,
        currentTemplateString,
        rawCurrentValue,
    ]: Parameters<ValueTransformCallback>
): ReturnType<ValueTransformCallback> {
    const currentValue = isMinimalDefinitionWithInputs(rawCurrentValue)
        ? rawCurrentValue.definition
        : rawCurrentValue;

    const {isOpeningTag, shouldHaveTagNameHere} = classifyValue({
        lastNewString,
        currentTemplateString,
    });
    const isTagNameWrapper = hasTagName(currentValue);

    if (isTagNameWrapper && shouldHaveTagNameHere && currentValue.tagInterpolationKey) {
        return {
            replacement: currentValue.tagName,
            getExtraValues: undefined,
        };
    } else if (shouldHaveTagNameHere && !isTagNameWrapper) {
        console.error({
            lastNewString,
            currentTemplateString,
            currentValue,
        });
        throw new Error(
            `Got interpolated tag name but found no tag name on the given value: '${
                (currentValue as any)?.tagName ||
                (currentValue as any)?.prototype?.constructor?.name ||
                (currentValue as any)?.constructor?.name
            }'`,
        );
    } else if (!shouldHaveTagNameHere || !isTagNameWrapper) {
        return undefined;
    } else {
        return {
            replacement: currentValue.tagName,
            getExtraValues(extraValueCurrentValue) {
                const assignedInputs = isMinimalDefinitionWithInputs(extraValueCurrentValue)
                    ? extraValueCurrentValue.inputs
                    : undefined;

                return [
                    isOpeningTag && assignedInputs ? assign(assignedInputs) : undefined,
                ].filter(check.isTruthy);
            },
        };
    }
}

export function transformHtmlTemplate(
    litTemplate: Readonly<Pick<HTMLTemplateResult, 'strings' | 'values'>>,
): TemplateTransform {
    return transformTemplate({
        inputTemplateStrings: litTemplate.strings,
        inputValues: litTemplate.values,
        transformValue: transformHtml,
    });
}
