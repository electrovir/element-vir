export type EventsInitMap = Record<string, new () => ElementEvent<string, unknown>>;

export type EventCreator<T> = (new () => ElementEvent<string, T>) & {eventName: string};

export function eventInit<T>(): new () => ElementEvent<string, T> {
    const customEventElement = class extends ElementEvent<string, T> {};

    return customEventElement as new () => ElementEvent<string, T>;
}

type EventInitInfo<EventNameGeneric extends string> = {
    eventName: EventNameGeneric;
};

export class ElementEvent<EventName extends string, EventValue> extends CustomEvent<EventValue> {
    public readonly eventName: string = String(this.eventInitInfo.eventName);

    constructor(private readonly eventInitInfo: EventInitInfo<EventName>, initDetail: EventValue) {
        super(String(eventInitInfo.eventName), {detail: initDetail, bubbles: true, composed: true});
    }
}

export type EventExtraProperties<DetailType> = {
    /**
     * The event constructor property is needed in order to store sufficient type data for event
     * listeners to work.
     */
    eventConstructor: new (
        outputObject: EventObject<string, DetailType>,
        initDetail: DetailType,
    ) => ElementEvent<string, DetailType>;
};

export type EventObjectEventDetailExtractor<EventObjectGeneric extends EventObject<any, any>> =
    EventObjectGeneric extends EventObject<string, infer R> ? R : never;

export type ElementEventDetailExtractor<ElementEventGeneric extends ElementEvent<any, any>> =
    ElementEventGeneric extends ElementEvent<string, infer R> ? R : never;

export type EventInitMapEventDetailExtractor<
    Property extends keyof EventsInitGeneric,
    EventsInitGeneric extends EventsInitMap,
> = InstanceType<EventsInitGeneric[Property]> extends ElementEvent<string, infer R> ? R : never;

export type EventObject<
    EventNameGeneric extends string,
    DetailType,
> = EventInitInfo<EventNameGeneric> & EventExtraProperties<DetailType>;

export type EventPropertyMap<EventsInitGeneric extends EventsInitMap> = {
    [Property in keyof EventsInitGeneric]: EventObject<
        Property extends string ? Property : never,
        EventInitMapEventDetailExtractor<Property, EventsInitGeneric>
    >;
};
