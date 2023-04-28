import {RequiredAndNotNullBy, RequiredBy} from '@augment-vir/common';
import {CSSResult, LitElement} from 'lit';
import {CustomElementTagName, DeclarativeElementInit} from './declarative-element-init';
import {AsyncStateHandlerMap, MaybeAsyncStateToSync} from './properties/async-state';
import {CssVarNameOrValueMap} from './properties/css-vars';
import {EventDescriptorMap, EventsInitMap} from './properties/element-events';
import {ElementPropertyDescriptorMap, PropertyInitMapBase} from './properties/element-properties';
import {HostClassNamesMap} from './properties/host-classes';
import {RenderCallback, RenderParams} from './render-callback';

export type HostInstanceType<
    TagNameGeneric extends CustomElementTagName,
    InputsGeneric extends PropertyInitMapBase,
    StateInitMaybeAsyncGeneric extends PropertyInitMapBase,
    EventsInitGeneric extends EventsInitMap,
    HostClassKeys extends string,
    CssVarKeys extends string,
    InputsDefinerFunction extends ((input: any) => any) | undefined = undefined,
> = RequiredAndNotNullBy<
    DeclarativeElement<
        TagNameGeneric,
        InputsGeneric,
        StateInitMaybeAsyncGeneric,
        EventsInitGeneric,
        HostClassKeys,
        CssVarKeys,
        /**
         * Intentionally do not have a generic parameter for RenderOutputGeneric here so that
         * HostInstanceType is vague enough that it can actually be used.
         */
        any,
        InputsDefinerFunction
    >,
    'shadowRoot'
>;

export type DeclarativeElementDefinition<
    TagNameGeneric extends CustomElementTagName = any,
    InputsGeneric extends PropertyInitMapBase = any,
    StateInitMaybeAsyncGeneric extends PropertyInitMapBase = any,
    EventsInitGeneric extends EventsInitMap = any,
    HostClassKeys extends string = string,
    CssVarKeys extends string = string,
    RenderOutputGeneric = any,
    InputsDefinerFunction extends ((input: any) => any) | undefined = undefined,
> = (new () => HostInstanceType<
    TagNameGeneric,
    InputsGeneric,
    StateInitMaybeAsyncGeneric,
    EventsInitGeneric,
    HostClassKeys,
    CssVarKeys,
    InputsDefinerFunction
>) &
    StaticDeclarativeElementProperties<
        TagNameGeneric,
        InputsGeneric,
        StateInitMaybeAsyncGeneric,
        EventsInitGeneric,
        HostClassKeys,
        CssVarKeys,
        RenderOutputGeneric,
        InputsDefinerFunction
    > & {
        instanceType: HostInstanceType<
            TagNameGeneric,
            InputsGeneric,
            StateInitMaybeAsyncGeneric,
            EventsInitGeneric,
            HostClassKeys,
            CssVarKeys,
            InputsDefinerFunction
        >;
    };

function staticImplements<T>() {
    function ensureIncludesStaticProperties<U extends T>(classValue: U, context: any) {
        return classValue;
    }

    return ensureIncludesStaticProperties;
}

@staticImplements<
    StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        string,
        string,
        unknown,
        any
    >
>()
export abstract class DeclarativeElement<
    TagNameGeneric extends CustomElementTagName = any,
    InputsGeneric extends PropertyInitMapBase = any,
    StateInitMaybeAsyncGeneric extends PropertyInitMapBase = any,
    EventsInitGeneric extends EventsInitMap = any,
    HostClassKeys extends string = string,
    CssVarKeys extends string = string,
    RenderOutputGeneric = any,
    InputsDefinerFunction extends ((input: any) => any) | undefined = any,
