import {assert} from '@open-wc/testing';
import {ensureInstanceOf, NonEmptyString} from './type';

describe('nonEmptyString', () => {
    it('should ensure type safety', () => {
        // NonEmptyString
        const emptyString = '';
        // @ts-expect-error
        const nonEmptyString: NonEmptyString<'something'> = emptyString;
        const nonEmptyString2: NonEmptyString<'something'> = nonEmptyString;

        // @ts-expect-error
        const nonSomethingString: NonEmptyString<'something'> = 'derp';
        const somethingString: NonEmptyString<'something'> = 'something';
    });
});

describe(ensureInstanceOf.name, () => {
    it('should propagate types correctly', () => {
        const testObject: unknown = new RegExp('');

        ensureInstanceOf(testObject, RegExp);
        // this should not throw type errors
        testObject.exec('');
    });

    it('should throw an error when the instance is wrong', () => {
        const testObject: unknown = '';

        assert.throws(() => ensureInstanceOf(testObject, RegExp), TypeError);
    });
});
