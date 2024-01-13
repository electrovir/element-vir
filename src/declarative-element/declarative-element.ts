import {RequiredAndNotNullBy, RequiredBy} from '@augment-vir/common';
import {CSSResult, LitElement} from '../lit-exports/all-lit-exports';
import {WrappedMinimalDefinition} from '../template-transforms/minimal-element-definition';
import {CustomElementTagName} from './custom-tag-name';
import {DeclarativeElementInit} from './declarative-element-init';
import {BaseCssPropertyName} from './properties/css-properties';
import {CssVars} from './properties/css-vars';
import {EventDescriptorMap, EventsInitMap} from './properties/element-events';
import {ElementPropertyDescriptorMap, PropertyInitMapBase} from './properties/element-properties';
import {FlattenElementVirStateSetup} from './properties/element-vir-state-setup';
import {HostClassNamesMap} from './properties/host-classes';
import {ObservablePropListenerMap} from './properties/observable-prop/observable-prop';
import type {RenderCallback, RenderParams, UpdateStateCallback} from './render-callback';

export type DeclarativeElementHost<
    TagName extends CustomElementTagName = any,
    Inputs extends PropertyInitMapBase = any,
    StateInit extends PropertyInitMapBase = any,
    EventsInit extends EventsInitMap = any,
    HostClassKeys extends BaseCssPropertyName<TagName> = any,
    CssVarKeys extends BaseCssPropertyName<TagName> = any,
> = RequiredAndNotNullBy<
    Omit<
        DeclarativeElement<TagName, Inputs, StateInit, EventsInit, HostClassKeys, CssVarKeys, any>,
        Exclude<
            keyof StaticDeclarativeElementProperties<any, any, any, any, any, any, any>,
            keyof HTMLElement
        >
    >,
    'shadowRoot'
>;

export type DeclarativeElementDefinition<
    TagName extends CustomElementTagName = any,
    Inputs extends PropertyInitMapBase = any,
    StateInit extends PropertyInitMapBase = any,
    EventsInit extends EventsInitMap = any,
    HostClassKeys extends BaseCssPropertyName<TagName> = any,
    CssVarKeys extends BaseCssPropertyName<TagName> = any,
    RenderOutputGeneric = any,
> = (new () => DeclarativeElementHost<
    TagName,
    Inputs,
    StateInit,
    EventsInit,
    HostClassKeys,
    CssVarKeys
>) &
    StaticDeclarativeElementProperties<
        TagName,
        Inputs,
        StateInit,
        EventsInit,
        HostClassKeys,
        CssVarKeys,
        RenderOutputGeneric
    > & {
        instanceType: DeclarativeElementHost<
            TagName,
            Inputs,
            StateInit,
            EventsInit,
            HostClassKeys,
            CssVarKeys
        >;
    };

export abstract class DeclarativeElement<
    TagName extends CustomElementTagName = any,
    Inputs extends PropertyInitMapBase = any,
    StateInit extends PropertyInitMapBase = any,
    EventsInit extends EventsInitMap = any,
    HostClassKeys extends BaseCssPropertyName<TagName> = any,
    CssVarKeys extends BaseCssPropertyName<TagName> = any,
    RenderOutputGeneric = any,
