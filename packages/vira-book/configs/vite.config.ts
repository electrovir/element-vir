import {join} from 'path';
import {defineConfig} from 'virmator/dist/compiled-base-configs/base-vite';

export default defineConfig({forGitHubPages: false}, (baseConfig, basePaths) => {
    return {
        ...baseConfig,
        base: '/element-vir/vira',
        build: {
            outDir: join(basePaths.cwd, 'dist-book'),
        },
    };
});
