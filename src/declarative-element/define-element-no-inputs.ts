import {getObjectTypedKeys, kebabCaseToCamelCase} from '@augment-vir/common';
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
    defaultDeclarativeElementDefinitionOptions,
    IgnoreInputsNotBeenSetBeforeRenderWarningSymbol,
} from './definition-options';
import {assign} from './directives/assign.directive';
import {hasDeclarativeElementParent} from './has-declarative-element-parent';
import {MaybeAsyncStateToSync, toAsyncStateHandlerMap} from './properties/async-state';
import {createCssVarNamesMap, createCssVarValuesMap} from './properties/css-vars';
import {createEventDescriptorMap, EventsInitMap} from './properties/element-events';
import {PropertyInitMapBase} from './properties/element-properties';
import {createElementUpdaterProxy} from './properties/element-updater-proxy';
import {createHostClassNamesMap} from './properties/host-classes';
import {applyHostClasses, hostClassNamesToStylesInput} from './properties/styles';
import {createRenderParams, RenderParams} from './render-callback';

export function defineElementNoInputs<
    TagNameGeneric extends CustomElementTagName = '-',
    InputsGeneric extends PropertyInitMapBase = {},
    MaybeAsyncStateInitGeneric extends PropertyInitMapBase = {},
    EventsInitGeneric extends EventsInitMap = {},
    HostClassKeys extends string = '',
    CssVarKeys extends string = '',
>(
    initInput: DeclarativeElementInit<
        TagNameGeneric,
        InputsGeneric,
        MaybeAsyncStateInitGeneric,
        EventsInitGeneric,
        HostClassKeys,
        CssVarKeys
    >,
): DeclarativeElementDefinition<
    TagNameGeneric,
    InputsGeneric,
    MaybeAsyncStateInitGeneric,
    EventsInitGeneric,
    HostClassKeys,
    CssVarKeys
