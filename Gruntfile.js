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
            demo: {
                options: {
                    appDir: 'src/app-demo',
                    mainConfigFile: 'src/app-demo/main.js',
                    baseUrl: '.',
                    dir: 'dist/app-demo',
                    skipDirOptimize: true,
                    optimizeCss: 'none',
                    modules: [{
                        name: 'main',
                        include: ['backbone', 'backbone.stickit', 'hgn']
                    }, {
                        name: 'view/moduleA/index',
                        exclude: ['backbone', 'hgn']
                    }, {
                        name: 'view/moduleB/index',
                        exclude: ['backbone', 'hgn', 'backbone.stickit']
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

    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-compass');

    grunt.registerTask('default', ['jshint', 'compass:dev']);

};
