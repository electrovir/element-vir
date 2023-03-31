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

    it('allows host to be assigned to instance type', () => {
        const MyElement = defineElement<{}>()({
            tagName: `some-tag-${randomString()}`,
            // render callback must return something
            initCallback({host}) {
                acceptHost(host);
                return undefined;
            },
            renderCallback({host}) {
                acceptHost(host);

                return '';
            },
        });

        function acceptHost(host: (typeof MyElement)['instanceType']) {
            return {};
        }
    });
});
