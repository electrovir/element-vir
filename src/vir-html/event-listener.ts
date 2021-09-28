import {noChange} from 'lit';
import {directive, Directive, ElementPartInfo, PartInfo, PartType} from 'lit/directive.js';
import {FunctionalElementBaseClass} from '../functional-element/functional-element';
import {ElementEvent, EventObject} from '../functional-element/functional-element-event';
import {ExtraPartInfoProperties} from './directive';
import {OutputName} from './element-output';

/**
 * The directive generics (in listenDirective) are not strong enough to maintain the generics.
 * Thus, the directive call is wrapped in this function.
 */
export function listen<EventName extends OutputName, DetailType>(
    eventType: EventObject<EventName, DetailType>,
    listener: (event: ElementEvent<EventName, DetailType>) => void,
) {
    return listenDirective(eventType, listener);
}

type ListenerMetaData = {
    eventType: string;
    callback: (event: ElementEvent<any, any>) => void;
    listener: (event: any) => void;
};

export const listenDirective = directive(
    class extends Directive {
        public readonly element: Element;
        public lastListenerMetaData: ListenerMetaData | undefined;

        constructor(partInfo: PartInfo) {
            super(partInfo);

            if (partInfo.type !== PartType.ELEMENT) {
                throw new Error(`listen directive can only be attached directly to an element.`);
            }
            this.element = (partInfo as ElementPartInfo & ExtraPartInfoProperties).element;
            if (!(this.element instanceof FunctionalElementBaseClass)) {
                throw new Error(`listen directive only works when attached to functional elements`);
            }
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
            callback: (event: ElementEvent<any, any>) => void,
        ): ListenerMetaData {
            return {
                eventType,
                callback,
                listener: (event: ElementEvent<any, any>) =>
                    this.lastListenerMetaData?.callback(event),
            };
        }

        render(
            eventObject: EventObject<OutputName, any>,
            callback: (event: ElementEvent<any, any>) => void,
        ) {
            const eventType = String(eventObject.outputName);

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
