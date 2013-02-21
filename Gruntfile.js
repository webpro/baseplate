module.exports = function(grunt) {

    grunt.initConfig({

        requirejs: {
            compile: {
                options: {
                    version: '0.0.1',
                    appDir: 'src',
                    mainConfigFile: 'src/demo-app/main.js',
                    dir: 'dist',
                    skipDirOptimize: true,
                    optimizeCss: 'none',
                    modules: [{
                        name: 'main',
                        include: ['proxybox', 'text']
                    }, {
                        name: 'view/moduleA/index',
                        exclude: ['proxybox', 'text']
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
                    'src/demo-app/**/*.js'
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
                'js/demo-app/**/*.js'
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
    grunt.registerTask('build', ['requirejs', 'compass:dist']);

};
