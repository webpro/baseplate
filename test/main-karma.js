(function(require, karma) {

    require.config({
        baseUrl: '/base/src/app-demo',
        paths: {
            'specs': '../../test/specs'
        },
        deps: [
            '../../test/specs/model/modelA.spec'
        ],
        callback: karma.start
    });

})(window.require, window.__karma__);
