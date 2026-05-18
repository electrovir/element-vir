import {assert} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import {html} from './vir-html.js';

describe('tag-name-keys', () => {
    it('reuses a stable interpolation key for the same string tag name', () => {
        const tagName = 'tag-name-key-stable';
        function build() {
            return html`
                <${tagName}></${tagName}>
            `;
        }
        const first = build();
        const second = build();
        assert.strictEquals(first.strings, second.strings);
    });

    it('produces different cached strings for different string tag names', () => {
        const result1 = html`
            <${'tag-name-key-one'}></${'tag-name-key-one'}>
        `;
        const result2 = html`
            <${'tag-name-key-two'}></${'tag-name-key-two'}>
        `;
        /** The interpolation produces distinct cache entries because the tag-name keys differ. */
        assert.notStrictEquals(result1.strings, result2.strings);
    });
});
