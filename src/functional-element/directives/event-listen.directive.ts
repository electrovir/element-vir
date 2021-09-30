import {noChange} from 'lit';
import {directive, Directive, PartInfo} from 'lit/directive.js';
import {ElementEvent, EventDescriptor} from '../element-events';
import {PropertyInitMapBase} from '../element-properties';
import {FunctionalElementInstance} from '../functional-element';
import {extractFunctionalElement} from './directive-util';

/**
 * The directive generics (in listenDirective) are not strong enough to maintain their values. Thus,
 * the directive call is wrapped in this function.
 */
export function listen<EventName extends string, DetailType>(
    eventType: EventDescriptor<EventName, DetailType>,
    listener: (event: ElementEvent<EventName, DetailType>) => void,
) {
    return listenDirective(eventType, listener);
}

type ListenerMetaData<EventDetail> = {
    eventType: string;
    callback: (event: ElementEvent<string, EventDetail>) => void;
    listener: (event: any) => void;
};

const listenDirective = directive(
    class extends Directive {
        public readonly element: FunctionalElementInstance<PropertyInitMapBase>;
        public lastListenerMetaData: ListenerMetaData<unknown> | undefined;

        constructor(partInfo: PartInfo) {
            super(partInfo);

            this.element = extractFunctionalElement(partInfo);
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
