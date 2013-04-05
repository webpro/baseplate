require.config({
    deps: ['core/bootstrap', 'core/sandbox', 'backbone.stickit'],
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

        // 3rd-party (extensions)
        'backbone.stickit': '../lib/backbone.stickit/backbone.stickit'

    },
    packages: [
        { name: 'when', location: '../lib/when', main: './when' }
    ]
});
