import {CSSResult, LitElement, TemplateResult} from 'lit';
import {EventDescriptorMap, EventsInitMap} from './element-events';
import {ElementPropertyDescriptorMap, PropertyInitMapBase} from './element-properties';
import {RenderCallback} from './render-callback';

export abstract class FunctionalElementBaseClass<
    PropertyInitGeneric extends PropertyInitMapBase,
> extends LitElement {
    public static readonly tagName: string;
    public static readonly styles: CSSResult;
    public static readonly propNames: string[];

    public abstract render(): TemplateResult | Promise<TemplateResult>;
    public abstract readonly instanceProps: PropertyInitGeneric;
}

export type FunctionalElementInstance<PropertyInitGeneric extends PropertyInitMapBase> =
    FunctionalElementBaseClass<PropertyInitGeneric> & PropertyInitGeneric;

export type FunctionalElementConstructor<
    PropertyInitGeneric extends PropertyInitMapBase,
    EventsInitGeneric extends EventsInitMap,
> = (new () => FunctionalElementInstance<PropertyInitGeneric>) &
    ExtraStaticFunctionalElementProperties<PropertyInitGeneric, EventsInitGeneric>;

export type ExtraStaticFunctionalElementProperties<
    PropertyInitGeneric extends PropertyInitMapBase,
    EventsInitGeneric extends EventsInitMap,
> = {
    /** Pass through the render callback for direct unit testability */
    renderCallback: RenderCallback<PropertyInitGeneric, EventsInitGeneric>;
    events: EventDescriptorMap<EventsInitGeneric>;
    props: ElementPropertyDescriptorMap<PropertyInitGeneric>;
};
