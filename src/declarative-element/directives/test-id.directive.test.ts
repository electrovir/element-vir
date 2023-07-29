import {randomString} from '@augment-vir/browser';
import {typedAssertInstanceOf} from '@augment-vir/browser-testing';
import {assert, fixture as renderFixture} from '@open-wc/testing';
import {html} from '../../template-transforms/vir-html/vir-html';
import {testId, testIdAttribute} from './test-id.directive';

describe(testId.name, () => {
    it('attaches a the given test id', async () => {
        const testIdValue = randomString();

        const fixture = await renderFixture(
            html`
                <div ${testId(testIdValue)}>text</div>
            `,
        );

        typedAssertInstanceOf(fixture, HTMLDivElement);

        assert.strictEqual(fixture.getAttribute(testIdAttribute), testIdValue);
    });
});
