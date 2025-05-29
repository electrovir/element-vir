import {type MaybePromise} from '@augment-vir/common';
import {directive, Directive, type PartInfo} from '../../lit-exports/all-lit-exports.js';
import {assertIsElementPartInfo} from './directive-helpers.js';

/**
 * The callback / listener passed to {@link onDomRendered}. The `element` parameter is a reference to
 * the DOM element that the directive was attached to.
 *
 * @category Internal
 */
export type OnDomRenderedCallback = (element: Element) => MaybePromise<void>;

const directiveName = 'onDomRendered';

/**
 * A directive that fires its listener each time the element that it's attached to is rendered.
 *
 * @category Directives
 * @example
 *
 * ```ts
 * import {html, defineElement, onDomRendered} from 'element-vir';
 *
 * const MyElement = defineElement()({
 *     tagName: 'my-element',
 *     render() {
 *         return html`
 *             <div
 *                 ${onDomRendered((element) => {
 *                     console.log('rendered!', element);
 *                 })}
 *             >
 *                 Some div
 *             </div>
 *         `;
 *     },
 * });
 * ```
 */
export const onDomRendered = directive(
    class extends Directive {
        constructor(partInfo: PartInfo) {
            super(partInfo);

            assertIsElementPartInfo(partInfo, directiveName);
        }

        public override update(partInfo: PartInfo, [callback]: [OnDomRenderedCallback]) {
            assertIsElementPartInfo(partInfo, directiveName);
            const element = partInfo.element;
            // use `requestAnimationFrame` here so it can fire property changes outside of a render loop
            window.requestAnimationFrame(() => callback(element));
            return this.render(callback);
        }

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        public render(callback: OnDomRenderedCallback) {
            return undefined;
        }
    },
);
