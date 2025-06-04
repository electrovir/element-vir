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
 * An individual key definition in {@link ViraTableKeys}. In normal table orientation, this will
 * define each column.
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
        /** If true, will be rendered as headers. */
        isHeader: boolean;
    }>
>;

/**
 * All key definitions for a {@link ViraTableSetup} instance. In normal table orientation, these will
 * define each column.
 *
 * @category Internal
 */
export type ViraTableKeys = ReadonlyArray<ViraTableKey>;

/**
 * An individual row in {@link ViraTableSetup}.
 *
 * @category Internal
 */
export type ViraTableRow<Keys extends ViraTableKeys | undefined = undefined> = {
    cells: ViraTableCells<Keys>;
} & PartialWithUndefined<{
    /**
     * If `true`, no actions will be fired from this row (like row clicks). No disable styles are
     * applied.
     *
     * @default false
     */
    disabled: boolean;
    /** Optional: keep track of which row is which by attaching an id to it. */
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
    rows: ReadonlyArray<Readonly<ViraTableRow>>;
}>;

/**
 * Create a type-safe {@link ViraTableSetup} object to be used with the `ViraTable` element.
 *
 * @category Internal
 */
export function createTable<const Keys extends ViraTableKeys>(
    /** The order of these keys determines the order that they render in. */
    keys: Readonly<Keys>,
    rows: ReadonlyArray<Readonly<ViraTableRow<Keys>>>,
): ViraTableSetup {
    return {
        keys,
        rows,
    };
}
