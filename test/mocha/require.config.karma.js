require(['base/src/app-demo/main'], function() {
    require.config({
        baseUrl: '/base/src/app-demo',
        paths: {
            chai: '../../src/lib/chai/chai',
            specs: '../../test/mocha/specs'
        },
        deps: [
            'specs/model/modelA.spec'
        ],
        callback: window.__karma__.start
    });
});
