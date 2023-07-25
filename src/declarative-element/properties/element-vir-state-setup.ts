import {isObject} from '@augment-vir/common';
import {PropertyInitMapBase} from './element-properties';

export type ElementVirStateSetup<InnerValue> = {
    _elementVirStateSetup(): InnerValue;
};

const checkKey: keyof ElementVirStateSetup<unknown> = '_elementVirStateSetup';

export function isElementVirStateSetup<T = unknown>(
    input: unknown,
): input is ElementVirStateSetup<T> {
    if (!isObject(input)) {
        return false;
    }

    return checkKey in input;
}

export type FlattenElementVirStateSetup<OriginalObject extends PropertyInitMapBase> = {
    [Prop in keyof OriginalObject]: Extract<
        OriginalObject[Prop],
        ElementVirStateSetup<any>
    > extends never
        ? OriginalObject[Prop]
        : Extract<OriginalObject[Prop], ElementVirStateSetup<any>> extends ElementVirStateSetup<
              infer InnerValue
          >
        ? InnerValue | Exclude<OriginalObject[Prop], ElementVirStateSetup<any>>
        : OriginalObject[Prop];
};

export type AllowElementVirStateSetup<
    OriginalObject extends PropertyInitMapBase,
    CurrentType extends Record<keyof OriginalObject, unknown>,
> = {
    [Prop in keyof CurrentType]: Extract<
        OriginalObject[Prop],
        ElementVirStateSetup<any>
    > extends never
        ? OriginalObject[Prop]
        : Extract<OriginalObject[Prop], ElementVirStateSetup<any>> extends ElementVirStateSetup<
              infer SetValue
          >
        ? CurrentType[Prop] extends ElementVirStateSetup<SetValue>
            ? CurrentType[Prop]
            : SetValue
        : OriginalObject[Prop];
};
