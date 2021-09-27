import {css, TemplateResult} from 'lit';
import {property} from 'lit/decorators.js';
import {
    FunctionalElement,
    FunctionalElementBaseClass,
    FunctionalElementInstance,
} from './functional-element';
import {EventsMap} from './functional-element-event';
import {FunctionalElementInit} from './functional-element-init';
import {
    FunctionalElementProperty,
    FunctionalElementPropertyMap,
    PropertyInitMap,
} from './functional-element-properties';
import {RenderParams} from './render-callback';

export function createFunctionalElement<
    PropertyInitGeneric extends PropertyInitMap,
    EventsGeneric extends EventsMap,
>(
    functionalElementInit: FunctionalElementInit<PropertyInitGeneric, EventsGeneric>,
): FunctionalElement<PropertyInitGeneric, EventsGeneric> {
    const renderWrapper = (
        element: FunctionalElementInstance<PropertyInitGeneric>,
    ): TemplateResult | Promise<TemplateResult> => {
        const props = Object.keys(element.props).reduce((accum, key: keyof PropertyInitGeneric) => {
            accum[key] = element.props[key].getProp();
            return accum;
        }, {} as PropertyInitGeneric);

        const propsProxy = new Proxy(props, {
            set: (target, propertyName: keyof PropertyInitGeneric, value) => {
                element[propertyName] = value;
                return true;
            },
        });

        const renderParams: RenderParams<PropertyInitGeneric> = {
            // renderRoot: element.renderRoot,
            // self: element,
            props: propsProxy,
        };
        return functionalElementInit.renderCallback(renderParams);
    };

    const anonymousClass = class extends FunctionalElementBaseClass<PropertyInitGeneric> {
        public static readonly tagName = functionalElementInit.tagName;
        public static readonly styles = functionalElementInit.styles || css``;
        public static readonly propNames = Object.keys(
            functionalElementInit.propertyInit || ({} as PropertyInitGeneric),
        );
        public static readonly events = functionalElementInit.events || {};
        public static readonly renderCallback = functionalElementInit.renderCallback;

        public render(): TemplateResult | Promise<TemplateResult> {
            return renderWrapper(this as FunctionalElementInstance<PropertyInitGeneric>);
        }
        public readonly props: FunctionalElementPropertyMap<PropertyInitGeneric> = Object.keys(
            functionalElementInit.propertyInit || ({} as PropertyInitGeneric),
        ).reduce((accum, propertyKey: keyof PropertyInitGeneric) => {
            const newProp: FunctionalElementProperty<
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

    return anonymousClass as any;
}
