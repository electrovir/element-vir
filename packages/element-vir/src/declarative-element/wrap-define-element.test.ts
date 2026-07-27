import {assert, assertWrap} from '@augment-vir/assert';
import {describe, it, itCases, testWeb} from '@augment-vir/test';
import {
    css,
    defineElement,
    defineElementEvent,
    html,
    listen,
    wrapDefineElement,
    type AnyDeclarativeElementInit,
    type CustomElementTagName,
    type DeclarativeElementDefinition,
    type DeclarativeElementInit,
    type DefineEvent,
} from '../index.js';

function defineWithTransformedTagName(
    tagName: string,
    transformTagName: (originalTagName: string) => unknown,
) {
    return wrapDefineElement({
        transformInputs(init) {
            return {
                ...init,
                tagName: transformTagName(init.tagName) as CustomElementTagName,
            };
        },
    })()({
        tagName: tagName as CustomElementTagName,
        render() {
            return '';
        },
    });
}

describe(wrapDefineElement.name, () => {
    type MySpecificTagName = `my-${string}`;
    type MySpecificInputs = {noInputsActually: string};
    const myDefineElement = wrapDefineElement<MySpecificTagName>();

    itCases(defineWithTransformedTagName, [
        {
            it: 'rejects a prefixed tag name',
            inputs: [
                'wrap-prefix-el',
                (originalTagName) => `prefixed-${originalTagName}`,
            ],
            throws: {
                matchMessage:
                    "transformInputs cannot change tagName: 'wrap-prefix-el' was transformed into 'prefixed-wrap-prefix-el'.",
            },
        },
        {
            it: 'rejects a suffixed tag name',
            inputs: [
                'wrap-suffix-el',
                (originalTagName) => `${originalTagName}-suffixed`,
            ],
            throws: {
                matchMessage:
                    "transformInputs cannot change tagName: 'wrap-suffix-el' was transformed into 'wrap-suffix-el-suffixed'.",
            },
        },
        {
            it: 'rejects a re-cased tag name',
            inputs: [
                'wrap-casing-el',
                (originalTagName) => originalTagName.toUpperCase(),
            ],
            throws: {
                matchMessage:
                    "transformInputs cannot change tagName: 'wrap-casing-el' was transformed into 'WRAP-CASING-EL'.",
            },
        },
        {
            it: 'rejects an undefined tag name',
            inputs: [
                'wrap-undefined-tag-el',
                () => undefined,
            ],
            throws: {
                matchMessage:
                    "transformInputs cannot change tagName: 'wrap-undefined-tag-el' was transformed into 'undefined'.",
            },
        },
        {
            it: 'rejects a non-string tag name',
            inputs: [
                'wrap-number-tag-el',
                () => 5,
            ],
            throws: {
                matchMessage:
                    "transformInputs cannot change tagName: 'wrap-number-tag-el' was transformed into '5'.",
            },
        },
        {
            it: 'allows an untouched tag name',
            inputs: [
                'wrap-untouched-tag-el',
                (originalTagName) => originalTagName,
            ],
            throws: undefined,
        },
        {
            it: 'allows a tag name rebuilt into an equal string',
            inputs: [
                'wrap-rebuilt-tag-el',
                (originalTagName) => originalTagName.split('-').join('-'),
            ],
            throws: undefined,
        },
    ]);

    it('attaches an error handler', async () => {
        const errors: Error[] = [];

        const defineElementWithErrorHandler = wrapDefineElement({
            transformInputs(init) {
                return {
                    ...init,
                    options: {
                        errorHandler(error) {
                            errors.push(error);
                        },
                    },
                };
            },
        });
        const TestElement = defineElementWithErrorHandler<{shouldError: boolean}>()({
            tagName: 'my-test-element-with-an-error-handler',
            render({inputs}) {
                if (inputs.shouldError) {
                    throw new Error('FAILURE');
                }
                return 'hi';
            },
        });

        await testWeb.render(html`
            <${TestElement.assign({
                shouldError: false,
            })}></${TestElement}>
        `);
        assert.isEmpty(errors);

        await testWeb.render(html`
            <${TestElement.assign({
                shouldError: true,
            })}></${TestElement}>
        `);

        assert.isLengthExactly(errors, 1);
    });
    it('matches original define element types', () => {
        assert
            .tsType(
                myDefineElement<MySpecificInputs>()({
                    tagName: 'my-tag-abc0' as 'my-tag-abc',
                    render() {
                        return '';
                    },
                }),
            )
            .equals(
                defineElement<MySpecificInputs>()({
                    tagName: 'my-tag-abc1' as 'my-tag-abc',
                    render() {
                        return '';
                    },
                }),
            );

        myDefineElement<MySpecificInputs>()({
            // @ts-expect-error: this tag does not match the requirements
            tagName: 'bad-tag-1',
            render() {
                return '';
            },
        });

        assert
            .tsType(
                myDefineElement()({
                    tagName: 'my-tag-abc2' as 'my-tag-abc',
                    render() {
                        return '';
                    },
                }),
            )
            .equals(
                defineElement()({
                    tagName: 'my-tag-abc3' as 'my-tag-abc',
                    render() {
                        return '';
                    },
                }),
            );

        assert
            .tsType(
                myDefineElement()({
                    tagName: 'my-tag-abc4',
                    hostClasses: {
                        'my-tag-abc4-do-thing': false,
                    },
                    cssVars: {
                        'my-tag-abc4-var': 'blue',
                    },
                    events: {
                        outputOne: defineElementEvent<string>(),
                    },
                    styles: ({cssVars, hostClasses}) => css`
                        ${hostClasses['my-tag-abc4-do-thing'].selector} {
                            color: ${cssVars['my-tag-abc4-var'].value};
                        }

                        :host(${hostClasses['my-tag-abc4-do-thing'].name}) {
                            ${cssVars['my-tag-abc4-var'].name}: green;
                        }
                    `,
                    render() {
                        return '';
                    },
                }),
            )
            .equals(
                defineElement()({
                    tagName: 'my-tag-abc5' as 'my-tag-abc4',
                    hostClasses: {
                        ['my-tag-abc5-do-thing' as 'my-tag-abc4-do-thing']: false,
                    },
                    cssVars: {
                        ['my-tag-abc5-var' as 'my-tag-abc4-var']: 'blue',
                    },
                    events: {
                        outputOne: defineElementEvent<string>(),
                    },
                    render() {
                        return '';
                    },
                }),
            );

        myDefineElement()({
            // @ts-expect-error: this tag does not match the requirements
            tagName: 'bad-tag-2',
            render() {
                return '';
            },
        });
    });

    it('allows void returning render', () => {
        assert.isDefined(
            myDefineElement()({
                tagName: 'my-thing-abc6',
                render() {},
            }),
        );
        assert.isDefined(
            myDefineElement()({
                tagName: 'my-thing-abc7',
                // returning undefined is chill
                render() {
                    return undefined;
                },
            }),
        );
    });

    it('allows defining sub states', () => {
        myDefineElement()({
            tagName: 'my-thing-abc8',
            state() {
                return {
                    hello: 'hi',
                };
            },
            render({state}) {
                assert.tsType(state).equals<Readonly<{hello: string}>>();
                return html``;
            },
        });
        myDefineElement<{something: string}>()({
            tagName: 'my-thing-abc9',
            state() {
                return {
                    hello: 'hi',
                };
            },
            render({state}) {
                assert.tsType(state).equals<Readonly<{hello: string}>>();
                return html``;
            },
        });
    });

    it('still creates a valid element', async () => {
        const MySpecificElement = myDefineElement<MySpecificInputs>()({
            tagName: 'my-tag-abc8',
            events: {
                myOutput: defineElementEvent<number>(),
            },
            render() {
                return '';
            },
        });

        const assignedInput = 'hello';

        const elementInstance = await testWeb.render(html`
            <${MySpecificElement.assign({
                noInputsActually: assignedInput,
            })}
                ${listen(MySpecificElement.events.myOutput, (event) => {
                    assert.tsType(event.detail).equals<number>();
                })}
            ></${MySpecificElement}>
        `);

        assert.instanceOf(elementInstance, MySpecificElement);

        assert.strictEquals(elementInstance.instanceInputs.noInputsActually, assignedInput);
    });

    it('defaults both callbacks when options are missing or null', () => {
        const noOptionsDefine = wrapDefineElement();
        const undefinedOptionsDefine = wrapDefineElement(undefined);
        const nullCallbacksDefine = wrapDefineElement({
            assertInputs: null,
            transformInputs: null,
        });

        assert.strictEquals(
            noOptionsDefine()({
                tagName: 'wrap-no-options-el',
                render() {
                    return '';
                },
            }).tagName,
            'wrap-no-options-el',
        );
        assert.strictEquals(
            undefinedOptionsDefine()({
                tagName: 'wrap-undefined-options-el',
                render() {
                    return '';
                },
            }).tagName,
            'wrap-undefined-options-el',
        );
        assert.strictEquals(
            nullCallbacksDefine()({
                tagName: 'wrap-null-options-el',
                render() {
                    return '';
                },
            }).tagName,
            'wrap-null-options-el',
        );
    });

    it('calls assertInputs before transformInputs with the original init object', () => {
        const calls: string[] = [];
        const initsSeen: unknown[] = [];

        const trackingDefine = wrapDefineElement({
            assertInputs(init) {
                calls.push('assertInputs');
                initsSeen.push(init);
            },
            transformInputs(init) {
                calls.push('transformInputs');
                initsSeen.push(init);
                return init;
            },
        });

        const init = {
            tagName: 'wrap-callback-order-el',
            render() {
                return '';
            },
        } as const;

        const MyElement = trackingDefine()(init);

        assert.deepEquals(calls, [
            'assertInputs',
            'transformInputs',
        ]);
        assert.isLengthExactly(initsSeen, 2);
        assert.strictEquals(initsSeen[0], init);
        assert.strictEquals(initsSeen[1], init);
        assert.strictEquals(MyElement.tagName, 'wrap-callback-order-el');
    });

    it('does not define the element when assertInputs throws', () => {
        const assertingDefine = wrapDefineElement({
            assertInputs() {
                throw new Error('bad init');
            },
        });

        assert.throws(
            () => {
                assertingDefine()({
                    tagName: 'wrap-rejected-el',
                    render() {
                        return '';
                    },
                });
            },
            {
                matchMessage: 'bad init',
            },
        );
        assert.isUndefined(globalThis.window.customElements.get('wrap-rejected-el'));
    });

    it('defines the element from the transformed init', () => {
        const transformingDefine = wrapDefineElement({
            transformInputs(init) {
                return {
                    ...init,
                    testIds: ['added'],
                };
            },
        });

        const MyElement = transformingDefine()({
            tagName: 'wrap-transformed-el',
            render() {
                return '';
            },
        });

        assert.tsType(MyElement.tagName).equals<'wrap-transformed-el'>();
        assert.strictEquals(MyElement.tagName, 'wrap-transformed-el');
        assert.deepEquals(MyElement.testIds, {
            added: 'wrap-transformed-el-test-id-added',
        });
        assert.isDefined(globalThis.window.customElements.get('wrap-transformed-el'));
    });

    it('rejects a transform that changes tagName', () => {
        const tagNameChangingDefine = wrapDefineElement({
            transformInputs(init) {
                return {
                    ...init,
                    tagName: 'wrap-changed-tag-name-el',
                };
            },
        });

        assert.throws(
            () => {
                tagNameChangingDefine()({
                    tagName: 'wrap-original-tag-name-el',
                    render() {
                        return '';
                    },
                });
            },
            {
                matchMessage: 'transformInputs cannot change tagName',
            },
        );
        assert.isUndefined(globalThis.window.customElements.get('wrap-original-tag-name-el'));
        assert.isUndefined(globalThis.window.customElements.get('wrap-changed-tag-name-el'));
    });

    it('erases its requirements within its options callbacks', () => {
        const threadedDefine = wrapDefineElement<
            MySpecificTagName,
            MySpecificInputs,
            {requiredState: number},
            {requiredEvent: DefineEvent<boolean>}
        >({
            /**
             * The options are not parameterized by the wrapper's requirements, so both callbacks
             * only ever see the fully erased tag name.
             */
            assertInputs(init) {
                assert.tsType(init.tagName).equals<CustomElementTagName>();
            },
            transformInputs(init) {
                assert.tsType(init.tagName).equals<CustomElementTagName>();
                return init;
            },
        });

        const MyElement = threadedDefine<MySpecificInputs>()({
            tagName: 'my-threaded-requirements-el',
            state() {
                return {
                    requiredState: 0,
                };
            },
            events: {
                requiredEvent: defineElementEvent<boolean>(),
            },
            render() {
                return '';
            },
        });

        assert.tsType(MyElement.tagName).equals<'my-threaded-requirements-el'>();
        assert.strictEquals(MyElement.tagName, 'my-threaded-requirements-el');

        /** A transform may return any valid tag name; only a _changed_ one is rejected, at runtime. */
        wrapDefineElement<MySpecificTagName>({
            transformInputs(init) {
                return {
                    ...init,
                    tagName: 'bad-tag-3',
                };
            },
        });
    });

    it('forwards input error params to defineElement only once the init is given', () => {
        const withErrorParams = (
            myDefineElement as (...args: ReadonlyArray<unknown>) => (init: unknown) => unknown
        )(
            'ERROR: Cannot define an element input property that clashes with native HTMLElement properties.',
        );

        assert.throws(() => {
            withErrorParams({
                tagName: 'my-error-params-el',
                render() {
                    return '';
                },
            });
        });
        assert.isUndefined(globalThis.window.customElements.get('my-error-params-el'));

        // @ts-expect-error: style clashes with a native HTMLElement property
        myDefineElement<{style: string}>();
    });

    it('applies a transformed render callback and injected styles', async () => {
        const wrappingDefine = wrapDefineElement({
            transformInputs(init) {
                return {
                    ...init,
                    styles: css`
                        :host {
                            color: rgb(0, 128, 0);
                        }
                    `,
                    render(params) {
                        return html`
                            <div class="wrapper">${init.render(params)}</div>
                        `;
                    },
                };
            },
        });

        const TestElement = wrappingDefine()({
            tagName: 'wrap-transformed-render-el',
            render() {
                return 'inner';
            },
        });

        const fixture = await testWeb.render(html`
            <${TestElement}></${TestElement}>
        `);
        assert.instanceOf(fixture, TestElement);

        assert.strictEquals(
            assertWrap.isDefined(fixture.shadowRoot.querySelector('.wrapper')).textContent,
            'inner',
        );
        assert.strictEquals(globalThis.getComputedStyle(fixture).color, 'rgb(0, 128, 0)');
    });

    it('produces the same definition surface as plain defineElement', () => {
        function describeDefinitionSurface(
            definition: Pick<
                DeclarativeElementDefinition,
                | 'assignedInputs'
                | 'elementOptions'
                | 'events'
                | 'hostClasses'
                | 'slotNames'
                | 'styles'
                | 'testIds'
            >,
        ) {
            return {
                events: definition.events,
                slotNames: definition.slotNames,
                testIds: definition.testIds,
                hostClasses: definition.hostClasses,
                elementOptions: definition.elementOptions,
                assignedInputs: definition.assignedInputs,
                stylesText: definition.styles.cssText,
            };
        }

        const assertOnlyInit = {
            tagName: 'wrap-assert-only-el',
            render() {
                return '';
            },
        } as const;
        const assertOnlyDefinition = wrapDefineElement({
            assertInputs() {},
        })()(assertOnlyInit);
        const transformOnlyDefinition = wrapDefineElement({
            transformInputs(init) {
                return init;
            },
        })()({
            ...assertOnlyInit,
            tagName: 'wrap-transform-only-el',
        });
        const noOptionsDefinition = wrapDefineElement()()({
            ...assertOnlyInit,
            tagName: 'wrap-no-callbacks-el',
        });
        const plainDefinition = defineElement()({
            ...assertOnlyInit,
            tagName: 'wrap-plain-define-el',
        });

        assert.deepEquals(
            [
                assertOnlyDefinition,
                transformOnlyDefinition,
                noOptionsDefinition,
            ].map((definition) => describeDefinitionSurface(definition)),
            [
                plainDefinition,
                plainDefinition,
                plainDefinition,
            ].map((definition) => describeDefinitionSurface(definition)),
        );
        assert.notStrictEquals(assertOnlyDefinition.init, assertOnlyInit);
        assert.strictEquals(assertOnlyDefinition.init.tagName, assertOnlyInit.tagName);
    });

    it('exports the erased init type', () => {
        const concreteInit: DeclarativeElementInit<
            'my-erased-init-el',
            {myInput: string},
            {myState: number},
            // eslint-disable-next-line @typescript-eslint/no-empty-object-type
            {},
            never,
            never,
            [],
            []
        > = {
            tagName: 'my-erased-init-el',
            state() {
                return {
                    myState: 0,
                };
            },
            render() {
                return '';
            },
        };

        /**
         * Erasing `State` and `Inputs` to `any` collapses the `state` callback's return type into
         * its clashing-property error string, so no concrete init is directly assignable.
         */
        // @ts-expect-error: see above
        const erasedInit: AnyDeclarativeElementInit = concreteInit;

        assert.strictEquals(erasedInit.tagName, 'my-erased-init-el');
        assert.tsType<AnyDeclarativeElementInit['tagName']>().equals<any>();
    });

    it('requires inputs to be a superset of the inputs requirement', () => {
        const requiringDefine = wrapDefineElement<
            MySpecificTagName,
            {requiredInput: string},
            {requiredState: number},
            {requiredEvent: DefineEvent<boolean>}
        >();

        assert.isDefined(
            requiringDefine<{requiredInput: string; extraInput: number}>()({
                tagName: 'my-requirements-met-el',
                state() {
                    return {
                        requiredState: 0,
                        extraState: '',
                    };
                },
                events: {
                    requiredEvent: defineElementEvent<boolean>(),
                    extraEvent: defineElementEvent<string>(),
                },
                render() {
                    return '';
                },
            }),
        );

        // @ts-expect-error: the required input is missing
        requiringDefine<{someOtherInput: string}>();
    });
});
