import {getObjectTypedKeys, kebabCaseToCamelCase} from 'augment-vir';
import {css, TemplateResult} from 'lit';
import {property} from 'lit/decorators.js';
import {DeclarativeElementMarkerSymbol} from '../declarative-element-marker-symbol';
import {createCssVarNamesMap, createCssVarValuesMap} from './css-vars';
import {
    DeclarativeElement,
    DeclarativeElementDefinition,
    StaticDeclarativeElementProperties,
} from './declarative-element';
import {DeclarativeElementInit} from './declarative-element-init';
import {
    DeclarativeElementDefinitionOptions,
    defaultDeclarativeElementDefinitionOptions,
    IgnoreInputsNotBeenSetBeforeRenderWarningSymbol,
} from './definition-options';
import {assign} from './directives/assign.directive';
import {createEventDescriptorMap, EventsInitMap} from './element-events';
import {createElementUpdaterProxy, PropertyInitMapBase} from './element-properties';
import {hasDeclarativeElementParent} from './has-declarative-element-parent';
import {createHostClassNamesMap} from './host-classes';
import {createRenderParams, RenderParams} from './render-callback';
import {applyHostClasses, hostClassNamesToStylesInput} from './styles';

export function defineElementNoInputs<
    InputsGeneric extends PropertyInitMapBase = {},
    StateGeneric extends PropertyInitMapBase = {},
    EventsInitGeneric extends EventsInitMap = {},
    HostClassKeys extends string = '',
    CssVarKeys extends string = '',
>(
    initInput: DeclarativeElementInit<
        InputsGeneric,
        StateGeneric,
        EventsInitGeneric,
        HostClassKeys,
        CssVarKeys
    >,
): DeclarativeElementDefinition<
    InputsGeneric,
    StateGeneric,
    EventsInitGeneric,
    HostClassKeys,
    CssVarKeys
> {
    type ThisElementDefinition = DeclarativeElementDefinition<
        InputsGeneric,
        StateGeneric,
        EventsInitGeneric,
        HostClassKeys,
        CssVarKeys
    >;
    type ThisElementInstance = typeof DeclarativeElement<InputsGeneric, StateGeneric>;

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
        InputsGeneric,
        StateGeneric,
        EventsInitGeneric,
        HostClassKeys,
        CssVarKeys
    >['renderCallback'] = initInput.renderCallback;

    const anonymousClass = class extends DeclarativeElement<
        InputsGeneric,
        StateGeneric,
        EventsInitGeneric,
        HostClassKeys,
        CssVarKeys
    > {
        public static override readonly tagName = initInput.tagName;
        public static override readonly styles = calculatedStyles;

        public createRenderParams(): RenderParams<
            InputsGeneric,
            StateGeneric,
            EventsInitGeneric,
            HostClassKeys,
            CssVarKeys
        > {
            return createRenderParams(this, eventsMap);
        }

        // this gets set below in Object.defineProperties
        public static override readonly isStrictInstance: any = () => false;
        public static override readonly events: StaticDeclarativeElementProperties<
            InputsGeneric,
            StateGeneric,
            EventsInitGeneric,
            HostClassKeys,
            CssVarKeys
        >['events'] = eventsMap;
        public static override readonly renderCallback: ThisElementInstance['renderCallback'] =
            typedRenderCallback as ThisElementInstance['renderCallback'];
        public static override readonly hostClasses: StaticDeclarativeElementProperties<
            InputsGeneric,
            StateGeneric,
            EventsInitGeneric,
            HostClassKeys,
            CssVarKeys
        >['hostClasses'] = hostClassNames;
        public static override readonly cssVarNames: StaticDeclarativeElementProperties<
            InputsGeneric,
            StateGeneric,
            EventsInitGeneric,
            HostClassKeys,
            CssVarKeys
        >['cssVarNames'] = cssVarNames;
        public static override readonly stateInit: StaticDeclarativeElementProperties<
            PropertyInitMapBase,
            PropertyInitMapBase,
            EventsInitMap,
            string,
            string
        >['stateInit'] = initInput.stateInit as StaticDeclarativeElementProperties<
            PropertyInitMapBase,
            PropertyInitMapBase,
            EventsInitMap,
            string,
            string
        >['stateInit'];
        public static override readonly cssVarValues: StaticDeclarativeElementProperties<
            InputsGeneric,
            StateGeneric,
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

        public initCalled = false;

        public haveInputsBeenSet = false;
        public markInputsAsHavingBeenSet(): void {
            if (!this.haveInputsBeenSet) {
                this.haveInputsBeenSet = true;
            }
        }
        public render(): TemplateResult {
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

        // this is set below in Object.defineProperties
        public readonly creator = {} as unknown as ThisElementDefinition;

        public assignInputs(inputs: InputsGeneric): void {
            getObjectTypedKeys(inputs).forEach((key) => {
                property()(this, key);
                this.instanceInputs[key] = inputs[key];
            });
            this.markInputsAsHavingBeenSet();
        }

        public readonly instanceInputs: InputsGeneric = createElementUpdaterProxy<InputsGeneric>(
            this,
            false,
        );

        public readonly instanceState: StateGeneric = createElementUpdaterProxy<StateGeneric>(
            this,
            true,
        );

        constructor() {
            super();

            const stateInit: StateGeneric = initInput.stateInit || ({} as StateGeneric);

            Object.keys(stateInit).forEach((propName: keyof StateGeneric) => {
                property()(this, propName);
                (this as StateGeneric)[propName] = stateInit[propName];
            });
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
        creator: {
            value: anonymousClass as unknown as ThisElementDefinition,
            writable: false,
        },
        isStrictInstance: {
            value: (element: unknown) => {
                return element instanceof anonymousClass;
            },
            writable: false,
        },
    });
    window.customElements.define(initInput.tagName, anonymousClass);

    return anonymousClass as unknown as ThisElementDefinition;
}
