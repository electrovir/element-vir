import {assert} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import {type WithTagName} from './tag-name.js';

describe('WithTagName', () => {
    it('joins the tag name and suffix with a dash', () => {
        assert.tsType<WithTagName<'my-element', 'active'>>().equals<'my-element-active'>();
    });

    it('produces a template literal type for a generic string suffix', () => {
        assert.tsType<WithTagName<'my-element', string>>().equals<`my-element-${string}`>();
    });

    it('distributes over a union suffix', () => {
        assert
            .tsType<WithTagName<'my-element', 'active' | 'inactive'>>()
            .equals<'my-element-active' | 'my-element-inactive'>();
    });

    it('leaves a trailing dash for an empty suffix', () => {
        assert.tsType<WithTagName<'my-element', ''>>().equals<'my-element-'>();
    });
});
