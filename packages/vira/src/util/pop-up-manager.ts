import {assert} from '@augment-vir/assert';
import {type MaybePromise, mapObjectValues} from '@augment-vir/common';
import {findOverflowAncestor} from '@augment-vir/web';
import {type Coords, NavActivateEvent, type NavController, NavDirection} from 'device-navigation';
import {listenToPageActivation} from 'page-active';
import {
    type ExtractEventByType,
    type ExtractEventTypes,
    type ListenOptions,
    ListenTarget,
    type RemoveListenerCallback,
    defineTypedCustomEvent,
    defineTypedEvent,
    listenToGlobal,
} from 'typed-event-target';

/**
 * A type used for representing a rectangle's position.
 *
 * @category Internal
 */
export type PositionRect = {
    top: number;
    left: number;
    right: number;
    bottom: number;
};

/**
 * The default empty {@link PositionRect}, with all values set to 0.
 *
 * @category Internal
 */
export const emptyPositionRect: PositionRect = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
};

/**
 * Options for {@link PopUpManager}.
 *
 * @category PopUp
 */
export type PopUpManagerOptions = {
    /**
     * The minimum number of pixels for allowing the pop-up to go downwards. If the downward
     * available space is less than this, and if the upwards available space is
     * `verticalDiffThreshold` more than the downwards space, the pop-up will be directed upwards.
     *
     * Equation:
     *
     *     const directUpwards =
     *         downwardsSpace < minDownSpace &&
     *         upwardsSpace > DownwardsSpace + verticalDiffThreshold;
     *
     * @default 200
     */
    minDownSpace: number;
    /**
     * The number of pixels required for the upwards available space to be bigger than the downwards
     * available space before directing the pop-up upwards.
     *
     * Equation:
     *
     *     const directUpwards =
     *         downwardsSpace < minDownSpace &&
     *         upwardsSpace > DownwardsSpace + verticalDiffThreshold;
     *
     * @default 20
     */
    verticalDiffThreshold: number;
    /**
     * Supports navigation of the pop up via the `device-navigation` package.
     *
     * @default true
     */
    supportNavigation: boolean;
};

/**
 * Output type from `PopUpManager.showPopUp`
 *
 * @category PopUp
 */
export type ShowPopUpResult = {
    /**
     * Indicates if the "pop up" should pop in the downwards direction or not. If not, it should pop
     * in the upwards direction. This is determined by how much space is available on either side of
     * the root element.
     */
    popDown: boolean;
    positions: Record<'root' | 'container' | 'diff', PositionRect>;
};

/**
 * An event fired from {@link PopUpManager} when the pop up should be hidden.
 *
 * @category PopUp
 */
export class HidePopUpEvent extends defineTypedEvent('hide-pop-up') {}
/**
 * An event fired from {@link PopUpManager} when an individual item in the pop up has been selected
 * by the user.
 *
 * @category PopUp
 */
export class NavSelectEvent extends defineTypedCustomEvent<Coords>()('nav-select') {}

/**
 * All events that can be emitted by {@link PopUpManager}.
 *
 * @category Internal
 */
export type PopUpManagerEvents = HidePopUpEvent | NavSelectEvent;

/**
 * A "pop up" manager for items that pop up from the HTML page, like dropdowns or menus.
 *
 * @category PopUp
 */
export class PopUpManager {
    private listenTarget = new ListenTarget<PopUpManagerEvents>();
    public options: PopUpManagerOptions = {
        minDownSpace: 200,
        verticalDiffThreshold: 20,
        supportNavigation: true,
    };
    private cleanupCallbacks: (() => void)[] = [];
    private lastRootElement: HTMLElement | undefined;

    constructor(
        public readonly navController: NavController,
        options?: Partial<PopUpManagerOptions> | undefined,
    ) {
        this.options = {...this.options, ...options};
    }

