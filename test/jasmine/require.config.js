require(['../../src/app-demo/main'], function() {
    require.config({
        baseUrl: '../../src/app-demo',
        paths: {
            specs: '../../test/jasmine/specs'
        },
        deps: [
            'specs/modelA.spec'
        ],
        callback: function() {
            var env = jasmine.getEnv();
            env.addReporter(new jasmine.HtmlReporter);
            env.execute();
        }
    });
});
