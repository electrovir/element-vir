import {collapseWhiteSpace} from '@augment-vir/common';
import type {TemplateResult} from 'lit';
import type {unsafeHTML, unsafeSVG} from '../../built-in-lit-directives';

export function templateToString(
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

    if ((!strings || !strings?.length) && (!values || !values.length)) {
        return '';
    }

    const valueList = [
        ...(values || []),
        '', // this last empty string is so it's easier to deal with indexes
    ];
    const stringsList = strings ?? [''];

    const all = stringsList.map((stringValue, index) => {
        const value = extractValue(stringValue, valueList[index]);
        return `${stringValue}${value}`;
    });

    return collapseWhiteSpace(all.join(''));
}

function extractValue(previousString: string, value: any) {
    if (value._$litType$ != undefined || value._$litDirective$ != undefined) {
        // nested templates
        return templateToString(value);
    } else if (Array.isArray(value)) {
        // array of strings or templates.
        const values = value.map((innerValue) => templateToString(innerValue));
        return values.join('');
    } else {
        if (previousString.endsWith('=')) {
            return `"${value}"`;
        } else {
            return value;
        }
    }
}
