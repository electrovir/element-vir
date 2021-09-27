import {CSSResult} from 'lit';
import {FunctionalElementInstance} from './functional-element';
import {EventsMap} from './functional-element-event';
import {PropertyInitMap} from './functional-element-properties';
import {RenderCallback} from './render-callback';

export type FunctionalElementInit<
    PropertyInitGeneric extends PropertyInitMap,
    EventsGeneric extends EventsMap,
> = {
    tagName: string;
    propertyInit?: PropertyInitGeneric | undefined;
    styles?: CSSResult | undefined;
    events?: EventsGeneric | undefined;

    connectedCallback?: (self: FunctionalElementInstance<PropertyInitGeneric>) => void;
    disconnectedCallback?: (self: FunctionalElementInstance<PropertyInitGeneric>) => void;

    renderCallback: RenderCallback<PropertyInitGeneric>;
};
