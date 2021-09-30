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
    dispatchEvent: <EventName extends keyof EventsInitGeneric>(
        event: ElementEvent<
            EventName extends string ? EventName : never,
            EventInitMapEventDetailExtractor<EventName, EventsInitGeneric>
        >,
    ) => void;
    defaultDispatchEvent: EventTarget['dispatchEvent'];
};

export function createRenderParams<
    PropertyInitGeneric extends PropertyInitMapBase,
    EventsInitGeneric extends EventsInitMap,
>(
    element: FunctionalElementInstance<PropertyInitGeneric>,
    eventsMap: EventDescriptorMap<EventsInitGeneric>,
): RenderParams<PropertyInitGeneric, EventsInitGeneric> {
    const renderParams: RenderParams<PropertyInitGeneric, EventsInitGeneric> = {
        dispatchEvent: (event) => element.dispatchEvent(event),
        defaultDispatchEvent: element.dispatchEvent,
        props: element.instanceProps,
        events: eventsMap,
    };
    return renderParams;
}