    private attachGlobalListeners(container: Element) {
        let firstFired = false;
        const resizeObserver = new ResizeObserver(() => {
            if (firstFired) {
                this.removePopUp();
            } else {
                firstFired = true;
            }
        });
        resizeObserver.observe(container);

        this.cleanupCallbacks = [
            () => {
                resizeObserver.disconnect();
            },
            listenToPageActivation(false, (isPageActive) => {
                if (!isPageActive) {
                    this.removePopUp();
                }
            }),
            this.navController.listen(NavActivateEvent, (event) => {
                if (event.detail.success) {
                    this.listenTarget.dispatch(new NavSelectEvent({detail: event.detail.coords}));
                    this.navController.currentNavEntry?.entry.focus(true);
                    event.stopImmediatePropagation();
                    event.preventDefault();
                }
            }),
            listenToGlobal(
                'mousedown',
                (event) => {
                    if (
                        this.lastRootElement &&
                        event.composedPath().includes(this.lastRootElement)
                    ) {
                        /** Ignore clicks that came from the pop up host itself. */
                        return;
                    }
                    this.removePopUp();
                },
                {passive: true},
            ),
            listenToGlobal('keydown', (event) => {
                const keyCode = event.code;

                if (keyCode === 'Escape') {
                    this.removePopUp();
                } else if (this.options.supportNavigation) {
                    if (keyCode === 'ArrowDown') {
                        event.stopImmediatePropagation();
                        event.preventDefault();

                        this.navController.navigate({
                            direction: NavDirection.Down,
                            allowWrapping: false,
                        });
                    } else if (keyCode === 'ArrowUp') {
                        event.stopImmediatePropagation();
                        event.preventDefault();

                        this.navController.navigate({
                            direction: NavDirection.Up,
                            allowWrapping: false,
                        });
                    } else if (keyCode === 'ArrowLeft') {
                        event.stopImmediatePropagation();
                        event.preventDefault();

                        this.navController.navigate({
                            direction: NavDirection.Left,
                            allowWrapping: false,
                        });
                    } else if (keyCode === 'ArrowRight') {
                        event.stopImmediatePropagation();
                        event.preventDefault();

                        this.navController.navigate({
                            direction: NavDirection.Right,
                            allowWrapping: false,
                        });
                    } else if (
                        (keyCode === 'Enter' || keyCode === 'Return' || keyCode === 'Space') &&
                        this.navController.enterInto({fallbackToActivate: true}).success
                    ) {
                        event.stopImmediatePropagation();
                        event.preventDefault();
                    }
                }
            }),
        ];
    }

    /** Listen to events emitted from a {@link PopUpManager} instance. */
    public listen<
        const EventDefinition extends Readonly<{
            type: ExtractEventTypes<PopUpManagerEvents>;
        }>,
    >(
        event: EventDefinition,
        listener: (
            event: ExtractEventByType<PopUpManagerEvents, EventDefinition['type']>,
        ) => MaybePromise<void>,
        options?: ListenOptions | undefined,
    ): RemoveListenerCallback {
        return this.listenTarget.listen(event, listener, options);
    }

    /** Trigger removal or hiding of the pop up. */
    public removePopUp() {
        this.cleanupCallbacks.forEach((callback) => callback());
        this.listenTarget.dispatch(new HidePopUpEvent());
    }

    /** Trigger showing the pop up. */
    public showPopUp(
        rootElement: HTMLElement,
        options?: Partial<PopUpManagerOptions> | undefined,
    ): ShowPopUpResult {
        this.lastRootElement = rootElement;
        const currentOptions = {...this.options, ...options};
        const container = findOverflowAncestor(rootElement);
        assert.instanceOf(container, HTMLElement);

        const rootRect = rootElement.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        const containerScrollbarWidth = container.offsetWidth - container.clientWidth;
        const containerScrollbarHeight = container.offsetHeight - container.clientHeight;

        const containerPosition: PositionRect =
            container === document.body
                ? {
                      top: 0,
                      left: 0,
                      right: containerRect.width,
                      bottom: containerRect.height,
                  }
                : {
                      top: containerRect.top,
                      left: containerRect.left,
                      right: containerRect.right - containerScrollbarWidth,
                      bottom: containerRect.bottom - containerScrollbarHeight,
                  };

        const rootPosition: PositionRect = mapObjectValues(emptyPositionRect, (key) => {
            return rootRect[key];
        });
        const diff: PositionRect = mapObjectValues(emptyPositionRect, (key) => {
            const containerDimension = containerPosition[key];
            const hostDimension = rootPosition[key];

            return Math.abs(containerDimension - hostDimension);
        });

        const useUp =
            diff.top > diff.bottom + currentOptions.verticalDiffThreshold &&
            diff.bottom < currentOptions.minDownSpace;

        this.attachGlobalListeners(container);

        return {
            popDown: !useUp,
            positions: {
                container: containerPosition,
                root: rootPosition,
                diff,
            },
        };
    }

    /**
     * Cleanup and destroy the {@link PopUpManager} instance. This:
     *
     * - Removes the existing pop up
     * - Cleans up all internal and external listeners
     */
    public destroy() {
        this.removePopUp();
        this.listenTarget.destroy();
    }
}
