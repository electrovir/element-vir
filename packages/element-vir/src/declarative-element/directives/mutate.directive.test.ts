import {assert} from '@augment-vir/assert';
import {describe, it, testWeb} from '@augment-vir/test';
import {html, mutate} from '../../index.js';

describe('mutate directive', () => {
    it('allows arbitrary element mutation', async () => {
        const fixture = await testWeb.render(html`
            <div
                ${mutate(({element}) => {
                    element.innerText = 'hello there';
                })}
            ></div>
        `);

        assert.instanceOf(fixture, HTMLDivElement);
        assert.strictEquals(fixture.textContent, 'hello there');
    });
});
