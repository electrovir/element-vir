import {kebabCaseToCamelCase} from 'augment-vir';
import {css, TemplateResult} from 'lit';
import {property} from 'lit/decorators.js';
import {createCssVarNamesMap, createCssVarValuesMap} from './css-vars';
import {defaultOptions, FunctionalElementDefinitionOptions} from './definition-options';
import {createEventDescriptorMap, EventsInitMap} from './element-events';
import {
    createElementUpdaterProxy,
    createPropertyDescriptorMap,
    PropertyInitMapBase,
} from './element-properties';
import {
    FunctionalElement,
    FunctionalElementDefinition,
    StaticFunctionalElementProperties,
} from './functional-element';
import {FunctionalElementInit} from './functional-element-init';
import {hasFunctionalElementParent} from './has-functional-element-parent';
import {createHostClassNamesMap} from './host-classes';
import {createRenderParams, RenderParams} from './render-callback';
import {applyHostClasses, hostClassNamesToStylesInput} from './styles';

const defaultInit: Required<
    Pick<FunctionalElementInit<any, any, any, any, any>, 'stateInit' | 'events'>
> = {
    events: {},
    stateInit: {},
};

export function defineFunctionalElement<
    InputsGeneric extends PropertyInitMapBase = {},
    PropertyInitGeneric extends PropertyInitMapBase = {},
    EventsInitGeneric extends EventsInitMap = {},
    HostClassKeys extends string = '',
    CssVarKeys extends string = '',
>(
    initInput: FunctionalElementInit<
        InputsGeneric,
        PropertyInitGeneric,
        EventsInitGeneric,
        HostClassKeys,
        CssVarKeys
    >,
): FunctionalElementDefinition<
    InputsGeneric,
    PropertyInitGeneric,
    EventsInitGeneric,
    HostClassKeys,
    CssVarKeys
