import {type BookPage} from 'element-book';
import {asyncPropEqualityCheckTest} from '../e2e-tests/async-prop-equality-check.book.js';
import {asyncPropForceUpdateTest} from '../e2e-tests/async-prop-force-update.book.js';
import {asyncPropSetParamsTest} from '../e2e-tests/async-prop-set-params.book.js';
import {asyncPropTest} from '../e2e-tests/async-prop.book.js';
import {attributesDirectiveTest} from '../e2e-tests/attributes-directive.book.js';
import {createAttributeDirectiveTest} from '../e2e-tests/create-attribute-directive.book.js';
import {cssElementInterpolationTest} from '../e2e-tests/css-element-interpolation.book.js';
import {cssVarOverrideTest} from '../e2e-tests/css-var-override.book.js';
import {cssVarsTest} from '../e2e-tests/css-vars.book.js';
import {deepNestingTest} from '../e2e-tests/deep-nesting.book.js';
import {detachReattachTest} from '../e2e-tests/detach-reattach.book.js';
import {eventsTest} from '../e2e-tests/events.book.js';
import {hostAccessTest} from '../e2e-tests/host-access.book.js';
import {hostClassStylesTest} from '../e2e-tests/host-class-styles.book.js';
import {hostClassesTest} from '../e2e-tests/host-classes.book.js';
import {inputTypesTest} from '../e2e-tests/input-types.book.js';
import {inputsTest} from '../e2e-tests/inputs.book.js';
import {keyedCacheDifferentElementsTest} from '../e2e-tests/keyed-cache-different-elements.book.js';
import {keyedCacheTest} from '../e2e-tests/keyed-cache.book.js';
import {lifecycleTest} from '../e2e-tests/lifecycle.book.js';
import {listenToActivateTest} from '../e2e-tests/listen-to-activate.book.js';
import {listenToEnterTest} from '../e2e-tests/listen-to-enter.book.js';
import {litBindingsTest} from '../e2e-tests/lit-bindings.book.js';
import {multipleInstancesTest} from '../e2e-tests/multiple-instances.book.js';
import {multipleSlotsTest} from '../e2e-tests/multiple-slots.book.js';
import {mutateDirectiveTest} from '../e2e-tests/mutate-directive.book.js';
import {nestedTemplatesTest} from '../e2e-tests/nested-templates.book.js';
import {observablePropsTest} from '../e2e-tests/observable-props.book.js';
import {onDomCreatedTest} from '../e2e-tests/on-dom-created.book.js';
import {onIntersectTest} from '../e2e-tests/on-intersect.book.js';
import {onResizeTest} from '../e2e-tests/on-resize.book.js';
import {polymorphicListenTest} from '../e2e-tests/polymorphic-listen.book.js';
import {renderAsyncErrorTest} from '../e2e-tests/render-async-error.book.js';
import {renderAsyncLastResolvedTest} from '../e2e-tests/render-async-last-resolved.book.js';
import {renderAsyncRawPromiseTest} from '../e2e-tests/render-async-raw-promise.book.js';
import {renderIfTest} from '../e2e-tests/render-if.book.js';
import {sequentialInputTest} from '../e2e-tests/sequential-input.book.js';
import {shadowDomIsolationTest} from '../e2e-tests/shadow-dom-isolation.book.js';
import {slotNamesTest} from '../e2e-tests/slot-names.book.js';
import {stateBatchingTest} from '../e2e-tests/state-batching.book.js';
import {stateSurvivesReRenderTest} from '../e2e-tests/state-survives-re-render.book.js';
import {stateUpdatesTest} from '../e2e-tests/state-updates.book.js';
import {tagNameInterpolationTest} from '../e2e-tests/tag-name-interpolation.book.js';
import {templateCachingTest} from '../e2e-tests/template-caching.book.js';
import {testIdTest} from '../e2e-tests/test-id.book.js';
import {loadTest} from '../e2e-tests/test-loads.book.js';
import {typedEventBubbleTest} from '../e2e-tests/typed-event-bubble.book.js';
import {typedEventsStandaloneTest} from '../e2e-tests/typed-events-standalone.book.js';
import {undefinedInterpolationTest} from '../e2e-tests/undefined-interpolation.book.js';
import {unsafeContentTest} from '../e2e-tests/unsafe-content.book.js';
import {wrapDefineElementTest} from '../e2e-tests/wrap-define-element.book.js';
import {e2eTestsBookPage} from '../test-util.js';

export const allTestPages: BookPage[] = [
    e2eTestsBookPage,
    loadTest,
    stateUpdatesTest,
    inputsTest,
    eventsTest,
    testIdTest,
    hostClassesTest,
    cssVarsTest,
    keyedCacheTest,
    multipleSlotsTest,
    observablePropsTest,
    undefinedInterpolationTest,
    renderIfTest,
    attributesDirectiveTest,
    onDomCreatedTest,
    asyncPropTest,
    lifecycleTest,
    listenToActivateTest,
    onResizeTest,
    onIntersectTest,
    slotNamesTest,
    tagNameInterpolationTest,
    shadowDomIsolationTest,
    hostAccessTest,
    wrapDefineElementTest,
    sequentialInputTest,
    stateSurvivesReRenderTest,
    inputTypesTest,
    litBindingsTest,
    unsafeContentTest,
    renderAsyncErrorTest,
    renderAsyncLastResolvedTest,
    asyncPropForceUpdateTest,
    cssVarOverrideTest,
    hostClassStylesTest,
    nestedTemplatesTest,
    keyedCacheDifferentElementsTest,
    typedEventsStandaloneTest,
    typedEventBubbleTest,
    multipleInstancesTest,
    deepNestingTest,
    renderAsyncRawPromiseTest,
    asyncPropSetParamsTest,
    asyncPropEqualityCheckTest,
    mutateDirectiveTest,
    createAttributeDirectiveTest,
    listenToEnterTest,
    stateBatchingTest,
    detachReattachTest,
    templateCachingTest,
    cssElementInterpolationTest,
    polymorphicListenTest,
];
