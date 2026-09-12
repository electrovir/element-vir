import {wrapDefineElement} from '../index.js';

export type VirTagName = `vir-${string}`;

export const defineVirElement = wrapDefineElement<VirTagName>();

// add an optional assert callback
export const defineVerifiedVirElement = wrapDefineElement<VirTagName>({
    assertInputs(inputs) {
        if (!inputs.tagName.startsWith('vir-')) {
            throw new Error('all custom elements must start with "vir-"');
        }
    },
});

/**
 * Add an optional transform callback. A transform must leave `tagName` alone: every event type,
 * host class, CSS var, slot name, and test id is derived from the original tag name.
 */
export const defineTransformedVirElement = wrapDefineElement<VirTagName>({
    transformInputs(inputs) {
        return {
            ...inputs,
            tagName: inputs.tagName.startsWith('vir-') ? inputs.tagName : `vir-${inputs.tagName}`,
            options: {
                ...inputs.options,
                errorHandler(error) {
                    console.error(`'${inputs.tagName}' failed to render`, error);
                },
            },
        };
    },
});
