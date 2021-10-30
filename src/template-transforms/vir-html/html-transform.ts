import {collapseSpaces, safeMatch} from 'augment-vir';
import {HTMLTemplateResult} from 'lit';
import {functionalElementRequired} from '../../require-functional-element';
import {ConstructorWithTagName, hasStaticTagName} from '../has-static-tag-name';
import {
    CheckAndTransform,
    makeCheckTransform,
    TemplateTransform,
    transformTemplate,
} from '../transform-template';

const htmlChecksAndTransforms: CheckAndTransform<any>[] = [
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
];

function extractCustomElementTags(input: string): string[] {
    const tagNameMatches = safeMatch(input, /<\/[\s\n]*[^\s\n><]+[\s\n]*>/g);
    return tagNameMatches.reduce((accum: string[], match) => {
        const tagName = collapseSpaces(match.replace(/\n/g, ' ')).replace(/<\/|>/g, '');
        // custom elements always have a dash in them
        if (tagName.includes('-')) {
            return accum.concat(tagName);
        }
        return accum;
    }, []);
}

function stringValidator(input: string): void {
    if (functionalElementRequired) {
        const customElementTagNames = extractCustomElementTags(input);
        if (customElementTagNames.length) {
            console.error(
                `Custom element tags must be interpolated from functional elements: ${customElementTagNames.join(
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
        htmlChecksAndTransforms,
        stringValidator,
    );
}
