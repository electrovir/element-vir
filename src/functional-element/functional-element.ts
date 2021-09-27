import {CSSResult, LitElement, TemplateResult} from 'lit';
import {EventsMap} from './functional-element-event';
import {FunctionalElementPropertyMap, PropertyInitMap} from './functional-element-properties';
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
    EventsGeneric extends EventsMap,
> = (new () => FunctionalElementInstance<PropertyInitGeneric>) & {
    /** Pass through the render callback for direct unit testability */
    renderCallback: RenderCallback<PropertyInitGeneric>;
    events: EventsGeneric;
};
