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

function isCustomElementTag(input: string): boolean {
    if (input.includes('</') && !input.trim().endsWith('</')) {
        const customTagName: boolean = !!input.trim().match(/<\/[\n\s]*(?:[^\s\n-]-)+[\s\n]/);
        return customTagName;
    }
    return false;
}

function stringValidator(input: string): void {
    if (functionalElementRequired && isCustomElementTag(input)) {
        throw new Error(
            `Custom element tags must be interpolated from functional elements: ${input}`,
        );
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
