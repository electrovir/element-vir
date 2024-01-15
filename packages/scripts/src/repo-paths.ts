import {readDirRecursive, toPosixPath} from '@augment-vir/node-js';
import {existsSync} from 'fs';
import {stat} from 'fs/promises';
import {join, relative, resolve} from 'path';

export const monoRepoRootDir = resolve(__dirname, '..', '..', '..');
const packagesDir = join(monoRepoRootDir, 'packages');
const viraPackageDir = join(packagesDir, 'vira');
export const viraPackageJsonPath = join(viraPackageDir, 'package.json');
export const viraSrcDir = join(viraPackageDir, 'src');
export const viraElementsDir = join(viraSrcDir, 'elements');

export function generateExportsFromFilePaths({
    filePaths,
    relativeDir,
}: {
    filePaths: ReadonlyArray<string>;
    relativeDir: string;
}): string {
    const exportLines = filePaths.map((filePath) => {
        const relativePath = relative(relativeDir, filePath).replace(/\.ts?$/, '');
        const posixPath = toPosixPath(relativePath);
        const exportPath = posixPath.startsWith('.') ? posixPath : `./${posixPath}`;

        return `export * from '${exportPath}';`;
    });

    return exportLines.join('\n');
}

const ignoredFileNameEndings = [
    '.test.ts',
    '.book.ts',
    '.test-helper.ts',
];

export async function getExportableTsFilePaths(dirPath: string): Promise<string[]> {
    const allFilePaths = (await readDirRecursive(dirPath)).map((relativePath) =>
        join(dirPath, relativePath),
    );

    const allNonIndexFilePaths = allFilePaths.filter((filePath) => {
        const isTsFile = filePath.endsWith('.ts');
        const hasEndingToIgnore = ignoredFileNameEndings.some((ignoredEnding) =>
            filePath.endsWith(ignoredEnding),
        );
        return isTsFile && !hasEndingToIgnore;
    });
    await verifyTsFilePaths(allNonIndexFilePaths);
    return allNonIndexFilePaths;
}

async function verifyTsFilePaths(filePaths: ReadonlyArray<string>): Promise<void> {
    await Promise.all(
        filePaths.map(async (filePath) => {
            if (!existsSync(filePath)) {
                throw new Error(`TS file '${filePath}' does not exist.`);
            }
            if (!(await stat(filePath)).isFile()) {
                throw new Error(`TS file '${filePath}' is not a file.`);
            }
        }),
    );
}
