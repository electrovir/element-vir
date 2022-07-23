import {dirname} from 'path';
import {UserConfig} from 'vite';
import {alwaysReloadPlugin} from './vite-always-reload-plugin';

const viteConfig: UserConfig = {
    clearScreen: false,
    plugins: [alwaysReloadPlugin()],
    root: dirname(__dirname),
};

export default viteConfig;
