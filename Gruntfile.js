module.exports = function(grunt) {

    grunt.initConfig({

        requirejs: {
            modules: {
                options: {
                    appDir: 'src',
                    mainConfigFile: 'src/require.config.js',
                    baseUrl: '.',
                    dir: 'dist/',
                    skipDirOptimize: true,
                    optimizeCss: 'none',
                    optimize: 'uglify2',
                    modules: [{
                        name: 'view/moduleA/index',
                        exclude: ['backbone', 'hb']
                    }, {
                        name: 'view/moduleB/index',
                        exclude: ['backbone', 'hb']
                    }]
                }
            },
            main: {
                options: {
                    name: 'main',
                    out: 'dist/main.js',
                    mainConfigFile: 'src/require.config.js',
                    paths: {
                        handlebars: '../lib/handlebars/handlebars.runtime'
                    },
                    include: ['backbone', 'hb'],
                    optimize: 'uglify2'
                }
            }
        },

        watch: {
            js: {
                files: [
                    'src/**/*.js'
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
                'src/**/*.js'
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
                    cssDir: 'dist/css',
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
    grunt.registerTask('build', ['requirejs:modules', 'requirejs:main']);

};
