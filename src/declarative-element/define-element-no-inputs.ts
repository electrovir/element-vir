import {
    PropertyValueType,
    ensureErrorAndPrependMessage,
    extractErrorMessage,
    getObjectTypedKeys,
    kebabCaseToCamelCase,
} from '@augment-vir/common';
import {defineCssVars} from 'lit-css-vars';
import {WrappedMinimalDefinition} from '../template-transforms/minimal-element-definition';
import {css} from '../template-transforms/vir-css/vir-css';
import {CustomElementTagName} from './custom-tag-name';
import {
    DeclarativeElement,
    DeclarativeElementDefinition,
    StaticDeclarativeElementProperties,
} from './declarative-element';
import {DeclarativeElementInit} from './declarative-element-init';
import {
    DeclarativeElementDefinitionOptions,
    IgnoreInputsNotBeenSetBeforeWarningSymbol,
    defaultDeclarativeElementDefinitionOptions,
} from './definition-options';
import {hasDeclarativeElementParent} from './has-declarative-element-parent';
import {assignInputs} from './properties/assign-inputs';
import {BaseCssPropertyName, assertValidCssProperties} from './properties/css-properties';
import {CssVars} from './properties/css-vars';
import {
    EventDescriptorMap,
    EventsInitMap,
    createEventDescriptorMap,
} from './properties/element-events';
import {PropertyInitMapBase} from './properties/element-properties';
import {bindReactiveProperty, createElementUpdaterProxy} from './properties/element-updater-proxy';
import {FlattenElementVirStateSetup} from './properties/element-vir-state-setup';
import {HostClassNamesMap, createHostClassNamesMap} from './properties/host-classes';
import {applyHostClasses, hostClassNamesToStylesInput} from './properties/styles';
import {RenderParams, createRenderParams} from './render-callback';

export function defineElementNoInputs<
    const TagName extends CustomElementTagName = '-',
    Inputs extends PropertyInitMapBase = {},
    StateInit extends PropertyInitMapBase = {},
    EventsInit extends EventsInitMap = {},
    const HostClassKeys extends BaseCssPropertyName<TagName> = `${TagName}-`,
    const CssVarKeys extends BaseCssPropertyName<TagName> = `${TagName}-`,
