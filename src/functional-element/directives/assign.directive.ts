import {noChange} from 'lit';
import {directive, Directive, PartInfo} from 'lit/directive.js';
import {FunctionalElement, FunctionalElementDefinition} from '../functional-element';
import {extractFunctionalElement} from './directive-helpers';

/** Assign an object matching an element's inputs to its inputs. */
export function assign<FunctionalElementGeneric extends FunctionalElementDefinition>(
    functionalElement: FunctionalElementGeneric,
    propsObject: typeof functionalElement['init']['stateInit'],
) {
    /**
     * The directive generics (in listenDirective) are not strong enough to maintain their values.
     * Thus, the directive call is wrapped in this function.
     */
    return assignDirective(propsObject);
}

const assignDirective = directive(
    class extends Directive {
        public readonly element: FunctionalElement;

        constructor(partInfo: PartInfo) {
            super(partInfo);

            this.element = extractFunctionalElement(partInfo, 'assign');
        }

        render(propsObject: Record<PropertyKey, unknown>) {
            assignInputsObject(this.element, propsObject);
            return noChange;
        }
    },
);

export function assignInputsObject<FunctionalElementGeneric extends FunctionalElement>(
    element: FunctionalElementGeneric,
    assignmentObject: typeof element['creator']['init']['stateInit'],
) {
    Object.keys(assignmentObject).forEach((key) => {
        element.markInputsAsHavingBeenSet();
        const value = assignmentObject[key];
        element.instanceProps[key] = value;
    });
}