> {
    type ThisElementDefinition = DeclarativeElementDefinition<
        TagNameGeneric,
        InputsGeneric,
        MaybeAsyncStateInitGeneric,
        EventsInitGeneric,
        HostClassKeys,
        CssVarKeys
    >;
    type ThisElementInstance = typeof DeclarativeElement<
        TagNameGeneric,
        InputsGeneric,
        MaybeAsyncStateInitGeneric,
        EventsInitGeneric,
        HostClassKeys,
        CssVarKeys
    >;

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
        MaybeAsyncStateInitGeneric,
        EventsInitGeneric,
        HostClassKeys,
        CssVarKeys
    >['renderCallback'] = initInput.renderCallback;

    const anonymousClass = class extends DeclarativeElement<
        TagNameGeneric,
        InputsGeneric,
        MaybeAsyncStateInitGeneric,
        EventsInitGeneric,
        HostClassKeys,
        CssVarKeys
    > {
        public static override readonly tagName = initInput.tagName;
        public static override readonly styles = calculatedStyles;

        public createRenderParams(): RenderParams<
            TagNameGeneric,
            InputsGeneric,
            MaybeAsyncStateInitGeneric,
            EventsInitGeneric,
            HostClassKeys,
            CssVarKeys
        > {
            return createRenderParams(this, eventsMap);
        }

        // this gets set below in Object.defineProperties
        public static override readonly isStrictInstance: any = () => false;
        public static override readonly events: StaticDeclarativeElementProperties<
            TagNameGeneric,
            InputsGeneric,
            MaybeAsyncStateToSync<MaybeAsyncStateInitGeneric>,
            EventsInitGeneric,
            HostClassKeys,
            CssVarKeys
        >['events'] = eventsMap;
        public static override readonly renderCallback: ThisElementInstance['renderCallback'] =
            typedRenderCallback as ThisElementInstance['renderCallback'];
        public static override readonly hostClasses: StaticDeclarativeElementProperties<
            TagNameGeneric,
            InputsGeneric,
            MaybeAsyncStateToSync<MaybeAsyncStateInitGeneric>,
            EventsInitGeneric,
            HostClassKeys,
            CssVarKeys
        >['hostClasses'] = hostClassNames;
        public static override readonly cssVarNames: StaticDeclarativeElementProperties<
            TagNameGeneric,
            InputsGeneric,
            MaybeAsyncStateToSync<MaybeAsyncStateInitGeneric>,
            EventsInitGeneric,
            HostClassKeys,
            CssVarKeys
        >['cssVarNames'] = cssVarNames;
        public static override readonly stateInit: StaticDeclarativeElementProperties<
            TagNameGeneric,
            PropertyInitMapBase,
            PropertyInitMapBase,
            EventsInitMap,
            string,
            string
        >['stateInit'] = initInput.stateInit as StaticDeclarativeElementProperties<
            TagNameGeneric,
            PropertyInitMapBase,
            PropertyInitMapBase,
            EventsInitMap,
            string,
            string
        >['stateInit'];
        public static override readonly cssVarValues: StaticDeclarativeElementProperties<
            TagNameGeneric,
            InputsGeneric,
            MaybeAsyncStateToSync<MaybeAsyncStateInitGeneric>,
            EventsInitGeneric,
            HostClassKeys,
            CssVarKeys
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
        public static override get stateType(): MaybeAsyncStateToSync<MaybeAsyncStateInitGeneric> {
            throw new Error(
                `"stateType" was called on ${initInput.tagName} as a value but it is only for types.`,
            );
        }

        public initCalled = false;

        public haveInputsBeenSet = false;
        public markInputsAsHavingBeenSet(): void {
            if (!this.haveInputsBeenSet) {
                this.haveInputsBeenSet = true;
            }
        }
        public render() {
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

            const renderParams = this.createRenderParams();

            if (!this.initCalled && initInput.initCallback) {
                this.initCalled = true;
                initInput.initCallback(renderParams);
            }

            const renderResult = initInput.renderCallback(renderParams);
            applyHostClasses({
                host: renderParams.host,
                hostClassesInit: initInput.hostClasses,
                hostClassNames,
                state: renderParams.state,
                inputs: renderParams.inputs,
            });
            return renderResult;
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
        public readonly definition = {} as unknown as ThisElementDefinition;

        public assignInputs(inputs: InputsGeneric): void {
            getObjectTypedKeys(inputs).forEach((key) => {
                property()(this, key);
                this.instanceInputs[key] = inputs[key];
            });
            this.markInputsAsHavingBeenSet();
        }

        public readonly asyncStateHandlerMap = toAsyncStateHandlerMap(initInput.stateInit);

        public readonly instanceInputs: InputsGeneric = createElementUpdaterProxy<InputsGeneric>(
            this,
            false,
        );

        public readonly instanceState: MaybeAsyncStateToSync<MaybeAsyncStateInitGeneric> =
            createElementUpdaterProxy<MaybeAsyncStateToSync<MaybeAsyncStateInitGeneric>>(
                this,
                true,
            );

        constructor() {
            super();

            const stateInit: MaybeAsyncStateToSync<MaybeAsyncStateInitGeneric> =
                (initInput.stateInit as MaybeAsyncStateToSync<MaybeAsyncStateInitGeneric>) ||
                ({} as MaybeAsyncStateToSync<MaybeAsyncStateInitGeneric>);

            getObjectTypedKeys(stateInit).forEach((stateKey) => {
                property()(this, stateKey);

                const asyncStateClassInstance = this.asyncStateHandlerMap[stateKey];

                if (asyncStateClassInstance) {
                    this.instanceState[stateKey] = asyncStateClassInstance.getValue();
                    asyncStateClassInstance.addSettleListener(() => {
                        (this as MaybeAsyncStateToSync<MaybeAsyncStateInitGeneric>)[stateKey] =
                            asyncStateClassInstance.getValue();
                    });
                } else {
                    this.instanceState[stateKey] = stateInit[stateKey];
                }
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
