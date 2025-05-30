import {type PartialWithUndefined} from '@augment-vir/common';
import {
    attributes,
    css,
    html,
    ifDefined,
    nothing,
    type AttributeValues,
    type CSSResult,
} from 'element-vir';
import {defineViraElement} from '../define-vira-element.js';
import {type ViraTableSetup, type createTable} from './define-table.js';

/**
 * Element tagnames that have passthroughs setup for them in {@link ViraTable}.
 *
 * @category Internal
 */
export type ViraTableElementsForPassthrough = 'table' | 'tr' | 'th' | 'td' | 'tbody' | 'thead';

/**
 * A flexible table element with automatic header pinning. Use {@link createTable} to create a
 * type-safe table input.
 *
 * @category Elements
 */
export const ViraTable = defineViraElement<
    Readonly<
        {
            /**
             * The table information.
             *
             * Use {@link createTable} to form a type-safe value for this.
             */
            table: ViraTableSetup;
        } & PartialWithUndefined<{
            /**
             * Block the sticky table header.
             *
             * @default false
             */
            preventStickyHeader: boolean;
            /**
             * Hide header row entirely.
             *
             * @default false
             */
            hideHeaderRow: boolean;
            /**
             * Pixel value of the header row sticky offset.
             *
             * @default 0
             */
            stickyOffset: number;
            /** Attributes that will be applied directly to the inner elements. */
            attributePassthrough: Readonly<
                PartialWithUndefined<Record<ViraTableElementsForPassthrough, AttributeValues>>
            >;
            /** Styles that will be applied directly to the inner elements. */
            stylePassthrough: Readonly<
                PartialWithUndefined<Record<ViraTableElementsForPassthrough, CSSResult>>
            >;
        }>
    >
>()({
    tagName: 'vira-table',
    styles: css`
        :host {
            background-color: white;
            display: block;
            position: relative;
        }

        table,
        thead {
            background-color: inherit;
        }

        th,
        td {
            padding: 0;
        }

        table {
            border-collapse: collapse;
        }

        thead {
            z-index: 10;
            /* Note that important thead styles are also directly attached to the element. */
        }
    `,
    render({inputs}) {
        const rows = inputs.table.rows.map((row) => {
            const cells = inputs.table.columns.map((column) => {
                if (column.hide) {
                    return nothing;
                }
                return html`
                    <td
                        ${inputs.attributePassthrough?.td
                            ? attributes(inputs.attributePassthrough.td)
                            : nothing}
                        style=${ifDefined(inputs.stylePassthrough?.td)}
                    >
                        ${row.value[column.key]}
                    </td>
                `;
            });

            return html`
                <tr
                    ${inputs.attributePassthrough?.tr
                        ? attributes(inputs.attributePassthrough.tr)
                        : nothing}
                    style=${ifDefined(inputs.stylePassthrough?.tr)}
                >
                    ${cells}
                </tr>
            `;
        });

        const headerCells = inputs.hideHeaderRow
            ? undefined
            : inputs.table.columns.map((column) => {
                  if (column.hide) {
                      return nothing;
                  }

                  return html`
                      <th
                          ${inputs.attributePassthrough?.th
                              ? attributes(inputs.attributePassthrough.th)
                              : nothing}
                          style=${ifDefined(inputs.stylePassthrough?.th)}
                      >
                          ${column.label}
                      </th>
                  `;
              });

        const headerRow = headerCells
            ? html`
                  <tr
                      ${inputs.attributePassthrough?.tr
                          ? attributes(inputs.attributePassthrough.tr)
                          : nothing}
                      style=${ifDefined(inputs.stylePassthrough?.tr)}
                  >
                      ${headerCells}
                  </tr>
              `
            : nothing;

        const theadStyles = css`
            ${inputs.stylePassthrough?.thead || css``}
            top: ${inputs.stickyOffset || 0}px;
            ${inputs.preventStickyHeader || inputs.hideHeaderRow
                ? css``
                : css`
                      position: sticky;
                  `}
        `;

        return html`
            <table
                ${inputs.attributePassthrough?.table
                    ? attributes(inputs.attributePassthrough.table)
                    : nothing}
                style=${ifDefined(inputs.stylePassthrough?.table)}
            >
                <thead
                    ${inputs.attributePassthrough?.thead
                        ? attributes(inputs.attributePassthrough.thead)
                        : nothing}
                    style=${theadStyles}
                >
                    ${headerRow}
                </thead>
                <tbody
                    ${inputs.attributePassthrough?.tbody
                        ? attributes(inputs.attributePassthrough.tbody)
                        : nothing}
                    style=${ifDefined(inputs.stylePassthrough?.tbody)}
                >
                    ${rows}
                </tbody>
            </table>
        `;
    },
});
