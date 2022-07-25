import {RequiredBy} from 'augment-vir';
import {CSSResult, LitElement, TemplateResult} from 'lit';
import {CssVarNameOrValueMap} from './css-vars';
import {EventDescriptorMap, EventsInitMap} from './element-events';
import {ElementPropertyDescriptorMap, PropertyInitMapBase} from './element-properties';
import {FunctionalElementInit} from './functional-element-init';
import {HostClassNamesMap} from './host-classes';
import {RenderCallback} from './render-callback';

export type FunctionalElementDefinition<
    InputsGeneric extends PropertyInitMapBase = {},
    PropertyInitGeneric extends PropertyInitMapBase = any,
    EventsInitGeneric extends EventsInitMap = any,
    HostClassKeys extends string = string,
    CssVarKeys extends string = string,
> = (new () => FunctionalElement<
    InputsGeneric,
    PropertyInitGeneric,
    EventsInitGeneric,
    HostClassKeys,
    CssVarKeys
>) &
    StaticFunctionalElementProperties<
        InputsGeneric,
        PropertyInitGeneric,
        EventsInitGeneric,
        HostClassKeys,
        CssVarKeys
    > & {
        instanceType: FunctionalElement<
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
    StaticFunctionalElementProperties<
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        string,
        string
    >
>()
export abstract class FunctionalElement<
    InputsGeneric extends PropertyInitMapBase = any,
    PropertyInitGeneric extends PropertyInitMapBase = any,
    EventsInitGeneric extends EventsInitMap = any,
    HostClassKeys extends string = string,
    CssVarKeys extends string = string,
> extends LitElement {
    public static readonly tagName: StaticFunctionalElementProperties<
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        string,
        string
    >['tagName'];
    public static override readonly styles: StaticFunctionalElementProperties<
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        string,
        string
    >['styles'];
    public static readonly renderCallback: StaticFunctionalElementProperties<
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        string,
        string
    >['renderCallback'];
    public static readonly events: StaticFunctionalElementProperties<
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        string,
        string
    >['events'];
    public static readonly props: StaticFunctionalElementProperties<
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        string,
        string
    >['props'];
    public static readonly init: StaticFunctionalElementProperties<
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        string,
        string
    >['init'];
    public static readonly hostClasses: StaticFunctionalElementProperties<
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        string,
        string
    >['hostClasses'];
    public static readonly cssVarNames: StaticFunctionalElementProperties<
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        string,
        string
    >['cssVarNames'];
    public static readonly cssVarValues: StaticFunctionalElementProperties<
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        string,
        string
    >['cssVarValues'];

    public abstract override render(): TemplateResult | Promise<TemplateResult>;
    public abstract readonly instanceProps: PropertyInitGeneric;
    public abstract readonly currentInputs: InputsGeneric;
    public abstract readonly haveInputsBeenSet: boolean;
    public abstract markInputsAsHavingBeenSet(): void;
    public abstract readonly creator: FunctionalElementDefinition<
        InputsGeneric,
        PropertyInitGeneric,
        EventsInitGeneric,
        HostClassKeys,
        CssVarKeys
    >;
}

export interface StaticFunctionalElementProperties<
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
    props: ElementPropertyDescriptorMap<PropertyInitGeneric>;
    init: RequiredBy<
        FunctionalElementInit<
            InputsGeneric,
            PropertyInitGeneric,
            EventsInitGeneric,
            HostClassKeys,
            CssVarKeys
        >,
        'stateInit' | 'events'
    >;
    hostClasses: HostClassNamesMap<string, HostClassKeys>;
    cssVarNames: CssVarNameOrValueMap<CssVarKeys>;
    cssVarValues: CssVarNameOrValueMap<CssVarKeys>;

    tagName: string;
    styles: CSSResult;
}
