import {defineConfig} from '@virmator/test/configs/web-test-runner.config.base.mjs';
import {dirname, resolve} from 'path';
import {fileURLToPath, pathToFileURL} from 'url';

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
    /** `define-element.test.ts` runs well past the 2 minute default under full-suite contention. */
    testsFinishTimeout: 5 * 60_000,
};

export default webTestRunnerConfig;

/** Log the full config if this file file is run directly as a script, for debugging. */
if (import.meta.url === pathToFileURL(process.argv[1]).href) {
    console.info(JSON.stringify(webTestRunnerConfig, null, 4));
}
