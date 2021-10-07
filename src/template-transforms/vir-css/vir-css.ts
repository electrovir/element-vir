import {css as litCss, CSSResult, CSSResultGroup} from 'lit';
import {FunctionalElement} from '../../functional-element/functional-element';
import {getTransformedTemplate} from '../transform-template';
import {transformCssTemplate} from './css-transform';

export function css(
    inputTemplateStrings: TemplateStringsArray,
    ...inputValues: (number | CSSResultGroup | FunctionalElement)[]
): CSSResult {
    const transformedTemplate = getTransformedTemplate(inputTemplateStrings, inputValues, () => {
        return transformCssTemplate(inputTemplateStrings, inputValues);
    });

    const cssResult = litCss(
        transformedTemplate.strings,
        /** The filter will remove the FunctionalElement elements */
        ...(transformedTemplate.values as (number | CSSResultGroup)[]),
    );
    return cssResult;
}
