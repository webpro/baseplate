require.config({
    paths: {
        jquery: '../lib/jquery/jquery.min',
        lodash: '../lib/lodash/dist/lodash.min',
        backbone: '../lib/backbone/backbone-min',
        'backbone.stickit': '../lib/backbone.stickit/backbone.stickit',
        text: '../lib/requirejs-text/text',
        hogan: '../lib/hogan/web/builds/2.0.0/hogan-2.0.0.min.amd',
        hgn: '../rjs-plugin/requirejs-hogan/hogan'
    },
    packages: [
        { name: 'when', location: '../lib/when', main: './when' }
    ],
    shim: {
        backbone: {
            deps: ['lodash', 'jquery'],
            exports: 'Backbone'
        },
        'backbone.stickit': ['backbone']
    }
});
