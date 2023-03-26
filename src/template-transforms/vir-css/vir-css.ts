import {CSSResult, CSSResultGroup, css as litCss} from 'lit';
import {ConstructorWithTagName} from '../has-static-tag-name';
import {getTransformedTemplate} from '../transform-template';
import {transformCssTemplate} from './css-transform';

export function css(
    inputTemplateStrings: TemplateStringsArray,
    ...inputValues: (number | CSSResultGroup | ConstructorWithTagName)[]
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
