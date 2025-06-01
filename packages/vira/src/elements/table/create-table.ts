import {type ArrayElement, type PartialWithUndefined} from '@augment-vir/common';
import {type HtmlInterpolation} from 'element-vir';

/**
 * An individual cell for {@link ViraTableSetup}.
 *
 * @category Internal
 */
export type ViraTableCell<Columns extends ViraTableColumns | undefined = undefined> =
    undefined extends Columns
        ? Record<PropertyKey, HtmlInterpolation>
        : Record<ArrayElement<Exclude<Columns, undefined>>['key'], HtmlInterpolation>;

/**
 * An individual column definition in {@link ViraTableColumns}.
 *
 * @category Internal
 */
export type ViraTableColumn = Readonly<
    {
        /** The key that cells must use to set a value for this column. */
        key: PropertyKey;
    } & PartialWithUndefined<{
        /**
         * This will be displayed in the header for this column. If no `label` is provided, the
         * `key` will be used.
         */
        label: HtmlInterpolation;
        /** If set to `true`, this column will not be rendered. */
        hide: boolean;
    }>
>;

/**
 * A column definition for {@link ViraTableSetup}.
 *
 * @category Internal
 */
export type ViraTableColumns = ReadonlyArray<ViraTableColumn>;

/**
 * An individual row in {@link ViraTableSetup}.
 *
 * @category Internal
 */
export type ViraTableRow<Columns extends ViraTableColumns | undefined = undefined> = {
    cells: ViraTableCell<Columns>;
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
    /** The order of these columns determines the order that they render in. */
    columns: ViraTableColumns;
    rows: ReadonlyArray<Readonly<ViraTableRow>>;
}>;

/**
 * Create a type-safe {@link ViraTableSetup} object to be used with the `ViraTable` element.
 *
 * @category Internal
 */
export function createTable<const Columns extends ViraTableColumns>(
    /** The order of these columns determines the order that they render in. */
    columns: Readonly<Columns>,
    rows: ReadonlyArray<Readonly<ViraTableRow<Columns>>>,
): ViraTableSetup {
    return {
        columns,
        rows,
    };
}
