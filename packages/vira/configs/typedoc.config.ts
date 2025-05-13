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
    intentionallyNotExported: [],
    defaultCategory: 'MISSING CATEGORY',
    categoryOrder: [
        ...[
            'Button',
            'Collapsible',
            'Dropdown',
            'Icon',
            'Image',
            'Input',
            'Link',
        ].sort(),
        'CSS Vars',
        'Elements',
        'Pop Up',
        'Styles',
        'SVG',
        'Internal',
    ],
};
