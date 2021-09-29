import {css, TemplateResult} from 'lit';
import {property} from 'lit/decorators.js';
import {
    ExtraStaticFunctionalElementProperties,
    FunctionalElement,
    FunctionalElementBaseClass,
    FunctionalElementInstance,
} from './functional-element';
import {
    EventExtraProperties,
    EventInitMapEventDetailExtractor,
    EventObject,
    EventPropertyMap,
    EventsInitMap,
} from './functional-element-event';
import {FunctionalElementInit} from './functional-element-init';
import {
    ElementProperty,
    FunctionalElementPropertyMap,
    InputPropertyMap,
    PropertyInitMap,
} from './functional-element-properties';
import {createRenderParams} from './render-callback';

export function createFunctionalElement<
    PropertyInitGeneric extends PropertyInitMap,
    EventsInitGeneric extends EventsInitMap,
>(
    functionalElementInit: FunctionalElementInit<PropertyInitGeneric, EventsInitGeneric>,
): FunctionalElement<PropertyInitGeneric, EventsInitGeneric> {
    const anonymousClass = class extends FunctionalElementBaseClass<PropertyInitGeneric> {
        public static readonly tagName = functionalElementInit.tagName;
        public static readonly styles = functionalElementInit.styles || css``;
        public static readonly propNames = Object.keys(
            functionalElementInit.propertyInit || ({} as PropertyInitGeneric),
        );

        public static readonly events: ExtraStaticFunctionalElementProperties<
            PropertyInitGeneric,
            EventsInitGeneric
        >['events'] = Object.keys(functionalElementInit.events || {})
            .filter(
                (currentKey: keyof EventsInitGeneric): currentKey is keyof EventsInitGeneric => {
                    if (typeof currentKey !== 'string') {
                        throw new Error(
                            `Expected event key of type string but got type "${typeof currentKey}" for key ${currentKey}`,
                        );
                    }
                    return true;
                },
            )
            .reduce(
                (
                    accum: EventPropertyMap<EventsInitGeneric>,
                    currentKey: keyof EventsInitGeneric,
                ): EventPropertyMap<EventsInitGeneric> => {
                    const eventObject: EventObject<
                        typeof currentKey extends string ? typeof currentKey : never,
                        EventInitMapEventDetailExtractor<typeof currentKey, EventsInitGeneric>
                    > = {
                        eventName: currentKey as keyof EventsInitGeneric extends string
                            ? keyof EventsInitGeneric
                            : never,
                        eventConstructor: functionalElementInit.events![
                            currentKey
                        ] as EventExtraProperties<
                            EventInitMapEventDetailExtractor<typeof currentKey, EventsInitGeneric>
                        >['eventConstructor'],
                    };
                    accum[currentKey] = eventObject;
                    return accum;
                },
                {} as EventPropertyMap<EventsInitGeneric>,
            );
        public static readonly renderCallback: ExtraStaticFunctionalElementProperties<
            PropertyInitGeneric,
            EventsInitGeneric
        >['renderCallback'] = functionalElementInit.renderCallback;
        public static readonly inputs: ExtraStaticFunctionalElementProperties<
            PropertyInitGeneric,
            EventsInitGeneric
        >['inputs'] = Object.keys(functionalElementInit.propertyInit || {}).reduce(
            (
                accum: InputPropertyMap<PropertyInitGeneric>,
                currentKey: keyof PropertyInitGeneric,
            ): InputPropertyMap<PropertyInitGeneric> => {
                accum[currentKey] = {inputName: currentKey as keyof PropertyInitMap};
                return accum;
            },
            {} as InputPropertyMap<PropertyInitGeneric>,
        );

        render(): TemplateResult | Promise<TemplateResult> {
            return functionalElementInit.renderCallback(
                createRenderParams(this as FunctionalElementInstance<PropertyInitGeneric>),
            );
        }
        public readonly props: FunctionalElementPropertyMap<PropertyInitGeneric> = Object.keys(
            functionalElementInit.propertyInit || ({} as PropertyInitGeneric),
        ).reduce((accum, propertyKey: keyof PropertyInitGeneric) => {
            const newProp: ElementProperty<
                typeof propertyKey,
                PropertyInitGeneric[typeof propertyKey]
            > = {
                name: propertyKey,
                getProp: () => {
                    return (this as FunctionalElementInstance<PropertyInitGeneric>)[propertyKey];
                },
                setProp: (value) => {
                    (this as PropertyInitGeneric)[propertyKey] = value;
                },
            };
            accum[propertyKey] = newProp;
            return accum;
        }, {} as FunctionalElementPropertyMap<PropertyInitGeneric>);

        public connectedCallback() {
            super.connectedCallback();
            functionalElementInit.connectedCallback?.(
                this as FunctionalElementInstance<PropertyInitGeneric>,
            );
        }

        public disconnectedCallback() {
            super.disconnectedCallback();
            functionalElementInit.disconnectedCallback?.(
                this as FunctionalElementInstance<PropertyInitGeneric>,
            );
        }

        constructor() {
            super();

            const initProps: PropertyInitGeneric =
                functionalElementInit.propertyInit || ({} as PropertyInitGeneric);

            Object.keys(initProps).forEach((propName: keyof PropertyInitGeneric) => {
                const functionalElementInstance: FunctionalElementInstance<PropertyInitGeneric> =
                    this as FunctionalElementInstance<PropertyInitGeneric>;

                if (propName in functionalElementInstance) {
                    throw new Error(
                        `${functionalElementInit.tagName} already has a property named ${propName}. Don't add a new property to it with that name.`,
                    );
                }
                property()(functionalElementInstance, propName);
                (functionalElementInstance as PropertyInitGeneric)[propName] = initProps[propName];
            });
        }
    };

    window.customElements.define(functionalElementInit.tagName, anonymousClass);

    return anonymousClass as unknown as FunctionalElement<PropertyInitGeneric, EventsInitGeneric>;
}
