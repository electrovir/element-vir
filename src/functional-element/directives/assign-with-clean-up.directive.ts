import {noChange} from 'lit';
import {directive, Directive, PartInfo} from 'lit/directive.js';
import {PropertyInitMapBase, StaticElementPropertyDescriptor} from '../element-properties';
import {FunctionalElementInstance} from '../functional-element';
import {extractFunctionalElement} from './directive-util';

/**
 * The directive generics (in listenDirective) are not strong enough to maintain their values. Thus,
 * the directive call is wrapped in this function.
 */
export function assignWithCleanup<PropName extends string, PropValue>(
    propertyDescriptor: StaticElementPropertyDescriptor<PropName, PropValue>,
    value: typeof propertyDescriptor['initValue'],
    cleanupCallback: CleanupCallback<typeof propertyDescriptor['initValue']>,
) {
    return assignWithCleanupDirective(propertyDescriptor.propName, value, cleanupCallback);
}

export type CleanupCallback<T> = (oldValue: T) => void;

const assignWithCleanupDirective = directive(
    class extends Directive {
        public readonly element: FunctionalElementInstance<PropertyInitMapBase>;
        public lastValue: unknown;

        constructor(partInfo: PartInfo) {
            super(partInfo);

            this.element = extractFunctionalElement(partInfo, 'assign');
        }

        render(propName: string, value: unknown, cleanupCallback: CleanupCallback<any>) {
            if (!(propName in this.element.instanceProps)) {
                throw new Error(
                    `${this.element.tagName} element has no property of name "${propName}"`,
                );
            }
            // reference equality check!
            if (this.lastValue !== value) {
                cleanupCallback(this.lastValue);
            }
            this.element.instanceProps[propName] = value;
            this.lastValue = value;
            return noChange;
        }
    },
);
