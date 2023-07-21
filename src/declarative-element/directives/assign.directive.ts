import {noChange} from 'lit';
import {directive, Directive, DirectiveResult, PartInfo} from 'lit/directive.js';
import {assignInputs} from '../properties/assign-inputs';
import {PropertyInitMapBase} from '../properties/element-properties';
import {AllowObservablePropertySetter} from '../properties/observable-property/observable-property-handler';
import {extractElement} from './directive-helpers';

export type ElementDefinitionWithInputsType<
    InputsType extends PropertyInitMapBase = PropertyInitMapBase,
> = {inputsType: InputsType};

/**
 * Assign an object matching an element's inputs to its inputs.
 *
 * @deprecated Instead of using this directive, assign inputs directly on the element's
 *   interpolation opening tag interpolation.
 * @example
 *     html`<${MyElement} ${assign(MyElement, {value: 1})}>...`
 *     should be
 *     html`<${MyElement.assign({value: 1})}>...`
 */
export function assign<
    const SpecificDeclarativeElement extends ElementDefinitionWithInputsType,
    const SpecificInput extends {
        [Prop in keyof SpecificDeclarativeElement['inputsType']]: unknown;
    },
>(
    declarativeElement: SpecificDeclarativeElement,
    inputsObject: {} extends Required<SpecificDeclarativeElement['inputsType']>
        ? never
        : AllowObservablePropertySetter<SpecificDeclarativeElement['inputsType'], SpecificInput>,
): DirectiveResult;
/**
 * Assign an object matching an element's inputs to its inputs.
 *
 * @deprecated Instead of using this directive, assign inputs directly on the element's
 *   interpolation opening tag interpolation.
 * @example
 *     html`<${MyElement} ${assign(MyElement, {value: 1})}>...`
 *     should be
 *     html`<${MyElement.assign({value: 1})}>...`
 */
export function assign<
    const SpecificDeclarativeElement extends ElementDefinitionWithInputsType,
    const SpecificInput extends {
        [Prop in keyof SpecificDeclarativeElement['inputsType']]: unknown;
    },
>(inputsObject: SpecificInput extends typeof HTMLElement ? never : SpecificInput): DirectiveResult;
/**
 * Assign an object matching an element's inputs to its inputs.
 *
 * @deprecated Instead of using this directive, assign inputs directly on the element's
 *   interpolation opening tag interpolation.
 * @example
 *     html`<${MyElement} ${assign(MyElement, {value: 1})}>...`
 *     should be
 *     html`<${MyElement.assign({value: 1})}>...`
 */
export function assign<
    const SpecificDeclarativeElement extends ElementDefinitionWithInputsType,
    const SpecificInput extends {
        [Prop in keyof SpecificDeclarativeElement['inputsType']]: unknown;
    },
>(
    declarativeElementOrInputs: SpecificDeclarativeElement,
    inputsObject?: {} extends Required<SpecificDeclarativeElement['inputsType']>
        ? never
        : AllowObservablePropertySetter<SpecificDeclarativeElement['inputsType'], SpecificInput>,
): DirectiveResult {
    /**
     * The directive generics (in listenDirective) are not strong enough to maintain their values.
     * Thus, the directive call is wrapped in this function.
     */
    if (inputsObject) {
        return assignDirective(
            declarativeElementOrInputs as ElementDefinitionWithInputsType,
            inputsObject,
        );
    } else {
        return assignDirective(undefined, declarativeElementOrInputs as Record<string, any>);
    }
}

const assignDirective = directive(
    class extends Directive {
        public readonly element: Element;

        constructor(partInfo: PartInfo) {
            super(partInfo);

            this.element = extractElement(partInfo, 'assign');
        }

        render(
            elementDefinition: ElementDefinitionWithInputsType | undefined,
            inputsObject: Record<PropertyKey, unknown>,
        ) {
            assignInputs(this.element, inputsObject);
            return noChange;
        }
    },
);
