import {typedHasProperties, typedHasProperty} from '@augment-vir/common';
import {DeclarativeElement} from './declarative-element';

export function isDeclarativeElement(input: unknown): input is DeclarativeElement {
    const markerProperties: ReadonlyArray<keyof DeclarativeElement> = [
        'instanceInputs',
        'instanceState',
        'definition',
    ];
    return typedHasProperties(input, markerProperties);
}

export function assertsIsDeclarativeElement(input: unknown): asserts input is DeclarativeElement {
    if (!isDeclarativeElement(input)) {
        console.error({notDeclarativeElement: input});
        throw new Error(
            `${
                typedHasProperty(input, 'tagName') ? input.tagName : input
            } is not a declarative element.`,
        );
    }
}
