import {
    directive,
    Directive,
    DirectiveResult,
    noChange,
    PartInfo,
} from '../../lit-exports/all-lit-exports';
import {DefinedTypedEvent, TypedEvent} from '../../typed-event/typed-event';
import {extractElement} from './directive-helpers';

type PossibleListenerCallbacks<
    TypedEventTypeNameGeneric extends string,
    TypedEventDetailGeneric,
    NativeElementEventNameGeneric extends keyof HTMLElementEventMap,
> =
    | ((event: TypedEvent<TypedEventTypeNameGeneric, TypedEventDetailGeneric>) => void)
    | ((event: HTMLElementEventMap[NativeElementEventNameGeneric]) => void);

/**
 * Listen to events. These can be native DOM events (use a string for the inputType argument) or
 * typed events (pass in a return value from defineTypedEvent).
 *
 * @param definedTypedEvent Needs to come either from a declarative element (like
 *   MyDeclarativeElement.events.eventName) or from a typed event created via the defineTypedEvent
 *   function.
 * @param listener The callback to fire when an event is caught. Assuming the definedTypedEvent
 *   input is properly typed, the event given to this callback will also be typed.
 */
export function listen<
    TypedEventTypeNameGeneric extends string,
    TypedEventDetailGeneric,
    NativeElementEventNameGeneric extends keyof HTMLElementEventMap,
>(
    eventType: DefinedTypedEvent<TypedEventTypeNameGeneric, TypedEventDetailGeneric>,
    listener: (event: TypedEvent<TypedEventTypeNameGeneric, TypedEventDetailGeneric>) => void,
): DirectiveResult<any>;
export function listen<
    TypedEventTypeNameGeneric extends string,
    TypedEventDetailGeneric,
    NativeElementEventNameGeneric extends keyof HTMLElementEventMap,
>(
    eventType: NativeElementEventNameGeneric,
    listener: (event: HTMLElementEventMap[NativeElementEventNameGeneric]) => void,
): DirectiveResult<any>;
export function listen<
    TypedEventTypeNameGeneric extends string,
    TypedEventDetailGeneric,
    NativeElementEventNameGeneric extends keyof HTMLElementEventMap,
>(
    eventType:
        | DefinedTypedEvent<TypedEventTypeNameGeneric, TypedEventDetailGeneric>
        | NativeElementEventNameGeneric,
    listener: PossibleListenerCallbacks<
        TypedEventTypeNameGeneric,
        TypedEventDetailGeneric,
        NativeElementEventNameGeneric
    >,
): DirectiveResult<any> {
    return listenDirective(eventType, listener);
}

type ListenerMetaData = {
    eventType: string;
    callback: PossibleListenerCallbacks<any, any, any>;
    listener: (event: any) => void;
};

/**
 * The directive generics here are not strong enough to maintain their values. Thus, the directive
 * call is wrapped in the function above.
 */
const listenDirective = directive(
    class extends Directive {
        public readonly element: Element;
        public lastListenerMetaData: ListenerMetaData | undefined;

        constructor(partInfo: PartInfo) {
            super(partInfo);

            this.element = extractElement(partInfo, 'listen');
        }

        public resetListener(listenerMetaData: ListenerMetaData) {
            if (this.lastListenerMetaData) {
                this.element.removeEventListener(
                    this.lastListenerMetaData.eventType,
                    this.lastListenerMetaData.listener,
                );
            }
            this.element.addEventListener(listenerMetaData.eventType, listenerMetaData.listener);
            this.lastListenerMetaData = listenerMetaData;
        }

        public createListenerMetaData(
            eventType: string,
            callback: (event: TypedEvent<string, unknown>) => void,
        ): ListenerMetaData {
            return {
                eventType,
                callback,
                listener: (event: TypedEvent<string, unknown>) =>
                    this.lastListenerMetaData?.callback(event),
            };
        }

        render(
            eventTypeInput: {type: string} | string,
            callback: PossibleListenerCallbacks<any, any, any>,
        ) {
            const eventType =
                typeof eventTypeInput === 'string' ? eventTypeInput : eventTypeInput.type;

            if (typeof eventType !== 'string') {
                throw new Error(
                    `Cannot listen to an event with a name that is not a string. Given event name: "${eventType}"`,
                );
            }

            if (this.lastListenerMetaData && this.lastListenerMetaData.eventType === eventType) {
                /**
                 * Store the callback here so we don't have to update the attached listener every
                 * time the callback is updated.
                 */
                this.lastListenerMetaData.callback = callback;
            } else {
                this.resetListener(this.createListenerMetaData(eventType, callback));
            }

            return noChange;
        }
    },
);
