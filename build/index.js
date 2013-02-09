var requirejs = require('../node_modules/requirejs/bin/r.js');

var mainConfig = require('../src/demo-app/main');

var mainModuleIncludes = [
    'proxybox',
    'text'
];

var defaultModuleExcludes = [
    'proxybox',
    'text'
];

var config = {
    version: "0.0.1",
    appDir: "./src",
    dir: "dist",
    skipDirOptimize: true,
    optimizeCss: "none",
    modules: [{
        name: "main",
        include: mainModuleIncludes
    }, {
        name: "view/moduleA/index",
        exclude: defaultModuleExcludes
    }],
    inlineText: true,
    onBuildRead: function(moduleName, path, contents) {
        return contents.replace(/console\.(.*)/g, '');
    }
};

for(var prop in mainConfig) {
    if(!config[prop]) {
        config[prop] = mainConfig[prop];
    }
}

requirejs.optimize(config, function(buildResponse) {
    console.log(buildResponse);
});
