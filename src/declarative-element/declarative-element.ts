import {RequiredAndNotNullBy, RequiredBy} from '@augment-vir/common';
import {CSSResult, LitElement} from 'lit';
import {CustomElementTagName, DeclarativeElementInit} from './declarative-element-init';
import {CssVarNameOrValueMap} from './properties/css-vars';
import {EventDescriptorMap, EventsInitMap} from './properties/element-events';
import {ElementPropertyDescriptorMap, PropertyInitMapBase} from './properties/element-properties';
import {HostClassNamesMap} from './properties/host-classes';
import {RenderCallback, RenderOutput} from './render-callback';

export type HostInstanceType<
    TagNameGeneric extends CustomElementTagName,
    InputsGeneric extends PropertyInitMapBase,
    StateInitGeneric extends PropertyInitMapBase,
    EventsInitGeneric extends EventsInitMap,
    HostClassKeys extends string,
    CssVarKeys extends string,
> = RequiredAndNotNullBy<
    DeclarativeElement<
        TagNameGeneric,
        InputsGeneric,
        StateInitGeneric,
        EventsInitGeneric,
        HostClassKeys,
        CssVarKeys
    >,
    'shadowRoot'
>;

export type DeclarativeElementDefinition<
    TagNameGeneric extends CustomElementTagName = any,
    InputsGeneric extends PropertyInitMapBase = any,
    StateInitGeneric extends PropertyInitMapBase = any,
    EventsInitGeneric extends EventsInitMap = any,
    HostClassKeys extends string = string,
    CssVarKeys extends string = string,
> = (new () => HostInstanceType<
    TagNameGeneric,
    InputsGeneric,
    StateInitGeneric,
    EventsInitGeneric,
    HostClassKeys,
    CssVarKeys
>) &
    StaticDeclarativeElementProperties<
        TagNameGeneric,
        InputsGeneric,
        StateInitGeneric,
        EventsInitGeneric,
        HostClassKeys,
        CssVarKeys
    > & {
        instanceType: HostInstanceType<
            TagNameGeneric,
            InputsGeneric,
            StateInitGeneric,
            EventsInitGeneric,
            HostClassKeys,
            CssVarKeys
        >;
    };

function staticImplements<T>() {
    return <U extends T>(constructor: U) => {
        constructor;
    };
}

@staticImplements<
    StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        string,
        string
    >
>()
export abstract class DeclarativeElement<
    TagNameGeneric extends CustomElementTagName = any,
    InputsGeneric extends PropertyInitMapBase = any,
    StateInitGeneric extends PropertyInitMapBase = any,
    EventsInitGeneric extends EventsInitMap = any,
    HostClassKeys extends string = string,
    CssVarKeys extends string = string,
> extends LitElement {
    public static readonly tagName: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        string,
        string
    >['tagName'];
    public static override readonly styles: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        string,
        string
    >['styles'];
    public static readonly isStrictInstance: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        string,
        string
    >['isStrictInstance'];
    public static readonly renderCallback: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        string,
        string
    >['renderCallback'];
    public static readonly inputsType: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        string,
        string
    >['inputsType'];
    public static readonly stateType: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        string,
        string
    >['stateType'];
    public static readonly events: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        string,
        string
    >['events'];
    public static readonly stateInit: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        string,
        string
    >['stateInit'];
    public static readonly init: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        string,
        string
    >['init'];
    public static readonly hostClasses: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        string,
        string
    >['hostClasses'];
    public static readonly cssVarNames: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        string,
        string
    >['cssVarNames'];
    public static readonly cssVarValues: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        string,
        string
    >['cssVarValues'];

    public abstract override render(): RenderOutput;
    public abstract readonly instanceState: StateInitGeneric;
    public abstract readonly instanceInputs: InputsGeneric;
    public abstract assignInputs(inputs: InputsGeneric): void;
    public abstract haveInputsBeenSet: boolean;
    public abstract markInputsAsHavingBeenSet(): void;
    public abstract readonly definition: DeclarativeElementDefinition<
        TagNameGeneric,
        InputsGeneric,
        StateInitGeneric,
        EventsInitGeneric,
        HostClassKeys,
        CssVarKeys
    >;
}

export interface StaticDeclarativeElementProperties<
    TagNameGeneric extends CustomElementTagName,
    InputsGeneric extends PropertyInitMapBase,
    StateInitGeneric extends PropertyInitMapBase,
    EventsInitGeneric extends EventsInitMap,
    HostClassKeys extends string,
    CssVarKeys extends string,
> {
    /** Pass through the render callback for direct unit testability */
    readonly renderCallback: RenderCallback<
        TagNameGeneric,
        InputsGeneric,
        StateInitGeneric,
        EventsInitGeneric,
        HostClassKeys,
        CssVarKeys
    >;
    events: EventDescriptorMap<EventsInitGeneric>;
    stateInit: ElementPropertyDescriptorMap<StateInitGeneric>;
    init: RequiredBy<
        DeclarativeElementInit<
            TagNameGeneric,
            InputsGeneric,
            StateInitGeneric,
            EventsInitGeneric,
            HostClassKeys,
            CssVarKeys
        >,
        'stateInit' | 'events'
    >;
    inputsType: InputsGeneric;
    stateType: StateInitGeneric;
    isStrictInstance: (
        element: unknown,
    ) => element is DeclarativeElement<
        TagNameGeneric,
        InputsGeneric,
        StateInitGeneric,
        EventsInitGeneric,
        HostClassKeys,
        CssVarKeys
    >;
    hostClasses: HostClassNamesMap<string, HostClassKeys>;
    cssVarNames: CssVarNameOrValueMap<CssVarKeys>;
    cssVarValues: CssVarNameOrValueMap<CssVarKeys>;

    tagName: string;
    styles: CSSResult;
}
