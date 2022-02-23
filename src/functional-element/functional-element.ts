import {CSSResult, LitElement, TemplateResult} from 'lit';
import {EventDescriptorMap, EventsInitMap} from './element-events';
import {ElementPropertyDescriptorMap, PropertyInitMapBase} from './element-properties';
import {InitCallback, RenderCallback} from './render-callback';

export type CustomElementTagName = `${string}-${string}`;

export type FunctionalElementInit<
    PropertyInitGeneric extends PropertyInitMapBase,
    EventsInitGeneric extends EventsInitMap,
> = {
    /**
     * HTML tag name. This should not be used directly, as interpolating it with the html tagged
     * template from this package is preferred.
     */
    tagName: CustomElementTagName;
    /** Static styles. These should not and cannot change. */
    styles?: CSSResult | undefined;
    /** Initializer for element properties. (These can be thought of as "inputs".) */
    props?: PropertyInitGeneric | undefined;
    /** Initializer for events that the element can dispatch. (These can be thought of as "outputs".) */
    events?: EventsInitGeneric | undefined;
    /** Called as part of the first renderCallback call, before the first renderCallback call. */
    initCallback?: InitCallback<PropertyInitGeneric, EventsInitGeneric>;

    renderCallback: RenderCallback<PropertyInitGeneric, EventsInitGeneric>;
};

export abstract class FunctionalElementBaseClass<
    PropertyInitGeneric extends PropertyInitMapBase,
> extends LitElement {
    public static readonly tagName: string;
    public static override readonly styles: CSSResult;

    public abstract override render(): TemplateResult | Promise<TemplateResult>;
    public abstract readonly instanceProps: PropertyInitGeneric;
}

export type FunctionalElementInstance<PropertyInitGeneric extends PropertyInitMapBase = {}> =
    FunctionalElementBaseClass<PropertyInitGeneric> & PropertyInitGeneric;

export type FunctionalElement<
    PropertyInitGeneric extends PropertyInitMapBase = any,
    EventsInitGeneric extends EventsInitMap = any,
> = (new () => FunctionalElementInstance<PropertyInitGeneric>) &
    ExtraStaticFunctionalElementProperties<PropertyInitGeneric, EventsInitGeneric>;

export type ExtraStaticFunctionalElementProperties<
    PropertyInitGeneric extends PropertyInitMapBase,
    EventsInitGeneric extends EventsInitMap,
> = Readonly<{
    /** Pass through the render callback for direct unit testability */
    renderCallback: RenderCallback<PropertyInitGeneric, EventsInitGeneric>;
    events: EventDescriptorMap<EventsInitGeneric>;
    props: ElementPropertyDescriptorMap<PropertyInitGeneric>;

    /**
     * Static properties have to be copied here cause they get nuked in the "new () =>
     * FunctionalElementInstance<PropertyInitGeneric>" type.
     */
    tagName: string;
    styles: CSSResult;
}>;
