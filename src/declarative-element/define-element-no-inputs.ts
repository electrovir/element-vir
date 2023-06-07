import {ensureError, getObjectTypedKeys, kebabCaseToCamelCase} from '@augment-vir/common';
import {css} from 'lit';
import {defineCssVars} from 'lit-css-vars';
import {property} from 'lit/decorators.js';
import {DeclarativeElementMarkerSymbol} from '../declarative-element-marker-symbol';
import {
    DeclarativeElement,
    DeclarativeElementDefinition,
    StaticDeclarativeElementProperties,
} from './declarative-element';
import {CustomElementTagName, DeclarativeElementInit} from './declarative-element-init';
import {
    DeclarativeElementDefinitionOptions,
    IgnoreInputsNotBeenSetBeforeWarningSymbol,
    defaultDeclarativeElementDefinitionOptions,
} from './definition-options';
import {assign} from './directives/assign.directive';
import {hasDeclarativeElementParent} from './has-declarative-element-parent';
import {assignInputs, markInputsAsHavingBeenSet} from './properties/assign-inputs';
import {BaseCssPropertyName, assertValidCssProperties} from './properties/css-properties';
import {CssVars} from './properties/css-vars';
import {EventsInitMap, createEventDescriptorMap} from './properties/element-events';
import {PropertyInitMapBase} from './properties/element-properties';
import {createElementUpdaterProxy} from './properties/element-updater-proxy';
import {HostClassNamesMap, createHostClassNamesMap} from './properties/host-classes';
import {
    AllowObservablePropertySetter,
    FlattenObservablePropertyGetters,
} from './properties/observable-property/observable-property-handler';
import {applyHostClasses, hostClassNamesToStylesInput} from './properties/styles';
import {RenderParams, createRenderParams} from './render-callback';

export function defineElementNoInputs<
    const TagName extends CustomElementTagName = '-',
    Inputs extends PropertyInitMapBase = {},
    StateInit extends PropertyInitMapBase = {},
    EventsInit extends EventsInitMap = {},
    const HostClassKeys extends BaseCssPropertyName<TagName> = `${TagName}-`,
    const CssVarKeys extends BaseCssPropertyName<TagName> = `${TagName}-`,
    RenderOutput = any,
>(
    initInput: DeclarativeElementInit<
        TagName,
        Inputs,
        StateInit,
        EventsInit,
        HostClassKeys,
        CssVarKeys,
        RenderOutput
    >,
): DeclarativeElementDefinition<
    TagName,
    Inputs,
    StateInit,
    EventsInit,
    HostClassKeys,
    CssVarKeys,
    RenderOutput
