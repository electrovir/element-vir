import {CSSResultGroup} from '../../lit-exports';
import {MinimalElementDefinition, isMinimalElementDefinition} from '../minimal-element-definition';
import {TemplateTransform, ValueTransformCallback, transformTemplate} from '../transform-template';

function transformCss(
    ...[
        lastNewString,
        currentLitString,
        currentValue,
    ]: Parameters<ValueTransformCallback>
): ReturnType<ValueTransformCallback> {
    if (!isMinimalElementDefinition(currentValue)) {
        return undefined;
    }

    return {
        replacement: currentValue.tagName,
        getExtraValues: undefined,
    };
}

export function transformCssTemplate(
    inputTemplateStrings: TemplateStringsArray,
    inputValues: (number | CSSResultGroup | MinimalElementDefinition)[],
): TemplateTransform {
    return transformTemplate(inputTemplateStrings, inputValues, transformCss);
}
