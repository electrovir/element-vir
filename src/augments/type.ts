export type NonEmptyString<T> = T extends '' ? never : T;

/**
 * If the given value is not an instance of the given constructor, an error is thrown.
 *
 * This is a variation of assertInstanceOf that can be run in run-time code and doesn't require
 * testing packages.
 */
export function ensureInstanceOf<T>(
    value: unknown,
    constructor: new (...args: any) => T,
    message?: string,
): asserts value is T {
    if (!(value instanceof constructor)) {
        const extraMessage = message ? `: ${message}` : '';
        const errorMessage = `${value} is not an instanceof of ${constructor.name}${extraMessage}`;
        throw new TypeError(errorMessage);
    }
}

export type PickAndBlockOthers<OriginalObject, PickKeys extends keyof OriginalObject> = Pick<
    OriginalObject,
    PickKeys
> &
    Partial<Record<Exclude<keyof OriginalObject, PickKeys>, never>>;

export type RequireNonVoidReturn<NonVoid, ActualType> = void extends NonVoid
    ? NonVoid extends void
        ? 'missing return statement'
        : ActualType
    : ActualType;