> extends LitElement {
    public static assign: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        BaseCssPropertyName<CustomElementTagName>,
        BaseCssPropertyName<CustomElementTagName>,
        unknown
    >['assign'];
    public static assignedInputs: PropertyInitMapBase | undefined;
    public static readonly tagName: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        BaseCssPropertyName<CustomElementTagName>,
        BaseCssPropertyName<CustomElementTagName>,
        unknown
    >['tagName'];
    public static override readonly styles: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        BaseCssPropertyName<CustomElementTagName>,
        BaseCssPropertyName<CustomElementTagName>,
        unknown
    >['styles'];
    public static readonly isStrictInstance: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        BaseCssPropertyName<CustomElementTagName>,
        BaseCssPropertyName<CustomElementTagName>,
        unknown
    >['isStrictInstance'];
    public static readonly renderCallback: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        BaseCssPropertyName<CustomElementTagName>,
        BaseCssPropertyName<CustomElementTagName>,
        unknown
    >['renderCallback'];
    public static readonly inputsType: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        BaseCssPropertyName<CustomElementTagName>,
        BaseCssPropertyName<CustomElementTagName>,
        unknown
    >['inputsType'];
    public static readonly stateType: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        BaseCssPropertyName<CustomElementTagName>,
        BaseCssPropertyName<CustomElementTagName>,
        unknown
    >['stateType'];
    public static readonly updateStateType: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        BaseCssPropertyName<CustomElementTagName>,
        BaseCssPropertyName<CustomElementTagName>,
        unknown
    >['updateStateType'];
    public static readonly events: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        BaseCssPropertyName<CustomElementTagName>,
        BaseCssPropertyName<CustomElementTagName>,
        unknown
    >['events'];
    public static readonly stateInitStatic: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        BaseCssPropertyName<CustomElementTagName>,
        BaseCssPropertyName<CustomElementTagName>,
        unknown
    >['stateInitStatic'];
    public static readonly init: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        BaseCssPropertyName<CustomElementTagName>,
        BaseCssPropertyName<CustomElementTagName>,
        unknown
    >['init'];
    public static readonly hostClasses: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        BaseCssPropertyName<CustomElementTagName>,
        BaseCssPropertyName<CustomElementTagName>,
        unknown
    >['hostClasses'];
    public static readonly cssVars: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        BaseCssPropertyName<CustomElementTagName>,
        BaseCssPropertyName<CustomElementTagName>,
        unknown
    >['cssVars'];

    public abstract _lastRenderError: Error | undefined;
    public abstract _internalRenderCount: number;
    public abstract _lastRenderedProps: Pick<
        RenderParams<any, Inputs, StateInit, any, any, any>,
        'inputs' | 'state'
    >;
    public abstract override render(): unknown;
    public abstract readonly instanceState: FlattenElementVirStateSetup<StateInit>;
    public abstract readonly observablePropertyListenerMap: ObservablePropListenerMap<
        StateInit & Inputs
    >;
    public abstract readonly instanceInputs: Inputs;
    public abstract assignInputs(
        inputs: {} extends Required<Inputs> ? never : Partial<Inputs>,
    ): void;
    public abstract _haveInputsBeenSet: boolean;
    public abstract readonly definition: DeclarativeElementDefinition<
        TagName,
        Inputs,
        StateInit,
        EventsInit,
        HostClassKeys,
        CssVarKeys,
        RenderOutputGeneric
    >;
}

export interface StaticDeclarativeElementProperties<
    TagName extends CustomElementTagName,
    Inputs extends PropertyInitMapBase,
    StateInit extends PropertyInitMapBase,
    EventsInit extends EventsInitMap,
    HostClassKeys extends BaseCssPropertyName<TagName>,
    CssVarKeys extends BaseCssPropertyName<TagName>,
    RenderOutputGeneric,
> {
    /** Assign inputs to an element directly on its interpolated tag. */
    readonly assign: (
        inputsObject: {} extends Required<Inputs> ? never : Inputs,
    ) => WrappedMinimalDefinition;
    assignedInputs: Inputs | undefined;

    /** Pass through the render callback for direct unit testability */
    readonly renderCallback: RenderCallback<
        TagName,
        Inputs,
        StateInit,
        EventsInit,
        HostClassKeys,
        CssVarKeys,
        RenderOutputGeneric
    >;
    readonly events: EventDescriptorMap<TagName, EventsInit>;
    readonly stateInitStatic: ElementPropertyDescriptorMap<StateInit>;
    readonly init: RequiredBy<
        DeclarativeElementInit<
            TagName,
            Inputs,
            StateInit,
            EventsInit,
            HostClassKeys,
            CssVarKeys,
            RenderOutputGeneric
        >,
        'stateInitStatic' | 'events'
    >;
    readonly inputsType: Inputs;
    readonly stateType: Readonly<FlattenElementVirStateSetup<StateInit>>;
    readonly updateStateType: UpdateStateCallback<StateInit>;
    readonly isStrictInstance: (
        element: unknown,
    ) => element is DeclarativeElement<
        TagName,
        Inputs,
        StateInit,
        EventsInit,
        HostClassKeys,
        CssVarKeys,
        RenderOutputGeneric
    >;
    readonly hostClasses: HostClassNamesMap<string, HostClassKeys>;
    readonly cssVars: CssVars<TagName, CssVarKeys>;

    readonly tagName: string;
    readonly styles: CSSResult;
}
