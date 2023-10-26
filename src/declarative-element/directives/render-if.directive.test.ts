import {assert} from '@open-wc/testing';
import {assertTypeOf} from 'run-time-assertions';
import {renderIf} from './render-if.directive';

describe(renderIf.name, () => {
    it('has correct types', () => {
        assertTypeOf(renderIf(true, 'hello', 4)).toEqualTypeOf<string | number>();
        assertTypeOf(renderIf(true, 'hello')).toEqualTypeOf<string | undefined>();
    });

    it('returns the appropriate input', () => {
        function renderIfWrapper(input: boolean) {
            return renderIf(input, 1, 2);
        }
        assert.strictEqual(renderIfWrapper(true), 1);
        assert.strictEqual(renderIfWrapper(false), 2);
    });
});
