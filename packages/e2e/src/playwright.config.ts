import {defineConfig, type PlaywrightTestConfig} from '@playwright/test';
import {cpus} from 'node:os';
import {
    e2eScreenshotsDirPath,
    e2eTestsDirPath,
    playwrightOutputsDirPath,
} from './data/file-paths.js';

/**
 * Hardcoded copy of `testIdAttributeName` from `element-vir` so that this config, which Playwright
 * loads in Node before any test runs, does not pull in the whole framework for one string.
 */
const testIdAttributeName = 'data-test-id';

function minutes(count: number): number {
    return Math.round(count * 60_000);
}

const isCi: boolean = !!process.env.CI;

const playwrightTestConfig: PlaywrightTestConfig = defineConfig({
    fullyParallel: !isCi,

    testDir: e2eTestsDirPath,
    testMatch: '*.book.ts',

    snapshotDir: e2eScreenshotsDirPath,
    snapshotPathTemplate: '{snapshotDir}/{testFilePath}-screenshots/{testName}/{arg}{ext}',

    workers: isCi ? 1 : Math.max(Math.floor(cpus().length / 2), 1),
    reporter: 'dot',
    timeout: isCi ? minutes(5) : minutes(2),
    expect: {
        timeout: isCi ? minutes(5) : minutes(1),
    },
    globalTimeout: isCi ? minutes(20) : minutes(30),

    retries: 3,
    outputDir: playwrightOutputsDirPath,
    use: {
        screenshot: 'only-on-failure',
        trace: 'retain-on-failure',
        testIdAttribute: testIdAttributeName,
    },
});

export default playwrightTestConfig;
