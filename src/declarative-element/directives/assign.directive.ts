import {noChange, PropertyDeclaration, ReactiveElement} from 'lit';
import {property} from 'lit/decorators.js';
import {directive, Directive, PartInfo} from 'lit/directive.js';
import {DeclarativeElement, DeclarativeElementDefinition} from '../declarative-element';
import {extractDeclarativeElement} from './directive-helpers';

/** Assign an object matching an element's inputs to its inputs. */
export function assign<DeclarativeElementGeneric extends DeclarativeElementDefinition>(
    declarativeElement: DeclarativeElementGeneric,
    inputsObject: DeclarativeElementGeneric['inputsType'],
) {
    /**
     * The directive generics (in listenDirective) are not strong enough to maintain their values.
     * Thus, the directive call is wrapped in this function.
     */
    return assignDirective(declarativeElement, inputsObject);
}

const assignDirective = directive(
    class extends Directive {
        public readonly element: DeclarativeElement;

        constructor(partInfo: PartInfo) {
            super(partInfo);

            this.element = extractDeclarativeElement(partInfo, 'assign');
        }

        render(
            elementDefinition: DeclarativeElementDefinition,
            inputsObject: Record<PropertyKey, unknown>,
        ) {
            assignInputsObject(elementDefinition, this.element, inputsObject);
            return noChange;
        }
    },
);

export function assignInputsObject<
    DeclarativeElementInstanceGeneric extends DeclarativeElement,
    DeclarativeElementDefinitionGeneric extends DeclarativeElementDefinition,
>(
    expectedElementConstructor: DeclarativeElementDefinitionGeneric,
    element: DeclarativeElementInstanceGeneric,
    assignmentObject: DeclarativeElementDefinitionGeneric['inputsType'],
) {
    if (element.tagName.toLowerCase() !== expectedElementConstructor.tagName.toLowerCase()) {
        console.error(element, expectedElementConstructor);
        throw new Error(
            `Assignment mismatch. Assignment was made for ${element.tagName.toLowerCase()} but it's attached to ${expectedElementConstructor.tagName.toLowerCase()}`,
        );
    }
    Object.keys(assignmentObject).forEach((key) => {
        if (
            !(
                (element as ReactiveElement).constructor as any as {
                    // this is a static property on ReactiveElement
                    elementProperties: Map<PropertyKey, PropertyDeclaration>;
                }
            ).elementProperties.has(key)
        ) {
            property()(element, key);
        }
        element.instanceInputs[key] = assignmentObject[key];
    });
    element.markInputsAsHavingBeenSet();
}
