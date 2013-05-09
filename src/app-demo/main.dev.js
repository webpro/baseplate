require(['main'], function() {

    require.config({
        paths: {
            jquery: '../lib/jquery/jquery',
            lodash: '../lib/lodash/lodash',
            backbone: '../lib/backbone/backbone',
            hogan: '../lib/hogan/web/builds/2.0.0/hogan-2.0.0.amd'
        },
        packages: [
            { name: 'when', location: '../lib/when', main: './debug' }
        ]
    });

});
