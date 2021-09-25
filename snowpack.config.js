// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import('snowpack').SnowpackUserConfig} */
module.exports = {
    mount: {
        static: {url: '/', static: true},
        src: {url: '/dist'},
    },
    plugins: ['@snowpack/plugin-typescript'],
    routes: [
        /* Enable an SPA Fallback in development: */
        {match: 'routes', src: '.*', dest: '/index.html'},
    ],
};
