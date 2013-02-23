/**
 * RequireJS plugin to compile templates in build process (using r.js).
 *
 * During development, this delegates the request to the "text" plugin, and compiles the template.
 * After build, the template resources are pre-compiled and in-lined in the module that depends on it.
 *
 * Based on https://github.com/millermedeiros/requirejs-hogan-plugin
 *
 * Also see http://requirejs.org/docs/plugins.html
 */

define(['text', 'hogan'], function(text, hogan) {

    var buildCache = {};
    var buildCompileTemplate = 'define("{{pluginName}}!{{moduleName}}", ["hogan"], function(hogan){return new hogan.Template({{{fn}}});});';
    var buildTemplate;

    var load = function(name, parentRequire, load, config) {

        // Delegate normal resource loading to the "text" plugin.

        text.get(parentRequire.toUrl(name), function(data) {

            if(config.isBuild) {
                buildCache[name] = hogan.compile(data, {asString: true});
            }

            load(hogan.compile(data));

        });

    };

    var write = function(pluginName, name, write) {

        if(name in buildCache) {

            if(!buildTemplate) {
                buildTemplate = hogan.compile(buildCompileTemplate);
            }

            write(buildTemplate.render({
                pluginName: pluginName,
                moduleName: name,
                fn: buildCache[name]
            }));

        }

    };

    return {
        load: load,
        write: write
    };

});