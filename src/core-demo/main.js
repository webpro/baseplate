require.config({
    deps: ['core/bootstrap', 'core/proxybox', 'backbone.stickit'],
    shim: {
        'backbone': {
            'deps': ['lodash', 'jquery'],
            'exports': 'Backbone'
        },
        'backbone.stickit': ['backbone']
    },
    paths: {

        // 3rd-party (core)
        'jquery': '../lib/jquery/jquery.min',
        'lodash': '../lib/lodash/lodash.min',
        'backbone': '../lib/backbone/backbone-min',
        'hogan': '../lib/hogan/web/builds/2.0.0/hogan-2.0.0.min.amd',

        // 3rd-party (extensions)
        'text': '../lib/requirejs-text/text',
        'backbone.stickit': '../lib/backbone.stickit/backbone.stickit',

        'hgn': '../rjs-plugin/requirejs-hogan/hogan',
    },
    packages: [
        { name: 'when', location: '../lib/when', main: './when' }
    ]
});
