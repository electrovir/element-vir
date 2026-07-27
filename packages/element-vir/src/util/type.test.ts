import {assert} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import {type NonEmptyString} from './type.js';

describe('nonEmptyString', () => {
    it('ensures type safety', () => {
        const emptyString = '';
        // @ts-expect-error: blocks an empty string
        const nonEmptyString: NonEmptyString<'something'> = emptyString;
        const nonEmptyString2: NonEmptyString<'something'> = nonEmptyString;

        // @ts-expect-error: blocks a string mismatch
        const nonSomethingString: NonEmptyString<'something'> = 'derp';
        const somethingString: NonEmptyString<'something'> = 'something';
    });

    it('collapses the empty string to never', () => {
        assert.tsType<NonEmptyString<''>>().equals<never>();
        assert.tsType<NonEmptyString<never>>().equals<never>();
    });

    it('passes through non-empty-string types', () => {
        assert.tsType<NonEmptyString<'something'>>().equals<'something'>();
        assert.tsType<NonEmptyString<string>>().equals<string>();
        assert.tsType<NonEmptyString<number>>().equals<number>();
    });

    it('distributes over a union, dropping only the empty string', () => {
        assert.tsType<NonEmptyString<'' | 'a'>>().equals<'a'>();
    });
});
