import {classMap, css, defineElement, html, unsafeCSS} from 'element-vir';
import {
    contrastLevelLabel,
    ContrastLevelName,
    contrastLevels,
    type CalculatedContrast,
} from '../contrast.js';

/**
 * Show contrast details for a theme-vir color.
 *
 * @category Internal
 */
export const ThemeVirContrastIndicator = defineElement<{
    contrast: Readonly<CalculatedContrast>;
}>()({
    tagName: 'theme-vir-contrast-indicator',
    styles: css`
        :host {
            display: inline-flex;
            max-width: 100%;
            font-size: 12px;
        }

        .wrapper {
            text-align: center;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            max-width: 100%;
            color: #aaa;
        }

        .${unsafeCSS(ContrastLevelName.Invisible)} {
            color: red;
        }
        .${unsafeCSS(ContrastLevelName.Decoration)} {
            color: #ff6600;
        }
        .${unsafeCSS(ContrastLevelName.SpotText)} {
            color: #a5a520;
        }

        .gauge {
            align-self: center;
            background-color: currentColor;
            display: flex;
            padding: 1px;
            gap: 1px;
            margin-bottom: 2px;
            /* Sure sure if I actually want to keep this. */
            display: none;
        }

        .gauge-level {
            width: 10px;
            height: 2px;

            &.active {
                background-color: white;
            }
        }

        .gauge-text + .gauge-text {
            border-left: 1px solid #ccc;
            padding-left: 1ex;
        }
    `,
    render({inputs}) {
        const gaugeLevels = contrastLevels
            .toReversed()
            .slice(1)
            .map((level) => {
                return html`
                    <div
                        class="gauge-level ${classMap({
                            active: level.min <= Math.abs(inputs.contrast.contrast),
                        })}"
                    ></div>
                `;
            });

        const title = [
            inputs.contrast.contrastLevel.description,
            '\nFont weights to font sizes:',
            JSON.stringify(inputs.contrast.fontSizes, null, 4),
        ].join('\n');

        const fontSize =
            inputs.contrast.fontSizes[400] > 150 ? '-' : `${inputs.contrast.fontSizes[400]}px`;

        return html`
            <div title=${title} class="wrapper ${inputs.contrast.contrastLevel.name}">
                <div class="gauge">${gaugeLevels}</div>
                <span>
                    <span class="gauge-text">${Math.round(inputs.contrast.contrast)} Lc</span>
                    <span class="gauge-text">
                        ${contrastLevelLabel[inputs.contrast.contrastLevel.name]}
                    </span>
                    <span class="gauge-text">${fontSize}</span>
                </span>
            </div>
        `;
    },
});
