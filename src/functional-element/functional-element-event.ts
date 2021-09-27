import {OutputName, OutputObject} from '../vir-html/element-output';
export type EventsInitMap = Record<OutputName, new () => ElementEvent<string, unknown>>;

export type EventCreator<T> = (new () => ElementEvent<string, T>) & {eventName: string};

export function elementEvent<T>(): new () => ElementEvent<string, T> {
    const customEventElement = class extends ElementEvent<string, T> {};

    return customEventElement as new () => ElementEvent<string, T>;
}

export class ElementEvent<
    EventName extends number | symbol | string,
    EventValue,
> extends CustomEvent<EventValue> {
    public readonly eventName: string = String(this.outputObject.outputName);

    constructor(private readonly outputObject: OutputObject<EventName>, detail: EventValue) {
        super(String(outputObject.outputName), {detail, bubbles: true, composed: true});
    }
}

export type EventPropertyMap<EventsInitGeneric extends EventsInitMap> = {
    [Property in keyof EventsInitGeneric]: OutputObject<Property>;
};
