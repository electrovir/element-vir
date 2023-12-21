import {when} from '../../lit-exports';

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
