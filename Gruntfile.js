module.exports = function(grunt) {

    grunt.initConfig({

        requirejs: {
            config: {
                options: {
                    appDir: 'src',
                    mainConfigFile: 'src/require.config.js',
                    baseUrl: '.',
                    dir: 'dist/',
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
                    }]
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
                'js/**/*.js'
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
    grunt.registerTask('build', ['requirejs:config']);

};
