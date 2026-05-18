import {assert} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import {html} from './vir-html.js';

describe('html transform', () => {
    it('throws when a non-string non-definition is interpolated as a tag name', () => {
        assert.throws(
            () => {
                html`
                    <${42 as unknown as string}></${42 as unknown as string}>
                `;
            },
            {
                matchMessage: 'Got interpolated tag name but found no tag name',
            },
        );
    });
});
