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
    FunctionalElementInstanceFromInit,
} from './functional-element';
import {createHostClassNames} from './host-classes';
import {createRenderParams, RenderParams} from './render-callback';
import {applyHostClasses, hostClassNamesToStylesInput} from './styles';

const defaultInit: Required<Pick<FunctionalElementInit<any, any, any>, 'props' | 'events'>> = {
    events: {},
    props: {},
};

export function defineFunctionalElement<
    HostClassKeys extends string,
    EventsInitGeneric extends EventsInitMap = {},
    PropertyInitGeneric extends PropertyInitMapBase = {},
>(
    functionalElementInit: FunctionalElementInit<
        PropertyInitGeneric,
        EventsInitGeneric,
        HostClassKeys
    >,
): FunctionalElement<PropertyInitGeneric, EventsInitGeneric, HostClassKeys> {
    const eventsMap = createEventDescriptorMap(functionalElementInit.events);
    const hostClassNames = createHostClassNames(
        functionalElementInit.tagName,
        functionalElementInit.hostClasses,
    );
    console.log({hostClassNames});
    console.log(hostClassNamesToStylesInput(hostClassNames));
    const calculatedStyles =
        typeof functionalElementInit.styles === 'function'
            ? functionalElementInit.styles(hostClassNamesToStylesInput(hostClassNames))
            : functionalElementInit.styles || css``;
    if (typeof functionalElementInit.styles === 'function') {
        console.log({calculatedStyles: String(calculatedStyles)});
    }

    const anonymousClass = class extends FunctionalElementBaseClass<PropertyInitGeneric> {
        public static override readonly tagName = functionalElementInit.tagName;
        public static override readonly styles = calculatedStyles;

        public createRenderParams(): RenderParams<PropertyInitGeneric, EventsInitGeneric> {
            return createRenderParams(
                this as FunctionalElementInstanceFromInit<PropertyInitGeneric>,
                eventsMap,
            );
        }

        public static init: ExtraStaticFunctionalElementProperties<
            PropertyInitGeneric,
            EventsInitGeneric,
            HostClassKeys
        >['init'] = {...defaultInit, ...functionalElementInit};

        public static readonly events: ExtraStaticFunctionalElementProperties<
            PropertyInitGeneric,
            EventsInitGeneric,
            HostClassKeys
        >['events'] = eventsMap;
        public static readonly renderCallback: ExtraStaticFunctionalElementProperties<
            PropertyInitGeneric,
            EventsInitGeneric,
            HostClassKeys
        >['renderCallback'] = functionalElementInit.renderCallback;
        public static readonly props: ExtraStaticFunctionalElementProperties<
            PropertyInitGeneric,
            EventsInitGeneric,
            HostClassKeys
        >['props'] = createPropertyDescriptorMap(functionalElementInit.props);
        public static readonly hostClasses: ExtraStaticFunctionalElementProperties<
            PropertyInitGeneric,
            EventsInitGeneric,
            HostClassKeys
        >['hostClasses'] = hostClassNames;

        public initCalled = false;
        public render(): TemplateResult {
            const renderParams = this.createRenderParams();
            if (!this.initCalled && functionalElementInit.initCallback) {
                this.initCalled = true;
                functionalElementInit.initCallback(renderParams);
            }
            const renderResult = functionalElementInit.renderCallback(renderParams);
            applyHostClasses(
                renderParams.host,
                functionalElementInit.hostClasses,
                hostClassNames,
                renderParams.props,
            );
            return renderResult;
        }

        public readonly instanceProps: PropertyInitGeneric =
            createPropertyProxy<PropertyInitGeneric>(
                functionalElementInit.props,
                this as FunctionalElementInstanceFromInit<PropertyInitGeneric>,
            );

        constructor() {
            super();

            const initProps: PropertyInitGeneric =
                functionalElementInit.props || ({} as PropertyInitGeneric);

            Object.keys(initProps).forEach((propName: keyof PropertyInitGeneric) => {
                const functionalElementInstance: FunctionalElementInstanceFromInit<PropertyInitGeneric> =
                    this as FunctionalElementInstanceFromInit<PropertyInitGeneric>;

                property()(functionalElementInstance, propName);
                (functionalElementInstance as PropertyInitGeneric)[propName] = initProps[propName];
            });
        }
    };

    window.customElements.define(functionalElementInit.tagName, anonymousClass);

    return anonymousClass as unknown as FunctionalElement<PropertyInitGeneric, EventsInitGeneric>;
}
