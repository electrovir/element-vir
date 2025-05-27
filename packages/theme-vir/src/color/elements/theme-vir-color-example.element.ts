import {assertWrap, check} from '@augment-vir/assert';
import {
    css,
    defineElement,
    defineElementEvent,
    html,
    listen,
    nothing,
    onDomCreated,
    unsafeCSS,
} from 'element-vir';
import {noNativeFormStyles, noNativeSpacing} from 'vira';
import {type ColorThemeColor} from '../color-theme.js';
import {calculateContrast} from '../contrast.js';
import {ThemeVirContrastIndicator} from './theme-vir-contrast-indicator.element.js';

/**
 * Showcase a theme-vir color theme color.
 *
 * @category Internal
 */
export const ThemeVirColorExample = defineElement<{
    color: Readonly<Pick<ColorThemeColor, 'foreground' | 'background'>>;
    showVarValues: boolean;
    showVarNames: boolean;
    showContrast: boolean;
}>()({
    tagName: 'theme-vir-color-example',
    state() {
        return {
            previewElement: undefined as undefined | HTMLElement,
        };
    },
    events: {
        toggleShowVars: defineElementEvent<void>(),
    },
    hostClasses: {
        'theme-vir-color-example-no-contrast-tips': ({inputs}) => !inputs.showContrast,
    },
    styles: ({hostClasses}) => css`
        :host {
            display: flex;
            flex-direction: column;
            align-items: center;
            max-width: 100%;
        }

        .color-preview {
            ${noNativeFormStyles};
            cursor: pointer;
            font-size: 32px;
            padding-left: 12px;
            padding-right: 0;
            border: 1px solid #ccc;
            border-radius: 8px;
            display: flex;
            gap: 8px;
            align-items: baseline;

            & b {
                margin: 12px 0;
                font-weight: bold;
                text-decoration: underline;
            }

            & .square {
                margin: 12px 0;
                width: 24px;
                height: 24px;
                background-color: currentColor;
            }
        }
        ${hostClasses['theme-vir-color-example-no-contrast-tips'].selector} {
            & .needed-size-wrapper {
                display: none;
            }

            & .color-preview {
                padding: 4px 24px;
            }
        }

        .needed-size-wrapper {
            align-self: stretch;
            width: 56px;
            position: relative;
            overflow: hidden;
            border-left: 1px solid #ccc;
        }

        .needed-size {
            top: 0;
            height: 100%;
            display: flex;
            align-items: center;
            left: 6px;
            position: absolute;

            & span {
                margin: 0 auto;
            }
        }

        .css-var-names {
            font-family: monospace;
            display: flex;
            max-width: 100%;
            flex-direction: column;
            opacity: 0.6;
            margin-top: 4px;
        }

        p {
            ${noNativeSpacing};
            display: flex;
            gap: 0;
            flex-wrap: wrap;

            & span:last-child {
                margin-left: 1ex;
            }
        }

        ${ThemeVirContrastIndicator} {
            margin-top: 1px;
        }
    `,
    render({state, updateState, inputs, dispatch, events}) {
        const colorRows = (
            [
                'foreground',
                'background',
            ] as const
        ).map((layerKey) => {
            const keyString = [
                inputs.color[layerKey].name,
                inputs.showVarValues ? ':' : '',
            ]
                .filter(check.isTruthy)
                .join('');
            const valueTemplate = inputs.showVarValues
                ? html`
                      <span>${inputs.color[layerKey].default}</span>
                  `
                : nothing;

            return html`
                <p>
                    <span>${keyString}</span>
                    ${valueTemplate}
                </p>
            `;
        });

        const cssVarNamesTemplate = inputs.showVarNames
            ? html`
                  <div class="css-var-names">${colorRows}</div>
              `
            : nothing;

        const contrast = state.previewElement
            ? calculateContrast({
                  foreground: globalThis
                      .getComputedStyle(state.previewElement)
                      .getPropertyValue('color'),
                  background: globalThis
                      .getComputedStyle(state.previewElement)
                      .getPropertyValue('background-color'),
              })
            : undefined;

        const contrastTemplate =
            contrast && inputs.showContrast
                ? html`
                      <${ThemeVirContrastIndicator.assign({
                          contrast,
                      })}></${ThemeVirContrastIndicator}>
                  `
                : nothing;

        return html`
            <button
                ${listen('click', () => {
                    dispatch(new events.toggleShowVars());
                })}
                ${onDomCreated((element) => {
                    updateState({
                        previewElement: assertWrap.instanceOf(element, HTMLElement),
                    });
                })}
                class="color-preview"
                style=${css`
                    color: ${unsafeCSS(inputs.color.foreground.default)};
                    background: ${unsafeCSS(inputs.color.background.default)};
                `}
            >
                <div class="square"></div>
                <b>Aa</b>
                <div class="needed-size-wrapper">
                    <span class="needed-size">
                        <span
                            style=${css`
                                visibility: ${unsafeCSS(
                                    (contrast?.fontSizes[400] || Infinity) > 150
                                        ? 'hidden'
                                        : 'visible',
                                )};
                                font-size: ${contrast ? contrast.fontSizes[400] : 14}px;
                            `}
                        >
                            Min
                        </span>
                    </span>
                </div>
            </button>
            ${contrastTemplate} ${cssVarNamesTemplate}
        `;
    },
});
