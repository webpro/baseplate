require(['base/src/app-demo/main'], function() {
    require.config({
        baseUrl: '/base/src/app-demo',
        paths: {
            specs: '../../test/jasmine/specs'
        },
        deps: [
            'specs/modelA.spec'
        ],
        callback: window.__karma__.start
    });
});
