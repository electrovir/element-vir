import {dirname, join} from 'path';
import {viraSrcDir} from '../repo-paths';
import {generateExportsFromFilePaths, getExportableTsFilePaths} from './common/file-paths';
import {
    UpdateExportsArgs,
    UpdateExportsConfig,
    updateExportsMain,
    writeOrCheckGeneratedFile,
} from './common/update-exports';

export const updateRootIndexExports: UpdateExportsConfig = {
    executor: async (args: UpdateExportsArgs): Promise<void> => {
        const rootIndexFilePath = join(viraSrcDir, 'index.ts');

        const allTsFilePaths = await getExportableTsFilePaths(viraSrcDir);
        const indexTsFilePaths = allTsFilePaths.filter((tsFilePath) => {
            if (tsFilePath === rootIndexFilePath) {
                return false;
            }

            return tsFilePath.endsWith('index.ts');
        });

        await writeOrCheckGeneratedFile(
            rootIndexFilePath,
            generateExportsFromFilePaths({
                filePaths: indexTsFilePaths.map((indexTsFile) => dirname(indexTsFile)),
                relativeDir: viraSrcDir,
            }),
            args,
            __filename,
        );
    },
};

if (require.main === module) {
    updateExportsMain(updateRootIndexExports).catch((error) => {
        console.error(error);
        process.exit(1);
    });
}
