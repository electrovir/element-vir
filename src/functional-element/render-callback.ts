import {TemplateResult} from 'lit';
import {FunctionalElementInstance} from './functional-element';
import {
    ElementEvent,
    EventInitMapEventDetailExtractor,
    EventsInitMap,
} from './functional-element-event';
import {PropertyInitMap} from './functional-element-properties';

export type RenderCallback<
    PropertyInitGeneric extends PropertyInitMap,
    EventsInitGeneric extends EventsInitMap,
> = (
    params: RenderParams<PropertyInitGeneric, EventsInitGeneric>,
) => TemplateResult | Promise<TemplateResult>;

export type RenderParams<
    PropertyInitGeneric extends PropertyInitMap,
    EventsInitGeneric extends EventsInitMap,
> = {
    props: PropertyInitGeneric;
    dispatchEvent<EventName extends keyof EventsInitGeneric>(
        event: ElementEvent<
            EventName extends string ? EventName : never,
            EventInitMapEventDetailExtractor<EventName, EventsInitGeneric>
        >,
    ): void;
};

export function createRenderParams<
    PropertyInitGeneric extends PropertyInitMap,
    EventsInitGeneric extends EventsInitMap,
>(
    element: FunctionalElementInstance<PropertyInitGeneric>,
): RenderParams<PropertyInitGeneric, EventsInitGeneric> {
    const props = Object.keys(element.props).reduce(
        (accum, propertyName: keyof PropertyInitGeneric) => {
            accum[propertyName] = element.props[propertyName].getProp();
            return accum;
        },
        {} as PropertyInitGeneric,
    );

    const propsProxy = new Proxy(props, {
        set: (_target, propertyName: keyof PropertyInitGeneric | symbol, value) => {
            element.props[propertyName].setProp(value);
            return true;
        },
    });

    const renderParams: RenderParams<PropertyInitGeneric, EventsInitGeneric> = {
        // renderRoot: element.renderRoot,
        // self: element,
        dispatchEvent: (event) => element.dispatchEvent(event),
        props: propsProxy,
    };
    return renderParams;
}
