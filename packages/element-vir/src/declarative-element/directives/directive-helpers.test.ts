import {assert} from '@augment-vir/assert';
import {describe, it, testWeb} from '@augment-vir/test';
import {html} from '../../template-transforms/vir-html/vir-html.js';
import {testId} from './test-id.directive.js';

describe('directive helpers', () => {
    it('throws when an element-binding directive is used in child position', async () => {
        await assert.throws(
            async () => {
                await testWeb.render(html`
                    <div>${testId('this-should-not-work')}</div>
                `);
            },
            {
                matchMessage: 'directive can only be attached directly to an element',
            },
        );
    });
});
