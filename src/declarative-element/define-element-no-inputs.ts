import {kebabCaseToCamelCase} from 'augment-vir';
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
import {createEventDescriptorMap, EventsInitMap} from './element-events';
import {
    createElementUpdaterProxy,
    createPropertyDescriptorMap,
    PropertyInitMapBase,
} from './element-properties';
import {hasDeclarativeElementParent} from './has-declarative-element-parent';
import {createHostClassNamesMap} from './host-classes';
import {createRenderParams, RenderParams} from './render-callback';
import {applyHostClasses, hostClassNamesToStylesInput} from './styles';

const defaultInit: Required<
    Pick<DeclarativeElementInit<any, any, any, any, any>, 'stateInit' | 'events'>
> = {
    events: {},
    stateInit: {},
};

export function defineElementNoInputs<
    InputsGeneric extends PropertyInitMapBase = {},
    PropertyInitGeneric extends PropertyInitMapBase = {},
    EventsInitGeneric extends EventsInitMap = {},
    HostClassKeys extends string = '',
    CssVarKeys extends string = '',
>(
    initInput: DeclarativeElementInit<
        InputsGeneric,
        PropertyInitGeneric,
        EventsInitGeneric,
        HostClassKeys,
        CssVarKeys
    >,
): DeclarativeElementDefinition<
    InputsGeneric,
    PropertyInitGeneric,
    EventsInitGeneric,
    HostClassKeys,
    CssVarKeys
> {
    type ThisElementDefinition = DeclarativeElementDefinition<
        InputsGeneric,
        PropertyInitGeneric,
        EventsInitGeneric,
        HostClassKeys,
        CssVarKeys
    >;
    type ThisElementInstance = typeof DeclarativeElement<InputsGeneric, PropertyInitGeneric>;

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

    const typedInit: StaticDeclarativeElementProperties<
        InputsGeneric,
        PropertyInitGeneric,
        EventsInitGeneric,
        HostClassKeys,
        CssVarKeys
    >['init'] = {...defaultInit, ...initInput};

    const typedRenderCallback: StaticDeclarativeElementProperties<
        InputsGeneric,
        PropertyInitGeneric,
        EventsInitGeneric,
        HostClassKeys,
        CssVarKeys
    >['renderCallback'] = initInput.renderCallback;

    const anonymousClass = class extends DeclarativeElement<
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

        // this gets overridden below
        public static override readonly isStrictInstance: any = () => false;
        public static override readonly events: StaticDeclarativeElementProperties<
            InputsGeneric,
            PropertyInitGeneric,
            EventsInitGeneric,
            HostClassKeys,
            CssVarKeys
        >['events'] = eventsMap;
        public static override readonly renderCallback: ThisElementInstance['renderCallback'] =
            typedRenderCallback as ThisElementInstance['renderCallback'];
        public static override readonly props: StaticDeclarativeElementProperties<
            InputsGeneric,
            PropertyInitGeneric,
            EventsInitGeneric,
            HostClassKeys,
            CssVarKeys
        >['props'] = createPropertyDescriptorMap(initInput.stateInit);
        public static override readonly hostClasses: StaticDeclarativeElementProperties<
            InputsGeneric,
            PropertyInitGeneric,
            EventsInitGeneric,
            HostClassKeys,
            CssVarKeys
        >['hostClasses'] = hostClassNames;
        public static override readonly cssVarNames: StaticDeclarativeElementProperties<
            InputsGeneric,
            PropertyInitGeneric,
            EventsInitGeneric,
            HostClassKeys,
            CssVarKeys
        >['cssVarNames'] = cssVarNames;
        public static override readonly cssVarValues: StaticDeclarativeElementProperties<
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
    window.customElements.define(initInput.tagName, anonymousClass);

    return anonymousClass as unknown as ThisElementDefinition;
}
