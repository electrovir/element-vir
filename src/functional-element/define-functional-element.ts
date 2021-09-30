import {css, TemplateResult} from 'lit';
import {property} from 'lit/decorators.js';
import {createEventDescriptorMap, EventsInitMap} from './element-events';
import {
    createPropertyDescriptorMap,
    createPropertyProxy,
    PropertyInitMapBase,
} from './element-properties';
import {
    ExtraStaticFunctionalElementProperties,
    FunctionalElementBaseClass,
    FunctionalElementConstructor,
    FunctionalElementInstance,
} from './functional-element';
import {FunctionalElementInit} from './functional-element-init';
import {createRenderParams, RenderParams} from './render-callback';

export function defineFunctionalElement<
    EventsInitGeneric extends EventsInitMap = never,
    PropertyInitGeneric extends PropertyInitMapBase = never,
>(
    functionalElementInit: FunctionalElementInit<PropertyInitGeneric, EventsInitGeneric>,
): FunctionalElementConstructor<PropertyInitGeneric, EventsInitGeneric> {
    const eventsMap = createEventDescriptorMap(functionalElementInit.events);

    const anonymousClass = class extends FunctionalElementBaseClass<PropertyInitGeneric> {
        public static readonly tagName = functionalElementInit.tagName;
        public static readonly styles = functionalElementInit.styles || css``;
        public static readonly propNames = Object.keys(
            functionalElementInit.props || ({} as PropertyInitGeneric),
        );

        public createRenderParams(): RenderParams<PropertyInitGeneric, EventsInitGeneric> {
            return createRenderParams(
                this as FunctionalElementInstance<PropertyInitGeneric>,
                eventsMap,
            );
        }

        public static readonly events: ExtraStaticFunctionalElementProperties<
            PropertyInitGeneric,
            EventsInitGeneric
        >['events'] = eventsMap;
        public static readonly renderCallback: ExtraStaticFunctionalElementProperties<
            PropertyInitGeneric,
            EventsInitGeneric
        >['renderCallback'] = functionalElementInit.renderCallback;
        public static readonly props: ExtraStaticFunctionalElementProperties<
            PropertyInitGeneric,
            EventsInitGeneric
        >['props'] = createPropertyDescriptorMap(functionalElementInit.props);

        render(): TemplateResult | Promise<TemplateResult> {
            return functionalElementInit.renderCallback(this.createRenderParams());
        }
        public readonly instanceProps: PropertyInitGeneric =
            createPropertyProxy<PropertyInitGeneric>(
                functionalElementInit.props,
                this as FunctionalElementInstance<PropertyInitGeneric>,
            );

        public connectedCallback() {
            super.connectedCallback();
            functionalElementInit.connectedCallback?.({
                element: this as FunctionalElementInstance<PropertyInitGeneric>,
                ...this.createRenderParams(),
            });
        }

        public disconnectedCallback() {
            super.disconnectedCallback();
            functionalElementInit.disconnectedCallback?.({
                element: this as FunctionalElementInstance<PropertyInitGeneric>,
                ...this.createRenderParams(),
            });
        }

        constructor() {
            super();

            const initProps: PropertyInitGeneric =
                functionalElementInit.props || ({} as PropertyInitGeneric);

            Object.keys(initProps).forEach((propName: keyof PropertyInitGeneric) => {
                const functionalElementInstance: FunctionalElementInstance<PropertyInitGeneric> =
                    this as FunctionalElementInstance<PropertyInitGeneric>;

                property()(functionalElementInstance, propName);
                (functionalElementInstance as PropertyInitGeneric)[propName] = initProps[propName];
            });
        }
    };

    window.customElements.define(functionalElementInit.tagName, anonymousClass);

    return anonymousClass as unknown as FunctionalElementConstructor<
        PropertyInitGeneric,
        EventsInitGeneric
    >;
}
