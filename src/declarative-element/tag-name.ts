import {camelCaseToKebabCase} from 'augment-vir';

export type WithTagName<TagName extends string, Suffix extends string> = `${TagName}-${Suffix}`;

export function toHtmlSafeWithTagName<TagName extends string>(
    tagName: TagName,
    forHtmlSafe: string,
): WithTagName<TagName, string> {
    return `${tagName}-${camelCaseToKebabCase(forHtmlSafe)}`;
}
