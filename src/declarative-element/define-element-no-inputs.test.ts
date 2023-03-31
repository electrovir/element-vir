import {randomString} from '@augment-vir/browser';
import {defineElementNoInputs} from './define-element-no-inputs';

describe(defineElementNoInputs.name, () => {
    it('blocks render callbacks without a return type', () => {
        defineElementNoInputs({
            tagName: `some-tag-${randomString()}`,
            // render callback must return something
            // @ts-expect-error
            renderCallback() {},
        });
        defineElementNoInputs({
            tagName: `some-tag-2-${randomString()}`,
            // returning undefined is cool
            renderCallback() {
                return undefined;
            },
        });
    });

    it('does not infer render output type from init callback', () => {
        defineElementNoInputs({
            tagName: `some-tag-${randomString()}`,
            // render callback must return something
            initCallback() {
                return undefined;
            },
            // @ts-expect-error
            renderCallback() {},
        });
    });

    it('allows host to be assigned to instance type', () => {
        const MyElement = defineElementNoInputs({
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
