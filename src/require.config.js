require.config({
    paths: {
        jquery: '../lib/jquery/jquery.min',
        lodash: '../lib/lodash/dist/lodash.min',
        backbone: '../lib/backbone/backbone-min',
        'backbone.stickit': '../lib/backbone.stickit/backbone.stickit',
        text: '../lib/requirejs-text/text',
        handlebars: '../lib/handlebars/handlebars',
        hb: '../lib/requirejs-handlebars/hb'
    },
    packages: [
        { name: 'when', location: '../lib/when', main: './when' }
    ],
    shim: {
        backbone: {
            deps: ['lodash', 'jquery'],
            exports: 'Backbone'
        },
        'backbone.stickit': ['backbone'],
        handlebars: {
            exports: 'Handlebars'
        }
    }
});
