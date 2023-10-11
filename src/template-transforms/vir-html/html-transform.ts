import {collapseWhiteSpace, isTruthy, safeMatch} from '@augment-vir/common';
import {assign} from '../../declarative-element/directives/assign.directive';
import {HTMLTemplateResult} from '../../lit-exports';
import {declarativeElementRequired} from '../../require-declarative-element';
import {
    isMinimalElementDefinition,
    isWrappedMinimalDefinition,
} from '../minimal-element-definition';
import {TemplateTransform, ValueTransformCallback, transformTemplate} from '../transform-template';

function transformHtml(
    ...[
        lastNewString,
        currentLitString,
        rawCurrentValue,
    ]: Parameters<ValueTransformCallback>
): ReturnType<ValueTransformCallback> {
    const currentValue = isWrappedMinimalDefinition(rawCurrentValue)
        ? rawCurrentValue.definition
        : rawCurrentValue;

    const isOpeningTag = lastNewString.trim().endsWith('<') && !!currentLitString.match(/^[\s\n>]/);
    const isClosingTag =
        lastNewString?.trim().endsWith('</') && currentLitString.trim().startsWith('>');
    const shouldHaveTagNameHere: boolean = isOpeningTag || isClosingTag;
    const staticTagName = isMinimalElementDefinition(currentValue);

    if (shouldHaveTagNameHere && !staticTagName) {
        console.error({
            lastNewString,
            currentLitString,
            currentValue,
        });
        throw new Error(
            `Got interpolated tag name but found no tag name on the given value: '${
                (currentValue as any).prototype.constructor.name
            }'`,
        );
    }

    if (!shouldHaveTagNameHere || !staticTagName) {
        return undefined;
    }

    const replacement = currentValue.tagName;

    return {
        replacement,
        getExtraValues(extraValueCurrentValue) {
            const assignedInputs = isWrappedMinimalDefinition(extraValueCurrentValue)
                ? extraValueCurrentValue.inputs
                : undefined;

            return [
                isOpeningTag && assignedInputs ? assign(assignedInputs) : undefined,
            ].filter(isTruthy);
        },
    };
}

function extractCustomElementTags(input: string): string[] {
    const tagNameMatches = safeMatch(input, /<\/[\s\n]*[^\s\n><]+[\s\n]*>/g);
    return tagNameMatches.reduce((accum: string[], match) => {
        const tagName = collapseWhiteSpace(match.replace(/\n/g, ' ')).replace(/<\/|>/g, '');
        // custom elements always have a dash in them
        if (tagName.includes('-')) {
            return accum.concat(tagName);
        }
        return accum;
    }, []);
}

function stringValidator(input: string): void {
    if (declarativeElementRequired) {
        const customElementTagNames = extractCustomElementTags(input);
        if (customElementTagNames.length) {
            console.error(
                `Custom element tags must be interpolated from declarative elements: ${customElementTagNames.join(
                    ', ',
                )}`,
            );
        }
    }
}

export function transformHtmlTemplate(litTemplate: HTMLTemplateResult): TemplateTransform {
    return transformTemplate(
        litTemplate.strings,
        litTemplate.values,
        transformHtml,
        stringValidator,
    );
}
