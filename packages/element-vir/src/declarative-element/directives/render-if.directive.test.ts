import {assert} from '@augment-vir/assert';
import {describe, it, testWeb} from '@augment-vir/test';
import {extractElementText} from '@augment-vir/web';
import {html} from '../../template-transforms/vir-html/vir-html.js';
import {renderIf} from './render-if.directive.js';

describe(renderIf.name, () => {
    it('has correct types', () => {
        assert.tsType(renderIf(true, 'hello', 4)).equals<string | number>();
        assert.tsType(renderIf(true, 'hello')).equals<string | undefined>();
    });

    it('returns the appropriate input', () => {
        function renderIfWrapper(input: boolean) {
            return renderIf(input, 1, 2);
        }
        assert.strictEquals(renderIfWrapper(true), 1);
        assert.strictEquals(renderIfWrapper(false), 2);
    });

    it('returns undefined when false and no false case is given', () => {
        function renderIfWrapper(input: boolean) {
            return renderIf(input, 'true case');
        }
        assert.isUndefined(renderIfWrapper(false));
        assert.strictEquals(renderIfWrapper(true), 'true case');
    });

    it('returns an explicitly given undefined false case', () => {
        function renderIfWrapper(input: boolean) {
            return renderIf(input, 'true case', undefined);
        }
        assert.isUndefined(renderIfWrapper(false));
    });

    it('preserves falsy true cases and falsy false cases', () => {
        function renderIfWrapper(input: boolean) {
            return renderIf(input, 0, '');
        }
        assert.strictEquals(renderIfWrapper(true), 0);
        assert.strictEquals(renderIfWrapper(false), '');
    });

    it('renders nothing for a missing false case', async () => {
        function renderIfWrapper(input: boolean) {
            return renderIf(
                input,
                html`
                    <span class="true-case">shown</span>
                `,
            );
        }

        const falseFixture = await testWeb.render(html`
            <div>${renderIfWrapper(false)}</div>
        `);
        assert.instanceOf(falseFixture, HTMLDivElement);
        assert.strictEquals(extractElementText(falseFixture), '');
        assert.isNull(falseFixture.querySelector('.true-case'));

        const trueFixture = await testWeb.render(html`
            <div>${renderIfWrapper(true)}</div>
        `);
        assert.instanceOf(trueFixture, HTMLDivElement);
        assert.strictEquals(extractElementText(trueFixture), 'shown');
    });
});
