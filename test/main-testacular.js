(function(require, testacular) {

    require.config({
        baseUrl: '/base/src/app-demo',
        paths: {
            'specs': '../../test/specs'
        },
        deps: [
            '../../test/specs/model/modelA.spec'
        ],
        callback: testacular.start
    });

})(window.require, window.__testacular__);
