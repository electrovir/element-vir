import {noChange} from 'lit';
import {directive, Directive, PartInfo} from 'lit/directive.js';
import {PropertyInitMapBase} from '../element-properties';
import {FunctionalElement, FunctionalElementInstanceFromInit} from '../functional-element';
import {extractFunctionalElement} from './directive-helpers';

/** Assign an object matching an element's inputs to its inputs. */
export function assign<FunctionalElementGeneric extends FunctionalElement>(
    functionalElement: FunctionalElementGeneric,
    propsObject: typeof functionalElement['props'],
) {
    /**
     * The directive generics (in listenDirective) are not strong enough to maintain their values.
     * Thus, the directive call is wrapped in this function.
     */
    return assignDirective(functionalElement, propsObject);
}

const assignDirective = directive(
    class extends Directive {
        public readonly element: FunctionalElementInstanceFromInit<PropertyInitMapBase>;

        constructor(partInfo: PartInfo) {
            super(partInfo);

            this.element = extractFunctionalElement(partInfo, 'assign');
        }

        render(functionalElement: FunctionalElement, propsObject: Record<PropertyKey, unknown>) {
            Object.keys(propsObject).forEach((key) => {
                if (this.element.instanceProps.hasOwnProperty()) {
                }
                const value = propsObject[key];
                this.element.instanceProps[key] = value;
            });
            return noChange;
        }
    },
);
