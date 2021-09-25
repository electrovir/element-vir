export type EventsMap = Record<string, new () => FunctionalElementEvent<unknown>>;

export class FunctionalElementEvent<T> extends CustomEvent<T> {
    constructor(eventName: string, detail: T) {
        super(eventName, {detail, bubbles: true, composed: true});
    }
}
