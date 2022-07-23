import {assert} from '@open-wc/testing';

export function assertInstanceOf<T>(
    value: unknown,
    constructor: new (...args: any) => T,
    message?: string,
): asserts value is T {
    assert.instanceOf(value, constructor, message);
}
