import {type AnyDuration, convertDuration} from 'date-vir';
import {css, html, type HtmlInterpolation, onDomCreated} from 'element-vir';
import {defineBookElement} from '../../define-book-element.js';

/** Debounce time in milliseconds before rendering an entry that becomes visible. */
const visibilityDebounce: AnyDuration = {
    milliseconds: 10,
};

/**
 * Shared IntersectionObserver instance for all BookLazyEntry elements. Using a single observer is
 * more performant than creating one per element.
 */
let sharedObserver: IntersectionObserver | undefined;

/** Map of observed elements to their callbacks. */
const observedElements = new Map<Element, () => void>();

/** Map of elements to their debounce timeout IDs. */
const debounceTimeouts = new Map<Element, ReturnType<typeof globalThis.setTimeout>>();

function getSharedObserver(): IntersectionObserver {
    if (!sharedObserver) {
        sharedObserver = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    const element = entry.target;
                    const callback = observedElements.get(element);

                    if (!callback) {
                        continue;
                    }

                    if (entry.isIntersecting) {
                        // Element became visible - start debounce timer
                        if (!debounceTimeouts.has(element)) {
                            const timeoutId = globalThis.setTimeout(
                                () => {
                                    debounceTimeouts.delete(element);
                                    callback();
                                    // Stop observing after rendering
                                    sharedObserver?.unobserve(element);
                                    observedElements.delete(element);
                                },
                                convertDuration(visibilityDebounce, {
                                    milliseconds: true,
                                }).milliseconds,
                            );
                            debounceTimeouts.set(element, timeoutId);
                        }
                    } else {
                        // Element left viewport - cancel debounce if pending
                        const existingTimeout = debounceTimeouts.get(element);
                        if (existingTimeout) {
                            clearTimeout(existingTimeout);
                            debounceTimeouts.delete(element);
                        }
                    }
                }
            },
            {
                /** Use a small margin to start loading slightly before the element is visible. */
                rootMargin: '100px',
            },
        );
    }
    return sharedObserver;
}

function unobserveElement(element: Element): void {
    const timeout = debounceTimeouts.get(element);
    if (timeout) {
        clearTimeout(timeout);
        debounceTimeouts.delete(element);
    }
    observedElements.delete(element);
    sharedObserver?.unobserve(element);
}

export const BookLazyEntry = defineBookElement<{
    /**
     * The content to lazily render. This cannot be rendered via a `<slot>` because then they won't
     * be lazily rendered.
     */
    content: HtmlInterpolation;
}>()({
    tagName: 'book-lazy-entry',
    state() {
        return {
            /** Whether the content has been rendered (and should stay rendered). */
            hasRendered: false,
            /** Reference to the placeholder element for cleanup. */
            placeholderElement: undefined as Element | undefined,
        };
    },
    styles: css`
        :host {
            display: contents;
        }

        .placeholder {
            /* Minimum height to ensure the placeholder is observable */
            min-height: 50px;
            display: block;
        }
    `,
    cleanup({state}) {
        if (state.placeholderElement) {
            unobserveElement(state.placeholderElement);
        }
    },
    render({inputs, state, updateState}) {
        if (state.hasRendered) {
            return inputs.content;
        }

        return html`
            <div
                class="placeholder"
                ${onDomCreated((element) => {
                    // Clean up previous observation if any
                    if (state.placeholderElement) {
                        unobserveElement(state.placeholderElement);
                    }

                    updateState({placeholderElement: element});

                    observedElements.set(element, () => {
                        updateState({hasRendered: true});
                    });
                    getSharedObserver().observe(element);
                })}
            >
                &nbsp;
            </div>
        `;
    },
});
