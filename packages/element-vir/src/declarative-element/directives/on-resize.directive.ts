import {type MaybePromise} from '@augment-vir/common';
import {AsyncDirective, directive, type PartInfo} from '../../lit-exports/all-lit-exports.js';
import {assertIsElementPartInfo} from './directive-helpers.js';

/**
 * Callback called by the {@link onResize} directive.
 *
 * @category Internal
 */
export type OnResizeCallback = (
    size: Readonly<
        Pick<
            ResizeObserverEntry,
            /** Only these two properties are supported in all major modern browsers */
            'target' | 'contentRect'
        >
    >,
    element: Element,
) => MaybePromise<void>;

const directiveName = 'onResize';

/**
 * A directive that fires its listener any time the element that it's attached to is resized. This
 * uses the [built-in `ResizeObserver`
 * API](https://developer.mozilla.org/docs/Web/API/ResizeObserver), so it is very efficient.
 *
 * @category Directives
 * @example
 *
 * ```ts
 * import {html, defineElement, onResize} from 'element-vir';
 *
 * const MyElement = defineElement()({
 *     tagName: 'my-element',
 *     render() {
 *         return html`
 *             <div
 *                 ${onResize((size, element) => {
 *                     console.log('resized!', element, size);
 *                 })}
 *             >
 *                 Some div
 *             </div>
 *         `;
 *     },
 * });
 * ```
 */
export const onResize = directive(
    class extends AsyncDirective {
        public element: Element | undefined;
        public readonly resizeObserver = new ResizeObserver((entries) => {
            if (this.element && this.callback) {
                handleOnResizeCallback(this.element, this.callback, entries);
            }
        });
        public callback: OnResizeCallback | undefined;

        constructor(partInfo: PartInfo) {
            super(partInfo);

            assertIsElementPartInfo(partInfo, directiveName);
        }

        public override update(partInfo: PartInfo, [callback]: [OnResizeCallback]) {
            assertIsElementPartInfo(partInfo, directiveName);
            this.callback = callback;
            const newElement = partInfo.element;
            const oldElement = this.element;
            // if the element changes we need to observe the new one
            if (newElement !== oldElement) {
                this.element = newElement;
                this.resizeObserver.observe(newElement);
            }
            return this.render(callback);
        }

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        public render(callback: OnResizeCallback) {
            return undefined;
        }

        public override disconnected() {
            this.resizeObserver.disconnect();
        }

        public override reconnected() {
            if (this.element) {
                this.resizeObserver.observe(this.element);
            }
        }
    },
);

function handleOnResizeCallback(
    element: Element,
    callback: OnResizeCallback,
    entries: ResizeObserverEntry[],
) {
    const resizeEntry = entries[0];
    if (!resizeEntry) {
        console.error(entries);
        throw new Error('Resize observation triggered but the first entry was empty.');
    }
    void callback(
        {
            target: resizeEntry.target,
            contentRect: resizeEntry.contentRect,
        },
        element,
    );
}

/**
 * A function that attaches a
 * [`ResizeObserver`](https://developer.mozilla.org/docs/Web/API/ResizeObserver) to any given
 * element, so it is very efficient.
 *
 * @category Directives
 * @example
 *
 * ```ts
 * import {html, defineElement, attachOnResize} from 'element-vir';
 *
 * const MyElement = defineElement()({
 *     tagName: 'my-element',
 *     render({host}) {
 *         attachOnResize(host, (size, element) => {
 *             console.log('resized!', element, size);
 *         });
 *
 *         return '';
 *     },
 * });
 * ```
 */
export function attachOnResize(element: Element, callback: OnResizeCallback) {
    const resizeObserver = new ResizeObserver((entries) => {
        handleOnResizeCallback(element, callback, entries);
    });

    resizeObserver.observe(element);

    return {
        resizeObserver,
        element,
    };
}
