import {ElementBookApp} from 'element-book';
import {css, defineElement, html} from 'element-vir';
import {createColorThemeBookPages} from '../color/color-theme-book-pages.js';
import {mockColorTheme, mockOrange, mockThemeDarkMode} from '../color/color-theme.mock.js';
import {createTheme} from '../create-theme/create-theme.js';
import {createThemeBookPages} from './theme-book-pages.js';

export const VirThemeBookApp = defineElement()({
    tagName: 'vir-theme-book-app',
    styles: css`
        :host {
            display: flex;
            flex-direction: column;
            gap: 32px;
            min-height: 100%;
            width: 100%;
        }

        ${ElementBookApp} {
            flex-grow: 1;
        }
    `,
    state() {
        return {
            theme: createTheme({
                elementTagPrefix: 'vir',
            }),
        };
    },
    render({state}) {
        const allThemeVirBookPages = [
            ...createThemeBookPages(state.theme),
            ...createColorThemeBookPages({
                title: 'Colors',
                theme: mockColorTheme,
                overrides: [
                    mockThemeDarkMode,
                    mockOrange,
                ],
            }),
        ];

        return html`
            <${ElementBookApp.assign({
                pages: allThemeVirBookPages,
                internalRouterConfig: {
                    useInternalRouter: true,
                },
            })}></${ElementBookApp}>
        `;
    },
});
