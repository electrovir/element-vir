import {extractErrorMessage} from '@augment-vir/common';
import {
    NotUpToDateError,
    parseUpdateExportsArgs,
    UpdateExportsConfig,
} from './common/update-exports';
import {updateIconExports} from './update-icon-exports';
import {updateIndexExports} from './update-index-exports';
import {updateRootIndexExports} from './update-root-index-exports';

const updateExportsConfigs: UpdateExportsConfig[] = [
    updateIconExports,
    updateIndexExports,
    updateRootIndexExports,
];

async function main() {
    const args = parseUpdateExportsArgs();
    const didSucceed: boolean[] = await Promise.all(
        updateExportsConfigs.map(async (updateExportsConfig): Promise<boolean> => {
            try {
                await updateExportsConfig.executor(args);
                return true;
            } catch (caughtError) {
                if (caughtError instanceof NotUpToDateError) {
                    const errorMessage = extractErrorMessage(caughtError);
                    console.error(errorMessage);
                    return false;
                } else {
                    throw caughtError;
                }
            }
        }),
    );

    const someFailed = didSucceed.some((result) => !result);

    if (someFailed) {
        process.exit(1);
    }
}

if (require.main === module) {
    main().catch((error) => {
        console.error(error);
        process.exit(1);
    });
}
