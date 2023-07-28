import {ElementBookApp} from 'element-book';
import {requireAllCustomElementsToBeDeclarativeElements} from '../../../src';
import {defineElementNoInputs} from '../../declarative-element/define-element-no-inputs';
import {html} from '../../template-transforms/vir-html/vir-html';
import {oldTestAppPage} from './vir-test-app.element';

requireAllCustomElementsToBeDeclarativeElements();

const allBookEntries = [oldTestAppPage];

export const VirTestBookApp = defineElementNoInputs({
    tagName: 'vir-test-book-app',
    renderCallback({}) {
        return html`
            <${ElementBookApp.assign({
                entries: allBookEntries,
            })}></${ElementBookApp}>
        `;
    },
});
