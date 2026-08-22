import {assert, assertWrap, waitUntil} from '@augment-vir/assert';
import {
    awaitedBlockingMap,
    createArray,
    randomBoolean,
    randomString,
    wait,
} from '@augment-vir/common';
import {describe, it, testWeb} from '@augment-vir/test';
import {queryThroughShadow} from '@augment-vir/web';
import {IntervalObservable} from 'observavir';
import {type CSSResult} from '../lit-exports/base-lit-exports.js';
import {css} from '../template-transforms/vir-css/vir-css.js';
import {html} from '../template-transforms/vir-html/vir-html.js';
import {DeclarativeElement} from './declarative-element.js';
import {type DeclarativeElementInputErrorParams, defineElement} from './define-element.js';
import {
    type DeclarativeElementDefinitionOptions,
    defaultDeclarativeElementDefinitionOptions,
} from './definition-options.js';
import {
    assertDeclarativeElementDefinition,
    isDeclarativeElementDefinition,
} from './is-declarative-element-definition.js';
import {defineElementEvent} from './properties/element-events.js';
import {type UpdateStateCallback} from './render-callback.js';

describe(defineElement.name, () => {
    it('reads and updates raw host attributes as string inputs', async () => {
        const RawAttributeInputs = defineElement<{
            myThing?: string | undefined;
        }>()({
            tagName: 'raw-attribute-inputs',
            render({inputs}) {
                return html`
                    <span>${inputs.myThing}</span>
                `;
            },
        });

        const fixture = await testWeb.render(html`
            <raw-attribute-inputs my-thing="initial"></raw-attribute-inputs>
        `);
        assert.instanceOf(fixture, RawAttributeInputs);
        assert.strictEquals(fixture.instanceInputs.myThing, 'initial');
        assert.strictEquals(fixture.shadowRoot.textContent.trim(), 'initial');

        fixture.setAttribute('my-thing', 'updated');
        await waitUntil.strictEquals('updated', () => fixture.instanceInputs.myThing);
        await fixture.updateComplete;
        assert.strictEquals(fixture.shadowRoot.textContent.trim(), 'updated');

        fixture.removeAttribute('my-thing');
        await waitUntil.isUndefined(() => fixture.instanceInputs.myThing);
        await fixture.updateComplete;
        assert.isEmpty(fixture.shadowRoot.textContent.trim());
    });

    it('ignores default HTML attributes when assigning raw host attributes', async () => {
        const RawAttributeInputs = defineElement<{
            myThing: string;
        }>()({
            tagName: 'raw-attribute-native-attributes',
            render({inputs}) {
                return html`
                    <span>${inputs.myThing}</span>
                `;
            },
        });

        const fixture = await testWeb.render(html`
            <raw-attribute-native-attributes
                class="host-class"
                style="color: red;"
                tabindex="4"
                title="native title"
                my-thing="input value"
            ></raw-attribute-native-attributes>
        `);
        assert.instanceOf(fixture, RawAttributeInputs);

        assert.strictEquals(fixture.instanceInputs.myThing, 'input value');
        assert.deepEquals(Object.keys(fixture.instanceInputs), ['myThing']);
        assert.strictEquals(fixture.title, 'native title');
        assert.strictEquals(fixture.tabIndex, 4);
        assert.strictEquals(fixture.className, 'host-class');
        assert.strictEquals(fixture.style.color, 'red');
    });

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

    it('allows render callbacks with no return', () => {
        assert.isDefined(
            defineElement()({
                tagName: 'some-tag-1',
                cleanup() {},
                render() {},
            }),
        );
        assert.isDefined(
            defineElement()({
                tagName: 'some-tag-2',
                // returning undefined is cool
                render() {
                    return undefined;
                },
            }),
        );
    });
    it('allows partial inputs', () => {
        const MyElement = defineElement<{
            maybeInput?: string;
            maybeUndefined?: string | undefined;
        }>()({
            tagName: 'some-tag-3',
            cleanup({host}) {},
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

        assert.isDefined(MyElement.assign({}));
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

        assert.isDefined(MyElement.assign(asConstInputs));
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

        assert.isDefined(MyElement);
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

    it('preserves slot names as identity values', () => {
        const MyElement = defineElement()({
            tagName: 'just-some-element-with-slot-names',
            slotNames: [
                'just-some-element-with-slot-names-yo',
            ],
            render({slotNames}) {
                assert
                    .tsType(slotNames['just-some-element-with-slot-names-yo'])
                    .equals<'just-some-element-with-slot-names-yo'>();
                return 'hi';
            },
        });
        assert
            .tsType(MyElement.slotNames['just-some-element-with-slot-names-yo'])
            .equals<'just-some-element-with-slot-names-yo'>();
        assert.tsType(MyElement.slotNames).equals<
            Readonly<{
                'just-some-element-with-slot-names-yo': 'just-some-element-with-slot-names-yo';
            }>
        >();
        assert.strictEquals(
            MyElement.slotNames['just-some-element-with-slot-names-yo'],
            'just-some-element-with-slot-names-yo',
        );
    });

    it('falls back to legacy generation for slot names not prefixed with the element tag name', () => {
        const MyElement = defineElement()({
            tagName: 'element-rejects-bad-slot-names',
            // @ts-expect-error: slot names must start with the tag name
            slotNames: [
                'header',
            ],
            render() {
                return 'hi';
            },
        });

        assert.strictEquals(MyElement.tagName, 'element-rejects-bad-slot-names');
        assert.strictEquals(
            MyElement.slotNames.header,
            'element-rejects-bad-slot-names-slot-header',
        );
        assert.tsType(MyElement.slotNames).equals<
            Readonly<{
                header: 'element-rejects-bad-slot-names-slot-header';
            }>
        >();
    });

    it('passes slot names to the styles callback as CSSResult values', () => {
        const MyElement = defineElement()({
            tagName: 'element-with-slot-names-in-styles',
            slotNames: [
                'element-with-slot-names-in-styles-header',
                'element-with-slot-names-in-styles-footer',
            ],
            styles: ({slotNames}) => {
                assert
                    .tsType(slotNames['element-with-slot-names-in-styles-header'])
                    .equals<CSSResult>();
                assert
                    .tsType(slotNames['element-with-slot-names-in-styles-footer'])
                    .equals<CSSResult>();
                assert.strictEquals(
                    slotNames['element-with-slot-names-in-styles-header'].cssText,
                    'element-with-slot-names-in-styles-header',
                );
                assert.strictEquals(
                    slotNames['element-with-slot-names-in-styles-footer'].cssText,
                    'element-with-slot-names-in-styles-footer',
                );
                return css`
                    ::slotted([slot='${slotNames['element-with-slot-names-in-styles-header']}']) {
                        color: red;
                    }
                `;
            },
            render() {
                return 'hi';
            },
        });

        assert.isTrue(
            MyElement.styles.cssText.includes(
                "::slotted([slot='element-with-slot-names-in-styles-header'])",
            ),
        );
    });

    it('passes the same slot names to both styles and render callbacks', async () => {
        const slotNamesFromStyles: Record<string, string> = {};
        const slotNamesFromRender: Record<string, string> = {};

        const MyElement = defineElement()({
            tagName: 'element-shared-slot-names',
            slotNames: [
                'element-shared-slot-names-a',
                'element-shared-slot-names-b',
            ],
            styles: ({slotNames}) => {
                slotNamesFromStyles.a = slotNames['element-shared-slot-names-a'].cssText;
                slotNamesFromStyles.b = slotNames['element-shared-slot-names-b'].cssText;
                return css``;
            },
            render({slotNames}) {
                slotNamesFromRender.a = slotNames['element-shared-slot-names-a'];
                slotNamesFromRender.b = slotNames['element-shared-slot-names-b'];
                return 'hi';
            },
        });

        await testWeb.render(html`
            <${MyElement}></${MyElement}>
        `);

        assert.deepEquals(slotNamesFromStyles, slotNamesFromRender);
        assert.deepEquals(slotNamesFromStyles, {
            a: 'element-shared-slot-names-a',
            b: 'element-shared-slot-names-b',
        });
    });

    it('passes an empty slot names object to styles when no slot names are defined', () => {
        defineElement()({
            tagName: 'element-no-slot-names-in-styles',
            styles: ({slotNames}) => {
                assert.isEmpty(Object.keys(slotNames));
                return css``;
            },
            render() {
                return 'hi';
            },
        });
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
        assert.isDefined(
            defineElement()({
                tagName: 'some-tag-14',
                init() {
                    return undefined;
                },
                render() {},
            }),
        );
    });

    it('persists slot names', () => {
        const myTestElement = defineElement()({
            tagName: 'test-element-no-inputs-with-slot-names',
            slotNames: [
                'test-element-no-inputs-with-slot-names-my-slot',
            ],
            render() {
                return 'hi';
            },
        });

        assert
            .tsType(myTestElement.slotNames['test-element-no-inputs-with-slot-names-my-slot'])
            .equals<'test-element-no-inputs-with-slot-names-my-slot'>();
        assert
            .tsType(myTestElement.slotNames['test-element-no-inputs-with-slot-names-my-slot'])
            .matches<string>();
        assert.strictEquals(
            myTestElement.slotNames['test-element-no-inputs-with-slot-names-my-slot'],
            'test-element-no-inputs-with-slot-names-my-slot',
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
                    prepareConvertResult: undefined,
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

        assert.isDefined(MyElement);
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

    it('throws when called with a non-object init', () => {
        assert.throws(
            () => {
                (defineElement() as (init: unknown) => unknown)(undefined);
            },
            {
                matchConstructor: TypeError,
            },
        );
    });

    it('throws when init has a non-string tagName', () => {
        assert.throws(
            () => {
                defineElement()({
                    // @ts-expect-error: a tagName that is not a string
                    tagName: 42,
                    render() {
                        return '';
                    },
                });
            },
            {
                matchConstructor: TypeError,
            },
        );
    });

    it('throws when init render is not a function', () => {
        assert.throws(
            () => {
                defineElement()({
                    tagName: 'tag-with-no-render',
                    // @ts-expect-error: a render that is not a function
                    render: 'not a function',
                });
            },
            {
                matchMessage: 'render is not a function',
            },
        );
    });

    it('throws when reading the static type-only properties at runtime', () => {
        const MyElement = defineElement<{thing: string}>()({
            tagName: 'type-only-getters-element',
            state() {
                return {
                    other: 0,
                };
            },
            render() {
                return '';
            },
        });

        assert.throws(() => MyElement.InputsType, {
            matchMessage: 'InputsType',
        });
        assert.throws(() => MyElement.StateType, {
            matchMessage: 'StateType',
        });
        assert.throws(() => MyElement.UpdateStateType, {
            matchMessage: 'UpdateStateType',
        });
    });

    it('throws when the state callback returns a promise', async () => {
        const MyElement = defineElement()({
            tagName: 'async-state-element',
            // @ts-expect-error: an async callback
            state() {
                return Promise.resolve({
                    something: 1,
                });
            },
            render() {
                return 'hi';
            },
        });

        const rendered = await testWeb.render(html`
            <${MyElement}></${MyElement}>
        `);
        assert.instanceOf(rendered, MyElement);
        /** Render swallows the throw via `errorHandler`, exposing the error on the instance. */
        assert.isTruthy(rendered._lastRenderError);
    });

    it('throws when the init callback returns a promise', async () => {
        const MyElement = defineElement()({
            tagName: 'async-init-element',
            // @ts-expect-error: an async callback
            init() {
                return Promise.resolve();
            },
            render() {
                return 'hi';
            },
        });

        const rendered = await testWeb.render(html`
            <${MyElement}></${MyElement}>
        `);
        assert.instanceOf(rendered, MyElement);
        assert.isTruthy(rendered._lastRenderError);
    });

    it('throws when the render callback returns a promise', async () => {
        const MyElement = defineElement()({
            tagName: 'async-render-element',
            // @ts-expect-error: an async callback
            render() {
                return Promise.resolve('hi');
            },
        });

        const rendered = await testWeb.render(html`
            <${MyElement}></${MyElement}>
        `);
        assert.instanceOf(rendered, MyElement);
        assert.isTruthy(rendered._lastRenderError);
    });

    it('throws when init returns a promise during connectedCallback', async () => {
        let returnPromise = false;
        const MyElement = defineElement()({
            tagName: 'reconnect-init-promise-element',
            // @ts-expect-error: an async callback
            init() {
                if (returnPromise) {
                    return Promise.resolve();
                }
                return undefined;
            },
            render() {
                return 'hi';
            },
        });

        const rendered = await testWeb.render(html`
            <${MyElement}></${MyElement}>
        `);
        assert.instanceOf(rendered, MyElement);

        /**
         * Re-running `connectedCallback` directly while the element is already connected exercises
         * the second-pass init branch synchronously.
         */
        assert.hasKey(rendered, '_initCalled');
        rendered._initCalled = false;
        returnPromise = true;
        assert.throws(
            () => {
                (rendered as {connectedCallback: () => void}).connectedCallback();
            },
            {
                matchMessage: 'init',
            },
        );
        rendered.remove();
    });

    it('throws when cleanup returns a promise', async () => {
        const MyElement = defineElement()({
            tagName: 'cleanup-promise-element',
            state() {
                return {
                    placeholder: 1,
                };
            },
            // @ts-expect-error: an async callback
            cleanup() {
                return Promise.resolve();
            },
            render() {
                return 'hi';
            },
        });

        const rendered = await testWeb.render(html`
            <${MyElement}></${MyElement}>
        `);
        assert.instanceOf(rendered, MyElement);

        assert.throws(
            () => {
                assert.hasKey(rendered, 'disconnectedCallback');
                assertWrap.isFunction(rendered.disconnectedCallback).call(rendered);
            },
            {
                matchMessage: 'cleanup',
            },
        );
        /**
         * The fixture's auto-cleanup disconnect would run `cleanup` again and throw again. Clear
         * the rendered flag manually so the cleanup callback is skipped.
         */
        assert.hasKey(rendered, '_hasRendered');
        rendered._hasRendered = false;
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

    it('throws exact messages for every non-object init', () => {
        const defineWithUnknownInit = defineElement() as (init: unknown) => unknown;

        assert.strictEquals(
            assertWrap.throws(() => defineWithUnknownInit(undefined), {
                matchConstructor: TypeError,
            }).message,
            'Cannot define element with non-object init: undefined',
        );
        assert.strictEquals(
            assertWrap.throws(() => defineWithUnknownInit(null), {
                matchConstructor: TypeError,
            }).message,
            'Cannot define element with non-object init: null',
        );
        assert.strictEquals(
            assertWrap.throws(() => defineWithUnknownInit('my-tag')).message,
            'Cannot define element with non-object init: my-tag',
        );
        assert.strictEquals(
            assertWrap.throws(() => defineWithUnknownInit(42)).message,
            'Cannot define element with non-object init: 42',
        );
        assert.strictEquals(
            assertWrap.throws(() => defineWithUnknownInit([])).message,
            'Cannot define element with non-object init: ',
        );
    });

    it('throws an exact message for a non-string tagName', () => {
        assert.strictEquals(
            assertWrap.throws(
                () => {
                    defineElement()({
                        // @ts-expect-error: a tagName that is not a string
                        tagName: 42,
                        render() {
                            return '';
                        },
                    });
                },
                {
                    matchConstructor: TypeError,
                },
            ).message,
            'Missing valid tagName (expected a string).',
        );
        assert.strictEquals(
            assertWrap.throws(() => {
                defineElement()({
                    // @ts-expect-error: a tagName that is not a string
                    tagName: undefined,
                    render() {
                        return '';
                    },
                });
            }).message,
            'Missing valid tagName (expected a string).',
        );
    });

    it('throws an exact message for any non-function render', () => {
        assert.strictEquals(
            assertWrap.throws(() => {
                defineElement()({
                    tagName: 'define-element-missing-render',
                    // @ts-expect-error: a render that is not a function
                    render: undefined,
                });
            }).message,
            "Failed to define element 'define-element-missing-render': render is not a function",
        );
        assert.strictEquals(
            assertWrap.throws(() => {
                defineElement()({
                    tagName: 'define-element-string-render',
                    // @ts-expect-error: a render that is not a function
                    render: 'nope',
                });
            }).message,
            "Failed to define element 'define-element-string-render': render is not a function",
        );
        assert.strictEquals(
            assertWrap.throws(() => {
                defineElement()({
                    tagName: 'define-element-empty-string-render',
                    // @ts-expect-error: a render that is not a function
                    render: '',
                });
            }).message,
            "Failed to define element 'define-element-empty-string-render': render is not a function",
        );
        assert.strictEquals(
            assertWrap.throws(() => {
                defineElement()({
                    tagName: 'define-element-number-render',
                    // @ts-expect-error: a render that is not a function
                    render: 42,
                });
            }).message,
            "Failed to define element 'define-element-number-render': render is not a function",
        );
        assert.strictEquals(
            assertWrap.throws(() => {
                defineElement()({
                    tagName: 'define-element-object-render',
                    render: {} as () => string,
                });
            }).message,
            "Failed to define element 'define-element-object-render': render is not a function",
        );
    });

    it('throws when input error params are provided', () => {
        assert.throws(() => {
            (defineElement as (...args: ReadonlyArray<unknown>) => unknown)(
                'ERROR: Cannot define an element input property that clashes with native HTMLElement properties.',
            );
        });
    });

    it('throws an exact message for host class names missing the tag name prefix', () => {
        assert.strictEquals(
            assertWrap.throws(() => {
                defineElement()({
                    tagName: 'define-element-bad-host-class',
                    hostClasses: {
                        ['nope-bad' as 'define-element-bad-host-class-thing']: false,
                    },
                    render() {
                        return '';
                    },
                });
            }).message,
            "Invalid element string name 'nope-bad' in 'define-element-bad-host-class': element string names must begin with the element's tag name.",
        );
    });

    it('throws an exact message for css var names missing the tag name prefix', () => {
        assert.strictEquals(
            assertWrap.throws(() => {
                defineElement()({
                    tagName: 'define-element-bad-css-var',
                    cssVars: {
                        ['nope-bad' as 'define-element-bad-css-var-thing']: 'blue',
                    },
                    render() {
                        return '';
                    },
                });
            }).message,
            "Invalid element string name 'nope-bad' in 'define-element-bad-css-var': element string names must begin with the element's tag name.",
        );
    });

    it('throws an exact message for an empty events key', () => {
        assert.strictEquals(
            assertWrap.throws(() => {
                defineElement()({
                    tagName: 'define-element-empty-event-key',
                    events: {
                        '': defineElementEvent<string>(),
                    },
                    render() {
                        return '';
                    },
                });
            }).message,
            'Got empty string for events key.',
        );
    });

    it('names the definition class after the tag name', () => {
        const MyElement = defineElement()({
            tagName: 'define-element-class-name-el',
            render() {
                return '';
            },
        });

        assert.strictEquals(MyElement.name, 'DefineElementClassNameEl');
    });

    it('stores a copy of the init with a normalized options object', () => {
        const renderCallback = () => '';
        const options = {
            allowPolymorphicState: true,
        };
        const init = {
            tagName: 'define-element-init-copy-el',
            options,
            render: renderCallback,
        } as const;

        const MyElement = defineElement()(init);

        assert.notStrictEquals(MyElement.init, init);
        assert.notStrictEquals(MyElement.init.options, options);
        assert.strictEquals(MyElement.init.render, renderCallback);
        assert.deepEquals(MyElement.init.options, options);

        const NoOptionsElement = defineElement()({
            tagName: 'define-element-no-init-options-el',
            render() {
                return '';
            },
        });

        assert.deepEquals(NoOptionsElement.init.options, {});
    });

    it('merges definition options over the defaults without mutating them', () => {
        const PolymorphicElement = defineElement()({
            tagName: 'define-element-polymorphic-options-el',
            options: {
                allowPolymorphicState: true,
            },
            render() {
                return '';
            },
        });
        const DefaultElement = defineElement()({
            tagName: 'define-element-default-options-el',
            render() {
                return '';
            },
        });

        assert.deepEquals(PolymorphicElement.elementOptions, {
            allowPolymorphicState: true,
            errorHandler: undefined,
        });
        assert.deepEquals(
            DefaultElement.elementOptions,
            defaultDeclarativeElementDefinitionOptions,
        );
        assert.notStrictEquals(
            DefaultElement.elementOptions,
            defaultDeclarativeElementDefinitionOptions,
        );
        assert.notStrictEquals(DefaultElement.elementOptions, PolymorphicElement.elementOptions);
    });

    it('defaults every name map to an empty object and leaves assignedInputs unset', () => {
        const MyElement = defineElement()({
            tagName: 'define-element-empty-maps-el',
            render() {
                return '';
            },
        });

        assert.deepEquals(MyElement.events, {});
        assert.isEmpty(MyElement.hostClasses);
        assert.isEmpty(MyElement.cssVars);
        assert.deepEquals(MyElement.slotNames, {});
        assert.deepEquals(MyElement.testIds, {});
        assert.isUndefined(MyElement.assignedInputs);
    });

    it('defaults styles to empty css and passes a given CSSResult through by identity', () => {
        const NoStylesElement = defineElement()({
            tagName: 'define-element-no-styles-el',
            render() {
                return '';
            },
        });

        assert.strictEquals(NoStylesElement.styles.cssText, '');

        const myStyles = css`
            :host {
                color: red;
            }
        `;
        const StyledElement = defineElement()({
            tagName: 'define-element-static-styles-el',
            styles: myStyles,
            render() {
                return '';
            },
        });

        assert.strictEquals(StyledElement.styles, myStyles);
    });

    it('maps host class keys to their own names', () => {
        const MyElement = defineElement()({
            tagName: 'define-element-host-class-names-el',
            hostClasses: {
                'define-element-host-class-names-el-manual': false,
                'define-element-host-class-names-el-auto': () => true,
            },
            render() {
                return '';
            },
        });

        assert.deepEquals(MyElement.hostClasses, {
            'define-element-host-class-names-el-manual':
                'define-element-host-class-names-el-manual',
            'define-element-host-class-names-el-auto': 'define-element-host-class-names-el-auto',
        });
    });

    it('applies host classes from inputs and state after every render', async () => {
        const MyElement = defineElement<{enabled: boolean}>()({
            tagName: 'define-element-apply-host-classes-el',
            state() {
                return {
                    counter: 0,
                };
            },
            hostClasses: {
                'define-element-apply-host-classes-el-manual': false,
                'define-element-apply-host-classes-el-enabled': ({inputs}) => inputs.enabled,
                'define-element-apply-host-classes-el-counted': ({state}) => state.counter > 0,
            },
            render() {
                return '';
            },
        });

        const rendered = await testWeb.render(html`
            <${MyElement.assign({
                enabled: true,
            })}></${MyElement}>
        `);
        assert.instanceOf(rendered, MyElement);

        assert.isTrue(rendered.classList.contains('define-element-apply-host-classes-el-enabled'));
        assert.isFalse(rendered.classList.contains('define-element-apply-host-classes-el-counted'));
        assert.isFalse(rendered.classList.contains('define-element-apply-host-classes-el-manual'));

        rendered.instanceState.counter = 1;
        await rendered.updateComplete;

        assert.isTrue(rendered.classList.contains('define-element-apply-host-classes-el-counted'));

        rendered.assignInputs({
            enabled: false,
        });
        await rendered.updateComplete;

        assert.isFalse(rendered.classList.contains('define-element-apply-host-classes-el-enabled'));
    });

    it('prefixes event types with the tag name', () => {
        const MyElement = defineElement()({
            tagName: 'define-element-event-types-el',
            events: {
                myOutput: defineElementEvent<number>(),
            },
            render() {
                return '';
            },
        });

        assert
            .tsType(MyElement.events.myOutput.type)
            .equals<'define-element-event-types-el-myOutput'>();
        assert.strictEquals(
            MyElement.events.myOutput.type,
            'define-element-event-types-el-myOutput',
        );

        const event = new MyElement.events.myOutput({
            detail: 4,
        });
        assert.strictEquals(event.detail, 4);
        assert.strictEquals(event.type, 'define-element-event-types-el-myOutput');
    });

    it('throws exact messages for the type-only static getters', () => {
        const MyElement = defineElement<{thing: string}>()({
            tagName: 'define-element-type-only-getters-el',
            state() {
                return {
                    other: 0,
                };
            },
            render() {
                return '';
            },
        });

        assert.strictEquals(
            assertWrap.throws(() => MyElement.InputsType).message,
            "'InputsType' was called on define-element-type-only-getters-el as a value but it is only a type.",
        );
        assert.strictEquals(
            assertWrap.throws(() => MyElement.StateType).message,
            "'StateType' was called on define-element-type-only-getters-el as a value but it is only a type.",
        );
        assert.strictEquals(
            assertWrap.throws(() => MyElement.UpdateStateType).message,
            "'UpdateStateType' was called on define-element-type-only-getters-el as a value but it is only a type.",
        );
    });

    it('throws for InstanceType on the definition just like the other type-only statics', async () => {
        const MyElement = defineElement()({
            tagName: 'define-element-instance-type-el',
            render() {
                return '';
            },
        });

        assert.strictEquals(
            assertWrap.throws(() => MyElement.InstanceType).message,
            "'InstanceType' was called on define-element-instance-type-el as a value but it is only a type.",
        );

        const rendered = await testWeb.render(html`
            <${MyElement}></${MyElement}>
        `);
        assert.instanceOf(rendered, MyElement);

        assert.isFalse('InstanceType' in rendered);
    });

    it('sets up each instance with its definition, an empty listener map, and the base class', async () => {
        const MyElement = defineElement()({
            tagName: 'define-element-instance-shape-el',
            render() {
                return '';
            },
        });

        const rendered = await testWeb.render(html`
            <${MyElement}></${MyElement}>
        `);
        assert.instanceOf(rendered, MyElement);

        assert.strictEquals(rendered.definition, MyElement);
        assert.deepEquals(rendered.observablePropertyListenerMap, {});
        assert.instanceOf(rendered, DeclarativeElement);
        assert.instanceOf(rendered, HTMLElement);
        assert.strictEquals(rendered.tagName.toLowerCase(), 'define-element-instance-shape-el');
    });

    it('wraps inputs in a fresh minimal definition on every assign call', () => {
        const MyElement = defineElement<{thing: string}>()({
            tagName: 'define-element-assign-shape-el',
            render() {
                return '';
            },
        });

        const inputs = {
            thing: 'hi',
        };
        const assigned = MyElement.assign(inputs);
        const secondAssigned = MyElement.assign(inputs);

        assert.notStrictEquals(assigned, secondAssigned);
        assert.isTrue(assigned._elementVirIsMinimalDefinitionWithInputs);
        assert.strictEquals(assigned.definition, MyElement);
        assert.strictEquals(assigned.inputs, inputs);
    });

    it('calls state, then init, then render with a single shared params object', async () => {
        const calls: string[] = [];
        const paramsPerCall: unknown[] = [];

        const MyElement = defineElement()({
            tagName: 'define-element-callback-order-el',
            state(params) {
                calls.push('state');
                paramsPerCall.push(params);
                return {
                    counter: 0,
                };
            },
            init(params) {
                calls.push('init');
                paramsPerCall.push(params);
            },
            render(params) {
                calls.push('render');
                paramsPerCall.push(params);
                return '';
            },
        });

        const rendered = await testWeb.render(html`
            <${MyElement}></${MyElement}>
        `);
        assert.instanceOf(rendered, MyElement);

        assert.deepEquals(calls, [
            'state',
            'init',
            'render',
        ]);
        assert.isLengthExactly(paramsPerCall, 3);
        assert.strictEquals(paramsPerCall[0], paramsPerCall[1]);
        assert.strictEquals(paramsPerCall[1], paramsPerCall[2]);

        rendered.instanceState.counter = 1;
        await rendered.updateComplete;

        assert.deepEquals(calls, [
            'state',
            'init',
            'render',
            'render',
        ]);
    });

    it('re-runs state before init on reattachment and schedules a render', async () => {
        const calls: string[] = [];

        const MyElement = defineElement()({
            tagName: 'define-element-reattach-el',
            state() {
                calls.push('state');
                return {
                    counter: 0,
                };
            },
            init() {
                calls.push('init');
            },
            cleanup() {
                calls.push('cleanup');
            },
            render() {
                calls.push('render');
                return '';
            },
        });

        const rendered = await testWeb.render(html`
            <${MyElement}></${MyElement}>
        `);
        assert.instanceOf(rendered, MyElement);
        const parent = assertWrap.isDefined(rendered.parentElement);

        assert.deepEquals(calls, [
            'state',
            'init',
            'render',
        ]);

        rendered.remove();

        assert.deepEquals(calls, [
            'state',
            'init',
            'render',
            'cleanup',
        ]);
        assert.hasKey(rendered, '_initCalled');
        assert.isFalse(rendered._initCalled);
        assert.hasKey(rendered, '_stateCalled');
        assert.isFalse(rendered._stateCalled);

        parent.append(rendered);

        assert.deepEquals(calls, [
            'state',
            'init',
            'render',
            'cleanup',
            'state',
            'init',
        ]);

        await rendered.updateComplete;

        assert.deepEquals(calls, [
            'state',
            'init',
            'render',
            'cleanup',
            'state',
            'init',
            'render',
        ]);
    });

    it('tracks the render count and the last rendered props', async () => {
        const MyElement = defineElement<{label: string}>()({
            tagName: 'define-element-render-tracking-el',
            state() {
                return {
                    counter: 0,
                };
            },
            render() {
                return '';
            },
        });

        const rendered = await testWeb.render(html`
            <${MyElement.assign({
                label: 'first',
            })}></${MyElement}>
        `);
        assert.instanceOf(rendered, MyElement);

        const firstProps = rendered._lastRenderedProps;

        assert.strictEquals(rendered._internalRenderCount as number, 1);
        assert.hasKey(rendered, '_hasRendered');
        assert.isTrue(rendered._hasRendered);
        assert.deepEquals(firstProps, {
            inputs: {
                label: 'first',
            },
            state: {
                counter: 0,
            },
        });
        assert.notStrictEquals(firstProps.inputs, rendered.instanceInputs);
        assert.notStrictEquals(firstProps.state, rendered.instanceState);

        rendered.instanceState.counter = 3;
        await rendered.updateComplete;

        assert.strictEquals(rendered._internalRenderCount as number, 2);
        assert.deepEquals(rendered._lastRenderedProps, {
            inputs: {
                label: 'first',
            },
            state: {
                counter: 3,
            },
        });
    });

    it('renders the prefixed error message and clears the last render error on success', async () => {
        const errors: Error[] = [];
        const MyElement = defineElement<{shouldError: boolean}>()({
            tagName: 'define-element-render-error-el',
            options: {
                errorHandler(error) {
                    errors.push(error);
                },
            },
            render({inputs}) {
                if (inputs.shouldError) {
                    throw new Error('FAILURE');
                }
                return 'all good';
            },
        });

        const rendered = await testWeb.render(html`
            <${MyElement.assign({
                shouldError: true,
            })}></${MyElement}>
        `);
        assert.instanceOf(rendered, MyElement);

        const error = assertWrap.isDefined(rendered._lastRenderError);
        assert.strictEquals(
            error.message,
            'Failed to render define-element-render-error-el: FAILURE',
        );
        assert.isLengthExactly(errors, 1);
        assert.strictEquals(errors[0], error);
        assert.strictEquals(
            rendered.shadowRoot.textContent.trim(),
            'Failed to render define-element-render-error-el: FAILURE',
        );
        assert.isUndefined(rendered._lastRenderedProps);
        assert.strictEquals(rendered._internalRenderCount, 1);

        rendered.assignInputs({
            shouldError: false,
        });
        await rendered.updateComplete;

        assert.strictEquals(rendered.shadowRoot.textContent.trim(), 'all good');
        assert.isUndefined(rendered._lastRenderError);
        assert.isLengthExactly(errors, 1);
    });

    it('propagates a throwing error handler out of render', async () => {
        const flags = {
            shouldError: false,
        };
        const MyElement = defineElement()({
            tagName: 'define-element-throwing-error-handler-el',
            options: {
                errorHandler() {
                    throw new Error('handler failed');
                },
            },
            render() {
                if (flags.shouldError) {
                    throw new Error('render failed');
                }
                return '';
            },
        });

        const rendered = await testWeb.render(html`
            <${MyElement}></${MyElement}>
        `);
        assert.instanceOf(rendered, MyElement);

        flags.shouldError = true;

        assert.strictEquals(assertWrap.throws(() => rendered.render()).message, 'handler failed');
        assert.strictEquals(
            rendered._lastRenderError?.message,
            'Failed to render define-element-throwing-error-handler-el: render failed',
        );
    });

    it('does not await an async error handler', async () => {
        const calls: string[] = [];
        const flags = {
            shouldError: false,
        };
        const MyElement = defineElement()({
            tagName: 'define-element-async-error-handler-el',
            options: {
                errorHandler() {
                    calls.push('handler start');
                    return wait({
                        milliseconds: 0,
                    }).then(() => {
                        calls.push('handler end');
                    });
                },
            },
            render() {
                if (flags.shouldError) {
                    throw new Error('render failed');
                }
                return '';
            },
        });

        const rendered = await testWeb.render(html`
            <${MyElement}></${MyElement}>
        `);
        assert.instanceOf(rendered, MyElement);

        flags.shouldError = true;
        rendered.render();

        assert.deepEquals(calls, ['handler start']);
        await waitUntil.isTruthy(() => calls.length === 2);
        assert.deepEquals(calls, [
            'handler start',
            'handler end',
        ]);
    });

    it('runs cleanup on disconnect even when the element has no state callback', async () => {
        const calls: string[] = [];
        const MyElement = defineElement()({
            tagName: 'define-element-stateless-cleanup-el',
            cleanup() {
                calls.push('cleanup');
            },
            render() {
                return '';
            },
        });

        const rendered = await testWeb.render(html`
            <${MyElement}></${MyElement}>
        `);
        assert.instanceOf(rendered, MyElement);

        rendered.remove();

        assert.deepEquals(calls, ['cleanup']);
    });

    it('skips cleanup for an element that never rendered', () => {
        const calls: string[] = [];
        const MyElement = defineElement()({
            tagName: 'define-element-never-rendered-cleanup-el',
            cleanup() {
                calls.push('cleanup');
            },
            render() {
                return '';
            },
        });

        const detached = document.createElement(MyElement.tagName);
        assert.hasKey(detached, 'disconnectedCallback');
        assertWrap.isFunction(detached.disconnectedCallback).call(detached);

        assert.isEmpty(calls);
    });

    it('calls cleanup with live state values on every disconnect', async () => {
        const calls: string[] = [];
        const MyElement = defineElement()({
            tagName: 'define-element-repeat-cleanup-el',
            state() {
                return {
                    counter: 0,
                };
            },
            cleanup({state}) {
                calls.push(`cleanup ${state.counter}`);
            },
            render() {
                return '';
            },
        });

        const rendered = await testWeb.render(html`
            <${MyElement}></${MyElement}>
        `);
        assert.instanceOf(rendered, MyElement);
        const parent = assertWrap.isDefined(rendered.parentElement);

        rendered.instanceState.counter = 7;
        await rendered.updateComplete;

        rendered.remove();
        parent.append(rendered);
        rendered.remove();

        assert.deepEquals(calls, [
            'cleanup 7',
            'cleanup 0',
        ]);
    });

    it('resets bookkeeping and runs destroy even when cleanup throws', async () => {
        const destroyed: string[] = [];
        const MyElement = defineElement()({
            tagName: 'define-element-throwing-cleanup-el',
            state() {
                return {
                    thing: {
                        destroy() {
                            destroyed.push('thing');
                        },
                    },
                };
            },
            cleanup() {
                throw new Error('cleanup exploded');
            },
            render() {
                return '';
            },
        });

        const rendered = await testWeb.render(html`
            <${MyElement}></${MyElement}>
        `);
        assert.instanceOf(rendered, MyElement);

        assert.strictEquals(
            assertWrap.throws(() => {
                assert.hasKey(rendered, 'disconnectedCallback');
                assertWrap.isFunction(rendered.disconnectedCallback).call(rendered);
            }).message,
            'cleanup exploded',
        );
        assert.deepEquals(destroyed, ['thing']);
        assert.hasKey(rendered, '_initCalled');
        assert.isFalse(rendered._initCalled);
        assert.hasKey(rendered, '_stateCalled');
        assert.isFalse(rendered._stateCalled);
        assert.hasKey(rendered, '_hasRendered');
        rendered._hasRendered = false;
    });

    it('destroys only state values with a destroy function and keeps their values', async () => {
        const destroyed: string[] = [];
        const MyElement = defineElement()({
            tagName: 'define-element-destroy-state-el',
            state() {
                return {
                    withDestroy: {
                        destroy() {
                            destroyed.push('withDestroy');
                        },
                    },
                    destroyIsNotAFunction: {
                        destroy: 'nope',
                    },
                    plainObject: {},
                    numberValue: 5,
                    undefinedValue: undefined,
                    stringValue: 'hi',
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

        rendered.destroy();

        assert.deepEquals(destroyed, ['withDestroy']);
        assert.hasKey(rendered, '_initCalled');
        assert.isFalse(rendered._initCalled);
        assert.hasKey(rendered, '_stateCalled');
        assert.isFalse(rendered._stateCalled);
        assert.strictEquals(rendered.instanceState.numberValue, 5);
    });

    it('rejects unknown state keys by default', async () => {
        const MyElement = defineElement()({
            tagName: 'define-element-strict-state-el',
            state() {
                return {
                    counter: 0,
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

        assert.strictEquals(
            assertWrap.throws(() => {
                (rendered.instanceState as Record<string, unknown>).newKey = 1;
            }).message,
            "Property 'newKey' does not exist on 'define-element-strict-state-el'.",
        );
    });

    it('allows unknown state keys when allowPolymorphicState is enabled', async () => {
        const MyElement = defineElement()({
            tagName: 'define-element-polymorphic-state-el',
            options: {
                allowPolymorphicState: true,
            },
            state() {
                return {
                    counter: 0,
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

        const polymorphicState = rendered.instanceState as Record<string, unknown>;
        polymorphicState.newKey = 'added';

        assert.strictEquals(polymorphicState.newKey, 'added');
    });

    it('warns and keeps the first registration when a tag name is defined twice', () => {
        const warnings: string[] = [];
        const originalWarn = console.warn;
        console.warn = (...args: ReadonlyArray<unknown>) => {
            warnings.push(args.join(' '));
        };

        try {
            const FirstElement = defineElement()({
                tagName: 'define-element-duplicate-tag-el',
                render() {
                    return 'first';
                },
            });
            const SecondElement = defineElement()({
                tagName: 'define-element-duplicate-tag-el',
                render() {
                    return 'second';
                },
            });

            assert.notStrictEquals(FirstElement, SecondElement);
            assert.strictEquals(
                globalThis.window.customElements.get('define-element-duplicate-tag-el'),
                FirstElement,
            );
            assert.deepEquals(warnings, [
                "Tried to define custom element 'define-element-duplicate-tag-el' but it is already defined.",
            ]);
        } finally {
            console.warn = originalWarn;
        }
    });

    it('flags input types that clash with HTMLElement properties', () => {
        assert.tsType<DeclarativeElementInputErrorParams<{style: string}>>().equals<
            [
                'ERROR: Cannot define an element input property that clashes with native HTMLElement properties.',
            ]
        >();
        assert.tsType<DeclarativeElementInputErrorParams<{myInput: string}>>().equals<[]>();
    });

    it('lets init read and update the state values that state just wrote', async () => {
        const observed: unknown[] = [];
        const MyElement = defineElement()({
            tagName: 'define-element-init-sees-state-el',
            state() {
                return {
                    counter: 3,
                    label: 'from state',
                };
            },
            init({state, updateState}) {
                observed.push({
                    counter: state.counter,
                    label: state.label,
                });
                updateState({
                    counter: state.counter + 1,
                });
                observed.push({
                    counter: state.counter,
                    label: state.label,
                });
            },
            render({state}) {
                return html`
                    counter: ${state.counter}
                `;
            },
        });

        const rendered = await testWeb.render(html`
            <${MyElement}></${MyElement}>
        `);
        assert.instanceOf(rendered, MyElement);

        assert.deepEquals(observed, [
            {
                counter: 3,
                label: 'from state',
            },
            {
                counter: 4,
                label: 'from state',
            },
        ]);
        assert.strictEquals(rendered.shadowRoot.textContent.trim(), 'counter: 4');
    });

    it('runs state and init exactly once across many renders within one mount', async () => {
        const calls: string[] = [];
        const MyElement = defineElement<{label: string}>()({
            tagName: 'define-element-single-mount-callbacks-el',
            state() {
                calls.push('state');
                return {
                    counter: 0,
                };
            },
            init() {
                calls.push('init');
            },
            render() {
                calls.push('render');
                return '';
            },
        });

        const rendered = await testWeb.render(html`
            <${MyElement.assign({
                label: 'first',
            })}></${MyElement}>
        `);
        assert.instanceOf(rendered, MyElement);

        rendered.instanceState.counter = 1;
        await rendered.updateComplete;
        rendered.assignInputs({
            label: 'second',
        });
        await rendered.updateComplete;
        rendered.render();

        assert.deepEquals(calls, [
            'state',
            'init',
            'render',
            'render',
            'render',
            'render',
        ]);
    });

    it('resets mutated state and re-renders after reattachment with no external trigger', async () => {
        const MyElement = defineElement()({
            tagName: 'define-element-reattach-state-reset-el',
            state() {
                return {
                    counter: 0,
                };
            },
            render({state}) {
                return html`
                    counter: ${state.counter}
                `;
            },
        });

        const rendered = await testWeb.render(html`
            <${MyElement}></${MyElement}>
        `);
        assert.instanceOf(rendered, MyElement);
        const parent = assertWrap.isDefined(rendered.parentElement);

        rendered.instanceState.counter = 5;
        await rendered.updateComplete;
        assert.strictEquals(rendered.shadowRoot.textContent.trim(), 'counter: 5');

        rendered.remove();
        parent.append(rendered);

        assert.strictEquals(rendered.instanceState.counter, 0);
        assert.strictEquals(rendered.shadowRoot.textContent.trim(), 'counter: 5');

        await rendered.updateComplete;

        assert.strictEquals(rendered.shadowRoot.textContent.trim(), 'counter: 0');
    });

    it('behaves identically across multiple detach and reattach cycles', async () => {
        const calls: string[] = [];
        const MyElement = defineElement()({
            tagName: 'define-element-repeat-reattach-el',
            state() {
                calls.push('state');
                return {
                    counter: 0,
                };
            },
            init() {
                calls.push('init');
            },
            cleanup() {
                calls.push('cleanup');
            },
            render({state}) {
                calls.push('render');
                return html`
                    counter: ${state.counter}
                `;
            },
        });

        const rendered = await testWeb.render(html`
            <${MyElement}></${MyElement}>
        `);
        assert.instanceOf(rendered, MyElement);
        const parent = assertWrap.isDefined(rendered.parentElement);

        const callsPerCycle = await awaitedBlockingMap(
            createArray(3, (index) => index),
            async (index) => {
                const startIndex = calls.length;

                rendered.instanceState.counter = index + 1;
                await rendered.updateComplete;
                rendered.remove();
                parent.append(rendered);
                await rendered.updateComplete;

                return calls.slice(startIndex);
            },
        );

        assert.deepEquals(callsPerCycle, [
            [
                'render',
                'cleanup',
                'state',
                'init',
                'render',
            ],
            [
                'render',
                'cleanup',
                'state',
                'init',
                'render',
            ],
            [
                'render',
                'cleanup',
                'state',
                'init',
                'render',
            ],
        ]);
        assert.strictEquals(rendered.shadowRoot.textContent.trim(), 'counter: 0');
    });

    it('does not run state or init twice on the first ever connectedCallback', async () => {
        const calls: string[] = [];
        const MyElement = defineElement()({
            tagName: 'define-element-first-connect-el',
            state() {
                calls.push('state');
                return {
                    counter: 0,
                };
            },
            init() {
                calls.push('init');
            },
            render() {
                calls.push('render');
                return '';
            },
        });

        const parent = await testWeb.render(html`
            <div></div>
        `);
        assert.instanceOf(parent, HTMLDivElement);

        const created = document.createElement(MyElement.tagName);
        parent.append(created);
        assert.instanceOf(created, MyElement);

        assert.isEmpty([...calls]);

        await created.updateComplete;

        assert.deepEquals(calls, [
            'state',
            'init',
            'render',
        ]);
    });

    it('initializes normally on the first render after reattaching a never rendered element', async () => {
        const calls: string[] = [];
        const MyElement = defineElement()({
            tagName: 'define-element-never-rendered-reattach-el',
            state() {
                calls.push('state');
                return {
                    counter: 0,
                };
            },
            init() {
                calls.push('init');
            },
            cleanup() {
                calls.push('cleanup');
            },
            render() {
                calls.push('render');
                return '';
            },
        });

        const parent = await testWeb.render(html`
            <div></div>
        `);
        assert.instanceOf(parent, HTMLDivElement);

        const created = document.createElement(MyElement.tagName);
        assert.instanceOf(created, MyElement);

        parent.append(created);
        created.remove();
        parent.append(created);

        assert.isEmpty([...calls]);

        await created.updateComplete;

        assert.deepEquals(calls, [
            'state',
            'init',
            'render',
        ]);
    });

    it('runs cleanup after a render that threw', async () => {
        const calls: string[] = [];
        const MyElement = defineElement()({
            tagName: 'define-element-cleanup-after-render-error-el',
            options: {
                errorHandler() {},
            },
            cleanup() {
                calls.push('cleanup');
            },
            render() {
                throw new Error('render exploded');
            },
        });

        const rendered = await testWeb.render(html`
            <${MyElement}></${MyElement}>
        `);
        assert.instanceOf(rendered, MyElement);
        assert.isDefined(rendered._lastRenderError);

        rendered.remove();

        assert.deepEquals(calls, ['cleanup']);
    });

    it('runs cleanup on every disconnect for an element with no state callback', async () => {
        const calls: string[] = [];
        const MyElement = defineElement()({
            tagName: 'define-element-stateless-repeat-cleanup-el',
            cleanup() {
                calls.push('cleanup');
            },
            render() {
                return '';
            },
        });

        const rendered = await testWeb.render(html`
            <${MyElement}></${MyElement}>
        `);
        assert.instanceOf(rendered, MyElement);
        const parent = assertWrap.isDefined(rendered.parentElement);

        rendered.remove();
        parent.append(rendered);
        await rendered.updateComplete;
        rendered.remove();
        parent.append(rendered);
        await rendered.updateComplete;
        rendered.remove();

        assert.deepEquals(calls, [
            'cleanup',
            'cleanup',
            'cleanup',
        ]);
    });

    it('clears and re-sets the last render error across repeated failures', async () => {
        const flags = {
            shouldError: false,
        };
        const MyElement = defineElement()({
            tagName: 'define-element-render-error-cycle-el',
            options: {
                errorHandler() {},
            },
            render() {
                if (flags.shouldError) {
                    throw new Error('render exploded');
                }
                return 'all good';
            },
        });

        const rendered = await testWeb.render(html`
            <${MyElement}></${MyElement}>
        `);
        assert.instanceOf(rendered, MyElement);
        assert.isUndefined(rendered._lastRenderError);

        const errorsPerRender = createArray(2, (index) => {
            flags.shouldError = true;
            rendered.render();
            const errorMessage = rendered._lastRenderError?.message;

            flags.shouldError = false;
            rendered.render();

            return [
                errorMessage,
                rendered._lastRenderError?.message,
                index,
            ];
        });

        assert.deepEquals(errorsPerRender, [
            [
                'Failed to render define-element-render-error-cycle-el: render exploded',
                undefined,
                0,
            ],
            [
                'Failed to render define-element-render-error-cycle-el: render exploded',
                undefined,
                1,
            ],
        ]);
    });

    it('throws TypeError for every invalid render and prefers the tagName error', () => {
        const invalidRenders: ReadonlyArray<
            [
                string,
                unknown,
            ]
        > = [
            [
                'define-element-type-error-undefined-render',
                undefined,
            ],
            [
                'define-element-type-error-string-render',
                'nope',
            ],
            [
                'define-element-type-error-number-render',
                42,
            ],
            [
                'define-element-type-error-object-render',
                {},
            ],
            [
                'define-element-type-error-null-render',
                null,
            ],
        ];

        assert.deepEquals(
            invalidRenders.map(
                ([
                    tagName,
                    render,
                ]) => {
                    return assertWrap.throws(
                        () => {
                            defineElement()({
                                tagName: tagName as 'define-element-type-error-undefined-render',
                                render: render as () => string,
                            });
                        },
                        {
                            matchConstructor: TypeError,
                        },
                    ).message;
                },
            ),
            invalidRenders.map(([tagName]) => {
                return `Failed to define element '${tagName}': render is not a function`;
            }),
        );

        assert.strictEquals(
            assertWrap.throws(
                () => {
                    defineElement()({
                        // @ts-expect-error: a tagName that is not a string
                        tagName: 42,
                        // @ts-expect-error: a render that is not a function
                        render: 'nope',
                    });
                },
                {
                    matchConstructor: TypeError,
                },
            ).message,
            'Missing valid tagName (expected a string).',
        );
    });

    it('keeps the definition valid after the static InstanceType getter throws', async () => {
        const MyElement = defineElement()({
            tagName: 'define-element-instance-type-static-el',
            render() {
                return 'still works';
            },
        });

        assert.throws(() => MyElement.InstanceType, {
            matchMessage: 'define-element-instance-type-static-el',
        });
        assert.isUndefined(Object.getOwnPropertyDescriptor(MyElement, 'InstanceType')?.value);

        assertDeclarativeElementDefinition(MyElement);
        assert.isTrue(isDeclarativeElementDefinition(MyElement));

        const rendered = await testWeb.render(html`
            <${MyElement}></${MyElement}>
        `);
        assert.instanceOf(rendered, MyElement);
        assert.strictEquals(rendered.shadowRoot.textContent.trim(), 'still works');
    });

    it('re-runs state then init on the next render after a manual destroy', async () => {
        const calls: string[] = [];
        const MyElement = defineElement()({
            tagName: 'define-element-manual-destroy-order-el',
            state() {
                calls.push('state');
                return {
                    counter: 0,
                };
            },
            init() {
                calls.push('init');
            },
            cleanup() {
                calls.push('cleanup');
            },
            render({state}) {
                calls.push('render');
                return html`
                    counter: ${state.counter}
                `;
            },
        });

        const rendered = await testWeb.render(html`
            <${MyElement}></${MyElement}>
        `);
        assert.instanceOf(rendered, MyElement);

        rendered.instanceState.counter = 9;
        await rendered.updateComplete;

        rendered.destroy();

        assert.deepEquals(calls, [
            'state',
            'init',
            'render',
            'render',
        ]);
        assert.strictEquals(rendered.instanceState.counter as number, 9);

        rendered.requestUpdate();
        await rendered.updateComplete;

        assert.deepEquals(calls, [
            'state',
            'init',
            'render',
            'render',
            'state',
            'init',
            'render',
        ]);
        assert.strictEquals(rendered.instanceState.counter as number, 0);
        assert.strictEquals(rendered.shadowRoot.textContent.trim(), 'counter: 0');
    });

    it('preserves generics on the definition statics', () => {
        const MyElement = defineElement<{myInput: string}>()({
            tagName: 'define-element-generics-el',
            state() {
                return {
                    myState: 0,
                };
            },
            render() {
                return '';
            },
        });

        assert.tsType(MyElement.tagName).equals<'define-element-generics-el'>();
        assert.tsType(MyElement.styles).equals<CSSResult>();
        assert.tsType(MyElement.elementOptions).equals<DeclarativeElementDefinitionOptions>();
        assert.tsType<(typeof MyElement)['InputsType']>().equals<{myInput: string}>();
        assert.tsType<(typeof MyElement)['StateType']>().equals<Readonly<{myState: number}>>();
        assert
            .tsType<(typeof MyElement)['UpdateStateType']>()
            .equals<UpdateStateCallback<{myState: number}>>();
    });
});
