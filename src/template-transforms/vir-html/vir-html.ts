import {html as litHtml, HTMLTemplateResult} from 'lit';
import {getTransformedTemplate} from '../transform-template';
import {transformHtmlTemplate} from './html-transform';

/** Enables interpolation of FunctionalElement tag names */
export function html(
    inputTemplateStrings: TemplateStringsArray,
    ...inputValues: unknown[]
): HTMLTemplateResult {
    const litTemplate = litHtml(inputTemplateStrings, ...inputValues);
    const transformedTemplate = getTransformedTemplate(inputTemplateStrings, inputValues, () => {
        return transformHtmlTemplate(litTemplate);
    });

    const htmlTemplate: HTMLTemplateResult = {
        ...litTemplate,
        strings: transformedTemplate.strings,
        values: transformedTemplate.values,
    };

    return htmlTemplate;
}
