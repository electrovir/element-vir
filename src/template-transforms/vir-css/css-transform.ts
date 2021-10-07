import {CSSResultGroup} from 'lit';
import {FunctionalElement} from '../../functional-element/functional-element';
import {ConstructorWithTagName, hasStaticTagName} from '../has-static-tag-name';
import {CheckAndTransform, makeCheckTransform, transformTemplate} from '../transform-template';
export type CssTemplateTransform = {
    templateStrings: TemplateStringsArray;
    valueIndexDeletions: number[];
};

const cssChecksAndTransforms: CheckAndTransform<any>[] = [
    makeCheckTransform(
        'tag name css selector interpolation',
        (lastNewString, currentLitString, currentValue): currentValue is ConstructorWithTagName => {
            return hasStaticTagName(currentValue);
        },
        (input) =>
            // cast is safe because the check method above verifies that this value is a VirElement
            input.tagName,
    ),
];

export function transformCssTemplate(
    inputTemplateStrings: TemplateStringsArray,
    inputValues: (number | CSSResultGroup | FunctionalElement)[],
): CssTemplateTransform {
    return transformTemplate(inputTemplateStrings, inputValues, cssChecksAndTransforms);
}
