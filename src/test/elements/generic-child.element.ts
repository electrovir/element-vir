import {css} from 'lit';
import {defineElement, html} from '../..';

export type GenericChildInputs<T> = {
    entries: ReadonlyArray<T>;
    createEntryTemplate: (entry: T) => unknown;
};

export function defineElementInputs<T>(input: GenericChildInputs<T>): GenericChildInputs<T> {
    return input;
}

export const GenericChildElement = defineElement(defineElementInputs)({
    tagName: 'element-vir-generic-child',
    styles: css`
        :host {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }
    `,
    renderCallback: ({state, inputs, dispatch, updateState, events}) => {
        return html`
            ${inputs.entries.length}
        `;
    },
});
