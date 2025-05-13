import {baseTypedocConfig} from '@virmator/docs/configs/typedoc.config.base';
import {dirname, join} from 'node:path/posix';
import {fileURLToPath} from 'node:url';
import {type TypeDocOptions} from 'typedoc';

const indexTsFile = join(dirname(dirname(fileURLToPath(import.meta.url))), 'src', 'index.ts');
const outDirPath = join(dirname(dirname(fileURLToPath(import.meta.url))), 'dist-docs');

export const typeDocConfig: Partial<TypeDocOptions> = {
    ...baseTypedocConfig,
    out: outDirPath,
    entryPoints: [
        indexTsFile,
    ],
    excludeInternal: true,
    excludeReferences: true,

    blockTags: [
        /** Default tags in use. */
        '@category',
        '@default',
        '@example',
        '@param',
        '@returns',
        '@throws',
        '@see',

        /** Used by lit, and despite my attempts to exclude lit, this is still needed. */
        // cspell:ignore nocollapse
        '@nocollapse',
    ],
    exclude: [
        '**/node_modules/**',
        '**/packages/**/node_modules/**',
    ],
    externalPattern: [
        '**/node_modules/**',
        './src/lit-exports/*',
    ],
    logLevel: 'Verbose',
    intentionallyNotExported: [
        '__class',
    ],
    defaultCategory: 'MISSING CATEGORY',
    categoryOrder: [
        'Element Definition',
        'Directives',
        'Async',
        'Test',
        'Util',
        'Internal',
    ],
};
