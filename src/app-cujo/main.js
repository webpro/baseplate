(function(global) {

    var cjsmCfg = { moduleLoader: 'curl/loader/cjsm11' };

    var config = {

        paths: {
            jquery: '../lib/jquery/jquery.min',
            lodash: '../lib/lodash/lodash.min',
            underscore: '../lib/lodash/lodash.min',
            text: '../lib/requirejs-text/text'
        },

        packages: [
            { name: 'curl',  location: '../lib/curl/src/curl' },
            { name: 'wire',  location: '../lib/wire',  main: 'wire' },
            { name: 'meld',  location: '../lib/meld',  main: 'meld' },
            { name: 'when',  location: '../lib/when',  main: 'when' },
            { name: 'backbone', location: '../lib/backbone', main: 'backbone-min', config: cjsmCfg }
        ],

        preloads: ['jquery']
    };

    curl(config, ['wire!wires/app']);

})(this);