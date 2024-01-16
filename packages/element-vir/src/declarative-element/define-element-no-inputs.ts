import {
    PropertyValueType,
    ensureErrorAndPrependMessage,
    extractErrorMessage,
    getObjectTypedKeys,
    kebabCaseToCamelCase,
} from '@augment-vir/common';
import {defineCssVars} from 'lit-css-vars';
import {isRunTimeType} from 'run-time-assertions';
import {MinimalDefinitionWithInputs} from '../template-transforms/minimal-element-definition';
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
import {createSlotNamesMap} from './slot-names';

export type VerifiedElementNoInputsInit<
    TagName extends CustomElementTagName,
    Inputs extends PropertyInitMapBase,
    StateInit extends PropertyInitMapBase,
    EventsInit extends EventsInitMap,
    HostClassKeys extends BaseCssPropertyName<TagName>,
    CssVarKeys extends BaseCssPropertyName<TagName>,
    SlotNames extends ReadonlyArray<string>,
> =
    Extract<keyof StateInit, keyof HTMLElement> extends never
        ? DeclarativeElementInit<
              TagName,
              Inputs,
              StateInit,
              EventsInit,
              HostClassKeys,
              CssVarKeys,
              SlotNames
          >
        : 'ERROR: Cannot define an element state property that clashes with native HTMLElement properties.';

export function defineElementNoInputs<
    const TagName extends CustomElementTagName = '-',
    Inputs extends PropertyInitMapBase = {},
    StateInit extends PropertyInitMapBase = {},
    EventsInit extends EventsInitMap = {},
    const HostClassKeys extends BaseCssPropertyName<TagName> = `${TagName}-`,
    const CssVarKeys extends BaseCssPropertyName<TagName> = `${TagName}-`,
    const SlotNames extends ReadonlyArray<string> = Readonly<[]>,
>(
    initInput: VerifiedElementNoInputsInit<
        TagName,
        Inputs,
        StateInit,
        EventsInit,
        HostClassKeys,
        CssVarKeys,
        SlotNames
    >,
): DeclarativeElementDefinition<
    TagName,
    Inputs,
    StateInit,
    EventsInit,
    HostClassKeys,
    CssVarKeys,
    SlotNames
