import {assert} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import {
    CSSResult,
    LitElement,
    css as litCss,
    html as litHtml,
    noChange,
    nothing,
    svg,
    unsafeCSS,
} from 'lit';
import {classMap} from 'lit/directives/class-map.js';
import {ifDefined} from 'lit/directives/if-defined.js';
import {keyed} from 'lit/directives/keyed.js';
import {ref} from 'lit/directives/ref.js';
import {repeat} from 'lit/directives/repeat.js';
import {styleMap} from 'lit/directives/style-map.js';
import {unsafeHTML} from 'lit/directives/unsafe-html.js';
import {unsafeSVG} from 'lit/directives/unsafe-svg.js';
import {until} from 'lit/directives/until.js';
import * as indexExports from './index.js';
import * as allLitExports from './lit-exports/all-lit-exports.js';

/**
 * Module namespace objects carry symbol keys (such as `Symbol.toStringTag`), so they cannot be read
 * with the typed object helpers.
 */
const indexExportRecord = indexExports satisfies object as Readonly<Record<string, unknown>>;

/**
 * The complete public runtime API of `element-vir`. Any addition, removal, or rename must be a
 * deliberate edit of this list.
 */
const expectedPublicExportNames = [
    'AnyObservable',
    'AsyncDirective',
    'AsyncObservable',
    'AsyncReplaceDirective',
    'AsyncValueState',
    'CSSResult',
    'CallbackObservable',
    'DeclarativeElement',
    'Directive',
    'InternalAsyncPropClass',
    'IntervalObservable',
    'LitElement',
    'Observable',
    'ObservableCallbackCallEvent',
    'ObservableDestroyEvent',
    'ObservableIntervalRateLimitedEvent',
    'ObservableIntervalRunEvent',
    'ObservableIntervalSkipEvent',
    'ObservableParamsUpdateEvent',
    'ObservableValueErrorEvent',
    'ObservableValueResolveEvent',
    'ObservableValueUpdateEvent',
    'PartType',
    'TemplateResultType',
    'TypedEvent',
    'UnsafeHTMLDirective',
    'UntilDirective',
    'allObservableEvents',
    'applyHostClasses',
    'assertDeclarativeElementDefinition',
    'assertIsDeclarativeElement',
    'assertIsElementPartInfo',
    'assertValidStringNames',
    'asyncAppend',
    'asyncProp',
    'asyncReplace',
    'attachOnResize',
    'attributes',
    'bindReactiveProperty',
    'cache',
    'canHoldProperties',
    'choose',
    'classMap',
    'clearPart',
    'convertTemplateToString',
    'createAttributeDirective',
    'createElementPropertyProxy',
    'createEventDescriptorMap',
    'createHostClassNamesMap',
    'createMutateDirective',
    'createRef',
    'createRenderParams',
    'createSlotNamesMap',
    'createStringNameMap',
    'createStylesCallbackInput',
    'css',
    'customElement',
    'defaultDeclarativeElementDefinitionOptions',
    'defineElement',
    'defineElementEvent',
    'defineTypedEvent',
    'directive',
    'eventOptions',
    'extractElement',
    'getCommittedValue',
    'getDirectiveClass',
    'guard',
    'hasTagName',
    'html',
    'ifDefined',
    'insertPart',
    'isAsyncValueResolved',
    'isCompiledTemplateResult',
    'isDeclarativeElement',
    'isDeclarativeElementDefinition',
    'isDirectiveResult',
    'isMinimalDefinitionWithInputs',
    'isNotNoUpdate',
    'isObservableBase',
    'isPrimitive',
    'isSingleExpression',
    'isTemplateResult',
    'join',
    'keyed',
    'keyedCache',
    'listen',
    'listenToActivate',
    'listenToEnter',
    'live',
    'map',
    'mapAsyncValue',
    'mutate',
    'noChange',
    'noUpdate',
    'nothing',
    'observableBaseShape',
    'observableEqualityCheck',
    'onDomCreated',
    'onDomRendered',
    'onIntersect',
    'onResize',
    'property',
    'query',
    'queryAll',
    'queryAssignedElements',
    'queryAssignedNodes',
    'queryAsync',
    'range',
    'ref',
    'removePart',
    'renderAsync',
    'renderIf',
    'repeat',
    'resolvedAsyncValue',
    'setChildPartValue',
    'setCommittedValue',
    'standardProperty',
    'state',
    'styleMap',
    'svg',
    'templateContent',
    'testId',
    'testIdAttributeName',
    'testIdSelector',
    'unsafeCSS',
    'unsafeHTML',
    'unsafeSVG',
    'until',
    'when',
    'wrapDefineElement',
];

describe('element-vir public API', () => {
    it('exports exactly the expected names', () => {
        assert.deepEquals(Object.keys(indexExportRecord).sort(), expectedPublicExportNames);
    });

    it('re-exports every lit export without wrapping it', () => {
        const litExportRecord = allLitExports satisfies object as Readonly<Record<string, unknown>>;

        const mismatches = Object.keys(litExportRecord).filter((key) => {
            return indexExportRecord[key] !== litExportRecord[key];
        });

        assert.deepEquals(mismatches, []);
    });

    it('re-exports lit values with identical object identity', () => {
        assert.strictEquals(indexExports.CSSResult, CSSResult);
        assert.strictEquals(indexExports.LitElement, LitElement);
        assert.strictEquals(indexExports.classMap, classMap);
        assert.strictEquals(indexExports.ifDefined, ifDefined);
        assert.strictEquals(indexExports.keyed, keyed);
        assert.strictEquals(indexExports.noChange, noChange);
        assert.strictEquals(indexExports.nothing, nothing);
        assert.strictEquals(indexExports.ref, ref);
        assert.strictEquals<unknown, unknown>(indexExports.repeat, repeat);
        assert.strictEquals(indexExports.styleMap, styleMap);
        assert.strictEquals(indexExports.svg, svg);
        assert.strictEquals(indexExports.unsafeCSS, unsafeCSS);
        assert.strictEquals(indexExports.unsafeHTML, unsafeHTML);
        assert.strictEquals(indexExports.unsafeSVG, unsafeSVG);
        assert.strictEquals(indexExports.until, until);
    });

    it('overrides the lit html and css tag functions with its own', () => {
        assert.notStrictEquals(indexExports.html, litHtml);
        assert.notStrictEquals(indexExports.css, litCss);
    });
});
