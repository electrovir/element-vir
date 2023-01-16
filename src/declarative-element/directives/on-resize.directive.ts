import {directive, Directive, PartInfo} from 'lit/directive.js';
import {assertIsElementPartInfo} from './directive-helpers';

export type OnResizeCallback = (
    /** Only these two properties are supported in all major modern browsers */
    entry: Readonly<Pick<ResizeObserverEntry, 'target' | 'contentRect'>>,
) => void;

const directiveName = 'onResize';

export const onResize = directive(
    class extends Directive {
        element: Element | undefined;
        readonly resizeObserver = new ResizeObserver((entries) => this.fireCallback(entries));
        callback: OnResizeCallback | undefined;

        constructor(partInfo: PartInfo) {
            super(partInfo);

            assertIsElementPartInfo(partInfo, directiveName);
        }

        fireCallback(entries: ResizeObserverEntry[]) {
            const resizeEntry = entries[0];
            if (!resizeEntry) {
                console.error(entries);
                throw new Error(
                    `${directiveName} observation triggered but the first entry was empty.`,
                );
            }
            this.callback?.({target: resizeEntry.target, contentRect: resizeEntry.contentRect});
        }

        override update(partInfo: PartInfo, [callback]: [OnResizeCallback]) {
            assertIsElementPartInfo(partInfo, directiveName);
            this.callback = callback;
            const newElement = partInfo.element;
            // if the element changes we need to observe the new one
            if (newElement !== this.element) {
                if (this.element) {
                    this.resizeObserver.unobserve(this.element);
                }
                this.resizeObserver.observe(newElement);
                this.element = newElement;
            }
            return this.render(callback);
        }

        render(callback: OnResizeCallback) {
            return undefined;
        }
    },
);
