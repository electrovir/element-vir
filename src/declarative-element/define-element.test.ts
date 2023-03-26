import {randomString} from '@augment-vir/browser';
import {defineElement} from './define-element';

describe(defineElement.name, () => {
    it('blocks render callbacks without a return type', () => {
        defineElement<{}>()({
            tagName: `some-tag-${randomString()}`,
            cleanupCallback({host}) {},
            // render callback must return something
            // @ts-expect-error
            renderCallback() {},
        });
        defineElement<{}>()({
            tagName: `some-tag-2-${randomString()}`,
            // returning undefined is cool
            renderCallback() {
                return undefined;
            },
        });
    });
});
