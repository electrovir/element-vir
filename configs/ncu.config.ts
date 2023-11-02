import {RunOptions} from 'npm-check-updates';
import {baseNcuConfig} from 'virmator/dist/compiled-base-configs/base-ncu';

export const ncuConfig: RunOptions = {
    ...baseNcuConfig,
    // exclude these
    reject: [
        ...baseNcuConfig.reject,
        /** Not ready for v3 yet. */
        'lit',
        /**
         * Version >1.0.0 can't handle the decorator we're using in declarative-element.ts. See
         * https://github.com/modernweb-dev/web/blob/78226ea9b507c4cc236043d7fb930d28c3c1177c/packages/dev-server-esbuild/CHANGELOG.md#major-changes
         */
        '@web/dev-server-esbuild',
    ],
    // include only these
    filter: [],
};
