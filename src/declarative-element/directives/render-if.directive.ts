import {when} from 'lit/directives/when.js';

export function renderIf(condition: boolean, ifTrue: unknown, ifFalse?: unknown) {
    return when(
        condition,
        () => ifTrue,
        () => ifFalse,
    );
}