> extends LitElement {
    public static readonly tagName: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        string,
        string,
        unknown,
        any
    >['tagName'];
    public static override readonly styles: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        string,
        string,
        unknown,
        any
    >['styles'];
    public static readonly isStrictInstance: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        string,
        string,
        unknown,
        any
    >['isStrictInstance'];
    public static readonly renderCallback: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        string,
        string,
        unknown,
        any
    >['renderCallback'];
    public static readonly defineInputs: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        string,
        string,
        unknown,
        any
    >['defineInputs'];
    public static readonly inputsType: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        string,
        string,
        unknown,
        any
    >['inputsType'];
    public static readonly stateType: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        string,
        string,
        unknown,
        any
    >['stateType'];
    public static readonly events: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        string,
        string,
        unknown,
        any
    >['events'];
    public static readonly stateInit: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        string,
        string,
        unknown,
        any
    >['stateInit'];
    public static readonly init: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        string,
        string,
        unknown,
        any
    >['init'];
    public static readonly hostClasses: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        string,
        string,
        unknown,
        any
    >['hostClasses'];
    public static readonly cssVarNames: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        string,
        string,
        unknown,
        any
    >['cssVarNames'];
    public static readonly cssVarValues: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        string,
        string,
        unknown,
        any
    >['cssVarValues'];

    public abstract lastRenderedProps: Pick<
        RenderParams<any, InputsGeneric, StateInitMaybeAsyncGeneric, any, any, any, any>,
        'inputs' | 'state'
    >;
    public abstract override render(): unknown;
    public abstract readonly instanceState: MaybeAsyncStateToSync<StateInitMaybeAsyncGeneric>;
    public abstract readonly asyncStateHandlerMap: AsyncStateHandlerMap<StateInitMaybeAsyncGeneric>;
    public abstract readonly instanceInputs: InputsGeneric;
    public abstract assignInputs(
        inputs: {} extends Required<InputsGeneric> ? never : Partial<InputsGeneric>,
    ): void;
    public abstract haveInputsBeenSet: boolean;
    public abstract markInputsAsHavingBeenSet(): void;
    public abstract readonly definition: DeclarativeElementDefinition<
        TagNameGeneric,
        InputsGeneric,
        StateInitMaybeAsyncGeneric,
        EventsInitGeneric,
        HostClassKeys,
        CssVarKeys,
        RenderOutputGeneric,
        InputsDefinerFunction
    >;
}

export interface StaticDeclarativeElementProperties<
    TagNameGeneric extends CustomElementTagName,
    InputsGeneric extends PropertyInitMapBase,
    StateInitMaybeAsyncGeneric extends PropertyInitMapBase,
    EventsInitGeneric extends EventsInitMap,
    HostClassKeys extends string,
    CssVarKeys extends string,
    RenderOutputGeneric,
    InputsDefinerFunction extends ((input: any) => any) | undefined,
> {
    /** Pass through the render callback for direct unit testability */
    readonly renderCallback: RenderCallback<
        TagNameGeneric,
        InputsGeneric,
        StateInitMaybeAsyncGeneric,
        EventsInitGeneric,
        HostClassKeys,
        CssVarKeys,
        RenderOutputGeneric,
        InputsDefinerFunction
    >;
    readonly defineInputs: InputsDefinerFunction;
    events: EventDescriptorMap<EventsInitGeneric>;
    stateInit: ElementPropertyDescriptorMap<StateInitMaybeAsyncGeneric>;
    init: RequiredBy<
        DeclarativeElementInit<
            TagNameGeneric,
            InputsGeneric,
            StateInitMaybeAsyncGeneric,
            EventsInitGeneric,
            HostClassKeys,
            CssVarKeys,
            RenderOutputGeneric,
            InputsDefinerFunction
        >,
        'stateInit' | 'events'
    >;
    inputsType: InputsGeneric;
    stateType: MaybeAsyncStateToSync<StateInitMaybeAsyncGeneric>;
    isStrictInstance: (
        element: unknown,
    ) => element is DeclarativeElement<
        TagNameGeneric,
        InputsGeneric,
        StateInitMaybeAsyncGeneric,
        EventsInitGeneric,
        HostClassKeys,
        CssVarKeys,
        RenderOutputGeneric,
        InputsDefinerFunction
    >;
    hostClasses: HostClassNamesMap<string, HostClassKeys>;
    cssVarNames: CssVarNameOrValueMap<CssVarKeys>;
    cssVarValues: CssVarNameOrValueMap<CssVarKeys>;

    tagName: string;
    styles: CSSResult;
}
