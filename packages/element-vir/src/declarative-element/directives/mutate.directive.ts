import {assertWrap} from '@augment-vir/assert';
import {directive, Directive, noChange, type PartInfo} from '../../lit-exports/all-lit-exports.js';
import {extractElement} from './directive-helpers.js';

/**
 * Parameters for the callback given to the {@link mutate} directive.
 *
 * @category Internal
 */
export type MutateDirectiveParams<Params extends any[] = []> = {
    directive: Directive;
    element: HTMLElement;
    params: Params;
};

/**
 * A directive that allows arbitrary modifications to be made to the element that it's attached to.
 *
 * @category Directives
 */
export const mutate = directive(
    class extends Directive {
        public readonly element: HTMLElement;
        public lastKey: string | undefined;

        constructor(partInfo: PartInfo) {
            super(partInfo);

            this.element = assertWrap.instanceOf(
                extractElement(partInfo, 'modifyElement'),
                HTMLElement,
            );
        }

        public render(callback: (params: Omit<MutateDirectiveParams, 'params'>) => void) {
            callback({
                directive: this,
                element: this.element,
            });
            return noChange;
        }
    },
);

/**
 * A helper for making new directives.
 *
 * @category Internal
 */
export function createMutateDirective<Params extends any[]>(
    directiveName: string,
    callback: (this: void, params: MutateDirectiveParams<Params>) => void,
) {
    return directive(
        class extends Directive {
            public readonly element: HTMLElement;

            constructor(partInfo: PartInfo) {
                super(partInfo);

                this.element = assertWrap.instanceOf(
                    extractElement(partInfo, directiveName),
                    HTMLElement,
                );
            }

            public render(...params: Params) {
                callback({
                    params: params,
                    directive: this,
                    element: this.element,
                });

                return noChange;
            }
        },
    );
}
