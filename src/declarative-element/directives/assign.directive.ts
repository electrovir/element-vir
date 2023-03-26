import {noChange} from 'lit';
import {directive, Directive, DirectiveResult, PartInfo} from 'lit/directive.js';
import {DeclarativeElementDefinition} from '../declarative-element';
import {assignInputs} from '../properties/assign-inputs';
import {extractElement} from './directive-helpers';

/** Assign an object matching an element's inputs to its inputs. */
export function assign<DeclarativeElementGeneric extends DeclarativeElementDefinition>(
    declarativeElement: DeclarativeElementGeneric,
    inputsObject: DeclarativeElementGeneric['inputsType'],
): DirectiveResult;
export function assign<DeclarativeElementGeneric extends DeclarativeElementDefinition>(
    inputsObject: Record<string, any>,
): DirectiveResult;
export function assign<DeclarativeElementGeneric extends DeclarativeElementDefinition>(
    declarativeElementOrInputs: DeclarativeElementGeneric | Record<string, any>,
    inputsObject?: DeclarativeElementGeneric['inputsType'],
): DirectiveResult {
    /**
     * The directive generics (in listenDirective) are not strong enough to maintain their values.
     * Thus, the directive call is wrapped in this function.
     */
    if (inputsObject) {
        return assignDirective(
            declarativeElementOrInputs as DeclarativeElementGeneric,
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
            elementDefinition: DeclarativeElementDefinition | undefined,
            inputsObject: Record<PropertyKey, unknown>,
        ) {
            assignInputsObject(elementDefinition, this.element, inputsObject);
            return noChange;
        }
    },
);

export function assignInputsObject<
    DeclarativeElementDefinitionGeneric extends DeclarativeElementDefinition,
>(
    expectedElementConstructor: DeclarativeElementDefinitionGeneric | undefined,
    element: Element,
    assignmentObject: DeclarativeElementDefinitionGeneric['inputsType'],
) {
    assignInputs(element, assignmentObject);
}
