require(['../../src/require.config'], function() {
    require.config({
        baseUrl: '../../src',
        paths: {
            specs: '../test/jasmine/specs'
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
