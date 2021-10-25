// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import('snowpack').SnowpackUserConfig} */
module.exports = {
    mount: {
        static: {url: '/', static: true},
        src: {url: '/dist'},
    },
    plugins: ['@snowpack/plugin-typescript'],
    packageOptions: {
        knownEntrypoints: [
            '@lit/reactive-element',
            '@lit/reactive-element/decorators/custom-element.js',
            '@lit/reactive-element/decorators/event-options.js',
            '@lit/reactive-element/decorators/property.js',
            '@lit/reactive-element/decorators/query-all.js',
            '@lit/reactive-element/decorators/query-assigned-nodes.js',
            '@lit/reactive-element/decorators/query-async.js',
            '@lit/reactive-element/decorators/query.js',
            '@lit/reactive-element/decorators/state.js',
            'lit-html',
            'lit-html/async-directive.js',
            'lit-html/directive.js',
            'lit-html/static.js',
        ],
    },
    routes: [
        /* Enable an SPA Fallback in development: */
        {match: 'routes', src: '.*', dest: '/index.html'},
    ],
};
