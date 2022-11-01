import {assertInstanceOf} from './testing.test-helper';

describe(assertInstanceOf.name, () => {
    it('should actually ensure instanceof', () => {
        const testObject: unknown = new RegExp('');

        assertInstanceOf(testObject, RegExp);
        // this should not throw type errors
        testObject.exec('');
    });
});
