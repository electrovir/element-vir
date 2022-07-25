import {noChange} from 'lit';
import {AsyncDirective} from 'lit/async-directive.js';
import {directive, PartInfo} from 'lit/directive.js';
import {FunctionalElement, FunctionalElementDefinition} from '../functional-element';
import {assignInputsObject} from './assign.directive';
import {extractFunctionalElement} from './directive-helpers';

export type CleanupCallback<T> = (oldValue: T) => void;

/**
 * Assign values but include a cleanup callback which gets called when a new value gets assigned so
 * the previous value can get cleaned up. An optional equality check callback can be provided. If it
 * is provided, the clean up callback will then only be called if the equality check callback
 * resolves to false (which indicates that the previous value and the new value are not equal).
 *
 * Example use case: 3D graphics applications with classes that setup buffers and the like.
 */
export function assignWithCleanup<FunctionalElementGeneric extends FunctionalElementDefinition>(
    functionalElement: FunctionalElementGeneric,
    propsObject: typeof functionalElement['init']['stateInit'],
    cleanupCallback: CleanupCallback<typeof functionalElement['init']['stateInit']>,
) {
    /**
     * The directive generics (in listenDirective) are not strong enough to maintain their values.
     * Thus, the directive call is wrapped in this function.
     */
    return assignWithCleanupDirective(propsObject, cleanupCallback);
}

class AssignWithCleanupDirectiveClass extends AsyncDirective {
    private readonly element: FunctionalElement;
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

    render(propsObject: Record<PropertyKey, unknown>, cleanupCallback: CleanupCallback<any>) {
        if (this.hasBeenAssigned) {
            cleanupCallback(this.lastValue);
        }
        assignInputsObject(this.element, propsObject);
        this.hasBeenAssigned = true;
        this.lastValue = propsObject;
        this.lastCallback = cleanupCallback;
        return noChange;
    }
}

const assignWithCleanupDirective = directive(AssignWithCleanupDirectiveClass);
