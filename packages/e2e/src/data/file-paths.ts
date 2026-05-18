import {join, resolve} from 'node:path';

export const monoRepoDirPath = resolve(import.meta.dirname, '..', '..', '..', '..');
export const notCommittedDirPath = join(monoRepoDirPath, '.not-committed');
export const playwrightOutputsDirPath = join(notCommittedDirPath, 'playwright', 'outputs');
export const packagesDirPath = join(monoRepoDirPath, 'packages');
export const packageDirPaths = {
    e2e: join(packagesDirPath, 'e2e'),
    elementVirExample: join(packagesDirPath, 'element-vir-example'),
};

export const e2eTestsDirPath = join(packageDirPaths.elementVirExample, 'src', 'e2e-tests');
export const e2eScreenshotsDirPath = join(packageDirPaths.e2e, 'screenshots');
