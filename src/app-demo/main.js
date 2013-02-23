(function(global) {

    if(!(typeof require !== 'undefined' && require.config)) {
        require = {
            config: function(configObj) {
                global.require = configObj
            }
        }
    }

    require.config({
        baseUrl: 'app-demo',
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
            'hgn': 'core/lib/requirejs-hogan',

            // 3rd-party (core)
            'jquery': '../lib/jquery/jquery.min',
            'lodash': '../lib/lodash/lodash.min',
            'backbone': '../lib/backbone/backbone-min',
            'hogan': '../lib/hogan/web/builds/2.0.0/hogan-2.0.0.min.amd',

            // 3rd-party (extensions)
            'text': '../lib/requirejs-text/text',
            'backbone.stickit': '../lib/backbone.stickit/backbone.stickit'
        },
        packages: [
            { name: 'when', location: '../lib/when', main: './when' }
        ]
    });

})(this);
