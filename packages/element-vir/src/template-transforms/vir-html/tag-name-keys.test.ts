import {assert} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import {mapHtmlValues} from './html-transform.js';
import {tagNameKeys} from './tag-name-keys.js';
import {html} from './vir-html.js';

function captureTemplate(strings: TemplateStringsArray, ...values: unknown[]) {
    return {
        strings,
        values,
    };
}

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

    it('stores one key object per tag name string', () => {
        const captured = captureTemplate`<${'tag-name-key-stored'}></${'tag-name-key-stored'}>`;
        const mapped = mapHtmlValues(captured.strings, [
            'tag-name-key-stored',
            'tag-name-key-stored',
        ]);
        const storedKey = tagNameKeys['tag-name-key-stored'];
        assert.isDefined(storedKey);

        assert.deepEquals(storedKey, {
            tagName: 'tag-name-key-stored',
        });

        const first = mapped[0];
        const second = mapped[1];
        assert.hasKey(first, 'tagInterpolationKey');
        assert.hasKey(second, 'tagInterpolationKey');
        assert.strictEquals(first.tagInterpolationKey, storedKey);
        assert.strictEquals(second.tagInterpolationKey, storedKey);
        const remappedFirst = mapHtmlValues(captured.strings, [
            'tag-name-key-stored',
            'tag-name-key-stored',
        ])[0];
        assert.hasKey(remappedFirst, 'tagInterpolationKey');
        assert.strictEquals(remappedFirst.tagInterpolationKey, storedKey);
    });
});
