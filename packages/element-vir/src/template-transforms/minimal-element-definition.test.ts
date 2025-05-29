import {assert} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import {defineElement} from 'element-vir';
import {type MinimalElementDefinition} from '../index.js';

describe('MinimalElementDefinition', () => {
    it('matches an actual definition', () => {
        const TestElementDefinition = defineElement()({
            tagName: 'something-something-test-fad-time',
            render() {
                return 'hi';
            },
        });

        assert.tsType(TestElementDefinition).matches<MinimalElementDefinition>();
    });
});
