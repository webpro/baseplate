(function(global) {

    global.require.baseUrl = '../../src/demo-app';
    global.require.paths['behaviors'] = '../../test/behavior';

    global.require.deps = [
        'behaviors/moduleA.behavior'
    ];

    global.require.callback = function() {
        var env = jasmine.getEnv();
        env.addReporter(new jasmine.HtmlReporter);
        env.execute();
    };

})(this);
