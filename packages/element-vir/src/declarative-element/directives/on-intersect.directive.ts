import {assert, assertWrap, check} from '@augment-vir/assert';
import {type MaybePromise} from '@augment-vir/common';
import {AsyncDirective, directive, type PartInfo} from '../../lit-exports/all-lit-exports.js';
import {assertIsElementPartInfo} from './directive-helpers.js';

const directiveName = 'onIntersect';

/**
 * Callback called by the {@link onIntersect} directive.
 *
 * @category Internal
 */
export type OnIntersectCallback = (params: {
    entry: IntersectionObserverEntry;
    allEntries: IntersectionObserverEntry[];
    observer: IntersectionObserver;
    element: Element;
}) => MaybePromise<void>;

/**
 * Options used for the {@link onIntersect} directive.
 *
 * @category Internal
 */
export type OnIntersectOptions = IntersectionObserverInit;

/**
 * A directive that fires its listener any time the element's configured "intersection" is crossed.
 * This is commonly use for detecting when an element has scrolled into view. This uses the
 * [built-in `IntersectionObserver`
 * API](https://developer.mozilla.org/docs/Web/API/IntersectionObserver/IntersectionObserver), so it
 * is very efficient.
 *
 * @category Directives
 * @example
 *
 * ```ts
 * import {html, defineElement, onIntersect} from 'element-vir';
 *
 * const MyElement = defineElement()({
 *     tagName: 'my-element',
 *     render() {
 *         return html`
 *             <div
 *                 ${onIntersect({threshold: 1}, ({element, entry}) => {
 *                     if (entry.isIntersecting) {
 *                         console.log('is intersecting!');
 *                     } else {
 *                         console.log('is not intersecting');
 *                     }
 *                 })}
 *             >
 *                 Some div
 *             </div>
 *         `;
 *     },
 * });
 * ```
 */
export const onIntersect = directive(
    class extends AsyncDirective {
        public element: Element | undefined;
        public options: OnIntersectOptions | undefined;
        public intersectionObserver: undefined | IntersectionObserver;
        public callback: OnIntersectCallback | undefined;

        constructor(partInfo: PartInfo) {
            super(partInfo);

            assertIsElementPartInfo(partInfo, directiveName);
        }

        public fireCallback(entries: IntersectionObserverEntry[], observer: IntersectionObserver) {
            assert.isLengthAtLeast(entries, 1);

            void this.callback?.({
                element: assertWrap.isDefined(this.element),
                allEntries: entries,
                observer,
                entry: entries[0],
            });
        }

        public override update(
            partInfo: PartInfo,
            [
                options,
                callback,
            ]: [
                OnIntersectOptions,
                OnIntersectCallback,
            ],
        ) {
            assertIsElementPartInfo(partInfo, directiveName);
            this.callback = callback;
            let needsObserving = false;

            const newOptions = options;
            const oldOptions = this.options;
            if (
                !this.intersectionObserver ||
                !oldOptions ||
                !check.entriesEqual(newOptions, oldOptions)
            ) {
                this.options = options;
                this.intersectionObserver?.disconnect();

                this.intersectionObserver = new IntersectionObserver(
                    (entries, observer) => this.fireCallback(entries, observer),
                    options,
                );

                needsObserving = true;
            }

            const newElement = partInfo.element;
            const oldElement = this.element;
            // if the element changes we need to observe the new one
            if (newElement !== oldElement) {
                this.element = newElement;
                needsObserving = true;
            }

            if (needsObserving) {
                this.intersectionObserver.observe(newElement);
            }

            return this.render(options, callback);
        }

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        public render(options: OnIntersectOptions, callback: OnIntersectCallback) {
            return undefined;
        }

        public override disconnected() {
            this.intersectionObserver?.disconnect();
        }

        public override reconnected() {
            if (this.element && this.intersectionObserver) {
                this.intersectionObserver.observe(this.element);
            }
        }
    },
);
