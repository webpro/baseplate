require(['../../src/require.config'], function() {
    require.config({
        baseUrl: '../../src',
        paths: {
            behaviors: '../test/mocha-behavior/specs'
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
