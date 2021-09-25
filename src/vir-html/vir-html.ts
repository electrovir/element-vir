import {html as litHtml, HTMLTemplateResult} from 'lit';
import {deleteArrayIndexes} from '../augments/array';
import {HtmlTemplateTransform, transformTemplate} from './html-transform';

/**
 * The transformed templates are written to a map so that we can preserve reference equality between
 * calls. Without maintaining referenced equality between html`` calls, lit-element reconstructs all
 * of its children on every render.
 *
 * This is a WeakMap because we only care about the transformed array value as long as the original
 * template array key exists.
 */
const transformedTemplateStrings = new WeakMap<TemplateStringsArray, HtmlTemplateTransform>();

/** Enables interpolation of events names */
export function html(
    inputTemplateStrings: TemplateStringsArray,
    ...inputValues: unknown[]
): HTMLTemplateResult {
    const litTemplate = litHtml(inputTemplateStrings, ...inputValues);
    const alreadyTransformedTemplateStrings = transformedTemplateStrings.get(inputTemplateStrings);
    const templateTransform: HtmlTemplateTransform =
        alreadyTransformedTemplateStrings ?? transformTemplate(litTemplate);

    if (!alreadyTransformedTemplateStrings) {
        transformedTemplateStrings.set(inputTemplateStrings, templateTransform);
    }

    const transformedValuesArray = deleteArrayIndexes(
        litTemplate.values,
        templateTransform.valueIndexDeletions,
    );

    const htmlTemplate: HTMLTemplateResult = {
        ...litTemplate,
        strings: templateTransform.templateStrings,
        values: transformedValuesArray,
    };

    return htmlTemplate;
}
