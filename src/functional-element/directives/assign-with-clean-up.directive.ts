import {noChange} from 'lit';
import {AsyncDirective} from 'lit/async-directive.js';
import {directive, PartInfo} from 'lit/directive.js';
import {PropertyInitMapBase, StaticElementPropertyDescriptor} from '../element-properties';
import {FunctionalElementInstanceFromInit} from '../functional-element';
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
export type EqualityCheckCallback<T> = (oldValue: T, newValue: T) => boolean;

class AssignWithCleanupDirectiveClass extends AsyncDirective {
    private readonly element: FunctionalElementInstanceFromInit<PropertyInitMapBase>;
    private lastValue: unknown;
    private lastCallback: CleanupCallback<any> | undefined;

    constructor(partInfo: PartInfo) {
        super(partInfo);
        this.element = extractFunctionalElement(partInfo, 'assign');
    }

    override disconnected() {
        if (this.lastValue != undefined && this.lastCallback != undefined) {
            this.lastCallback(this.lastValue);
        }
    }

    render(
        propName: string,
        value: unknown,
        cleanupCallback: CleanupCallback<any>,
        equalityCheck: EqualityCheckCallback<any> = (a, b) => a === b,
    ) {
        if (!(propName in this.element.instanceProps)) {
            throw new Error(
                `${this.element.tagName} element has no property of name "${propName}"`,
            );
        }
        // reference equality check!
        if (!equalityCheck(this.lastValue, value)) {
            cleanupCallback(this.lastValue);
        }
        this.element.instanceProps[propName] = value;
        this.lastValue = value;
        this.lastCallback = cleanupCallback;
        return noChange;
    }
}

const assignWithCleanupDirective = directive(AssignWithCleanupDirectiveClass);
