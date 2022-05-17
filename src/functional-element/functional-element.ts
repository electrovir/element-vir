import {RequiredBy} from 'augment-vir';
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
    styles?: CSSResult;
    /** Element properties. (These can be thought of as "inputs".) */
    props?: PropertyInitGeneric;
    /** Events that the element can dispatch. (These can be thought of as "outputs".) */
    events?: EventsInitGeneric;
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

export type FunctionalElementInstanceFromInit<
    PropertyInitGeneric extends PropertyInitMapBase = {},
> = FunctionalElementBaseClass<NonNullable<Required<PropertyInitGeneric>>> & PropertyInitGeneric;

export type FunctionalElementInstance<FunctionalElementGeneric extends FunctionalElement> =
    FunctionalElementInstanceFromInit<FunctionalElementGeneric['init']['props']>;

export type FunctionalElement<
    PropertyInitGeneric extends PropertyInitMapBase = any,
    EventsInitGeneric extends EventsInitMap = any,
> = (new () => FunctionalElementInstanceFromInit<PropertyInitGeneric>) &
    ExtraStaticFunctionalElementProperties<PropertyInitGeneric, EventsInitGeneric>;

export type ExtraStaticFunctionalElementProperties<
    PropertyInitGeneric extends PropertyInitMapBase,
    EventsInitGeneric extends EventsInitMap,
> = Readonly<{
    /** Pass through the render callback for direct unit testability */
    renderCallback: RenderCallback<PropertyInitGeneric, EventsInitGeneric>;
    events: EventDescriptorMap<EventsInitGeneric>;
    props: ElementPropertyDescriptorMap<PropertyInitGeneric>;
    init: RequiredBy<
        FunctionalElementInit<PropertyInitGeneric, EventsInitGeneric>,
        'props' | 'events'
    >;

    /**
     * Static properties have to be copied here cause they get nuked in the "new () =>
     * FunctionalElementInstance<PropertyInitGeneric>" type.
     */
    tagName: string;
    styles: CSSResult;
}>;
