import {
    defineTypedCustomEvent,
    type EventClass,
    type TypedCustomEvent,
    type TypedCustomEventInit,
} from 'typed-event-target';
import {type NonEmptyString} from '../../util/type.js';
import {type CustomElementTagName} from '../custom-tag-name.js';

/**
 * Base type for defining element events inside of an element definition.
 *
 * @category Internal
 */
export type DefineElementEvent<EventDetail> = <EventType extends string>(
    eventType: NonEmptyString<EventType>,
) => DefinedElementEvent<EventDetail, EventType>;

/** A concrete element event definition. */
export type DefinedElementEvent<EventDetail, EventType extends string> = (new (
    eventInitDict: TypedCustomEventInit<EventDetail>,
) => TypedCustomEvent<EventDetail, EventType>) &
    Readonly<{
        type: EventType;
    }>;

/** Element event definition factories keyed by their element-local event names. */
export type EventsInitMap = Record<string, DefineElementEvent<any>>;

/**
 * Used to define element events, with a type.
 *
 * @category Element Definition
 * @example
 *
 * ```ts
 * import {html, defineElement, defineElementEvent, listen} from 'element-vir';
 *
 * const MyElement = defineElement()({
 *     tagName: 'my-element',
 *     events: {
 *         myOutput: defineElementEvent<number>(),
 *     },
 *     render({events, dispatch}) {
 *         return html`
 *             <div
 *                 ${listen('click', () => {
 *                     dispatch(new events.myOutput({detail: 1}));
 *                 })}
 *             >
 *                 Some div
 *             </div>
 *         `;
 *     },
 * });
 * ```
 */
export function defineElementEvent<EventDetail>(): DefineElementEvent<EventDetail> {
    return defineTypedCustomEvent<EventDetail>();
}

/**
 * Extracts the detail type of the given event name from the given event init map.
 *
 * @category Internal
 */
export type EventInitMapEventDetailExtractor<
    EventTypeNameGeneric extends keyof EventsInitGeneric,
    EventsInitGeneric extends EventsInitMap,
> =
    EventsInitGeneric[EventTypeNameGeneric] extends DefineElementEvent<infer Detail>
        ? Detail
        : never;

/**
 * Maps the given element tag name and map of event names to their run-time event type strings.
 *
 * @category Internal
 */
export type EventDescriptorMap<
    TagName extends CustomElementTagName,
    EventsInitGeneric extends EventsInitMap,
> = {
    [CurrentEventTypeName in keyof EventsInitGeneric]: DefinedElementEvent<
        EventInitMapEventDetailExtractor<CurrentEventTypeName, EventsInitGeneric>,
        CurrentEventTypeName extends string ? `${TagName}-${CurrentEventTypeName}` : never
    >;
};

/**
 * Extract the event detail type from a custom event instance or constructor.
 *
 * @category Internal
 */
export type EventDetail<ElementEvent extends CustomEvent | EventClass<CustomEvent>> =
    ElementEvent extends EventClass<infer EventInstance>
        ? EventInstance extends CustomEvent<infer Detail>
            ? Detail
            : never
        : ElementEvent extends CustomEvent<infer Detail>
          ? Detail
          : never;

/**
 * Maps an element definition initialization's tag name and event map to a map of ready-to-construct
 * event classes. This also verifies that the input event init map has valid keys.
 *
 * @category Internal
 */
export function createEventDescriptorMap<
    TagName extends CustomElementTagName,
    EventsInitGeneric extends EventsInitMap,
>(
    tagName: CustomElementTagName,
    eventsInit: EventsInitGeneric | undefined,
): EventDescriptorMap<TagName, EventsInitGeneric> {
    if (!eventsInit) {
        return {} as EventDescriptorMap<TagName, EventsInitGeneric>;
    }
    return (
        Object.keys(eventsInit)
            /** Verify event keys. */
            .filter(
                (
                    currentElementEventKey: keyof EventsInitGeneric,
                ): currentElementEventKey is NonEmptyString<keyof EventsInitGeneric> => {
                    if (currentElementEventKey === '') {
                        throw new Error('Got empty string for events key.');
                    }

                    return true;
                },
            )
            .reduce(
                (
                    accum: EventDescriptorMap<TagName, EventsInitGeneric>,
                    currentElementEventKey: keyof EventsInitGeneric,
                ): EventDescriptorMap<TagName, EventsInitGeneric> => {
                    const eventObject: DefinedElementEvent<
                        EventInitMapEventDetailExtractor<
                            typeof currentElementEventKey,
                            EventsInitGeneric
                        >,
                        typeof currentElementEventKey extends string
                            ? typeof currentElementEventKey
                            : never
                    > = defineElementEvent<
                        EventInitMapEventDetailExtractor<
                            typeof currentElementEventKey,
                            EventsInitGeneric
                        >
                    >()(
                        [
                            tagName,
                            currentElementEventKey,
                        ].join('-') as any,
                    );

                    accum[currentElementEventKey] = eventObject as any;
                    return accum;
                },
                {} as EventDescriptorMap<TagName, EventsInitGeneric>,
            )
    );
}
