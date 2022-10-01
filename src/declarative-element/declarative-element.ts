import {RequiredBy} from 'augment-vir';
import {CSSResult, LitElement, TemplateResult} from 'lit';
import {CssVarNameOrValueMap} from './css-vars';
import {DeclarativeElementInit} from './declarative-element-init';
import {EventDescriptorMap, EventsInitMap} from './element-events';
import {ElementPropertyDescriptorMap, PropertyInitMapBase} from './element-properties';
import {HostClassNamesMap} from './host-classes';
import {RenderCallback} from './render-callback';

export type DeclarativeElementDefinition<
    InputsGeneric extends PropertyInitMapBase = any,
    PropertyInitGeneric extends PropertyInitMapBase = any,
    EventsInitGeneric extends EventsInitMap = any,
    HostClassKeys extends string = string,
    CssVarKeys extends string = string,
> = (new () => DeclarativeElement<
    InputsGeneric,
    PropertyInitGeneric,
    EventsInitGeneric,
    HostClassKeys,
    CssVarKeys
>) &
    StaticDeclarativeElementProperties<
        InputsGeneric,
        PropertyInitGeneric,
        EventsInitGeneric,
        HostClassKeys,
        CssVarKeys
    > & {
        instanceType: DeclarativeElement<
            InputsGeneric,
            PropertyInitGeneric,
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
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        string,
        string
    >
>()
export abstract class DeclarativeElement<
    InputsGeneric extends PropertyInitMapBase = any,
    PropertyInitGeneric extends PropertyInitMapBase = any,
    EventsInitGeneric extends EventsInitMap = any,
    HostClassKeys extends string = string,
    CssVarKeys extends string = string,
> extends LitElement {
    public static readonly tagName: StaticDeclarativeElementProperties<
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        string,
        string
    >['tagName'];
    public static override readonly styles: StaticDeclarativeElementProperties<
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        string,
        string
    >['styles'];
    public static readonly isStrictInstance: StaticDeclarativeElementProperties<
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        string,
        string
    >['isStrictInstance'];
    public static readonly renderCallback: StaticDeclarativeElementProperties<
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        string,
        string
    >['renderCallback'];
    public static readonly inputsType: StaticDeclarativeElementProperties<
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        string,
        string
    >['inputsType'];
    public static readonly events: StaticDeclarativeElementProperties<
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        string,
        string
    >['events'];
    public static readonly stateInit: StaticDeclarativeElementProperties<
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        string,
        string
    >['stateInit'];
    public static readonly init: StaticDeclarativeElementProperties<
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        string,
        string
    >['init'];
    public static readonly hostClasses: StaticDeclarativeElementProperties<
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        string,
        string
    >['hostClasses'];
    public static readonly cssVarNames: StaticDeclarativeElementProperties<
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        string,
        string
    >['cssVarNames'];
    public static readonly cssVarValues: StaticDeclarativeElementProperties<
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        string,
        string
    >['cssVarValues'];

    public abstract override render(): TemplateResult | Promise<TemplateResult>;
    public abstract readonly instanceState: PropertyInitGeneric;
    public abstract readonly instanceInputs: InputsGeneric;
    public abstract assignInputs(inputs: InputsGeneric): void;
    public abstract readonly haveInputsBeenSet: boolean;
    public abstract markInputsAsHavingBeenSet(): void;
    public abstract readonly creator: DeclarativeElementDefinition<
        InputsGeneric,
        PropertyInitGeneric,
        EventsInitGeneric,
        HostClassKeys,
        CssVarKeys
    >;
}

export interface StaticDeclarativeElementProperties<
    InputsGeneric extends PropertyInitMapBase,
    PropertyInitGeneric extends PropertyInitMapBase,
    EventsInitGeneric extends EventsInitMap,
    HostClassKeys extends string,
    CssVarKeys extends string,
> {
    /** Pass through the render callback for direct unit testability */
    readonly renderCallback: RenderCallback<
        InputsGeneric,
        PropertyInitGeneric,
        EventsInitGeneric,
        HostClassKeys,
        CssVarKeys
    >;
    events: EventDescriptorMap<EventsInitGeneric>;
    stateInit: ElementPropertyDescriptorMap<PropertyInitGeneric>;
    init: RequiredBy<
        DeclarativeElementInit<
            InputsGeneric,
            PropertyInitGeneric,
            EventsInitGeneric,
            HostClassKeys,
            CssVarKeys
        >,
        'stateInit' | 'events'
    >;
    inputsType: InputsGeneric;
    isStrictInstance: (
        element: unknown,
    ) => element is DeclarativeElement<
        InputsGeneric,
        PropertyInitGeneric,
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