> {
    /** This as cast is safe only because of the following run-time type check. */
    const init = initInput as DeclarativeElementInit<
        TagName,
        Inputs,
        StateInit,
        EventsInit,
        HostClassKeys,
        CssVarKeys,
        SlotNames
    >;
    if (!isRunTimeType(init, 'object')) {
        throw new Error('Cannot define element with non-object init: ${init}');
    }
    if (!isRunTimeType(init.tagName, 'string')) {
        throw new Error('Missing valid tagName (expected a string).');
    }

    type ThisElementDefinition = DeclarativeElementDefinition<
        TagName,
        Inputs,
        StateInit,
        EventsInit,
        HostClassKeys,
        CssVarKeys,
        SlotNames
    >;
    type ThisElementStaticClass = typeof DeclarativeElement<
        TagName,
        Inputs,
        StateInit,
        EventsInit,
        HostClassKeys,
        CssVarKeys,
        SlotNames
    >;
    type ThisElementInstance = InstanceType<ThisElementStaticClass>;

    if (!init.renderCallback || typeof init.renderCallback === 'string') {
        throw new Error(
            `Failed to define element '${init.tagName}': renderCallback is not a function`,
        );
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
        assertValidCssProperties(init.tagName, init.hostClasses);
    }
    if (init.cssVars) {
        assertValidCssProperties(init.tagName, init.cssVars);
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

    const slotNamesMap = createSlotNamesMap(init.slotNames);

    const calculatedStyles =
        typeof init.styles === 'function'
            ? init.styles(hostClassNamesToStylesInput({hostClassNames, cssVars}))
            : init.styles || css``;

    const typedRenderCallback: StaticDeclarativeElementProperties<
        TagName,
        Inputs,
        StateInit,
        EventsInit,
        HostClassKeys,
        CssVarKeys,
        SlotNames
    >['renderCallback'] = init.renderCallback;

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
        StateInit,
        EventsInit,
        HostClassKeys,
        CssVarKeys,
        SlotNames
    > {
        public static override readonly elementOptions = elementOptions;
        public static override readonly tagName = init.tagName;
        public static override readonly styles = calculatedStyles;

        public _lastRenderError: Error | undefined = undefined;
        public _internalRenderCount = 0;

        public createRenderParams(): RenderParams<
            TagName,
            Inputs,
            StateInit,
            EventsInit,
            HostClassKeys,
            CssVarKeys,
            SlotNames
        > {
            return createRenderParams({element: this, eventsMap, cssVars, slotNamesMap});
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
            CssVarKeys,
            SlotNames
        >['events'] = eventsMap;
        public static override readonly renderCallback: ThisElementStaticClass['renderCallback'] =
            typedRenderCallback as DeclarativeElementDefinition['renderCallback'] as ThisElementStaticClass['renderCallback'];
        public static override readonly hostClasses: StaticDeclarativeElementProperties<
            TagName,
            Inputs,
            StateInit,
            EventsInit,
            HostClassKeys,
            CssVarKeys,
            SlotNames
        >['hostClasses'] = hostClassNames;
        public static override readonly cssVars: StaticDeclarativeElementProperties<
            TagName,
            Inputs,
            StateInit,
            EventsInit,
            HostClassKeys,
            CssVarKeys,
            SlotNames
        >['cssVars'] = cssVars;
        public static override readonly init = init as any;
        public static override readonly slotNames: StaticDeclarativeElementProperties<
            TagName,
            Inputs,
            StateInit,
            EventsInit,
            HostClassKeys,
            CssVarKeys,
            SlotNames
        >['slotNames'] = slotNamesMap;
        public static override readonly stateInitStatic: StaticDeclarativeElementProperties<
            TagName,
            PropertyInitMapBase,
            PropertyInitMapBase,
            EventsInitMap,
            HostClassKeys,
            CssVarKeys,
            SlotNames
        >['stateInitStatic'] = init.stateInitStatic as StaticDeclarativeElementProperties<
            TagName,
            PropertyInitMapBase,
            PropertyInitMapBase,
            EventsInitMap,
            HostClassKeys,
            CssVarKeys,
            SlotNames
        >['stateInitStatic'];
        public get instanceType() {
            throw new Error(
                `"instanceType" was called on ${init.tagName} as a value but it is only for types.`,
            );
        }
        public static override get inputsType(): Inputs {
            throw new Error(
                `"inputsType" was called on ${init.tagName} as a value but it is only for types.`,
            );
        }
        public static override get stateType(): StateInit {
            throw new Error(
                `"stateType" was called on ${init.tagName} as a value but it is only for types.`,
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
                    !elementOptions.ignoreUnsetInputs
                ) {
                    console.warn(
                        this,
                        `${init.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use '.assign()' on its opening tag. If no inputs are intended, use '${defineElementNoInputs.name}' to define ${init.tagName}.`,
                    );
                }
                this._hasRendered = true;

                const renderParams = this.createRenderParams();

                if (!this._initCalled && init.initCallback) {
                    this._initCalled = true;
                    if ((init.initCallback(renderParams) as any) instanceof Promise) {
                        throw new Error('initCallback cannot be asynchronous');
                    }
                }

                const renderResult = typedRenderCallback(renderParams);
                if (renderResult instanceof Promise) {
                    throw new Error('renderCallback cannot be asynchronous');
                }
                applyHostClasses({
                    host: renderParams.host,
                    hostClassesInit: init.hostClasses,
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
                    `Failed to render ${init.tagName}`,
                );
                console.error(error);
                this._lastRenderError = error;
                return extractErrorMessage(error);
            }
        }

        public override connectedCallback(): void {
            super.connectedCallback();
            if (this._hasRendered && !this._initCalled && init.initCallback) {
                this._initCalled = true;
                const renderParams = this.createRenderParams();
                if ((init.initCallback(renderParams) as any) instanceof Promise) {
                    throw new Error(`initCallback in '${init.tagName}' cannot be asynchronous`);
                }
            }
        }

        public override disconnectedCallback(): void {
            super.disconnectedCallback();
            if (init.cleanupCallback) {
                const renderParams = this.createRenderParams();
                if ((init.cleanupCallback(renderParams) as any) instanceof Promise) {
                    throw new Error(`cleanupCallback in '${init.tagName}' cannot be asynchronous`);
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
                !elementOptions.allowPolymorphicState,
            );

        constructor() {
            super();

            const stateInitStatic: StateInit =
                (init.stateInitStatic as StateInit) || ({} as StateInit);

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
            value: kebabCaseToCamelCase(init.tagName, {
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

    if (window.customElements.get(init.tagName)) {
        console.warn(`Tried to define custom element '${init.tagName}' but it is already defined.`);
    } else {
        window.customElements.define(init.tagName, anonymousClass);
    }

    return anonymousClass as unknown as ThisElementDefinition;
}
