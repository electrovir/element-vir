import {
    DefinedTypedEvent,
    DefinedTypedEventNameDefinition,
    defineTypedEvent,
    TypedEvent,
} from '../../typed-event/typed-event';
import {NonEmptyString} from '../../util/type';

export type EventsInitMap = Record<string, DefinedTypedEventNameDefinition<any>>;

export function defineElementEvent<
    EventDetailGeneric,
>(): DefinedTypedEventNameDefinition<EventDetailGeneric> {
    return defineTypedEvent<EventDetailGeneric>();
}

export type EventInitMapEventDetailExtractor<
    EventTypeNameGeneric extends keyof EventsInitGeneric,
    EventsInitGeneric extends EventsInitMap,
> = EventsInitGeneric[EventTypeNameGeneric] extends DefinedTypedEventNameDefinition<infer R>
    ? R
    : never;

export type EventDescriptorMap<EventsInitGeneric extends EventsInitMap> = {
    [CurrentEventTypeName in keyof EventsInitGeneric]: DefinedTypedEvent<
        CurrentEventTypeName extends string ? CurrentEventTypeName : never,
        EventInitMapEventDetailExtractor<CurrentEventTypeName, EventsInitGeneric>
    >;
};

export type EventObjectEventDetailExtractor<
    EventObjectGeneric extends DefinedTypedEvent<any, any>,
> = EventObjectGeneric extends DefinedTypedEvent<string, infer R> ? R : never;

export type ElementEventDetailExtractor<ElementEventGeneric extends TypedEvent<any, any>> =
    ElementEventGeneric extends TypedEvent<string, infer R> ? R : never;

export function createEventDescriptorMap<EventsInitGeneric extends EventsInitMap>(
    eventsInit: EventsInitGeneric | undefined,
): EventDescriptorMap<EventsInitGeneric> {
    if (!eventsInit) {
        return {} as EventDescriptorMap<EventsInitGeneric>;
    }
    return Object.keys(eventsInit)
        .filter(
            (
                currentElementEventKey: keyof EventsInitGeneric,
            ): currentElementEventKey is NonEmptyString<keyof EventsInitGeneric> => {
                if (typeof currentElementEventKey !== 'string') {
                    throw new Error(
                        `Expected event key of type string but got type "${typeof currentElementEventKey}" for key ${String(
                            currentElementEventKey,
                        )}`,
                    );
                }
                if (currentElementEventKey === '') {
                    throw new Error(`Got empty string for events key.`);
                }
                return true;
            },
        )
        .reduce(
            (
                accum: EventDescriptorMap<EventsInitGeneric>,
                currentElementEventKey: keyof EventsInitGeneric,
            ): EventDescriptorMap<EventsInitGeneric> => {
                const eventObject: DefinedTypedEvent<
                    typeof currentElementEventKey extends string
                        ? typeof currentElementEventKey
                        : never,
                    EventInitMapEventDetailExtractor<
                        typeof currentElementEventKey,
                        EventsInitGeneric
                    >
                > = defineTypedEvent<
                    EventInitMapEventDetailExtractor<
                        typeof currentElementEventKey,
                        EventsInitGeneric
                    >
                >()<
                    typeof currentElementEventKey extends string
                        ? typeof currentElementEventKey
                        : never
                >(currentElementEventKey as any);

                accum[currentElementEventKey] = eventObject;
                return accum;
            },
            {} as EventDescriptorMap<EventsInitGeneric>,
        );
}