>(
    initInput: DeclarativeElementInit<
        TagName,
        Inputs,
        StateInit,
        EventsInit,
        HostClassKeys,
        CssVarKeys
    >,
): DeclarativeElementDefinition<TagName, Inputs, StateInit, EventsInit, HostClassKeys, CssVarKeys> {
    type ThisElementDefinition = DeclarativeElementDefinition<
        TagName,
        Inputs,
        StateInit,
        EventsInit,
        HostClassKeys,
        CssVarKeys
    >;
    type ThisElementStaticClass = typeof DeclarativeElement<
        TagName,
        Inputs,
        StateInit,
        EventsInit,
        HostClassKeys,
        CssVarKeys
    >;
    type ThisElementInstance = InstanceType<ThisElementStaticClass>;

    if (!initInput.renderCallback || typeof initInput.renderCallback === 'string') {
        throw new Error(
            `Failed to define element '${initInput.tagName}': renderCallback is not a function`,
        );
    }

    const elementOptions: DeclarativeElementDefinitionOptions = {
        ...defaultDeclarativeElementDefinitionOptions,
        ...initInput.options,
    };

    const eventsMap: EventDescriptorMap<TagName, EventsInit> = createEventDescriptorMap(
        initInput.tagName,
        initInput.events,
    );
    const hostClassNames: HostClassNamesMap<TagName, HostClassKeys> = createHostClassNamesMap(
        initInput.hostClasses,
    );
    if (initInput.hostClasses) {
        assertValidCssProperties(initInput.tagName, initInput.hostClasses);
    }
    if (initInput.cssVars) {
        assertValidCssProperties(initInput.tagName, initInput.cssVars);
    }
    /**
     * As casts here are to prevent defineCssVars from complaining that our CSS var names are too
     * generic or the names not being in kebab-case. (Which, in this line of code, are indeed true
     * errors. However, this is for internal types only and the user will actually see much more
     * specific types externally.)
     */
    const cssVars = (initInput.cssVars ? defineCssVars(initInput.cssVars as any) : {}) as CssVars<
        TagName,
        CssVarKeys
    >;

    const calculatedStyles =
        typeof initInput.styles === 'function'
            ? initInput.styles(hostClassNamesToStylesInput({hostClassNames, cssVars}))
            : initInput.styles || css``;

    const typedRenderCallback: StaticDeclarativeElementProperties<
        TagName,
        Inputs,
        StateInit,
        EventsInit,
        HostClassKeys,
        CssVarKeys
    >['renderCallback'] = initInput.renderCallback;

    function typedAssignCallback(...[inputs]: Parameters<ThisElementStaticClass['assign']>) {
        const wrappedDefinition: WrappedMinimalDefinition = {
            _elementVirIsWrappedDefinition: true,
            definition: anonymousClass,
            inputs,
        };

        return wrappedDefinition;
    }

    const anonymousClass = class extends DeclarativeElement<
        TagName,
        Inputs,
        StateInit,
        EventsInit,
        HostClassKeys,
        CssVarKeys
    > {
        public static override readonly tagName = initInput.tagName;
        public static override readonly styles = calculatedStyles;

        public _lastRenderError: Error | undefined = undefined;
        public _internalRenderCount = 0;

        public createRenderParams(): RenderParams<
            TagName,
            Inputs,
            StateInit,
            EventsInit,
            HostClassKeys,
            CssVarKeys
        > {
            return createRenderParams({element: this, eventsMap, cssVars});
        }

        public static override assign = typedAssignCallback as any;

        // this gets set below in Object.defineProperties
        public static override readonly isStrictInstance: any = () => false;
        public static override readonly events: StaticDeclarativeElementProperties<
            TagName,
            Inputs,
            StateInit,
            EventsInit,
            HostClassKeys,
            CssVarKeys
        >['events'] = eventsMap;
        public static override readonly renderCallback: ThisElementStaticClass['renderCallback'] =
            typedRenderCallback as DeclarativeElementDefinition['renderCallback'] as ThisElementStaticClass['renderCallback'];
        public static override readonly hostClasses: StaticDeclarativeElementProperties<
            TagName,
            Inputs,
            StateInit,
            EventsInit,
            HostClassKeys,
            CssVarKeys
        >['hostClasses'] = hostClassNames;
        public static override readonly cssVars: StaticDeclarativeElementProperties<
            TagName,
            Inputs,
            StateInit,
            EventsInit,
            HostClassKeys,
            CssVarKeys
        >['cssVars'] = cssVars;
        public static override readonly stateInitStatic: StaticDeclarativeElementProperties<
            TagName,
            PropertyInitMapBase,
            PropertyInitMapBase,
            EventsInitMap,
            HostClassKeys,
            CssVarKeys
        >['stateInitStatic'] = initInput.stateInitStatic as StaticDeclarativeElementProperties<
            TagName,
            PropertyInitMapBase,
            PropertyInitMapBase,
            EventsInitMap,
            HostClassKeys,
            CssVarKeys
        >['stateInitStatic'];
        public get instanceType() {
            throw new Error(
                `"instanceType" was called on ${initInput.tagName} as a value but it is only for types.`,
            );
        }
        public static override get inputsType(): Inputs {
            throw new Error(
                `"inputsType" was called on ${initInput.tagName} as a value but it is only for types.`,
            );
        }
        public static override get stateType(): StateInit {
            throw new Error(
                `"stateType" was called on ${initInput.tagName} as a value but it is only for types.`,
            );
        }

        public _initCalled = false;
        public _hasRendered = false;
        public _lastRenderedProps: ThisElementInstance['_lastRenderedProps'] = undefined as any;

        public _haveInputsBeenSet = false;

        public render() {
            this._internalRenderCount++;
            try {
                if (
                    // This ignores elements at the root of a page, as they can't receive inputs from
                    // other elements (cause they have no custom element ancestors).
                    hasDeclarativeElementParent(this) &&
                    !this._haveInputsBeenSet &&
                    !elementOptions[IgnoreInputsNotBeenSetBeforeWarningSymbol]
                ) {
                    console.warn(
                        this,
                        `${initInput.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use '.assign()' on its opening tag. If no inputs are intended, use '${defineElementNoInputs.name}' to define ${initInput.tagName}.`,
                    );
                }
                this._hasRendered = true;

                const renderParams = this.createRenderParams();

                if (!this._initCalled && initInput.initCallback) {
                    this._initCalled = true;
                    if ((initInput.initCallback(renderParams) as any) instanceof Promise) {
                        throw new Error('initCallback cannot be asynchronous');
                    }
                }

                const renderResult = typedRenderCallback(renderParams);
                if (renderResult instanceof Promise) {
                    throw new Error('renderCallback cannot be asynchronous');
                }
                applyHostClasses({
                    host: renderParams.host,
                    hostClassesInit: initInput.hostClasses,
                    hostClassNames,
                    state: renderParams.state,
                    inputs: renderParams.inputs,
                });
                this._lastRenderedProps = {
                    inputs: {...renderParams.inputs},
                    state: {...renderParams.state},
                };
                return renderResult;
            } catch (caught) {
                const error: Error = ensureErrorAndPrependMessage(
                    caught,
                    `Failed to render ${initInput.tagName}`,
                );
                this._lastRenderError = error;
                return extractErrorMessage(error);
            }
        }

        public override connectedCallback(): void {
            super.connectedCallback();
            if (this._hasRendered && !this._initCalled && initInput.initCallback) {
                this._initCalled = true;
                const renderParams = this.createRenderParams();
                if ((initInput.initCallback(renderParams) as any) instanceof Promise) {
                    throw new Error(
                        `initCallback in '${initInput.tagName}' cannot be asynchronous`,
                    );
                }
            }
        }

        public override disconnectedCallback(): void {
            super.disconnectedCallback();
            if (initInput.cleanupCallback) {
                const renderParams = this.createRenderParams();
                if ((initInput.cleanupCallback(renderParams) as any) instanceof Promise) {
                    throw new Error(
                        `cleanupCallback in '${initInput.tagName}' cannot be asynchronous`,
                    );
                }
            }
            this._initCalled = false;
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
            createElementUpdaterProxy<Readonly<Inputs>>(this, false);

        public readonly instanceState: ThisElementInstance['instanceState'] =
            createElementUpdaterProxy<FlattenElementVirStateSetup<StateInit>>(
                this,
                !initInput.options?.allowPolymorphicState,
            );

        constructor() {
            super();

            const stateInitStatic: StateInit =
                (initInput.stateInitStatic as StateInit) || ({} as StateInit);

            getObjectTypedKeys(stateInitStatic).forEach((stateKey) => {
                bindReactiveProperty(this, stateKey);

                this.instanceState[stateKey] = stateInitStatic[stateKey] as PropertyValueType<
                    FlattenElementVirStateSetup<StateInit>
                >;
            });
            this.definition = anonymousClass as unknown as ThisElementDefinition;
        }
    };

    Object.defineProperties(anonymousClass, {
        name: {
            value: kebabCaseToCamelCase(initInput.tagName, {
                capitalizeFirstLetter: true,
            }),
            writable: true,
        },
        isStrictInstance: {
            value: (element: unknown) => {
                return element instanceof anonymousClass;
            },
            writable: false,
        },
    });

    if (window.customElements.get(initInput.tagName)) {
        console.warn(
            `Tried to define custom element '${initInput.tagName}' but it is already defined.`,
        );
    } else {
        window.customElements.define(initInput.tagName, anonymousClass);
    }

    return anonymousClass as unknown as ThisElementDefinition;
}
