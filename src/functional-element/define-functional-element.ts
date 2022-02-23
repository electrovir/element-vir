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
    FunctionalElement,
    FunctionalElementBaseClass,
    FunctionalElementInit,
    FunctionalElementInstance,
} from './functional-element';
import {createRenderParams, RenderParams} from './render-callback';

export function defineFunctionalElement<
    EventsInitGeneric extends EventsInitMap = {},
    PropertyInitGeneric extends PropertyInitMapBase = {},
>(
    functionalElementInit: FunctionalElementInit<PropertyInitGeneric, EventsInitGeneric>,
): FunctionalElement<PropertyInitGeneric, EventsInitGeneric> {
    const eventsMap = createEventDescriptorMap(functionalElementInit.events);

    const anonymousClass = class extends FunctionalElementBaseClass<PropertyInitGeneric> {
        public static override readonly tagName = functionalElementInit.tagName;
        public static override readonly styles = functionalElementInit.styles || css``;

        public createRenderParams(): RenderParams<PropertyInitGeneric, EventsInitGeneric> {
            return createRenderParams(
                this as FunctionalElementInstance<PropertyInitGeneric>,
                eventsMap,
            );
        }

        public static initInput = functionalElementInit;

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

        public initCalled = false;
        public render(): TemplateResult {
            const renderParams = this.createRenderParams();
            if (!this.initCalled && functionalElementInit.initCallback) {
                this.initCalled = true;
                functionalElementInit.initCallback(renderParams);
            }
            return functionalElementInit.renderCallback(renderParams);
        }

        public readonly instanceProps: PropertyInitGeneric =
            createPropertyProxy<PropertyInitGeneric>(
                functionalElementInit.props,
                this as FunctionalElementInstance<PropertyInitGeneric>,
            );

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

    return anonymousClass as unknown as FunctionalElement<PropertyInitGeneric, EventsInitGeneric>;
}
