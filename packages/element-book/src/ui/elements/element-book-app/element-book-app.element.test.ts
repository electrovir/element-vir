import {queryThroughShadow} from '@augment-vir/browser';
import {assert, fixture as renderFixture, waitUntil} from '@open-wc/testing';
import {html} from 'element-vir';
import {assertInstanceOf} from 'run-time-assertions';
import {defineBookPage} from '../../../data/book-entry/book-page/define-book-page';
import {BookError} from '../common/book-error.element';
import {ElementBookApp} from './element-book-app.element';
import {ElementBookConfig} from './element-book-config';

describe(ElementBookApp.tagName, () => {
    async function setupEntriesTest(entries: ElementBookConfig['entries']) {
        const elementBookAppInstance = await renderFixture(html`
            <${ElementBookApp.assign({
                entries,
            })}></${ElementBookApp}>
        `);

        assertInstanceOf(elementBookAppInstance, ElementBookApp);

        return elementBookAppInstance;
    }

    async function getBookErrorMessage(
        elementBookAppInstance: (typeof ElementBookApp)['instanceType'],
    ): Promise<string> {
        let errorWrapper: Element | undefined;

        await waitUntil(() => {
            try {
                errorWrapper = queryThroughShadow({
                    element: elementBookAppInstance,
                    query: BookError.tagName,
                });
                assertInstanceOf(errorWrapper, BookError);
                return true;
            } catch (error) {
                return false;
            }
        }, `Failed to find ${BookError.tagName}`);

        assertInstanceOf(errorWrapper, BookError);
        return errorWrapper.shadowRoot.innerHTML;
    }

    it('should render error message when there are duplicate page names', async () => {
        const elementBookAppInstance = await setupEntriesTest([
            defineBookPage({
                parent: undefined,
                title: 'duplicate title',
            }),
            defineBookPage({
                parent: undefined,
                title: 'duplicate title',
            }),
        ]);
        assert.include(
            await getBookErrorMessage(elementBookAppInstance),
            "Cannot create duplicate 'duplicate-title'",
        );
    });

    it('should render error message when there are duplicate examples', async () => {
        const examplePage = defineBookPage({
            parent: undefined,
            title: 'title',
            elementExamplesCallback({defineExample}) {
                defineExample({
                    title: 'duplicate example',
                    renderCallback() {
                        return '';
                    },
                });
                defineExample({
                    title: 'duplicate example',
                    renderCallback() {
                        return '';
                    },
                });
            },
        });

        const elementBookAppInstance = await setupEntriesTest([
            examplePage,
        ]);

        assert.include(
            await getBookErrorMessage(elementBookAppInstance),
            "Example title 'duplicate example' in page 'title' is already taken.",
        );
    });

    it('should render error message when there are empty page titles', async () => {
        const elementBookAppInstance = await setupEntriesTest([
            defineBookPage({
                parent: undefined,
                title: '',
            }),
        ]);

        assert.include(
            await getBookErrorMessage(elementBookAppInstance),
            'Cannot define an element-book page with an empty title.',
        );
    });
});
