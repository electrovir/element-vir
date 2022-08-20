import {noChange} from 'lit';
import {directive, Directive, PartInfo} from 'lit/directive.js';
import {DeclarativeElement, DeclarativeElementDefinition} from '../declarative-element';
import {extractDeclarativeElement} from './directive-helpers';

/** Assign an object matching an element's inputs to its inputs. */
export function assign<DeclarativeElementGeneric extends DeclarativeElementDefinition>(
    declarativeElement: DeclarativeElementGeneric,
    propsObject: typeof declarativeElement['init']['stateInit'],
) {
    /**
     * The directive generics (in listenDirective) are not strong enough to maintain their values.
     * Thus, the directive call is wrapped in this function.
     */
    return assignDirective(propsObject);
}

const assignDirective = directive(
    class extends Directive {
        public readonly element: DeclarativeElement;

        constructor(partInfo: PartInfo) {
            super(partInfo);

            this.element = extractDeclarativeElement(partInfo, 'assign');
        }

        render(propsObject: Record<PropertyKey, unknown>) {
            assignInputsObject(this.element, propsObject);
            return noChange;
        }
    },
);

export function assignInputsObject<DeclarativeElementGeneric extends DeclarativeElement>(
    element: DeclarativeElementGeneric,
    assignmentObject: typeof element['creator']['init']['stateInit'],
) {
    Object.keys(assignmentObject).forEach((key) => {
        element.markInputsAsHavingBeenSet();
        const value = assignmentObject[key];
        element.instanceProps[key] = value;
    });
}
