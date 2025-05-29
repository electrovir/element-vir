import {ElementBookApp} from 'element-book';
import {defineElement, html, requireAllCustomElementsToBeDeclarativeElements} from 'element-vir';
import {allBookPages} from './all-book-pages.js';

requireAllCustomElementsToBeDeclarativeElements();

export const VirTestBookApp = defineElement()({
    tagName: 'vir-test-book-app',
    render() {
        return html`
            <${ElementBookApp.assign({
                pages: allBookPages,
                internalRouterConfig: {
                    useInternalRouter: true,
                    basePath: 'element-vir',
                },
            })}></${ElementBookApp}>
        `;
    },
});
