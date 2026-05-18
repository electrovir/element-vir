import {awaitedForEach, getObjectTypedEntries} from '@augment-vir/common';
import {
    assertTestContext,
    type SaveScreenshotOptions,
    TestEnv,
    testPlaywright,
    type UniversalTestContext,
} from '@augment-vir/test';
import {mockScreenDimensions} from '../data/screen-size.mock.js';

export async function assertSizedScreenshots(
    this: void,
    testContext: Readonly<UniversalTestContext>,
    options: Readonly<SaveScreenshotOptions>,
) {
    assertTestContext(testContext, TestEnv.Playwright);

    await awaitedForEach(
        getObjectTypedEntries(mockScreenDimensions),
        async ([
            screenSize,
            dimensions,
        ]) => {
            const sizedScreenshotBaseName = [
                options.screenshotBaseName,
                screenSize,
            ].join('-');

            await testContext.page.setViewportSize(dimensions);
            /** Give UI time to shift. */
            await testContext.page.waitForTimeout(1000);

            await testPlaywright.screenshot.expectScreenshot(testContext, {
                ...options,
                screenshotBaseName: sizedScreenshotBaseName,
            });
        },
    );
}
