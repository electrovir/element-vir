import {when} from 'lit/directives/when.js';

export function renderIf<T>(condition: boolean, result: T) {
    return when(condition, () => result);
}
