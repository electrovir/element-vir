import {ElementBookApp} from 'element-book';
import {defineElementNoInputs, html, requireAllCustomElementsToBeDeclarativeElements} from '../..';
import {allBookEntries} from './all-book-entries';

requireAllCustomElementsToBeDeclarativeElements();

export const VirTestBookApp = defineElementNoInputs({
    tagName: 'vir-test-book-app',
    renderCallback({}) {
        return html`
            <${ElementBookApp.assign({
                entries: allBookEntries,
                internalRouterConfig: {
                    useInternalRouter: true,
                    basePath: 'element-vir',
                },
            })}></${ElementBookApp}>
        `;
    },
});
