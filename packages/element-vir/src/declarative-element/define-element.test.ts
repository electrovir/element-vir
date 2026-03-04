import {assert, waitUntil} from '@augment-vir/assert';
import {randomBoolean, randomString} from '@augment-vir/common';
import {describe, it, testWeb} from '@augment-vir/test';
import {queryThroughShadow} from '@augment-vir/web';
import {IntervalObservable} from 'observavir';
import {html} from '../template-transforms/vir-html/vir-html.js';
import {defineElement} from './define-element.js';

describe(defineElement.name, () => {
    it('does not allow HTMLElement properties in state or inputs', () => {
        // @ts-expect-error style is a default HTMLElement key
        defineElement<{
            style: string;
            inputKey: string;
        }>()({
            tagName: 'blah-blah-blah-1',
            render({inputs}) {
                inputs.style;
                return 'hi';
            },
        });
        defineElement()({
            tagName: 'blah-blah-blah-2',
            // @ts-expect-error classList is a default HTMLElement key
            init() {
                return {
                    classList: ['hi'],
                };
            },
            render() {
                return 'hi';
            },
        });
    });

    it('does not allow keys duplicated between inputs and state', () => {
        defineElement<{
            inputKey: string;
        }>()({
            tagName: 'blah-blah-blah-3',
            // @ts-expect-error inputKey clashes between inputs and state
            init() {
                return {
                    inputKey: 0,
                    otherKey: 'hi',
                };
            },
            render() {
                return 'hi';
            },
        });
    });

    it('blocks render callbacks without a return type', () => {
        defineElement()({
            tagName: 'some-tag-1',
            cleanup() {},
            // @ts-expect-error: render callback must return something
            render() {},
        });
        defineElement()({
            tagName: 'some-tag-2',
            // returning undefined is cool
            render() {
                return undefined;
            },
        });
    });
    it('allows partial inputs', () => {
        const MyElement = defineElement<{
            maybeInput?: string;
            maybeUndefined?: string | undefined;
        }>()({
            tagName: 'some-tag-3',
            cleanup({host}) {},
            // @ts-expect-error: render callback must return something
            render() {},
        });

        MyElement.assign({
            maybeInput: '',
            maybeUndefined: undefined,
        });

        MyElement.assign({
            maybeUndefined: undefined,
        });

        type MyType = {thing: string} | {derp: number};

        type Mapped<T> = T extends any ? {[Prop in keyof T]: {value: T[Prop]}} : never;

        const derp: Mapped<MyType> = {
            derp: {
                value: 5,
            },
        };

        MyElement.assign({
            maybeUndefined: '',
        });
        const myThing = randomBoolean();
        MyElement.assign(
            myThing
                ? {
                      maybeUndefined: '',
                  }
                : {
                      maybeInput: 'hi',
                  },
        );

        MyElement.assign({});
    });

    it('allows readonly objects to be assigned to inputs', () => {
        const MyElement = defineElement<{myInput: string; myOtherInput: number}>()({
            tagName: 'readonly-input-test-1',
            render() {
                return '';
            },
        });

        const readonlyInputs: Readonly<{myInput: string; myOtherInput: number}> = {
            myInput: 'hi',
            myOtherInput: 5,
        };

        MyElement.assign(readonlyInputs);

        const asConstInputs = {
            myInput: 'hello',
            myOtherInput: 42,
        } as const;

        MyElement.assign(asConstInputs);
    });

    it('blocks render callbacks that are async', () => {
        defineElement()({
            tagName: 'some-tag-4',
            // @ts-expect-error: render cannot be async
            // eslint-disable-next-line @typescript-eslint/require-await
            async render() {
                return 'hello';
            },
        });
        defineElement()({
            tagName: 'some-tag-5',
            render() {
                return 'hello';
            },
        });
    });

    it('blocks init callbacks that are async', () => {
        defineElement()({
            tagName: 'some-tag-6',
            // init callback does not need to return something

            // @ts-expect-error: init cannot be async
            // eslint-disable-next-line @typescript-eslint/require-await
            async init() {
                return undefined;
            },
            render() {
                return 'hello';
            },
        });
        defineElement()({
            tagName: 'some-tag-7',
            init() {
                return undefined;
            },
            // @ts-expect-error: render cannot be async
            // eslint-disable-next-line @typescript-eslint/require-await
            async render() {
                return 'hello';
            },
        });
    });

    it('allows host to be assigned to instance type', () => {
        const MyElement = defineElement()({
            tagName: 'some-tag-8',
            // init callback does not need to return something
            init({host}) {
                acceptHost(host);
            },
            render({host}) {
                acceptHost(host);

                return '';
            },
        });

        function acceptHost(host: (typeof MyElement)['InstanceType']) {
            return {};
        }
    });
    it('can include updateState in init', () => {
        const MyElement = defineElement()({
            tagName: 'some-tag-9',
            state() {
                return {
                    prop1: 'hi',
                };
            },
            init({host, state}) {
                assert.tsType(state).equals<Readonly<{prop1: string}>>();
                acceptHost(host);
            },
            render({state}) {
                assert.tsType(state).equals<Readonly<{prop1: string}>>();

                return '';
            },
        });
        function acceptHost(host: (typeof MyElement)['InstanceType']) {
            return {};
        }
    });

    it('preserves slot names', () => {
        const MyElement = defineElement()({
            tagName: 'just-some-element-with-slot-names',
            slotNames: ['yo'],
            render({slotNames}) {
                assert.tsType(slotNames.yo).equals<'just-some-element-with-slot-names-slot-yo'>();
                return 'hi';
            },
        });
        assert.tsType(MyElement.slotNames.yo).equals<'just-some-element-with-slot-names-slot-yo'>();
        assert.strictEquals(MyElement.slotNames.yo, 'just-some-element-with-slot-names-slot-yo');
    });

    it('preserves test ids', () => {
        const MyElement = defineElement()({
            tagName: 'just-some-element-with-test-ids',
            testIds: ['yo'],
            render({testIds}) {
                assert.tsType(testIds.yo).equals<'just-some-element-with-test-ids-test-id-yo'>();
                return 'hi';
            },
        });
        assert.tsType(MyElement.testIds.yo).equals<'just-some-element-with-test-ids-test-id-yo'>();
        assert.strictEquals(MyElement.testIds.yo, 'just-some-element-with-test-ids-test-id-yo');
    });

    it('blocks render callbacks without a return type', () => {
        defineElement()({
            tagName: 'some-tag-10',
            // @ts-expect-error: render callback must return something
            render() {},
        });
        defineElement()({
            tagName: 'some-tag-11',
            // returning undefined is cool
            render() {
                return undefined;
            },
        });
    });

    it('blocks init return', () => {
        defineElement()({
            tagName: 'some-tag-12',
            // @ts-expect-error: this callback should not return anything
            init() {
                return 'hi';
            },
            render() {
                return 'hi';
            },
        });
        defineElement()({
            tagName: 'some-tag-13',
            // @ts-expect-error: this callback should not return anything
            cleanup() {
                return 'hi';
            },
            render({state}) {
                return 'hi';
            },
        });
    });

    it('does not infer render output type from init callback', () => {
        defineElement()({
            tagName: 'some-tag-14',
            init() {
                return undefined;
            },
            // @ts-expect-error: render callback must return something
            render() {},
        });
    });

    it('persists slot names', () => {
        const myTestElement = defineElement()({
            tagName: 'test-element-no-inputs-with-slot-names',
            slotNames: [
                'my slot',
            ],
            render() {
                return 'hi';
            },
        });

        assert
            .tsType(myTestElement.slotNames['my slot'])
            .equals<'test-element-no-inputs-with-slot-names-slot-my slot'>();
        assert.tsType(myTestElement.slotNames['my slot']).matches<string>();
        assert.strictEquals(
            myTestElement.slotNames['my slot'],
            'test-element-no-inputs-with-slot-names-slot-my slot',
        );
    });

    it('does not allow updating state properties that do not exist in the state', () => {
        defineElement()({
            tagName: 'some-tag-15',
            state() {
                return {
                    selectedFeeIndex: undefined as number | undefined,
                    errors: undefined as
                        | undefined
                        | Partial<{
                              amount: boolean;
                              fee: boolean;
                          }>,
                    userInputConvertAmount: '',
                    generalError: '',
                    prepareConvertResult: undefined as unknown,
                    step2ConfirmationAccepted: false,
                    confirmedTxUrl: '',
                    showLoader: false,
                    isMax: false,
                };
            },
            render({state, updateState}) {
                updateState({
                    // @ts-expect-error: this property does not exist
                    thingie: 'yo',
                    generalError: 'hi',
                });
                return '';
            },
        });
    });

    it('allows host to be assigned to instance type', () => {
        const MyElement = defineElement()({
            tagName: 'some-tag-16',
            // render callback must return something
            init({host}) {
                acceptHost(host);
                return undefined;
            },
            render({host}) {
                acceptHost(host);

                return '';
            },
        });

        function acceptHost(host: (typeof MyElement)['InstanceType']) {
            return {};
        }
    });

    it('destroys all state props', async () => {
        let count = 0;

        const MyElement = defineElement()({
            tagName: 'some-tag-17',
            state() {
                return {
                    intervalObservable: new IntervalObservable({
                        defaultParams: undefined,
                        intervalDuration: {
                            milliseconds: 100,
                        },
                        updateCallback() {
                            count++;
                            return 'hi';
                        },
                    }),
                };
            },
            render() {
                return '';
            },
        });

        const rendered = await testWeb.render(html`
            <${MyElement}></${MyElement}>
        `);

        assert.instanceOf(rendered, MyElement);
        await waitUntil.isTruthy(() => count > 10);

        rendered.destroy();
        const countAfterDestroy = count;

        await assert.throws(() =>
            waitUntil.isTruthy(() => count > countAfterDestroy + 10, {
                timeout: {
                    milliseconds: 3000,
                },
            }),
        );
    });

    it('does not reconstruct children', async () => {
        const Parent = defineElement()({
            tagName: 'parent-that-updates',
            state() {
                return {
                    value: 1,
                };
            },
            render({state, updateState}) {
                setTimeout(() => {
                    updateState({
                        value: state.value + 1,
                    });
                }, 100);
                return html`
                    value:
                    <span class="parent-value">${state.value}</span>
                    <br />
                    <${Child}></${Child}>
                `;
            },
        });

        const Child = defineElement()({
            tagName: 'child-that-does-not-update',
            render() {
                return html`
                    this should not update:
                    <span class="child-value">
                        ${randomString(8)}
                        <span></span>
                    </span>
                `;
            },
        });

        const parentInstance = await testWeb.render(html`
            <${Parent}></${Parent}>
        `);

        assert.instanceOf(parentInstance, Parent);

        const parentValueSpan = queryThroughShadow(parentInstance, '.parent-value');
        assert.instanceOf(parentValueSpan, HTMLSpanElement);

        const childValueSpan = queryThroughShadow(parentInstance, '.child-value');
        assert.instanceOf(childValueSpan, HTMLSpanElement);
        const originalChildValue = childValueSpan.textContent || '';
        assert.isTruthy(originalChildValue);

        await waitUntil.strictEquals('10', () => parentValueSpan.textContent);

        assert.isString(childValueSpan.textContent);
        assert.strictEquals(originalChildValue, childValueSpan.textContent);
    });
});
