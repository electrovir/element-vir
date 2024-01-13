import {assertTypeOf} from 'run-time-assertions';
import {MinimalElementDefinition, defineElementNoInputs} from '../index';

describe('MinimalElementDefinition', () => {
    it('matches an actual definition', () => {
        const TestElementDefinition = defineElementNoInputs({
            tagName: 'something-something-test-fad-time',
            renderCallback() {
                return 'hi';
            },
        });

        assertTypeOf(TestElementDefinition).toMatchTypeOf<MinimalElementDefinition>();
    });
});
