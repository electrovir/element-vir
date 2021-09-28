import {OutputName, OutputObject} from '../vir-html/element-output';
export type EventsInitMap = Record<OutputName, new () => ElementEvent<string, unknown>>;

export type EventCreator<T> = (new () => ElementEvent<string, T>) & {eventName: string};

export function elementEvent<T>(): new () => ElementEvent<string, T> {
    const customEventElement = class extends ElementEvent<string, T> {};

    return customEventElement as new () => ElementEvent<string, T>;
}

export class ElementEvent<
    EventName extends OutputName,
    EventValue,
> extends CustomEvent<EventValue> {
    public readonly eventName: string = String(this.outputObject.outputName);

    constructor(private readonly outputObject: OutputObject<EventName>, initDetail: EventValue) {
        super(String(outputObject.outputName), {detail: initDetail, bubbles: true, composed: true});
    }
}

export type EventExtraProperties<DetailType> = {
    eventConstructor: new (
        outputObject: EventObject<OutputName, DetailType>,
        initDetail: DetailType,
    ) => ElementEvent<OutputName, DetailType>;
};

export type EventObject<EventName extends OutputName, DetailType> = OutputObject<EventName> &
    EventExtraProperties<DetailType>;

export type EventPropertyMap<EventsInitGeneric extends EventsInitMap> = {
    [Property in keyof EventsInitGeneric]: EventObject<
        Property,
        InstanceType<EventsInitGeneric[Property]> extends ElementEvent<OutputName, infer R>
            ? R
            : never
    >;
};
