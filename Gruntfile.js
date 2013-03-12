module.exports = function(grunt) {

    grunt.initConfig({

        requirejs: {
            bare: {
                options: {
                    appDir: 'src',
                    mainConfigFile: 'src/app-bare/main.js',
                    baseUrl: 'app-bare',
                    dir: 'dist',
                    skipDirOptimize: true,
                    optimizeCss: 'none',
                    name: 'main'
                }
            },
            demo: {
                options: {
                    appDir: 'src',
                    mainConfigFile: 'src/app-demo/main.js',
                    baseUrl: 'app-demo',
                    dir: 'dist',
                    skipDirOptimize: true,
                    optimizeCss: 'none',
                    modules: [{
                        name: 'main',
                        include: ['proxybox', 'text', 'hgn']
                    }, {
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
                    cssDir: 'dist/css',
                    sassDir: 'dist/scss',
                    outputStyle: 'compressed',
                    noLineComments: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-compass');

    grunt.registerTask('default', ['jshint', 'compass:dev']);
    grunt.registerTask('build', ['requirejs:demo', 'compass:dist']);

};
