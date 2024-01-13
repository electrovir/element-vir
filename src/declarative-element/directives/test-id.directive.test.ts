import {randomString} from '@augment-vir/common';
import {assert, fixture as renderFixture} from '@open-wc/testing';
import {assertInstanceOf} from 'run-time-assertions';
import {html} from '../../template-transforms/vir-html/vir-html';
import {testId, testIdAttributeName} from './test-id.directive';

describe(testId.name, () => {
    it('attaches a the given test id', async () => {
        const testIdValue = randomString();

        const fixture = await renderFixture(html`
            <div ${testId(testIdValue)}>text</div>
        `);

        assertInstanceOf(fixture, HTMLDivElement);

        assert.strictEqual(fixture.getAttribute(testIdAttributeName), testIdValue);
    });
});
