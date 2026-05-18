import {assert} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import * as moduleUnderTest from './require-declarative-element.js';
import {html} from './template-transforms/vir-html/vir-html.js';

describe('requireAllCustomElementsToBeDeclarativeElements', () => {
    /**
     * `declarativeElementRequired` is a module-level flag. Once flipped, it stays flipped, so we
     * verify the flip happens and rely on the fact that other tests don't depend on its initial
     * false value.
     */
    it('sets the declarativeElementRequired flag to true', () => {
        moduleUnderTest.requireAllCustomElementsToBeDeclarativeElements();
        assert.strictEquals(moduleUnderTest.declarativeElementRequired, true);
    });

    it('exercises the html template string-validator path for tag names with a dash', () => {
        moduleUnderTest.requireAllCustomElementsToBeDeclarativeElements();
        const consoleError = console.error;
        const captured: unknown[][] = [];
        console.error = (...args: unknown[]) => captured.push(args);
        try {
            html`
                <span>raw</span>
                <fake-custom-tag></fake-custom-tag>
            `;
        } finally {
            console.error = consoleError;
        }
        assert.isAbove(captured.length, 0);
    });
});
