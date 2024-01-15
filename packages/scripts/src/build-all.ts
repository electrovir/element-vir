import {log, runShellCommand} from '@augment-vir/node-js';
import {cp, mkdir, rm} from 'fs/promises';
import {join} from 'path';
import {packagesDir, rootDistDir} from './repo-paths';

type BuildPackageInfo = {
    /** Relative to the packages dir. */
    packagePath: string;
    /** Relative to the packagePath. */
    copyFrom: string;
    /** Relative to the top level dist dir. */
    copyTo: string;
};

const buildPackageInfos: ReadonlyArray<Readonly<BuildPackageInfo>> = [
    {
        packagePath: 'element-book',
        copyFrom: 'dist-docs',
        copyTo: 'element-book',
    },
    {
        packagePath: 'element-vir',
        copyFrom: 'dist-docs',
        copyTo: 'element-vir',
    },
    {
        packagePath: 'vira-book',
        copyFrom: 'dist-book',
        copyTo: 'vira',
    },
];

async function buildPackagePages(buildInfo: Readonly<BuildPackageInfo>): Promise<void> {
    const packagePath = join(packagesDir, buildInfo.packagePath);
    try {
        log.info(`Building ${packagePath}...`);
        await runShellCommand('npm run build:pages', {
            cwd: packagePath,
        });

        const copyFromDir = join(packagePath, buildInfo.copyFrom);
        const copyToDir = join(rootDistDir, buildInfo.copyTo);

        await rm(copyToDir, {recursive: true, force: true});
        await mkdir(copyToDir, {recursive: true});

        await cp(copyFromDir, copyToDir, {recursive: true});
        log.success(`Done building ${packagePath}`);
    } catch (error) {
        log.error(`Failed building ${packagePath}`);
        throw error;
    }
}

async function buildPages() {
    await Promise.all(
        buildPackageInfos.map(async (buildInfo) => {
            await buildPackagePages(buildInfo);
        }),
    );
}

buildPages();
