import {type ArrayElement, type PartialWithUndefined} from '@augment-vir/common';
import {type HtmlInterpolation} from 'element-vir';

/**
 * An individual cell for {@link ViraTableSetup}.
 *
 * @category Internal
 */
export type ViraTableCells<Keys extends ViraTableKeys | undefined = undefined> =
    undefined extends Keys
        ? Record<PropertyKey, HtmlInterpolation>
        : Record<ArrayElement<Exclude<Keys, undefined>>['key'], HtmlInterpolation>;

/**
 * An individual key definition in {@link ViraTableKeys}. In default table orientation, this will
 * define each column's key. In horizontal orientation, this will define each row's key.
 *
 * @category Internal
 */
export type ViraTableKey = Readonly<
    {
        /** The key that cells must set a value to. */
        key: PropertyKey;
    } & PartialWithUndefined<{
        /**
         * This will be displayed in the header for this key. If no `label` is provided, the `key`
         * will be used.
         */
        label: HtmlInterpolation;
        /** If set to `true`, all cells for this key will not be rendered. */
        hide: boolean;
        /** In horizontal table orientation, this prevents this key's row from being clicked. */
        disabled: boolean;
        /** If true, will be rendered as headers. */
        isHeader: boolean;
    }>
>;

/**
 * All key definitions for a {@link ViraTableSetup} instance. In default table orientation, these
 * will define each column. In horizontal orientation, this will define each row header.
 *
 * @category Internal
 */
export type ViraTableKeys = ReadonlyArray<ViraTableKey>;

/**
 * An individual entry in {@link ViraTableSetup}. In default table orientation, this will be a row.
 * In horizontal orientation, this will be a column.
 *
 * @category Internal
 */
export type ViraTableEntry<Keys extends ViraTableKeys | undefined = undefined> = {
    cells: ViraTableCells<Keys>;
} & PartialWithUndefined<{
    /**
     * If `true`, no actions will be fired from this entry (like clicks). No disable styles are
     * applied.
     *
     * @default false
     */
    disabled: boolean;
    /** Optional: keep track of which entry is which by attaching an id to it. */
    id: PropertyKey;
}>;

/**
 * Table information input for `ViraTable`.
 *
 * @category Internal
 */
export type ViraTableSetup = Readonly<{
    /** The order of these keys determines the order that they render in. */
    keys: ViraTableKeys;
    entries: ReadonlyArray<Readonly<ViraTableEntry>>;
}>;

/**
 * Create a type-safe {@link ViraTableSetup} object to be used with the `ViraTable` element.
 *
 * @category Internal
 */
export function createTable<const Keys extends ViraTableKeys>(
    /** The order of these keys determines the order that they render in. */
    keys: Readonly<Keys>,
    entries: ReadonlyArray<Readonly<ViraTableEntry<Keys>>>,
): ViraTableSetup {
    return {
        keys,
        entries,
    };
}
