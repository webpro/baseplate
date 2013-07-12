require(['../../src/app-demo/main'], function() {
    require.config({
        baseUrl: '../../src/app-demo',
        paths: {
            chai: '../../src/lib/chai/chai',
            behaviors: '../../test/mocha-behavior/specs'
        },
        deps: [
            'behaviors/moduleA.behavior',
            'behaviors/moduleB.behavior'
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
