require(['../../src/main'], function() {

    require.config({
        baseUrl: '../../src',
        paths: {
            'behaviors': '../test/jasmine-behavior/specs'
        },
        deps: [
            'behaviors/moduleA.behavior',
            'behaviors/moduleB.behavior'
        ],
        callback: function() {
            var env = jasmine.getEnv();
            env.addReporter(new jasmine.HtmlReporter);
            env.execute();
        }
    });
});
