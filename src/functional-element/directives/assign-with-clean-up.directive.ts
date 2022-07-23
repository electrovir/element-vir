import {noChange} from 'lit';
import {AsyncDirective} from 'lit/async-directive.js';
import {directive, PartInfo} from 'lit/directive.js';
import {PropertyInitMapBase, StaticElementPropertyDescriptor} from '../element-properties';
import {FunctionalElementInstanceFromInit} from '../functional-element';
import {extractFunctionalElement} from './directive-helpers';

/**
 * Assign values to elements but include a cleanup callback which gets called when a new value gets
 * assigned so the previous value can get cleaned up. Useful 3D graphics applications.
 */
export function assignWithCleanup<PropName extends string, PropValue>(
    propertyDescriptor: StaticElementPropertyDescriptor<PropName, PropValue>,
    value: typeof propertyDescriptor['initValue'],
    cleanupCallback: CleanupCallback<typeof propertyDescriptor['initValue']>,
    equalityCheckCallback: EqualityCheckCallback<typeof propertyDescriptor['initValue']> = (a, b) =>
        a === b,
) {
    /**
     * The directive generics (in listenDirective) are not strong enough to maintain their values.
     * Thus, the directive call is wrapped in this function.
     */
    return assignWithCleanupDirective(
        propertyDescriptor.propName,
        value,
        cleanupCallback,
        equalityCheckCallback,
    );
}

export type CleanupCallback<T> = (oldValue: T) => void;
export type EqualityCheckCallback<T> = (oldValue: T, newValue: T) => boolean;

class AssignWithCleanupDirectiveClass extends AsyncDirective {
    private readonly element: FunctionalElementInstanceFromInit<PropertyInitMapBase>;
    private lastValue: unknown;
    private lastCallback: CleanupCallback<any> | undefined;
    private hasBeenAssigned = false;

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
        if (!equalityCheck(this.lastValue, value) && this.hasBeenAssigned) {
            cleanupCallback(this.lastValue);
        }
        this.element.instanceProps[propName] = value;
        this.hasBeenAssigned = true;
        this.lastValue = value;
        this.lastCallback = cleanupCallback;
        return noChange;
    }
}

const assignWithCleanupDirective = directive(AssignWithCleanupDirectiveClass);
