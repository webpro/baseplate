require(['base/src/main'], function() {
    require.config({
        baseUrl: '/base/src',
        paths: {
            chai: '../lib/chai/chai',
            specs: '../test/mocha/specs'
        },
        deps: [
            'specs/modelA.spec'
        ],
        callback: window.__karma__.start
    });
});
