import {defineConfig} from '@virmator/test/configs/web-test-runner.config.base.mjs';
import {resolve} from 'path';
import {pathToFileURL} from 'url';

const packageRootDirPath = resolve(import.meta.dirname, '..');

const baseConfig = defineConfig({
    coveragePercent: 90,
    packageRootDirPath,
    extraScreenshotOptions: {},
});

/** @type {import('@web/test-runner').TestRunnerConfig} */
const webTestRunnerConfig = {
    ...baseConfig,
    port: 8102,
    rootDir: resolve(packageRootDirPath, '..', '..'),
    /**
     * Run one file in one browser at a time. Interaction helpers (`testWeb.click`,
     * `testWeb.typeIntoElement`) send real mouse and keyboard input through a command that round
     * trips to the test server, and those commands time out when many sessions compete for it.
     */
    concurrency: 1,
    concurrentBrowsers: 1,
    /** `define-element.test.ts` runs well past the 2 minute default. */
    testsFinishTimeout: 5 * 60_000,
};

export default webTestRunnerConfig;

/** Log the full config if this file file is run directly as a script, for debugging. */
if (import.meta.url === pathToFileURL(process.argv[1]).href) {
    console.info(JSON.stringify(webTestRunnerConfig, null, 4));
}
