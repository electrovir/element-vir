import {when} from 'lit/directives/when.js';

const notSetSymbol = Symbol('not set');

export function renderIf<TrueCondition = unknown, FalseCondition = undefined>(
    condition: boolean,
    ifTrue: TrueCondition,
    ifFalse?: FalseCondition,
): TrueCondition | FalseCondition {
    return when(
        condition,
        () => ifTrue,
        () => ifFalse,
    ) as TrueCondition | FalseCondition;
}
