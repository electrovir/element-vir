import {wrapDefineElement} from 'element-vir';

export const ViraTagNamePrefix = `vira-`;
export type ViraTagName = `${typeof ViraTagNamePrefix}${string}`;

export const {defineElement: defineViraElement, defineElementNoInputs: defineViraElementNoInputs} =
    wrapDefineElement<ViraTagName>({
        assertInputs: (inputs) => {
            if (!inputs.tagName.startsWith(ViraTagNamePrefix)) {
                throw new Error(
                    `Tag name should start with '${ViraTagNamePrefix}' but got '${inputs.tagName}'`,
                );
            }
        },
    });