> {
    type ThisElementDefinition = FunctionalElementDefinition<
        InputsGeneric,
        PropertyInitGeneric,
        EventsInitGeneric,
        HostClassKeys,
        CssVarKeys
    >;
    type ThisElementInstance = typeof FunctionalElement<InputsGeneric, PropertyInitGeneric>;

    const eventsMap = createEventDescriptorMap(initInput.events);
    const hostClassNames = createHostClassNamesMap(initInput.tagName, initInput.hostClasses);
    const cssVarNames = createCssVarNamesMap(initInput.tagName, initInput.cssVars);
    const cssVarValues = createCssVarValuesMap(initInput.cssVars, cssVarNames);
    const elementOptions: FunctionalElementDefinitionOptions = {
        ...defaultOptions,
        ...initInput.options,
    };

    const calculatedStyles =
        typeof initInput.styles === 'function'
            ? initInput.styles(
                  hostClassNamesToStylesInput({hostClassNames, cssVarNames, cssVarValues}),
              )
            : initInput.styles || css``;

    const typedInit: StaticFunctionalElementProperties<
        InputsGeneric,
        PropertyInitGeneric,
        EventsInitGeneric,
        HostClassKeys,
        CssVarKeys
    >['init'] = {...defaultInit, ...initInput};

    const typedRenderCallback: StaticFunctionalElementProperties<
        InputsGeneric,
        PropertyInitGeneric,
        EventsInitGeneric,
        HostClassKeys,
        CssVarKeys
    >['renderCallback'] = initInput.renderCallback;

    const anonymousClass = class extends FunctionalElement<
        InputsGeneric,
        PropertyInitGeneric,
        EventsInitGeneric,
        HostClassKeys,
        CssVarKeys
    > {
        public static override readonly tagName = initInput.tagName;
        public static override readonly styles = calculatedStyles;

        public createRenderParams(): RenderParams<
            InputsGeneric,
            PropertyInitGeneric,
            EventsInitGeneric,
            HostClassKeys,
            CssVarKeys
        > {
            return createRenderParams(this, eventsMap);
        }

        public static override init: ThisElementInstance['init'] =
            typedInit as ThisElementInstance['init'];

        public static override readonly events: StaticFunctionalElementProperties<
            InputsGeneric,
            PropertyInitGeneric,
            EventsInitGeneric,
            HostClassKeys,
            CssVarKeys
        >['events'] = eventsMap;
        public static override readonly renderCallback: ThisElementInstance['renderCallback'] =
            typedRenderCallback as ThisElementInstance['renderCallback'];
        public static override readonly props: StaticFunctionalElementProperties<
            InputsGeneric,
            PropertyInitGeneric,
            EventsInitGeneric,
            HostClassKeys,
            CssVarKeys
        >['props'] = createPropertyDescriptorMap(initInput.stateInit);
        public static override readonly hostClasses: StaticFunctionalElementProperties<
            InputsGeneric,
            PropertyInitGeneric,
            EventsInitGeneric,
            HostClassKeys,
            CssVarKeys
        >['hostClasses'] = hostClassNames;
        public static override readonly cssVarNames: StaticFunctionalElementProperties<
            InputsGeneric,
            PropertyInitGeneric,
            EventsInitGeneric,
            HostClassKeys,
            CssVarKeys
        >['cssVarNames'] = cssVarNames;
        public static override readonly cssVarValues: StaticFunctionalElementProperties<
            InputsGeneric,
            PropertyInitGeneric,
            EventsInitGeneric,
            HostClassKeys,
            CssVarKeys
        >['cssVarValues'] = cssVarNames;
        public get instanceType() {
            throw new Error(
                `"instanceType" was called on ${initInput.tagName} as a value but it is only for types.`,
            );
        }

        public initCalled = false;

        public _renderBlockedCauseInputsNotSet = false;
        public haveInputsBeenSet = false;
        public markInputsAsHavingBeenSet(): void {
            if (!this.haveInputsBeenSet) {
                this.haveInputsBeenSet = true;
            }
        }
        public render(): TemplateResult {
            if (
                // This ignores elements at the root of a page, as they can't receive inputs from
                // other functional elements (cause they have no custom element ancestors).
                hasFunctionalElementParent(this) &&
                !this.haveInputsBeenSet &&
                !elementOptions.ignoreInputsHaveNotBeenSetWarning
            ) {
                console.warn(
                    this,
                    `${initInput.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use the "assign" directive on it.`,
                );
            }

            const renderParams = this.createRenderParams();
            if (!this.initCalled && initInput.initCallback) {
                this.initCalled = true;
                initInput.initCallback(renderParams);
            }

            const renderResult = initInput.renderCallback(renderParams);
            applyHostClasses(
                renderParams.host,
                initInput.hostClasses,
                hostClassNames,
                renderParams.props,
            );
            return renderResult;
        }

        // this is set below
        public readonly creator = {} as unknown as ThisElementDefinition;

        public readonly currentInputs: InputsGeneric =
            createElementUpdaterProxy<InputsGeneric>(this);

        public readonly instanceProps: PropertyInitGeneric =
            createElementUpdaterProxy<PropertyInitGeneric>(this, initInput.stateInit);

        constructor() {
            super();

            const initProps: PropertyInitGeneric =
                initInput.stateInit || ({} as PropertyInitGeneric);

            Object.keys(initProps).forEach((propName: keyof PropertyInitGeneric) => {
                property()(this, propName);
                (this as PropertyInitGeneric)[propName] = initProps[propName];
            });
        }
    };

    (anonymousClass as unknown as {creator: ThisElementDefinition}).creator =
        anonymousClass as unknown as ThisElementDefinition;
    Object.defineProperty(anonymousClass, 'name', {
        value: kebabCaseToCamelCase(initInput.tagName, {
            capitalizeFirstLetter: true,
        }),
        writable: true,
    });

    window.customElements.define(initInput.tagName, anonymousClass);

    return anonymousClass as unknown as ThisElementDefinition;
}
