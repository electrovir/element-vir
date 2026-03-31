import {render as litRender, type RootPart} from 'lit-html';
import {
    AsyncDirective,
    type ChildPart,
    clearPart,
    directive,
    type DirectiveResult,
    getCommittedValue,
    insertPart,
    nothing,
    type PartInfo,
    setCommittedValue,
} from '../../lit-exports/all-lit-exports.js';

class KeyedCacheDirective extends AsyncDirective {
    private readonly cache = new Map<unknown, RootPart>();
    private currentKey: unknown = nothing;

    constructor(partInfo: PartInfo) {
        super(partInfo);
    }

    public render(_key: unknown, value: unknown) {
        /**
         * Return an array of the value to induce lit-html to create a ChildPart for the value that
         * we can move into the cache.
         */
        return [value];
    }

    public override update(
        containerPart: ChildPart,
        [
            key,
            value,
        ]: [
            unknown,
            unknown,
        ],
    ) {
        if (key !== this.currentKey) {
            /** Cache the current DOM if we have an active key. */
            if (this.currentKey !== nothing) {
                const partValue = getCommittedValue(containerPart) as ChildPart[];
                const childPart = partValue.pop();
                const existingCachedPart = this.cache.get(this.currentKey);

                if (existingCachedPart == undefined) {
                    const fragment = document.createDocumentFragment();
                    const cachedContainerPart = litRender(nothing, fragment);
                    cachedContainerPart.setConnected(false);
                    setCommittedValue(cachedContainerPart, [childPart]);
                    insertPart(cachedContainerPart, undefined, childPart);
                    this.cache.set(this.currentKey, cachedContainerPart);
                } else {
                    setCommittedValue(existingCachedPart, [childPart]);
                    insertPart(existingCachedPart, undefined, childPart);
                }
            }

            /** Restore cached DOM for the new key if it exists. */
            const cachedPart = this.cache.get(key);

            if (cachedPart != undefined) {
                const partValue = getCommittedValue(cachedPart) as ChildPart[];
                const cachedChild = partValue.pop();
                clearPart(containerPart);
                insertPart(containerPart, undefined, cachedChild);
                setCommittedValue(containerPart, [cachedChild]);
            }

            this.currentKey = key;
        }

        return this.render(key, value);
    }

    public override disconnected() {
        this.clearCache();
    }

    public override reconnected() {
        /**
         * Nothing to restore — the active key's DOM is still live in the container part. Cached
         * entries were cleared on disconnect, so they'll be rebuilt on future key switches.
         */
    }

    protected clearCache() {
        for (const cachedPart of this.cache.values()) {
            cachedPart.setConnected(false);
        }
        this.cache.clear();
    }
}

/**
 * Caches rendered DOM by a user-provided key. When the key changes, the current DOM is stored and
 * the previously cached DOM for the new key is restored (if any). This preserves DOM state (such as
 * typed input values) across key switches.
 *
 * Unlike `cache`, which distinguishes templates by their structure, `keyedCache` distinguishes them
 * by an arbitrary key, allowing multiple instances of the same template to maintain independent DOM
 * state.
 *
 * Note: cached DOM is stored in a `Map` keyed by the provided key. Entries are not automatically
 * garbage collected, so avoid using dynamically generated keys that are never reused.
 *
 * @category Directives
 * @example
 *
 * ```ts
 * import {html, defineElement, keyedCache} from 'element-vir';
 *
 * const MyElement = defineElement()({
 *     tagName: 'my-element',
 *     stateInit: {
 *         activeTab: 'tab-a',
 *     },
 *     render({state}) {
 *         return html`
 *             <div>
 *                 ${keyedCache(
 *                     state.activeTab,
 *                     html`
 *                         <input placeholder="Type here..." />
 *                     `,
 *                 )}
 *             </div>
 *         `;
 *     },
 * });
 * ```
 */
export const keyedCache: (
    key: unknown,
    value: unknown,
) => DirectiveResult<typeof KeyedCacheDirective> = directive(KeyedCacheDirective);

export type {KeyedCacheDirective};
