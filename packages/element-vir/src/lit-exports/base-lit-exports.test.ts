import {assert} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import * as lit from 'lit';
import * as litAsyncDirective from 'lit/async-directive.js';
import * as litDecorators from 'lit/decorators.js';
import * as litDirectiveHelpers from 'lit/directive-helpers.js';
import * as litDirective from 'lit/directive.js';
import * as litAsyncAppend from 'lit/directives/async-append.js';
import * as litAsyncReplace from 'lit/directives/async-replace.js';
import * as litCache from 'lit/directives/cache.js';
import * as litChoose from 'lit/directives/choose.js';
import * as litClassMap from 'lit/directives/class-map.js';
import * as litGuard from 'lit/directives/guard.js';
import * as litIfDefined from 'lit/directives/if-defined.js';
import * as litJoin from 'lit/directives/join.js';
import * as litKeyed from 'lit/directives/keyed.js';
import * as litLive from 'lit/directives/live.js';
import * as litMap from 'lit/directives/map.js';
import * as litRange from 'lit/directives/range.js';
import * as litRef from 'lit/directives/ref.js';
import * as litStyleMap from 'lit/directives/style-map.js';
import * as litTemplateContent from 'lit/directives/template-content.js';
import * as litUnsafeHtml from 'lit/directives/unsafe-html.js';
import * as litUnsafeSvg from 'lit/directives/unsafe-svg.js';
import * as litUntil from 'lit/directives/until.js';
import * as litWhen from 'lit/directives/when.js';
import * as baseLitExports from './base-lit-exports.js';

/**
 * Module namespace objects carry symbol keys (such as `Symbol.toStringTag`), so they cannot be read
 * with the typed object helpers.
 */
const baseLitExportRecord = baseLitExports satisfies object as Readonly<Record<string, unknown>>;

/** Every lit module that `base-lit-exports.ts` pulls values from. */
const litSourceModules: ReadonlyArray<Readonly<Record<string, unknown>>> = [
    lit,
    litAsyncAppend,
    litAsyncDirective,
    litAsyncReplace,
    litCache,
    litChoose,
    litClassMap,
    litDecorators,
    litDirective,
    litDirectiveHelpers,
    litGuard,
    litIfDefined,
    litJoin,
    litKeyed,
    litLive,
    litMap,
    litRange,
    litRef,
    litStyleMap,
    litTemplateContent,
    litUnsafeHtml,
    litUnsafeSvg,
    litUntil,
    litWhen,
];

const expectedBaseLitExportNames = [
    'AsyncDirective',
    'AsyncReplaceDirective',
    'CSSResult',
    'Directive',
    'LitElement',
    'PartType',
    'TemplateResultType',
    'UnsafeHTMLDirective',
    'UntilDirective',
    'asyncAppend',
    'asyncReplace',
    'cache',
    'choose',
    'classMap',
    'clearPart',
    'createRef',
    'customElement',
    'directive',
    'eventOptions',
    'getCommittedValue',
    'getDirectiveClass',
    'guard',
    'ifDefined',
    'insertPart',
    'isCompiledTemplateResult',
    'isDirectiveResult',
    'isPrimitive',
    'isSingleExpression',
    'isTemplateResult',
    'join',
    'keyed',
    'live',
    'map',
    'noChange',
    'nothing',
    'property',
    'query',
    'queryAll',
    'queryAssignedElements',
    'queryAssignedNodes',
    'queryAsync',
    'range',
    'ref',
    'removePart',
    'setChildPartValue',
    'setCommittedValue',
    'standardProperty',
    'state',
    'styleMap',
    'svg',
    'templateContent',
    'unsafeCSS',
    'unsafeHTML',
    'unsafeSVG',
    'until',
    'when',
];

describe('base-lit-exports', () => {
    it('exports exactly the expected names', () => {
        assert.deepEquals(Object.keys(baseLitExportRecord).sort(), expectedBaseLitExportNames);
    });

    it('re-exports the exact values that lit itself exports', () => {
        const mismatches = Object.keys(baseLitExportRecord).filter((key) => {
            const owningModules = litSourceModules.filter((litModule) => key in litModule);
            return (
                !owningModules.length ||
                owningModules.some((litModule) => litModule[key] !== baseLitExportRecord[key])
            );
        });

        assert.deepEquals(mismatches, []);
    });

    it('does not re-export lit html or css', () => {
        assert.hasKeys(lit, [
            'css',
            'html',
            'render',
        ]);
        assert.lacksKeys(baseLitExports, [
            'css',
            'html',
            'render',
        ]);
    });
});
