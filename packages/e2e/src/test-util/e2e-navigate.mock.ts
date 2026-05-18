import {check} from '@augment-vir/assert';
import {addPrefix} from '@augment-vir/common';
import {
    assertWrapTestContext,
    type NavOptions,
    TestEnv,
    testPlaywright,
    type UniversalTestContext,
} from '@augment-vir/test';
import {searchParamsToObject} from 'url-vir';
import {createFullE2eTestName} from './e2e-test-name.mock.js';
import {getE2eFrontendUrl} from './e2e-urls.mock.js';

export async function e2eNavigateTo(
    this: void,
    testContext: Readonly<UniversalTestContext>,
    /** If this is left undefined, then the root frontend page is navigated to. */
    options?: Readonly<NavOptions> | undefined,
) {
    const originalSearch = options?.search
        ? check.isObject(options.search)
            ? options.search
            : searchParamsToObject(
                  addPrefix({
                      value: options.search,
                      prefix: '?',
                  }),
              )
        : undefined;

    await testPlaywright.navigation.navigateTo(testContext, {
        baseFrontendUrl: getE2eFrontendUrl(),
        ...options,

        search: {
            testName: [createFullE2eTestName(testContext)],
            ...originalSearch,
        },
    });

    return assertWrapTestContext(testContext, TestEnv.Playwright);
}
