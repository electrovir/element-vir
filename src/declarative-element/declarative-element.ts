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
    HasInputsDefiner extends boolean,
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
        HasInputsDefiner
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
    HasInputsDefiner extends boolean = boolean,
> = (new () => HostInstanceType<
    TagNameGeneric,
    InputsGeneric,
    StateInitMaybeAsyncGeneric,
    EventsInitGeneric,
    HostClassKeys,
    CssVarKeys,
    HasInputsDefiner
>) &
    StaticDeclarativeElementProperties<
        TagNameGeneric,
        InputsGeneric,
        StateInitMaybeAsyncGeneric,
        EventsInitGeneric,
        HostClassKeys,
        CssVarKeys,
        RenderOutputGeneric,
        HasInputsDefiner
    > & {
        instanceType: HostInstanceType<
            TagNameGeneric,
            InputsGeneric,
            StateInitMaybeAsyncGeneric,
            EventsInitGeneric,
            HostClassKeys,
            CssVarKeys,
            HasInputsDefiner
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
        boolean
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
    HasInputsDefiner extends boolean = boolean,
> extends LitElement {
    public static readonly tagName: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        string,
        string,
        unknown,
        boolean
    >['tagName'];
    public static override readonly styles: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        string,
        string,
        unknown,
        boolean
    >['styles'];
    public static readonly isStrictInstance: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        string,
        string,
        unknown,
        boolean
    >['isStrictInstance'];
    public static readonly renderCallback: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        string,
        string,
        unknown,
        boolean
    >['renderCallback'];
    public static readonly inputsType: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        string,
        string,
        unknown,
        boolean
    >['inputsType'];
    public static readonly stateType: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        string,
        string,
        unknown,
        boolean
    >['stateType'];
    public static readonly events: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        string,
        string,
        unknown,
        boolean
    >['events'];
    public static readonly stateInit: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        string,
        string,
        unknown,
        boolean
    >['stateInit'];
    public static readonly init: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        string,
        string,
        unknown,
        boolean
    >['init'];
    public static readonly hostClasses: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        string,
        string,
        unknown,
        boolean
    >['hostClasses'];
    public static readonly cssVarNames: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        string,
        string,
        unknown,
        boolean
    >['cssVarNames'];
    public static readonly cssVarValues: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        string,
        string,
        unknown,
        boolean
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
        HasInputsDefiner
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
    HasInputsDefiner extends boolean,
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
        HasInputsDefiner
    >;
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
            HasInputsDefiner
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
        HasInputsDefiner
    >;
    hostClasses: HostClassNamesMap<string, HostClassKeys>;
    cssVarNames: CssVarNameOrValueMap<CssVarKeys>;
    cssVarValues: CssVarNameOrValueMap<CssVarKeys>;

    tagName: string;
    styles: CSSResult;
}
