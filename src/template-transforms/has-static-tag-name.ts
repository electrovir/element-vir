export type ConstructorWithTagName = Function & {tagName: string};

export function hasStaticTagName(value: unknown): value is ConstructorWithTagName {
    return (
        typeof value === 'function' &&
        value.hasOwnProperty('tagName') &&
        typeof (value as Function & {tagName: unknown}).tagName === 'string' &&
        (value as Function & {tagName: string}).tagName.includes('-')
    );
}
