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
        mocha.run();
    }
});
