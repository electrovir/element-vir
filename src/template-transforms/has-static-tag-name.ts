import {typedHasProperty} from '@augment-vir/common';

export type ConstructorWithTagName = Function & {tagName: string};

export function hasStaticTagName(value: unknown): value is ConstructorWithTagName {
    return (
        typedHasProperty(value, 'tagName') &&
        typeof value.tagName === 'string' &&
        value.tagName.includes('-')
    );
}
