import {noChange} from 'lit';
import {directive, Directive, DirectiveResult, PartInfo} from 'lit/directive.js';
import {extractElement} from './directive-util';

/**
 * Listen to events. First parameter is just a string for an event name/type, vs. the more
 * complicated first parameter type for the "listen" directive. If the given eventName is a native
 * DOM event, the event type given to the callback will be the event type associated with that
 * native event type. Otherwise, specific event types given to the callback are unknown.
 *
 * If you are listening to your custom events, it is better to use the "listen" directive directly
 * so your callbacks are more tightly typed.
 *
 * @param eventName Name of the event to listen to.
 * @param listener The callback to fire when an event is caught.
 */
export function namedListen<EventName extends keyof HTMLElementEventMap>(
    eventName: EventName,
    listener: (event: HTMLElementEventMap[EventName]) => void,
): DirectiveResult;
export function namedListen<EventName extends string>(
    eventName: EventName,
    listener: (event: Event) => void,
): DirectiveResult;
export function namedListen<EventName extends keyof HTMLElementEventMap>(
    eventName: EventName,
    listener: (event: HTMLElementEventMap[EventName]) => void,
): DirectiveResult {
    return listenDirective(eventName, listener as (event: Event) => void);
}

type ListenerMetaData = {
    eventType: string;
    callback: (event: Event) => void;
    listener: (event: any) => void;
};

const listenDirective = directive(
    class extends Directive {
        public readonly element: HTMLElement;
        public lastListenerMetaData: ListenerMetaData | undefined;

        constructor(partInfo: PartInfo) {
            super(partInfo);

            this.element = extractElement(partInfo, 'listen', HTMLElement);
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
            callback: (event: Event) => void,
        ): ListenerMetaData {
            return {
                eventType,
                callback,
                listener: (event: Event) => this.lastListenerMetaData?.callback(event),
            };
        }

        render(eventName: string, callback: (event: Event) => void) {
            if (typeof eventName !== 'string') {
                throw new Error(
                    `Cannot listen to an event with a name that is not a string. Given event name: "${eventName}"`,
                );
            }

            if (this.lastListenerMetaData && this.lastListenerMetaData.eventType === eventName) {
                /**
                 * Store the callback here so we don't have to update the attached listener every
                 * time the callback is updated.
                 */
                this.lastListenerMetaData.callback = callback;
            } else {
                this.resetListener(this.createListenerMetaData(eventName, callback));
            }

            return noChange;
        }
    },
);
