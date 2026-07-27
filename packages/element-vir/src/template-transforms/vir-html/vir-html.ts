import {html as litHtml} from 'lit';
import {type HTMLTemplateResult} from '../../lit-exports/all-lit-exports.js';
import {getTransformedTemplate} from '../transform-template.js';
import {type HtmlInterpolation, type VerifyHtmlValues} from './html-interpolation.js';
import {mapHtmlValues, transformHtmlTemplate} from './html-transform.js';

/**
 * Interprets a template literal as an HTML template which is lazily rendered to the DOM.
 *
 * Wraps lit-html's html tagged template and enables interpolations of
 * `DeclarativeElementDefinition` for tag names.
 *
 * @category Element Definition
 */
export function html<const Values extends HtmlInterpolation[]>(
    inputTemplateStrings: TemplateStringsArray,
    ...inputValues: VerifyHtmlValues<Values>
): HTMLTemplateResult {
    const mappedValues = mapHtmlValues(inputTemplateStrings, inputValues);

    const transformedTemplate = getTransformedTemplate(inputTemplateStrings, mappedValues, () => {
        return transformHtmlTemplate({
            strings: inputTemplateStrings,
            values: mappedValues,
        });
    });

    /**
     * The lit template is built directly from the transformed template so that a discarded lit
     * template and a copy of it aren't allocated on every render.
     */
    return litHtml(transformedTemplate.strings, ...transformedTemplate.values);
}
