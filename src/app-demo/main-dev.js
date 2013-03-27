require(['main'], function() {

    require.config({
        paths: {
            'jquery': '../lib/jquery/jquery',
            'lodash': '../lib/lodash/lodash',
            'backbone': '../lib/backbone/backbone'
        },
        packages: [
            { name: 'when', location: '../lib/when', main: './debug' }
        ]
    });

});
