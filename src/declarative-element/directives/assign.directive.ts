import {noChange} from 'lit';
import {directive, Directive, PartInfo} from 'lit/directive.js';
import {DeclarativeElement, DeclarativeElementDefinition} from '../declarative-element';
import {extractDeclarativeElement} from './directive-helpers';

/** Assign an object matching an element's inputs to its inputs. */
export function assign<DeclarativeElementGeneric extends DeclarativeElementDefinition>(
    declarativeElement: DeclarativeElementGeneric,
    inputsObject: DeclarativeElementGeneric extends DeclarativeElementDefinition<
        infer InputsGeneric
    >
        ? InputsGeneric
        : never,
) {
    /**
     * The directive generics (in listenDirective) are not strong enough to maintain their values.
     * Thus, the directive call is wrapped in this function.
     */
    return assignDirective(inputsObject);
}

const assignDirective = directive(
    class extends Directive {
        public readonly element: DeclarativeElement;

        constructor(partInfo: PartInfo) {
            super(partInfo);

            this.element = extractDeclarativeElement(partInfo, 'assign');
        }

        render(inputsObject: Record<PropertyKey, unknown>) {
            assignInputsObject(this.element, inputsObject);
            return noChange;
        }
    },
);

export function assignInputsObject<DeclarativeElementGeneric extends DeclarativeElement>(
    element: DeclarativeElementGeneric,
    assignmentObject: typeof element['creator']['init']['stateInit'],
) {
    Object.keys(assignmentObject).forEach((key) => {
        const value = assignmentObject[key];
        element.instanceState[key] = value;
    });
    element.markInputsAsHavingBeenSet();
}
