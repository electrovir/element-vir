/* eslint-disable @typescript-eslint/no-empty-object-type */

import {assert, check} from '@augment-vir/assert';
import {
    StringCase,
    ensureErrorAndPrependMessage,
    extractErrorMessage,
    getObjectTypedKeys,
    kebabCaseToCamelCase,
} from '@augment-vir/common';
import {defineCssVars} from 'lit-css-vars';
import {type MinimalDefinitionWithInputs} from '../template-transforms/minimal-element-definition.js';
import {css} from '../template-transforms/vir-css/vir-css.js';
import {type CustomElementTagName} from './custom-tag-name.js';
import {type DeclarativeElementInit} from './declarative-element-init.js';
import {
    DeclarativeElement,
    type DeclarativeElementDefinition,
    type StaticDeclarativeElementProperties,
} from './declarative-element.js';
import {
    type DeclarativeElementDefinitionOptions,
    defaultDeclarativeElementDefinitionOptions,
} from './definition-options.js';
import {assignInputs} from './properties/assign-inputs.js';
import {type CssVars} from './properties/css-vars.js';
import {
    type EventDescriptorMap,
    type EventsInitMap,
    createEventDescriptorMap,
} from './properties/element-events.js';
import {type PropertyInitMapBase} from './properties/element-properties.js';
import {type HostClassNamesMap, createHostClassNamesMap} from './properties/host-classes.js';
import {bindReactiveProperty, createElementPropertyProxy} from './properties/property-proxy.js';
import {
    type BaseStringName,
    assertValidStringNames,
    createSlotNamesMap,
    createStringNameMap,
} from './properties/string-names.js';
import {applyHostClasses, createStylesCallbackInput} from './properties/styles.js';
import {type RenderParams, createRenderParams} from './render-callback.js';

/**
 * Verifies that the given `Inputs` type does not clash with built-in HTMLElement properties. This
 * is used within {@link defineElement}.
 *
 * @category Internal
 */
export type DeclarativeElementInputErrorParams<Inputs extends PropertyInitMapBase> =
    Extract<keyof Inputs, keyof HTMLElement> extends never
        ? []
        : [
              'ERROR: Cannot define an element input property that clashes with native HTMLElement properties.',
          ];

/**
 * Defines an element with inputs. Note that this function must be called twice, due to TypeScript
 * type inference limitations.
 *
 * @category Element Definition
 * @example
 *
 * ```ts
 * import {defineElement, html} from 'element-vir';
 *
 * const MyElement = defineElement<{username: string}>()({
 *     tagName: 'my-element',
 *     render({inputs}) {
 *         return html`
 *             <p>hi: ${inputs.username}</p>
 *         `;
 *     },
 * });
 * ```
 */
export function defineElement<Inputs extends PropertyInitMapBase = {}>(
    /**
     * These `errorParams` is present when there are problems with the `Inputs` type. If it is
     * present, the error should be fixed. This should always be empty.
     */
    ...errorParams: DeclarativeElementInputErrorParams<Inputs>
) {
    assert.isEmpty(errorParams);

    return <
        const TagName extends CustomElementTagName,
        State extends PropertyInitMapBase = {},
        EventsInit extends EventsInitMap = {},
        const HostClassKeys extends BaseStringName<NoInfer<TagName>> = `${NoInfer<TagName>}-`,
        const CssVarKeys extends BaseStringName<NoInfer<TagName>> = `${NoInfer<TagName>}-`,
        const SlotNames extends ReadonlyArray<string> = Readonly<[]>,
        const TestIds extends ReadonlyArray<string> = Readonly<[]>,
    >(
        initInput: DeclarativeElementInit<
            TagName,
            Inputs,
            State,
            EventsInit,
            HostClassKeys,
            CssVarKeys,
            SlotNames,
            TestIds
        >,
    ): DeclarativeElementDefinition<
        TagName,
        Inputs,
        State,
        EventsInit,
        HostClassKeys,
        CssVarKeys,
        SlotNames,
        TestIds
    > => {
        const init:
            | string
            | DeclarativeElementInit<
                  TagName,
                  Inputs,
                  State,
                  EventsInit,
                  HostClassKeys,
                  CssVarKeys,
                  SlotNames,
                  TestIds
              > = initInput;

        if (!check.isObject(init)) {
            throw new TypeError(`Cannot define element with non-object init: ${String(init)}`);
        }

        return internalDefineElement({
            ...init,
            options: {
                ...init.options,
            },
        });
    };
}

