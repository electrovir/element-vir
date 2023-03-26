import {CSSResult, CSSResultGroup, css as litCss} from 'lit';
import {DeclarativeElementDefinition} from '../../declarative-element/declarative-element';
import {getTransformedTemplate} from '../transform-template';
import {transformCssTemplate} from './css-transform';

export function css(
    inputTemplateStrings: TemplateStringsArray,
    ...inputValues: (number | CSSResultGroup | DeclarativeElementDefinition)[]
): CSSResult {
    const transformedTemplate = getTransformedTemplate(inputTemplateStrings, inputValues, () => {
        return transformCssTemplate(inputTemplateStrings, inputValues);
    });

    const cssResult = litCss(
        transformedTemplate.strings,
        /** The filter will remove the DeclarativeElement elements */
        ...(transformedTemplate.values as (number | CSSResultGroup)[]),
    );
    return cssResult;
}
