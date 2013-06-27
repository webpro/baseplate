require(['base/src/app-demo/main'], function() {
    require.config({
        baseUrl: '/base/src/app-demo',
        paths: {
            specs: '../../test/specs'
        },
        deps: [
            'specs/model/modelA.spec'
        ],
        callback: window.__karma__.start
    });
});
