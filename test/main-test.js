(function(global) {

    global.require.baseUrl = '../src/demo-app';
    global.require.paths['specs'] = '../../test/specs';

    global.require.deps = [
        'specs/model/modelA.spec'
    ];

    global.require.callback = function() {
        var env = jasmine.getEnv();
        env.addReporter(new jasmine.HtmlReporter);
        env.execute();
    };

})(this);
