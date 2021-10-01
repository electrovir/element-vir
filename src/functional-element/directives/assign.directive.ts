import {noChange} from 'lit';
import {directive, Directive, PartInfo} from 'lit/directive.js';
import {ElementEvent} from '../element-events';
import {PropertyInitMapBase, StaticElementPropertyDescriptor} from '../element-properties';
import {FunctionalElementInstance} from '../functional-element';
import {extractFunctionalElement} from './directive-util';

/**
 * The directive generics (in listenDirective) are not strong enough to maintain their values. Thus,
 * the directive call is wrapped in this function.
 */
export function assign<PropName extends string, PropValue>(
    propertyDescriptor: StaticElementPropertyDescriptor<PropName, PropValue>,
    value: typeof propertyDescriptor['initValue'],
) {
    return assignDirective(propertyDescriptor.propName, value);
}

type ListenerMetaData<EventDetail> = {
    eventType: string;
    callback: (event: ElementEvent<string, EventDetail>) => void;
    listener: (event: any) => void;
};

const assignDirective = directive(
    class extends Directive {
        public readonly element: FunctionalElementInstance<PropertyInitMapBase>;
        public lastListenerMetaData: ListenerMetaData<any> | undefined;

        constructor(partInfo: PartInfo) {
            super(partInfo);

            this.element = extractFunctionalElement(partInfo, 'assign');
        }

        render(propName: string, value: unknown) {
            if (!(propName in this.element.instanceProps)) {
                throw new Error(
                    `${this.element.tagName} element has no property of name "${propName}"`,
                );
            }
            this.element.instanceProps[propName] = value;
            return noChange;
        }
    },
);
