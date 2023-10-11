import {AnyFunction, randomString} from '@augment-vir/common';
import {BookEntryTypeEnum} from 'element-book';
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

    it('does not allow updating state properties that do not exist in the state', () => {
        defineElementNoInputs({
            tagName: `some-tag-${randomString()}`,
            stateInitStatic: {
                selectedConvertDirection: undefined as BookEntryTypeEnum | undefined,
                selectedFeeIndex: undefined as number | undefined,
                errors: undefined as
                    | undefined
                    | Partial<{
                          amount: boolean;
                          fee: boolean;
                      }>,
                userInputConvertAmount: '',
                generalError: '',
                prepareConvertResult: undefined as undefined | Awaited<ReturnType<AnyFunction>>,
                step2ConfirmationAccepted: false,
                confirmedTxUrl: '',
                showLoader: false,
                isMax: false,
            },
            renderCallback({state, updateState}) {
                updateState({
                    // @ts-expect-error
                    thingie: 'yo',
                    generalError: 'hi',
                });
                return '';
            },
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
