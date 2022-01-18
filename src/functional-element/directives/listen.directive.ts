import {noChange} from 'lit';
import {directive, Directive, PartInfo} from 'lit/directive.js';
import {ElementEvent, EventDescriptor} from '../typed-event';
import {extractElement} from './directive-util';

/**
 * Listen to element events.
 *
 * @param eventDescriptor Needs to come either from a functional element (like
 *   MyFunctionalElement.events.eventName) or from a custom element event created via the
 *   createCustomEvent function.
 * @param listener The callback to fire when an event is caught. Assuming the eventDescriptor input
 *   is properly typed, the event given to this callback will also be typed.
 */
export function listen<EventName extends string, DetailType>(
    eventDescriptor: EventDescriptor<EventName, DetailType>,
    listener: (event: ElementEvent<EventName, DetailType>) => void,
) {
    return listenDirective(eventDescriptor, listener);
}

type ListenerMetaData<EventDetail> = {
    eventType: string;
    callback: (event: ElementEvent<string, EventDetail>) => void;
    listener: (event: any) => void;
};

/**
 * The directive generics here are not strong enough to maintain their values. Thus, the directive
 * call is wrapped in the function above.
 */
const listenDirective = directive(
    class extends Directive {
        public readonly element: HTMLElement;
        public lastListenerMetaData: ListenerMetaData<unknown> | undefined;

        constructor(partInfo: PartInfo) {
            super(partInfo);

            this.element = extractElement(partInfo, 'listen', HTMLElement);
        }

        public resetListener(listenerMetaData: ListenerMetaData<any>) {
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
            callback: (event: ElementEvent<string, unknown>) => void,
        ): ListenerMetaData<unknown> {
            return {
                eventType,
                callback,
                listener: (event: ElementEvent<string, unknown>) =>
                    this.lastListenerMetaData?.callback(event),
            };
        }

        render(
            eventObject: EventDescriptor<string, any>,
            callback: (event: ElementEvent<any, any>) => void,
        ) {
            const eventType = eventObject.eventName;

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
