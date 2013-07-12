require(['base/src/require.config'], function() {
    require.config({
        baseUrl: '/base/src',
        paths: {
            specs: '../test/jasmine/specs'
        },
        deps: [
            'specs/modelA.spec'
        ],
        callback: window.__karma__.start
    });
});
