import {assert} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import * as allLitExports from './all-lit-exports.js';
import * as baseLitExports from './base-lit-exports.js';
import * as litRepeatFix from './lit-repeat-fix.js';

/**
 * Module namespace objects carry symbol keys (such as `Symbol.toStringTag`), so they cannot be read
 * with the typed object helpers.
 */
const allLitExportRecord = allLitExports satisfies object as Readonly<Record<string, unknown>>;

const expectedAllLitExportNames = [
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
    'repeat',
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

describe('all-lit-exports', () => {
    it('exports exactly the expected names', () => {
        assert.deepEquals(Object.keys(allLitExportRecord).sort(), expectedAllLitExportNames);
    });

    it('is the union of the base lit exports and the repeat fix', () => {
        assert.deepEquals(
            Object.keys(allLitExportRecord).sort(),
            [
                ...Object.keys(baseLitExports),
                ...Object.keys(litRepeatFix),
            ].sort(),
        );
    });

    it('re-exports the exact same values as its source modules', () => {
        const sourceModules: ReadonlyArray<Readonly<Record<string, unknown>>> = [
            baseLitExports,
            litRepeatFix,
        ];

        const mismatches = Object.keys(allLitExportRecord).filter((key) => {
            return !sourceModules.some(
                (sourceModule) =>
                    key in sourceModule && sourceModule[key] === allLitExportRecord[key],
            );
        });

        assert.deepEquals(mismatches, []);
    });
});
