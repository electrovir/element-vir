import {type MaybePromise} from '@augment-vir/common';
import {type EventClass} from 'typed-event-target';
import {
    AsyncDirective,
    directive,
    type DirectiveResult,
    noChange,
    type PartInfo,
} from '../../lit-exports/all-lit-exports.js';
import {extractElement} from './directive-helpers.js';

/** We don't care at all what this returns, just allow anything! */
type ListenCallbackReturn = MaybePromise<any>;

type PossibleListenerCallbacks<
    EventClassGeneric extends EventClass,
    NativeElementEventNameGeneric extends keyof HTMLElementEventMap,
> =
    | ((event: InstanceType<EventClassGeneric>) => ListenCallbackReturn)
    | ((event: HTMLElementEventMap[NativeElementEventNameGeneric]) => ListenCallbackReturn);

/** An event constructor with a static event type. */
export type EventDefinition<EventGeneric extends Event = Event> = EventClass<EventGeneric> &
    Readonly<{
        type: EventGeneric['type'];
    }>;

/**
 * Listen to events. These can be native DOM events (use a string for the inputType argument) or
 * typed events (pass in an event constructor from `typed-event-target`).
 *
 * @category Directives
 * @example
 *
 * ```ts
 * import {html, defineElement, listen} from 'element-vir';
 *
 * const MyElement = defineElement()({
 *     tagName: 'my-element',
 *     render() {
 *         return html`
 *             <div
 *                 ${listen('click', () => {
 *                     console.log('clicked!');
 *                 })}
 *             >
 *                 Some div
 *             </div>
 *             <${MyOtherElement}
 *                 ${listen(MyOtherElement.events.someEvent, (event) => {
 *                     console.log('event value', event.detail);
 *                 })}
 *             ></${MyOtherElement}>
 *         `;
 *     },
 * });
 * ```
 */
export function listen<EventClassGeneric extends EventDefinition>(
    /**
     * Needs to come either from a declarative element (like MyDeclarativeElement.events.eventName),
     * from a typed event constructor, or be the name of a built-in event (like `'click'`).
     */
    eventType: EventClassGeneric,
    /**
     * The callback to fire when an event is caught. The event type is inferred from the
     * constructor.
     */
    listener: (event: InstanceType<EventClassGeneric>) => ListenCallbackReturn,
): DirectiveResult<any>;
/**
 * Listen to events. These can be native DOM events (use a string for the inputType argument) or
 * typed events (pass in an event constructor from `typed-event-target`).
 *
 * @category Directives
 * @example
 *
 * ```ts
 * import {html, defineElement, listen} from 'element-vir';
 *
 * const MyElement = defineElement()({
 *     tagName: 'my-element',
 *     render() {
 *         return html`
 *             <div
 *                 ${listen('click', () => {
 *                     console.log('clicked!');
 *                 })}
 *             >
 *                 Some div
 *             </div>
 *             <${MyOtherElement}
 *                 ${listen(MyOtherElement.events.someEvent, (event) => {
 *                     console.log('event value', event.detail);
 *                 })}
 *             ></${MyOtherElement}>
 *         `;
 *     },
 * });
 * ```
 */
export function listen<NativeElementEventNameGeneric extends keyof HTMLElementEventMap>(
    /**
     * Needs to come either from a declarative element (like MyDeclarativeElement.events.eventName),
     * from a typed event constructor, or be the name of a built-in event (like `'click'`).
     */
    eventType: NativeElementEventNameGeneric,
    /**
     * The callback to fire when an event is caught. The event type is inferred from the
     * constructor.
     */
    listener: (event: HTMLElementEventMap[NativeElementEventNameGeneric]) => ListenCallbackReturn,
): DirectiveResult<any>;
export function listen<
    EventClassGeneric extends EventDefinition,
    NativeElementEventNameGeneric extends keyof HTMLElementEventMap,
>(
    eventType: EventClassGeneric | NativeElementEventNameGeneric,
    listener: PossibleListenerCallbacks<EventClassGeneric, NativeElementEventNameGeneric>,
): DirectiveResult<any> {
    return listenDirective(eventType, listener);
}

type ListenerMetaData = {
    eventType: string;
    callback: PossibleListenerCallbacks<any, any>;
    listener: (event: any) => ListenCallbackReturn;
};

/**
 * The directive generics here are not strong enough to maintain their values. Thus, the directive
 * call is wrapped in the function above.
 */
const listenDirective = directive(
    class extends AsyncDirective {
        public readonly element: Element;
        public lastListenerMetaData: ListenerMetaData | undefined;
        public isPartDisconnected = false;

        constructor(partInfo: PartInfo) {
            super(partInfo);

            this.element = extractElement(partInfo, 'listen');
        }

        public resetListener(listenerMetaData: ListenerMetaData) {
            this.removeCurrentListener();
            this.lastListenerMetaData = listenerMetaData;
            /** While disconnected, `reconnected` is responsible for attaching the listener. */
            if (this.isConnected) {
                this.addCurrentListener();
            }
        }

        public addCurrentListener() {
            if (this.lastListenerMetaData) {
                this.element.addEventListener(
                    this.lastListenerMetaData.eventType,
                    this.lastListenerMetaData.listener,
                );
            }
        }

        public removeCurrentListener() {
            if (this.lastListenerMetaData) {
                this.element.removeEventListener(
                    this.lastListenerMetaData.eventType,
                    this.lastListenerMetaData.listener,
                );
            }
        }

        /**
         * An event's propagation path is fixed when its dispatch begins, so an element that gets
         * removed from the document _during_ a dispatch still has connected nodes in the path of
         * that event. Plain `addEventListener` listeners keep firing for such an event, so these
         * must too: otherwise an earlier listener that removes the element (a pop-up closing itself
         * on the very click it is responding to, for example) silently swallows every later
         * listener for that same event.
         */
        public isMidDispatchDisconnect(event: Event) {
            return (
                !this.element.isConnected &&
                event
                    .composedPath()
                    .some((eventTarget) => eventTarget instanceof Node && eventTarget.isConnected)
            );
        }

        public createListenerMetaData(
            eventType: string,
            callback: (event: Event) => ListenCallbackReturn,
        ): ListenerMetaData {
            return {
                eventType,
                callback,
                listener: (event: Event) => {
                    if (this.isPartDisconnected && !this.isMidDispatchDisconnect(event)) {
                        return undefined;
                    }

                    return this.lastListenerMetaData?.callback(event);
                },
            };
        }

        public render(
            eventTypeInput: {type: string} | string,
            callback: PossibleListenerCallbacks<any, any>,
        ) {
            const eventType =
                typeof eventTypeInput === 'string' ? eventTypeInput : eventTypeInput.type;

            if (typeof eventType !== 'string') {
                throw new TypeError(
                    `Cannot listen to an event with a name that is not a string. Given event name: '${String(eventType)}'`,
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

        public override disconnected() {
            /**
             * The listener stays attached so that events which were already dispatching still reach
             * it (see `isMidDispatchDisconnect`); this flag blocks everything dispatched
             * afterwards.
             */
            this.isPartDisconnected = true;
        }

        public override reconnected() {
            this.isPartDisconnected = false;
            this.addCurrentListener();
        }
    },
);
