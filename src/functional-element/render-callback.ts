import {getObjectTypedKeys} from 'augment-vir';
import {TemplateResult} from 'lit';
import {TypedEvent} from '../typed-event/typed-event';
import {
    EventDescriptorMap,
    EventInitMapEventDetailExtractor,
    EventsInitMap,
} from './element-events';
import {PropertyInitMapBase} from './element-properties';
import {FunctionalElementInstanceFromInit} from './functional-element';

export type RenderCallback<
    PropertyInitGeneric extends PropertyInitMapBase,
    EventsInitGeneric extends EventsInitMap,
> = (params: RenderParams<PropertyInitGeneric, EventsInitGeneric>) => TemplateResult;

export type InitCallback<
    PropertyInitGeneric extends PropertyInitMapBase,
    EventsInitGeneric extends EventsInitMap,
> = (params: RenderParams<PropertyInitGeneric, EventsInitGeneric>) => void;

export type SetPropCallback<PropertyInitGeneric extends PropertyInitMapBase> = (
    props: Partial<PropertyInitGeneric>,
) => void;

export type RenderParams<
    PropertyInitGeneric extends PropertyInitMapBase,
    EventsInitGeneric extends EventsInitMap,
> = {
    props: Readonly<PropertyInitGeneric>;
    setProps: SetPropCallback<PropertyInitGeneric>;
    events: EventDescriptorMap<EventsInitGeneric>;
    host: FunctionalElementInstanceFromInit<PropertyInitGeneric>;
    dispatch: <EventTypeNameGeneric extends keyof EventsInitGeneric>(
        event: TypedEvent<
            EventTypeNameGeneric extends string ? EventTypeNameGeneric : never,
            EventInitMapEventDetailExtractor<EventTypeNameGeneric, EventsInitGeneric>
        >,
    ) => boolean;
    /**
     * Same as dispatchElementEvent but without the extra types. This allows you to emit any events,
     * even events from other custom elements.
     */
    genericDispatch: (event: Event) => boolean;
};

export function createRenderParams<
    PropertyInitGeneric extends PropertyInitMapBase,
    EventsInitGeneric extends EventsInitMap,
>(
    element: FunctionalElementInstanceFromInit<PropertyInitGeneric>,
    eventsMap: EventDescriptorMap<EventsInitGeneric>,
): RenderParams<PropertyInitGeneric, EventsInitGeneric> {
    const renderParams: RenderParams<PropertyInitGeneric, EventsInitGeneric> = {
        /**
         * These two dispatch properties do the same thing but their interfaces are different.
         * DispatchEvent's type interface is much stricter.
         */
        dispatch: (event) => element.dispatchEvent(event),
        genericDispatch: (event) => element.dispatchEvent(event),
        setProps: (partialProps) => {
            getObjectTypedKeys(partialProps).forEach((propKey) => {
                element.instanceProps[propKey] = partialProps[
                    propKey
                ] as PropertyInitGeneric[typeof propKey];
            });
        },
        host: element,
        props: element.instanceProps,
        events: eventsMap,
    };
    return renderParams;
}
