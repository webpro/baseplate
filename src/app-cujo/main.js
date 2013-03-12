(function(global) {

    if(!(typeof require !== 'undefined' && require.config)) {
        require = {
            config: function(configObj) {
                global.require = configObj
            }
        }
    }

    require.config({
        deps: ['wire!context/app'],
        callback: function(context) {
            console.log(context);
        },
        shim: {
            'backbone': {
                'deps': ['lodash', 'jquery'],
                'exports': 'Backbone'
            }
        },
        paths: {
            jquery: '../lib/jquery/jquery.min',
            lodash: '../lib/lodash/lodash.min',
            backbone: '../lib/backbone/backbone-min',
            utils: 'lib/utils',
            text: '../lib/requirejs-text/text',
            'wire/domReady': '../lib/requirejs-domready/domReady'
        },
        packages: [
            { name: 'wire',  location: '../lib/wire',  main: 'wire' },
            { name: 'meld',  location: '../lib/meld',  main: 'meld' },
            { name: 'when',  location: '../lib/when',  main: 'when' }
        ]
    });

})(this);
