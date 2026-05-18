import {
    assertWrapTestContext,
    cleanTestNameAsDir,
    TestEnv,
    type UniversalTestContext,
} from '@augment-vir/test';
import {e2eTestName} from '../data/e2e-test-name.js';

/**
 * Creates a unique test name for e2e tests using only the describe blocks and test name (without
 * the full file path). This keeps test names shorter and more readable.
 */
export function createFullE2eTestName(this: void, testContext: Readonly<UniversalTestContext>) {
    const playwrightContext = assertWrapTestContext(testContext, TestEnv.Playwright);

    /**
     * `titlePath` is `[file, ...describes, testTitle]`. We skip the file path (index 0) and use
     * only the describe blocks and test title for a shorter name.
     */
    const titlesWithoutFile = playwrightContext.testInfo.titlePath.slice(1);
    const testName = cleanTestNameAsDir(titlesWithoutFile.join(' > ')).replaceAll('.', '_');

    return [
        e2eTestName,
        testName,
    ].join('_');
}
