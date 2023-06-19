import {typedHasProperties, typedHasProperty} from '@augment-vir/common';
import {DeclarativeElement} from './declarative-element';

/**
 * Checks if the input is an instance of a DeclarativeElement, the super class of all custom
 * elements defined with element-vir.
 */
export function isDeclarativeElement(input: unknown): input is DeclarativeElement {
    const markerProperties: ReadonlyArray<keyof DeclarativeElement> = [
        'instanceInputs',
        'instanceState',
        'definition',
    ];
    return typedHasProperties(input, markerProperties);
}
/**
 * Checks if the input is an instance of a DeclarativeElement, the super class of all custom
 * elements defined with element-vir.
 */
export function assertIsDeclarativeElement(input: unknown): asserts input is DeclarativeElement {
    if (!isDeclarativeElement(input)) {
        console.error({notDeclarativeElement: input});
        throw new Error(
            `${
                typedHasProperty(input, 'tagName') ? input.tagName : input
            } is not a declarative element.`,
        );
    }
}
