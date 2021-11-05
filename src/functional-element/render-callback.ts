import {TemplateResult} from 'lit';
import {
    ElementEvent,
    EventDescriptorMap,
    EventInitMapEventDetailExtractor,
    EventsInitMap,
} from './element-events';
import {PropertyInitMapBase} from './element-properties';
import {FunctionalElementInstance} from './functional-element';

export type RenderCallback<
    PropertyInitGeneric extends PropertyInitMapBase,
    EventsInitGeneric extends EventsInitMap,
> = (
    params: RenderParams<PropertyInitGeneric, EventsInitGeneric>,
) => TemplateResult | Promise<TemplateResult>;

export type RenderParams<
    PropertyInitGeneric extends PropertyInitMapBase,
    EventsInitGeneric extends EventsInitMap,
> = {
    props: PropertyInitGeneric;
    events: EventDescriptorMap<EventsInitGeneric>;
    dispatchElementEvent: <EventName extends keyof EventsInitGeneric>(
        event: ElementEvent<
            EventName extends string ? EventName : never,
            EventInitMapEventDetailExtractor<EventName, EventsInitGeneric>
        >,
    ) => boolean;
    /**
     * Same as dispatchElementEvent but without the extra types. This allows you to emit any events,
     * even events from other custom elements.
     */
    dispatchEvent: (event: Event) => boolean;
};

export function createRenderParams<
    PropertyInitGeneric extends PropertyInitMapBase,
    EventsInitGeneric extends EventsInitMap,
>(
    element: FunctionalElementInstance<PropertyInitGeneric>,
    eventsMap: EventDescriptorMap<EventsInitGeneric>,
): RenderParams<PropertyInitGeneric, EventsInitGeneric> {
    const renderParams: RenderParams<PropertyInitGeneric, EventsInitGeneric> = {
        /**
         * These two dispatch properties do the same thing but their interfaces are different.
         * DispatchEvent's type interface is much stricter.
         */
        dispatchElementEvent: (event) => element.dispatchEvent(event),
        dispatchEvent: (event) => element.dispatchEvent(event),
        props: element.instanceProps,
        events: eventsMap,
    };
    return renderParams;
}
