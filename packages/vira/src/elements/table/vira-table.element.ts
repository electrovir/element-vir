import {type PartialWithUndefined} from '@augment-vir/common';
import {
    attributes,
    classMap,
    css,
    defineElementEvent,
    html,
    ifDefined,
    listen,
    nothing,
    type AttributeValues,
    type CSSResult,
} from 'element-vir';
import {defineViraElement} from '../define-vira-element.js';
import {type ViraTableRow, type ViraTableSetup, type createTable} from './define-table.js';

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
             * Block all rows from being clickable.
             *
             * @default false
             */
            preventRowClicks: boolean;
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
    cssVars: {
        'vira-table-row-hover': '#cfe9ff',
        'vira-table-row-active': '#cfe9ff',
        'vira-table-background': 'white',
    },
    styles: ({cssVars}) => css`
        :host {
            background: ${cssVars['vira-table-background'].value};
            display: block;
            position: relative;
        }

        table,
        thead {
            background: inherit;
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
            /* Other important thead styles are directly attached to the HTML element. */
        }

        .clickable {
            cursor: pointer;

            &:hover {
                background-color: ${cssVars['vira-table-row-hover'].value};
            }
            &:active {
                background-color: ${cssVars['vira-table-row-active'].value};
            }
        }
    `,
    events: {
        rowClick: defineElementEvent<{row: ViraTableRow; originalEvent: MouseEvent}>(),
    },
    render({inputs, events, dispatch}) {
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
                        ${row.cells[column.key]}
                    </td>
                `;
            });

            const isClickable = !inputs.preventRowClicks && !row.disabled;

            return html`
                <tr
                    class=${classMap({
                        clickable: isClickable,
                    })}
                    ${inputs.attributePassthrough?.tr
                        ? attributes(inputs.attributePassthrough.tr)
                        : nothing}
                    style=${ifDefined(inputs.stylePassthrough?.tr)}
                    ${listen('click', (event) => {
                        if (isClickable) {
                            dispatch(new events.rowClick({originalEvent: event, row}));
                        }
                    })}
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
