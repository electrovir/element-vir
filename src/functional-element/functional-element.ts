import {CSSResult, LitElement, TemplateResult} from 'lit';
import {EventPropertyMap, EventsInitMap} from './functional-element-event';
import {
    FunctionalElementPropertyMap,
    InputPropertyMap,
    PropertyInitMap,
} from './functional-element-properties';
import {RenderCallback} from './render-callback';

export abstract class FunctionalElementBaseClass<
    PropertyInitGeneric extends PropertyInitMap,
> extends LitElement {
    public static readonly tagName: string;
    public static readonly styles: CSSResult;
    public static readonly propNames: string[];

    public abstract render(): TemplateResult | Promise<TemplateResult>;
    public abstract readonly props: FunctionalElementPropertyMap<PropertyInitGeneric>;
}

export type FunctionalElementInstance<PropertyInitGeneric extends PropertyInitMap> =
    FunctionalElementBaseClass<PropertyInitGeneric> & PropertyInitGeneric;

export type FunctionalElement<
    PropertyInitGeneric extends PropertyInitMap,
    EventsInitGeneric extends EventsInitMap,
> = (new () => FunctionalElementInstance<PropertyInitGeneric>) &
    ExtraStaticFunctionalElementProperties<PropertyInitGeneric, EventsInitGeneric>;

export type ExtraStaticFunctionalElementProperties<
    PropertyInitGeneric extends PropertyInitMap,
    EventsInitGeneric extends EventsInitMap,
> = {
    /** Pass through the render callback for direct unit testability */
    renderCallback: RenderCallback<PropertyInitGeneric, EventsInitGeneric>;
    events: EventPropertyMap<EventsInitGeneric>;
    inputs: InputPropertyMap<PropertyInitGeneric>;
};
