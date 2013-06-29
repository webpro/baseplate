require(['../../src/app-demo/main'], function() {
    require.config({
        baseUrl: '../../src/app-demo',
        paths: {
            chai: '../../src/lib/chai/chai',
            specs: '../../test/mocha/specs'
        },
        deps: [
            'specs/model/modelA.spec'
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
