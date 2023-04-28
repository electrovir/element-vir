import {AnyFunction} from '@augment-vir/common';
import {css} from 'lit';
import {defineElement, html} from '../..';

export type GenericChildInputs<T> = {
    entries: ReadonlyArray<T>;
    createEntryTemplate: (entry: T) => unknown;
};

export function defineElementInputs<T>(input: GenericChildInputs<T>): GenericChildInputs<T> {
    return input;
}

const output = defineElement(defineElementInputs);

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

GenericChildElement.defineInputs({
    entries: [] as string[],
    createEntryTemplate(entry) {},
});

function withTransformer<InputFunction extends AnyFunction>(inputFunction: InputFunction) {
    return () => ({inputFunction});
}

const transformer = withTransformer(defineElementInputs);

transformer().inputFunction({
    entries: [] as string[],
    createEntryTemplate(entry) {},
});
