require(['../../src/app-demo/main'], function() {

    require.config({
        baseUrl: '../../src/app-demo',
        paths: {
            'behaviors': '../../test/behavior'
        },
        deps: [
            'behaviors/moduleA.behavior'
        ],
        callback: function() {
            var env = jasmine.getEnv();
            env.addReporter(new jasmine.HtmlReporter);
            env.execute();
        }
    });
});
