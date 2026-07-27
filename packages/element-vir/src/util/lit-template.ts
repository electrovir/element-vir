import {check} from '@augment-vir/assert';
import {collapseWhiteSpace} from '@augment-vir/common';
import {
    type TemplateResult,
    type unsafeHTML,
    type unsafeSVG,
} from '../lit-exports/all-lit-exports.js';

/**
 * Converts an HTML or SVG template into a raw string.
 *
 * @category Util
 */
export function convertTemplateToString(
    template:
        | TemplateResult
        | ReturnType<typeof unsafeSVG>
        | ReturnType<typeof unsafeHTML>
        | {templateString: string},
): string {
    if ('templateString' in template) {
        return template.templateString;
    }

    const {strings, values} = template as
        | TemplateResult
        | {
              strings: undefined | string[];
              values: undefined | unknown[];
          };

    if (!strings?.length && !values?.length) {
        return '';
    }

    const valueList = [
        ...(values || []),
        '', // this last empty string is so it's easier to deal with indexes
    ];
    const stringsList = strings?.length ? strings : [''];

    const all = stringsList.map((stringValue, index) => {
        const value = extractValue(stringValue, valueList[index]);
        return `${stringValue}${value}`;
    });

    return collapseWhiteSpace(all.join(''));
}

function extractValue(previousString: string, value: any): string {
    if (value == undefined) {
        /** Lit renders nothing for nullish child values and an empty attribute value. */
        return previousString.endsWith('=') ? '""' : '';
    } else if (
        check.isObject(value) &&
        ('templateString' in value ||
            value._$litType$ != undefined ||
            value._$litDirective$ != undefined)
    ) {
        // nested templates
        return convertTemplateToString(value as TemplateResult);
    } else if (Array.isArray(value)) {
        /** Each entry gets the same treatment a top level value would, as lit does. */
        return value.map((innerValue) => extractValue('', innerValue)).join('');
    } else if (previousString.endsWith('=')) {
        return `"${value}"`;
    } else {
        return String(value);
    }
}
