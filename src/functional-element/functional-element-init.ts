import {CSSResult} from 'lit';
import {FunctionalElementInstance} from './functional-element';
import {EventsInitMap} from './functional-element-event';
import {PropertyInitMap} from './functional-element-properties';
import {RenderCallback} from './render-callback';

export type FunctionalElementInit<
    PropertyInitGeneric extends PropertyInitMap,
    EventsInitGeneric extends EventsInitMap,
> = {
    tagName: string;
    propertyInit?: PropertyInitGeneric | undefined;
    styles?: CSSResult | undefined;
    events?: EventsInitGeneric | undefined;

    connectedCallback?: (self: FunctionalElementInstance<PropertyInitGeneric>) => void;
    disconnectedCallback?: (self: FunctionalElementInstance<PropertyInitGeneric>) => void;

    renderCallback: RenderCallback<PropertyInitGeneric, EventsInitGeneric>;
};
