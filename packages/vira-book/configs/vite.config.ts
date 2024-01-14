import {defineConfig} from 'virmator/dist/compiled-base-configs/base-vite';

export default defineConfig({forGitHubPages: true}, (baseConfig, basePaths) => {
    const distBookPath = basePaths.outDir.replace(/dist$/, 'dist-book');

    return {
        ...baseConfig,
        optimizeDeps: {
            disabled: true,
        },
        build: {
            outDir: distBookPath,
        },
    };
});
