require(['../../src/require.config'], function() {
    require.config({
        baseUrl: '../../src',
        paths: {
            chai: '../lib/chai/chai',
            specs: '../test/mocha/specs'
        },
        deps: [
            'specs/modelA.spec'
        ],
        callback: function() {
            mocha.setup('bdd');
            if(window.mochaPhantomJS) {
                mochaPhantomJS.run();
            } else {
                mocha.run();
            }
        }
    });
});
