import {ensureError, getObjectTypedKeys, kebabCaseToCamelCase} from '@augment-vir/common';
import {css} from 'lit';
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
    IgnoreInputsNotBeenSetBeforeRenderWarningSymbol,
    defaultDeclarativeElementDefinitionOptions,
} from './definition-options';
import {assign} from './directives/assign.directive';
import {hasDeclarativeElementParent} from './has-declarative-element-parent';
import {assignInputs, markInputsAsHavingBeenSet} from './properties/assign-inputs';
import {MaybeAsyncStateToSync} from './properties/async-state';
import {createCssVarNamesMap, createCssVarValuesMap} from './properties/css-vars';
import {EventsInitMap, createEventDescriptorMap} from './properties/element-events';
import {PropertyInitMapBase} from './properties/element-properties';
import {createElementUpdaterProxy} from './properties/element-updater-proxy';
import {createHostClassNamesMap} from './properties/host-classes';
import {applyHostClasses, hostClassNamesToStylesInput} from './properties/styles';
import {RenderParams, createRenderParams} from './render-callback';

export function defineElementNoInputs<
    TagNameGeneric extends CustomElementTagName = '-',
    InputsGeneric extends PropertyInitMapBase = {},
    StateInitMaybeAsyncGeneric extends PropertyInitMapBase = {},
    EventsInitGeneric extends EventsInitMap = {},
    HostClassKeys extends string = '',
    CssVarKeys extends string = '',
    RenderOutputGeneric = any,
    HasInputsDefiner extends boolean = false,
>(
    initInput: DeclarativeElementInit<
        TagNameGeneric,
        InputsGeneric,
        StateInitMaybeAsyncGeneric,
        EventsInitGeneric,
        HostClassKeys,
        CssVarKeys,
        RenderOutputGeneric,
        HasInputsDefiner
    >,
): DeclarativeElementDefinition<
    TagNameGeneric,
    InputsGeneric,
    StateInitMaybeAsyncGeneric,
    EventsInitGeneric,
    HostClassKeys,
    CssVarKeys,
    RenderOutputGeneric,
    HasInputsDefiner
