module.exports = function(grunt) {

    grunt.initConfig({

        requirejs: {
            bare: {
                options: {
                    name: 'main',
                    mainConfigFile: 'src/app-bare/main.js',
                    baseUrl: 'src/app-bare',
                    out: 'dist/app-bare/main.js'
                }
            },
            demo_core: {
                options: {
                    name: 'main',
                    mainConfigFile: 'src/app-demo/main.js',
                    baseUrl: 'src/app-demo',
                    out: 'dist/app-demo-core/core.min.js',
                    paths: {
                        requireLib: '../lib/requirejs/require'
                    },
                    include: ['requireLib', 'proxybox', 'text', 'hgn'],
                    optimize: 'uglify2',
                    inlineText: true,
                    onBuildRead: function(moduleName, path, contents) {
                        return contents.replace(/console\.(.*)/g, '');
                    }
                }
            },
            demo_app: {
                options: {
                    appDir: 'src/app-demo',
                    mainConfigFile: 'src/app-demo/main.js',
                    baseUrl: '.',
                    dir: 'dist/app-demo',
                    skipDirOptimize: true,
                    optimizeCss: 'none',
                    deps: ['../../dist/app-demo-core/core'],
                    modules: [{
                        name: 'view/moduleA/index',
                        exclude: ['proxybox', 'text', 'hgn']
                    }],
                    inlineText: true,
                    onBuildRead: function(moduleName, path, contents) {
                        return contents.replace(/console\.(.*)/g, '');
                    }
                }
            },
            cujo: {
                options: {
                    appDir: 'src',
                    mainConfigFile: 'src/app-cujo/main.js',
                    baseUrl: 'app-cujo',
                    dir: 'dist',
                    skipDirOptimize: true,
                    optimizeCss: 'none',
                    paths: {
                        'wire/build/amd/builder': 'lib/wire-amd-builder',
                        'wire/debug': '../lib/wire/wire'
                    },
                    modules: [{
                        name: 'main',
                        include: ['wire/lib/context', 'text', 'wire/domReady']
                    }, {
                        name: 'utils',
                        exclude: ['context/app', 'when']
                    }, {
                        name: 'view/moduleA/spec',
                        include: ['view/moduleA/index'],
                        exclude: ['utils', 'text']
                    }, {
                        name: 'view/moduleB/spec',
                        include: ['view/moduleB/index'],
                        exclude: []
                    }],
                    inlineText: true,
                    onBuildRead: function(moduleName, path, contents) {
                        return contents.replace(/console\.(.*)/g, '');
                    }
                }
            }
        },

        watch: {
            js: {
                files: [
                    'src/app-demo/**/*.js'
                ],
                tasks: ['jshint']
            },
            sass: {
                files: [
                    'src/scss/**/*.scss'
                ],
                tasks: ['compass:dev']
            }
        },

        jshint: {
            files: [
                'js/app-demo/**/*.js'
            ],
            options: {
                eqeqeq: true,
                unused: true
            }
        },

        compass: {
            dev: {
                options: {
                    config: 'config.rb'
                }
            },
            dist: {
                options: {
                    environment: 'production',
                    force: true,
                    config: 'config.rb',
                    outputStyle: 'compressed',
                    noLineComments: true
                }
            }
        }
    });

    grunt.task.registerTask('requirejs:demo_core_nomin', function() {
        var out = grunt.config.get('requirejs.demo_core.options.out');
        grunt.config.set('requirejs.demo_core.options.out', out.replace(/\.min/, ''));
        grunt.config.set('requirejs.demo_core.options.optimize', 'none');
        grunt.task.run('requirejs:demo_core')
    });

    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-compass');

    grunt.registerTask('default', ['jshint', 'compass:dev']);
    grunt.registerTask('build', ['requirejs:demo', 'compass:dist']);

};
