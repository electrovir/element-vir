import {isRuntimeEnv, RuntimeEnv, type RequireOneOrNone} from '@augment-vir/common';
import {type PlaywrightTestContext} from '@augment-vir/test';
import {type e2eUtil, type Page} from '@electrovir/element-vir-e2e';
import {defineBookPage, titleToUrlBreadcrumb, type BookElementExampleInit} from 'element-book';
import {type PropertyInitMapBase} from 'element-vir';

export const e2eTestsBookPage = defineBookPage({
    title: 'e2e tests',
    parent: undefined,
});

export type PlaywrightTestCaseCallback = (
    this: void,
    params: Readonly<{e2eUtil: typeof e2eUtil; page: Page; context: PlaywrightTestContext}>,
) => Promise<void> | void;

export type BookTestCases = {[TestItDescription in string]: PlaywrightTestCaseCallback};

/** Make sure that the output of this is also entered into `allTestPages`. */
export async function defineBookTest<State extends PropertyInitMapBase>(
    description: string,
    exampleInit: Omit<
        BookElementExampleInit<Record<string, never>, Record<string, never>, State>,
        'title'
    > &
        RequireOneOrNone<{skip: boolean; only: boolean}>,
    testCases: BookTestCases,
) {
    const bookPage = defineBookPage({
        title: description,
        parent: e2eTestsBookPage,
        defineExamples({defineExample}) {
            defineExample({
                ...exampleInit,
                title: description,
            });
        },
    });

    if (isRuntimeEnv(RuntimeEnv.Node)) {
        const {isTestContext, describe, it, TestEnv} = await import('@augment-vir/test');

        const {e2eUtil} = await import('@electrovir/element-vir-e2e');

        describe(description, () => {
            Object.entries(testCases).forEach(
                ([
                    itName,
                    callback,
                ]) => {
                    it(itName, async (testContext) => {
                        if (!isTestContext(testContext, TestEnv.Playwright)) {
                            throw new Error(
                                'Cannot run element-vir test: test context is not from Playwright.',
                            );
                        }

                        const {page} = await e2eUtil.navigation.navigateTo(testContext, {
                            paths: [
                                'element-vir',
                                'book',
                                'e2e-tests',
                                titleToUrlBreadcrumb(description),
                            ],
                        });

                        await e2eUtil
                            .expect(page.locator('h2.header-with-icon'))
                            .toHaveText(description);

                        await callback({
                            context: testContext,
                            e2eUtil,
                            page,
                        });
                    });
                },
            );
        });
    }

    return bookPage;
}