> {
    type ThisElementDefinition = DeclarativeElementDefinition<
        TagNameGeneric,
        InputsGeneric,
        StateInitMaybeAsyncGeneric,
        EventsInitGeneric,
        HostClassKeys,
        CssVarKeys,
        RenderOutputGeneric,
        HasInputsDefiner
    >;
    type ThisElementStaticClass = typeof DeclarativeElement<
        TagNameGeneric,
        InputsGeneric,
        StateInitMaybeAsyncGeneric,
        EventsInitGeneric,
        HostClassKeys,
        CssVarKeys,
        RenderOutputGeneric,
        HasInputsDefiner
    >;
    type ThisElementInstance = InstanceType<ThisElementStaticClass>;

    if (!initInput.renderCallback || typeof initInput.renderCallback === 'string') {
        throw new Error(
            `Failed to define element '${initInput.tagName}': renderCallback is not a function`,
        );
    }

    const eventsMap = createEventDescriptorMap(initInput.events);
    const hostClassNames = createHostClassNamesMap(initInput.tagName, initInput.hostClasses);
    const cssVarNames = createCssVarNamesMap(initInput.tagName, initInput.cssVars);
    const cssVarValues = createCssVarValuesMap(initInput.cssVars, cssVarNames);
    const elementOptions: DeclarativeElementDefinitionOptions = {
        ...defaultDeclarativeElementDefinitionOptions,
        ...initInput.options,
    };
    const calculatedStyles =
        typeof initInput.styles === 'function'
            ? initInput.styles(
                  hostClassNamesToStylesInput({hostClassNames, cssVarNames, cssVarValues}),
              )
            : initInput.styles || css``;

    const typedRenderCallback: StaticDeclarativeElementProperties<
        TagNameGeneric,
        InputsGeneric,
        StateInitMaybeAsyncGeneric,
        EventsInitGeneric,
        HostClassKeys,
        CssVarKeys,
        RenderOutputGeneric,
        HasInputsDefiner
    >['renderCallback'] = initInput.renderCallback;

    const anonymousClass = class extends DeclarativeElement<
        TagNameGeneric,
        InputsGeneric,
        StateInitMaybeAsyncGeneric,
        EventsInitGeneric,
        HostClassKeys,
        CssVarKeys,
        RenderOutputGeneric,
        HasInputsDefiner
    > {
        public static override readonly tagName = initInput.tagName;
        public static override readonly styles = calculatedStyles;

        public createRenderParams(): RenderParams<
            TagNameGeneric,
            InputsGeneric,
            StateInitMaybeAsyncGeneric,
            EventsInitGeneric,
            HostClassKeys,
            CssVarKeys,
            HasInputsDefiner
        > {
            return createRenderParams(this, eventsMap);
        }

        // this gets set below in Object.defineProperties
        public static override readonly isStrictInstance: any = () => false;
        public static override readonly events: StaticDeclarativeElementProperties<
            TagNameGeneric,
            InputsGeneric,
            MaybeAsyncStateToSync<StateInitMaybeAsyncGeneric>,
            EventsInitGeneric,
            HostClassKeys,
            CssVarKeys,
            RenderOutputGeneric,
            HasInputsDefiner
        >['events'] = eventsMap;
        public static override readonly renderCallback: ThisElementStaticClass['renderCallback'] =
            typedRenderCallback as ThisElementStaticClass['renderCallback'];
        public static override readonly hostClasses: StaticDeclarativeElementProperties<
            TagNameGeneric,
            InputsGeneric,
            MaybeAsyncStateToSync<StateInitMaybeAsyncGeneric>,
            EventsInitGeneric,
            HostClassKeys,
            CssVarKeys,
            RenderOutputGeneric,
            HasInputsDefiner
        >['hostClasses'] = hostClassNames;
        public static override readonly cssVarNames: StaticDeclarativeElementProperties<
            TagNameGeneric,
            InputsGeneric,
            MaybeAsyncStateToSync<StateInitMaybeAsyncGeneric>,
            EventsInitGeneric,
            HostClassKeys,
            CssVarKeys,
            RenderOutputGeneric,
            HasInputsDefiner
        >['cssVarNames'] = cssVarNames;
        public static override readonly stateInit: StaticDeclarativeElementProperties<
            TagNameGeneric,
            PropertyInitMapBase,
            PropertyInitMapBase,
            EventsInitMap,
            string,
            string,
            RenderOutputGeneric,
            HasInputsDefiner
        >['stateInit'] = initInput.stateInit as StaticDeclarativeElementProperties<
            TagNameGeneric,
            PropertyInitMapBase,
            PropertyInitMapBase,
            EventsInitMap,
            string,
            string,
            RenderOutputGeneric,
            HasInputsDefiner
        >['stateInit'];
        public static override readonly cssVarValues: StaticDeclarativeElementProperties<
            TagNameGeneric,
            InputsGeneric,
            MaybeAsyncStateToSync<StateInitMaybeAsyncGeneric>,
            EventsInitGeneric,
            HostClassKeys,
            CssVarKeys,
            RenderOutputGeneric,
            HasInputsDefiner
        >['cssVarValues'] = cssVarNames;
        public get instanceType() {
            throw new Error(
                `"instanceType" was called on ${initInput.tagName} as a value but it is only for types.`,
            );
        }
        public static override get inputsType(): InputsGeneric {
            throw new Error(
                `"inputsType" was called on ${initInput.tagName} as a value but it is only for types.`,
            );
        }
        public static override get stateType(): MaybeAsyncStateToSync<StateInitMaybeAsyncGeneric> {
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
                    !elementOptions[IgnoreInputsNotBeenSetBeforeRenderWarningSymbol]
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
                    initInput.initCallback(renderParams);
                }

                const renderResult = typedRenderCallback(renderParams);
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
                initInput.initCallback(renderParams);
            }
        }

        public override disconnectedCallback(): void {
            super.disconnectedCallback();
            if (initInput.cleanupCallback) {
                const renderParams = this.createRenderParams();
                initInput.cleanupCallback(renderParams);
            }
            this.initCalled = false;
        }

        // this is set below in Object.defineProperties
        public readonly definition: ThisElementInstance['definition'] =
            {} as unknown as ThisElementDefinition;

        public assignInputs(inputs: Partial<InputsGeneric>): void {
            assignInputs(this, inputs);
        }

        public readonly asyncStateHandlerMap: ThisElementInstance['asyncStateHandlerMap'] = {};

        public readonly instanceInputs: ThisElementInstance['instanceInputs'] =
            createElementUpdaterProxy<InputsGeneric>(this, false);

        public readonly instanceState: ThisElementInstance['instanceState'] =
            createElementUpdaterProxy<MaybeAsyncStateToSync<StateInitMaybeAsyncGeneric>>(
                this,
                true,
            );

        constructor() {
            super();

            const stateInit: MaybeAsyncStateToSync<StateInitMaybeAsyncGeneric> =
                (initInput.stateInit as MaybeAsyncStateToSync<StateInitMaybeAsyncGeneric>) ||
                ({} as MaybeAsyncStateToSync<StateInitMaybeAsyncGeneric>);

            getObjectTypedKeys(stateInit).forEach((stateKey) => {
                property()(this, stateKey);

                this.instanceState[stateKey] = stateInit[stateKey];
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
