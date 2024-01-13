import {css, html} from 'element-vir';
import {BookFullRoute, BookMainRoute, BookRouter} from '../../routing/book-routing';
import {BookRouteLink} from './common/book-route-link.element';
import {defineBookElement} from './define-book-element';

export const BookBreadcrumbs = defineBookElement<{
    currentRoute: Readonly<BookFullRoute>;
    router: BookRouter | undefined;
}>()({
    tagName: 'book-breadcrumbs',
    styles: css`
        :host {
            display: flex;
            color: #999;
        }

        .spacer {
            padding: 0 4px;
        }
    `,
    renderCallback: ({inputs}) => {
        const bookPaths = inputs.currentRoute.paths.slice(1);

        if (!bookPaths.length) {
            return html`
                &nbsp;
            `;
        }

        return bookPaths.map((currentPath, pathIndex, pathsArray) => {
            const isLastPath = pathIndex >= pathsArray.length - 1;

            const fullPathSoFar = pathsArray.slice(0, pathIndex + 1);

            const spacer = isLastPath
                ? ''
                : html`
                      <span class="spacer">&gt;</span>
                  `;

            return html`
                <${BookRouteLink.assign({
                    route: {
                        hash: undefined,
                        search: undefined,
                        paths: [
                            BookMainRoute.Book,
                            ...fullPathSoFar,
                        ],
                    },
                    router: inputs.router,
                })}>
                    ${currentPath}
                </${BookRouteLink}>
                ${spacer}
            `;
        });
    },
});