function internalDefineElement<
    const TagName extends CustomElementTagName = '-',
    Inputs extends PropertyInitMapBase = {},
    State extends PropertyInitMapBase = {},
    EventsInit extends EventsInitMap = {},
    const HostClassKeys extends BaseStringName<NoInfer<TagName>> = `${NoInfer<TagName>}-`,
    const CssVarKeys extends BaseStringName<NoInfer<TagName>> = `${NoInfer<TagName>}-`,
    const SlotNames extends ReadonlyArray<string> = Readonly<[]>,
    const TestIds extends ReadonlyArray<string> = Readonly<[]>,
>(
    init: DeclarativeElementInit<
        TagName,
        Inputs,
        State,
        EventsInit,
        HostClassKeys,
        CssVarKeys,
        SlotNames,
        TestIds
    >,
): DeclarativeElementDefinition<
    TagName,
    Inputs,
    State,
    EventsInit,
    HostClassKeys,
    CssVarKeys,
    SlotNames,
    TestIds
> {
    if (!check.isObject(init)) {
        throw new TypeError(`Cannot define element with non-object init: ${String(init)}`);
    } else if (!check.isString(init.tagName)) {
        throw new TypeError('Missing valid tagName (expected a string).');
    }

    type ThisElementDefinition = DeclarativeElementDefinition<
        TagName,
        Inputs,
        State,
        EventsInit,
        HostClassKeys,
        CssVarKeys,
        SlotNames,
        TestIds
    >;
    type ThisElementStaticClass = typeof DeclarativeElement<
        TagName,
        Inputs,
        State,
        EventsInit,
        HostClassKeys,
        CssVarKeys,
        SlotNames,
        TestIds
    >;
    type ThisElementInstance = InstanceType<ThisElementStaticClass>;

    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (!init.render || typeof init.render === 'string') {
        throw new Error(`Failed to define element '${init.tagName}': render is not a function`);
    }

    const elementOptions: DeclarativeElementDefinitionOptions = {
        ...defaultDeclarativeElementDefinitionOptions,
        ...init.options,
    };

    const eventsMap: EventDescriptorMap<TagName, EventsInit> = createEventDescriptorMap(
        init.tagName,
        init.events,
    );
    const hostClassNames: HostClassNamesMap<TagName, HostClassKeys> = createHostClassNamesMap(
        init.hostClasses,
    );
    if (init.hostClasses) {
        assertValidStringNames(init.tagName, Object.keys(init.hostClasses));
    }
    if (init.cssVars) {
        assertValidStringNames(init.tagName, Object.keys(init.cssVars));
    }
    /**
     * As casts here are to prevent defineCssVars from complaining that our CSS var names are too
     * generic or the names not being in kebab-case. (Which, in this line of code, are indeed true
     * errors. However, this is for internal types only and the user will actually see much more
     * specific types externally.)
     */
    const cssVars = (init.cssVars ? defineCssVars(init.cssVars as any) : {}) as CssVars<
        TagName,
        CssVarKeys
    >;

    const slotNamesMap: StaticDeclarativeElementProperties<
        TagName,
        Inputs,
        State,
        EventsInit,
        HostClassKeys,
        CssVarKeys,
        SlotNames,
        TestIds
    >['slotNames'] = createSlotNamesMap(
        init.tagName,
        init.slotNames as SlotNames | undefined,
    ) as unknown as StaticDeclarativeElementProperties<
        TagName,
        Inputs,
        State,
        EventsInit,
        HostClassKeys,
        CssVarKeys,
        SlotNames,
        TestIds
    >['slotNames'];
    const testIdsMap: StaticDeclarativeElementProperties<
        TagName,
        Inputs,
        State,
        EventsInit,
        HostClassKeys,
        CssVarKeys,
        SlotNames,
        TestIds
    >['testIds'] = createStringNameMap(init.tagName, 'test-id', init.testIds);

    const calculatedStyles =
        typeof init.styles === 'function'
            ? init.styles(
                  createStylesCallbackInput({
                      hostClassNames,
                      cssVars,
                      slotNamesMap,
                  }),
              )
            : init.styles || css``;

    const typedRenderCallback: StaticDeclarativeElementProperties<
        TagName,
        Inputs,
        State,
        EventsInit,
        HostClassKeys,
        CssVarKeys,
        SlotNames,
        TestIds
    >['render'] = init.render;

    function typedAssignCallback(...[inputs]: Parameters<ThisElementStaticClass['assign']>) {
        const wrappedDefinition: MinimalDefinitionWithInputs = {
            _elementVirIsMinimalDefinitionWithInputs: true,
            definition: anonymousClass,
            inputs,
        };

        return wrappedDefinition;
    }

    const anonymousClass = class extends DeclarativeElement<
        TagName,
        Inputs,
        State,
        EventsInit,
        HostClassKeys,
        CssVarKeys,
        SlotNames,
        TestIds
    > {
        public static override readonly elementOptions = elementOptions;
        public static override readonly tagName = init.tagName;
        public static override readonly styles = calculatedStyles;

        public _lastRenderError: Error | undefined = undefined;
        public _internalRenderCount = 0;

        public createRenderParams(): RenderParams<
            TagName,
            Inputs,
            State,
            EventsInit,
            HostClassKeys,
            CssVarKeys,
            SlotNames,
            TestIds
        > {
            return createRenderParams({
                element: this,
                eventsMap,
                cssVars,
                slotNamesMap,
                testIdsMap,
            });
        }

        public static override readonly assign = typedAssignCallback as any;

        public static override readonly events: StaticDeclarativeElementProperties<
            TagName,
            Inputs,
            State,
            EventsInit,
            HostClassKeys,
            CssVarKeys,
            SlotNames,
            TestIds
        >['events'] = eventsMap;
        public static override readonly render: ThisElementStaticClass['render'] =
            typedRenderCallback as any as ThisElementStaticClass['render'];
        public static override readonly hostClasses: StaticDeclarativeElementProperties<
            TagName,
            Inputs,
            State,
            EventsInit,
            HostClassKeys,
            CssVarKeys,
            SlotNames,
            TestIds
        >['hostClasses'] = hostClassNames;
        public static override readonly cssVars: StaticDeclarativeElementProperties<
            TagName,
            Inputs,
            State,
            EventsInit,
            HostClassKeys,
            CssVarKeys,
            SlotNames,
            TestIds
        >['cssVars'] = cssVars;
        public static override readonly init = init as any;
        public static override readonly slotNames = slotNamesMap as any;
        public static override readonly testIds = testIdsMap as any;
        public get InstanceType() {
            throw new Error(
                `'InstanceType' was called on ${init.tagName} as a value but it is only a type.`,
            );
        }
        public static override get InputsType(): Inputs {
            throw new Error(
                `'InputsType' was called on ${init.tagName} as a value but it is only a type.`,
            );
        }
        public static override get StateType(): State {
            throw new Error(
                `'StateType' was called on ${init.tagName} as a value but it is only a type.`,
            );
        }
        public static override get UpdateStateType(): any {
            throw new Error(
                `'UpdateStateType' was called on ${init.tagName} as a value but it is only a type.`,
            );
        }

        public _initCalled = false;
        public _stateCalled = false;
        public _hasRendered = false;
        public _lastRenderedProps: ThisElementInstance['_lastRenderedProps'] = undefined as any;

        public render() {
            this._internalRenderCount++;
            try {
                this._hasRendered = true;

                const renderParams = this.createRenderParams();

                if (!this._stateCalled && init.state) {
                    this._stateCalled = true;
                    const stateInit = init.state(renderParams);

                    if (stateInit instanceof Promise) {
                        throw new TypeError('state cannot be asynchronous');
                    }

                    getObjectTypedKeys(stateInit).forEach((stateKey) => {
                        bindReactiveProperty(this, stateKey);

                        (this.instanceState as PropertyInitMapBase)[stateKey] = stateInit[stateKey];
                    });
                }

                if (!this._initCalled && init.init) {
                    this._initCalled = true;
                    if ((init.init(renderParams) as any) instanceof Promise) {
                        throw new TypeError('init cannot be asynchronous');
                    }
                }

                const renderResult = typedRenderCallback(renderParams);
                if (renderResult instanceof Promise) {
                    throw new TypeError('render cannot be asynchronous');
                }
                applyHostClasses({
                    host: renderParams.host,
                    hostClassesInit: init.hostClasses,
                    hostClassNames,
                    state: renderParams.state,
                    inputs: renderParams.inputs,
                });
                this._lastRenderedProps = {
                    inputs: {
                        ...renderParams.inputs,
                    },
                    state: {
                        ...renderParams.state,
                    },
                };
                return renderResult;
            } catch (caught) {
                const error: Error = ensureErrorAndPrependMessage(
                    caught,
                    `Failed to render ${init.tagName}`,
                );
                console.error(error);
                this._lastRenderError = error;
                void elementOptions.errorHandler?.(error);
                return extractErrorMessage(error);
            }
        }

        public override connectedCallback(): void {
            super.connectedCallback();
            if (this._hasRendered && !this._initCalled && init.init) {
                this._initCalled = true;
                const renderParams = this.createRenderParams();
                if ((init.init(renderParams) as any) instanceof Promise) {
                    throw new TypeError(`init in '${init.tagName}' cannot be asynchronous`);
                }
            }
        }

        public destroy() {
            Object.values(this.instanceState).forEach((stateValue) => {
                if (check.hasKey(stateValue, 'destroy') && check.isFunction(stateValue.destroy)) {
                    stateValue.destroy();
                }
            });
            this._initCalled = false;
            this._stateCalled = false;
        }

        public override disconnectedCallback(): void {
            super.disconnectedCallback();
            /**
             * Always reset bookkeeping and run `destroy()`, even when `cleanup` throws — otherwise
             * a throwing cleanup leaves `_initCalled` / `_stateCalled` stuck and corrupts the next
             * mount.
             */
            try {
                if (init.cleanup && this._stateCalled) {
                    const renderParams = this.createRenderParams();
                    if ((init.cleanup(renderParams) as any) instanceof Promise) {
                        throw new TypeError(`cleanup in '${init.tagName}' cannot be asynchronous`);
                    }
                }
            } finally {
                this.destroy();
            }
        }

        // this is set below in Object.defineProperties
        public readonly definition: ThisElementInstance['definition'] =
            {} as unknown as ThisElementDefinition;

        public assignInputs(inputs: Partial<Inputs>): void {
            assignInputs(this, inputs);
        }

        public readonly observablePropertyListenerMap: ThisElementInstance['observablePropertyListenerMap'] =
            {};

        public readonly instanceInputs: ThisElementInstance['instanceInputs'] =
            createElementPropertyProxy<Readonly<Inputs>>(this as any, false);

        public readonly instanceState: ThisElementInstance['instanceState'] =
            createElementPropertyProxy<State>(this as any, !elementOptions.allowPolymorphicState);

        constructor() {
            super();
            this.definition = anonymousClass as unknown as ThisElementDefinition;
        }
    };

    Object.defineProperties(anonymousClass, {
        name: {
            value: kebabCaseToCamelCase(init.tagName, {
                firstLetterCase: StringCase.Upper,
            }),
            writable: true,
        },
    });

    /**
     * `window` will be `undefined` in Node.js and we want to be able to import these files into
     * Node.js.
     */
    if (globalThis.window as typeof window | undefined) {
        if (globalThis.window.customElements.get(init.tagName)) {
            console.warn(
                `Tried to define custom element '${init.tagName}' but it is already defined.`,
            );
        } else {
            globalThis.window.customElements.define(init.tagName, anonymousClass);
        }
    }

    return anonymousClass as unknown as ThisElementDefinition;
}
