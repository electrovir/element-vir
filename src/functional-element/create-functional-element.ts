import {css, CSSResult, TemplateResult} from 'lit';
import {property} from 'lit/decorators.js';
import {FunctionalElementBase, FunctionalElementBaseClass} from './functional-element-base';
import {EventsMap} from './functional-element-event';
import {FunctionalElementInput, InputsMap} from './functional-element-inputs';

export type RenderCallback<InputsGeneric extends InputsMap> = (
    params: RenderParams<InputsGeneric>,
) => TemplateResult | Promise<TemplateResult>;

export type RenderParams<InputsGeneric extends InputsMap> = {
    self: FunctionalElementBase<InputsGeneric>;
    renderRoot: HTMLElement | ShadowRoot;
    inputs: InputsGeneric;
};

export type FunctionalElementInit<
    InputsGeneric extends InputsMap,
    EventsGeneric extends EventsMap,
> = {
    tagName: string;
    inputs?: InputsGeneric;
    styles?: CSSResult;
    events?: EventsGeneric;
    renderCallback: RenderCallback<InputsGeneric>;
};

export type FunctionalElement<InputsGeneric extends InputsMap> =
    (new () => FunctionalElementBase<InputsGeneric>) & {
        inputs: Record<keyof InputsGeneric, FunctionalElementInput<InputsGeneric>>;
    };

export function createFunctionalElement<
    InputsGeneric extends InputsMap = {},
    EventsGeneric extends EventsMap = {},
>(
    functionalElementInit: FunctionalElementInit<InputsGeneric, EventsGeneric>,
): FunctionalElement<InputsGeneric> {
    const anonymousClass = class extends FunctionalElementBaseClass {
        public static readonly tagName = functionalElementInit.tagName;
        public static readonly events = functionalElementInit.events || {};
        public static readonly styles = functionalElementInit.styles || css``;
        public render(): TemplateResult | Promise<TemplateResult> {
            return renderWrapper(this as FunctionalElementBase<InputsGeneric>);
        }
        public static readonly inputs: Record<
            keyof InputsGeneric,
            FunctionalElementInput<InputsGeneric>
        > = Object.keys(functionalElementInit.inputs || ({} as InputsGeneric)).reduce(
            (accum, inputKey: keyof InputsGeneric) => {
                accum[inputKey] = {inputName: inputKey};
                return accum;
            },
            {} as Record<keyof InputsGeneric, FunctionalElementInput<InputsGeneric>>,
        );

        constructor() {
            super();

            const initInputs: InputsGeneric = functionalElementInit.inputs || ({} as InputsGeneric);

            console.log('constructing');

            Object.keys(initInputs).forEach((inputName: keyof InputsGeneric) => {
                property()(this, inputName);
                (this as unknown as InputsGeneric)[inputName] = initInputs[inputName];
            });
        }
    };

    const renderWrapper = (
        element: FunctionalElementBase<InputsGeneric>,
    ): TemplateResult | Promise<TemplateResult> => {
        const renderParams: RenderParams<InputsGeneric> = {
            renderRoot: element.renderRoot,
            self: element,
            inputs: Object.keys(anonymousClass.inputs).reduce((accum, key: keyof InputsGeneric) => {
                accum[key] = element[key];
                return accum;
            }, {} as InputsGeneric),
        };
        return functionalElementInit.renderCallback(renderParams);
    };

    console.log(anonymousClass.hasOwnProperty('tagName'));

    window.customElements.define(functionalElementInit.tagName, anonymousClass);

    return anonymousClass as any;
}
