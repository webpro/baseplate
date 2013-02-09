(function(global) {

    var requireConfig = {
        baseUrl: 'demo-app',
        deps: ['index'],
        callback: function(app) {
            app.initialize();
        },
        shim: {
            'backbone': {
                'deps': ['lodash', 'jquery'],
                'exports': 'Backbone'
            },
            'backbone.stickit': ['backbone']
        },
        paths: {

            // App specific
            'proxybox': 'core/proxybox',

            // 3rd-party (core)
            'jquery': '../lib/jquery/jquery.min',
            'lodash': '../lib/lodash/lodash.min',
            'backbone': '../lib/backbone/backbone-min',

            // 3rd-party (extensions)
            'text': '../lib/requirejs-text/text',
            'backbone.stickit': '../lib/backbone.stickit/backbone.stickit'
        },
        packages: [
            { name: 'when', location: '../lib/when', main: './when' }
        ]
    };

    if(typeof require !== 'undefined' && typeof require.config === 'function') {
        require.config(requireConfig);
    } else if(typeof exports === 'object') {
        module.exports = requireConfig;
    } else {
        global.require = requireConfig;
    }

})(this);
