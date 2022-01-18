export type EventsInitMap = Record<string, new () => ElementEvent<string, unknown>>;

export type EventCreator<T> = (new () => ElementEvent<string, T>) & {eventName: string};

export function eventInit<T>(): new () => ElementEvent<string, T> {
    const customEventElement = class extends ElementEvent<string, T> {};

    return customEventElement as new () => ElementEvent<string, T>;
}

export type EventInitInfo<EventNameGeneric extends string> = {
    eventName: EventNameGeneric;
};

export class ElementEvent<EventName extends string, EventValue> extends CustomEvent<EventValue> {
    public readonly eventName: string = String(this.eventInitInfo.eventName);

    constructor(public readonly eventInitInfo: EventInitInfo<EventName>, initDetail: EventValue) {
        super(String(eventInitInfo.eventName), {detail: initDetail, bubbles: true, composed: true});
    }
}

export class TypedEvent<
    EventNameGeneric extends string = '',
    EventValueGeneric = undefined,
> extends CustomEvent<EventValueGeneric> {
    public readonly _type: EventNameGeneric = '' as EventNameGeneric;
    public override get type(): EventNameGeneric {
        return this._type;
    }
}

/**
 * Defined a typed event. Make sure to use currying and call this function twice! Typescript's
 * generic restrictions require this setup to get the types right without excessive verbosity.
 *
 * Example:
 *
 * Const myCustomEvent = defineTypedEvent<number>()('my-custom-event')
 */
export function defineTypedEvent<EventValueGeneric>() {
    return <
        /**
         * EventNameGeneric is used for the event type property but not for the event value type...
         * so it's named "name" instead of "type" cause type is overloaded here.
         */
        EventNameGeneric extends string = '',
    >(
        eventType: EventNameGeneric,
    ): (new (eventValue: EventValueGeneric) => TypedEvent<EventNameGeneric, EventValueGeneric>) & {
        type: EventNameGeneric;
    } => {
        return class extends TypedEvent<EventNameGeneric, EventValueGeneric> {
            public static type = eventType;
            public override readonly _type = eventType;

            constructor(value: EventValueGeneric) {
                super(eventType, {detail: value, bubbles: true, composed: true});
            }
        };
    };
}

export function defineCustomEvent<EventName extends string, EventValue>(
    eventName: EventName,
): (new (eventValue: EventValue) => ElementEvent<EventName, EventValue>) &
    EventDescriptor<EventName, EventValue> {
    return class extends ElementEvent<EventName, EventValue> {
        public static eventName = eventName;
        // this allows sub classes of ElementEvent to be directly listened to
        public static eventConstructor = ElementEvent.constructor as new () => ElementEvent<
            string,
            EventValue
        >;

        constructor(eventValue: EventValue) {
            super({eventName: eventName}, eventValue);
            (window as any).ElementEvent = ElementEvent;
        }
    };
}

export type EventExtraProperties<DetailType> = {
    /**
     * The event constructor property is needed in order to store sufficient type data for event
     * listeners to work.
     */
    eventConstructor: new (
        outputObject: EventDescriptor<string, DetailType>,
        initDetail: DetailType,
    ) => ElementEvent<string, DetailType>;
};

export type EventObjectEventDetailExtractor<EventObjectGeneric extends EventDescriptor<any, any>> =
    EventObjectGeneric extends EventDescriptor<string, infer R> ? R : never;

export type ElementEventDetailExtractor<ElementEventGeneric extends ElementEvent<any, any>> =
    ElementEventGeneric extends ElementEvent<string, infer R> ? R : never;

export type EventInitMapEventDetailExtractor<
    Property extends keyof EventsInitGeneric,
    EventsInitGeneric extends EventsInitMap,
> = InstanceType<EventsInitGeneric[Property]> extends ElementEvent<string, infer R> ? R : never;

export type EventDescriptor<
    EventNameGeneric extends string,
    DetailType,
> = EventInitInfo<EventNameGeneric> & EventExtraProperties<DetailType>;

export type EventDescriptorMap<EventsInitGeneric extends EventsInitMap> = {
    [Property in keyof EventsInitGeneric]: EventDescriptor<
        Property extends string ? Property : never,
        EventInitMapEventDetailExtractor<Property, EventsInitGeneric>
    >;
};

export function createEventDescriptorMap<EventsInitGeneric extends EventsInitMap>(
    eventsInit: EventsInitGeneric | undefined,
): EventDescriptorMap<EventsInitGeneric> {
    if (!eventsInit) {
        return {} as EventDescriptorMap<EventsInitGeneric>;
    }
    return Object.keys(eventsInit)
        .filter((currentKey: keyof EventsInitGeneric): currentKey is keyof EventsInitGeneric => {
            if (typeof currentKey !== 'string') {
                throw new Error(
                    `Expected event key of type string but got type "${typeof currentKey}" for key ${currentKey}`,
                );
            }
            return true;
        })
        .reduce(
            (
                accum: EventDescriptorMap<EventsInitGeneric>,
                currentKey: keyof EventsInitGeneric,
            ): EventDescriptorMap<EventsInitGeneric> => {
                const eventObject: EventDescriptor<
                    typeof currentKey extends string ? typeof currentKey : never,
                    EventInitMapEventDetailExtractor<typeof currentKey, EventsInitGeneric>
                > = {
                    eventName: currentKey as keyof EventsInitGeneric extends string
                        ? keyof EventsInitGeneric
                        : never,
                    eventConstructor: eventsInit![currentKey] as EventExtraProperties<
                        EventInitMapEventDetailExtractor<typeof currentKey, EventsInitGeneric>
                    >['eventConstructor'],
                };
                accum[currentKey] = eventObject;
                return accum;
            },
            {} as EventDescriptorMap<EventsInitGeneric>,
        );
}
