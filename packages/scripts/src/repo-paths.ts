import {join, resolve} from 'path';

export const monoRepoRootDir = resolve(__dirname, '..', '..', '..');
export const packagesDir = join(monoRepoRootDir, 'packages');
const viraPackageDir = join(packagesDir, 'vira');
export const viraPackageJsonPath = join(viraPackageDir, 'package.json');
export const viraSrcDir = join(viraPackageDir, 'src');
export const viraElementsDir = join(viraSrcDir, 'elements');
export const rootDistDir = join(monoRepoRootDir, 'dist');