> {
    type ThisElementDefinition = DeclarativeElementDefinition<
        TagName,
        Inputs,
        StateInit,
        EventsInit,
        HostClassKeys,
        CssVarKeys,
        RenderOutput
    >;
    type ThisElementStaticClass = typeof DeclarativeElement<
        TagName,
        Inputs,
        StateInit,
        EventsInit,
        HostClassKeys,
        CssVarKeys,
        RenderOutput
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

    const eventsMap = createEventDescriptorMap(initInput.events);
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
        CssVarKeys,
        RenderOutput
    >['renderCallback'] = initInput.renderCallback;

    const anonymousClass = class extends DeclarativeElement<
        TagName,
        Inputs,
        StateInit,
        EventsInit,
        HostClassKeys,
        CssVarKeys,
        RenderOutput
    > {
        public static override readonly tagName = initInput.tagName;
        public static override readonly styles = calculatedStyles;

        public createRenderParams(): RenderParams<
            TagName,
            Inputs,
            StateInit,
            EventsInit,
            HostClassKeys,
            CssVarKeys
        > {
            return createRenderParams(this, eventsMap);
        }

        // this gets set below in Object.defineProperties
        public static override readonly isStrictInstance: any = () => false;
        public static override readonly events: StaticDeclarativeElementProperties<
            TagName,
            Inputs,
            FlattenObservablePropertyGetters<StateInit>,
            EventsInit,
            HostClassKeys,
            CssVarKeys,
            RenderOutput
        >['events'] = eventsMap;
        public static override readonly renderCallback: ThisElementStaticClass['renderCallback'] =
            typedRenderCallback as ThisElementStaticClass['renderCallback'];
        public static override readonly hostClasses: StaticDeclarativeElementProperties<
            TagName,
            Inputs,
            FlattenObservablePropertyGetters<StateInit>,
            EventsInit,
            HostClassKeys,
            CssVarKeys,
            RenderOutput
        >['hostClasses'] = hostClassNames;
        public static override readonly cssVars: StaticDeclarativeElementProperties<
            TagName,
            Inputs,
            FlattenObservablePropertyGetters<StateInit>,
            EventsInit,
            HostClassKeys,
            CssVarKeys,
            RenderOutput
        >['cssVars'] = cssVars;
        public static override readonly stateInitStatic: StaticDeclarativeElementProperties<
            TagName,
            PropertyInitMapBase,
            PropertyInitMapBase,
            EventsInitMap,
            HostClassKeys,
            CssVarKeys,
            RenderOutput
        >['stateInitStatic'] = initInput.stateInitStatic as StaticDeclarativeElementProperties<
            TagName,
            PropertyInitMapBase,
            PropertyInitMapBase,
            EventsInitMap,
            HostClassKeys,
            CssVarKeys,
            RenderOutput
        >['stateInitStatic'];
        public get instanceType() {
            throw new Error(
                `"instanceType" was called on ${initInput.tagName} as a value but it is only for types.`,
            );
        }
        public static override get inputsType(): AllowObservablePropertySetter<Inputs> {
            throw new Error(
                `"inputsType" was called on ${initInput.tagName} as a value but it is only for types.`,
            );
        }
        public static override get stateType(): FlattenObservablePropertyGetters<StateInit> {
            throw new Error(
                `"stateType" was called on ${initInput.tagName} as a value but it is only for types.`,
            );
        }

        public initCalled = false;
        public hasRendered = false;
        public lastRenderedProps: ThisElementInstance['lastRenderedProps'] = undefined as any;

        public haveInputsBeenSet = false;
        public markInputsAsHavingBeenSet(): void {
            markInputsAsHavingBeenSet(this);
        }
        public render() {
            try {
                if (
                    // This ignores elements at the root of a page, as they can't receive inputs from
                    // other elements (cause they have no custom element ancestors).
                    hasDeclarativeElementParent(this) &&
                    !this.haveInputsBeenSet &&
                    !elementOptions[IgnoreInputsNotBeenSetBeforeWarningSymbol]
                ) {
                    console.warn(
                        this,
                        `${initInput.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use the "${assign.name}" directive on it. If no inputs are intended, use "${defineElementNoInputs.name}" to define ${initInput.tagName}.`,
                    );
                }
                this.hasRendered = true;

                const renderParams = this.createRenderParams();

                if (!this.initCalled && initInput.initCallback) {
                    this.initCalled = true;
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
                this.lastRenderedProps = {
                    inputs: {...renderParams.inputs},
                    state: {...renderParams.state},
                };
                return renderResult;
            } catch (caught) {
                const error: Error = ensureError(caught);
                error.message = `Failed to render '${initInput.tagName}': ${error.message}`;
                throw error;
            }
        }

        public override connectedCallback(): void {
            super.connectedCallback();
            if (this.hasRendered && !this.initCalled && initInput.initCallback) {
                this.initCalled = true;
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
            this.initCalled = false;
        }

        // this is set below in Object.defineProperties
        public readonly definition: ThisElementInstance['definition'] =
            {} as unknown as ThisElementDefinition;

        public assignInputs(inputs: Partial<Inputs>): void {
            assignInputs(this, inputs);
        }

        public readonly observablePropertyHandlerMap: ThisElementInstance['observablePropertyHandlerMap'] =
            {};

        public readonly instanceInputs: ThisElementInstance['instanceInputs'] =
            createElementUpdaterProxy<Readonly<FlattenObservablePropertyGetters<Inputs>>>(
                this,
                false,
            );

        public readonly instanceState: ThisElementInstance['instanceState'] =
            createElementUpdaterProxy<FlattenObservablePropertyGetters<StateInit>>(
                this,
                !initInput.options?.allowPolymorphicState,
            );

        constructor() {
            super();

            const stateInitStatic: FlattenObservablePropertyGetters<StateInit> =
                (initInput.stateInitStatic as FlattenObservablePropertyGetters<StateInit>) ||
                ({} as FlattenObservablePropertyGetters<StateInit>);

            getObjectTypedKeys(stateInitStatic).forEach((stateKey) => {
                property()(this, stateKey);

                this.instanceState[stateKey] = stateInitStatic[stateKey];
            });
            this.definition = anonymousClass as unknown as ThisElementDefinition;
        }
    };

    Object.defineProperties(anonymousClass, {
        [DeclarativeElementMarkerSymbol]: {
            value: true,
            writable: false,
        },
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
