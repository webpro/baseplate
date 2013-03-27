require.config({
    deps: ['jquery', 'lodash', 'backbone'],
    callback: function() {
        console.log(arguments);
    },
    shim: {
        'backbone': {
            'deps': ['lodash', 'jquery'],
            'exports': 'Backbone'
        }
    },
    paths: {
        'jquery': '../lib/jquery/jquery.min',
        'lodash': '../lib/lodash/lodash.min',
        'backbone': '../lib/backbone/backbone-min'
    }
});
