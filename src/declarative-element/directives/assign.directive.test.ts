import {noChange} from 'lit';
import {directive, Directive, PartInfo} from 'lit/directive.js';
import {DeclarativeElement} from '../declarative-element';
import {StaticElementPropertyDescriptor} from '../element-properties';
import {extractDeclarativeElement} from './directive-helpers';

/** Assign an object to an element's inputs. */
export function assign<PropName extends string, PropValue>(
    propertyDescriptor: StaticElementPropertyDescriptor<PropName, PropValue>,
    value: typeof propertyDescriptor['initValue'],
) {
    /**
     * The directive generics (in listenDirective) are not strong enough to maintain their values.
     * Thus, the directive call is wrapped in this function.
     */
    return assignDirective(propertyDescriptor.propName, value);
}

const assignDirective = directive(
    class extends Directive {
        public readonly element: DeclarativeElement;

        constructor(partInfo: PartInfo) {
            super(partInfo);

            this.element = extractDeclarativeElement(partInfo, 'assign');
        }

        render(propName: string, value: unknown) {
            if (!(propName in this.element.instanceState)) {
                throw new Error(
                    `${this.element.tagName} element has no property of name "${propName}"`,
                );
            }
            this.element.instanceState[propName] = value;
            return noChange;
        }
    },
);
