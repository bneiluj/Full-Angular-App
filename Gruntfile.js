module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        app: {
            basePath: 'public',
            jsPath: '<%= app.basePath %>/app',
            testPath: '<%= app.basePath %>/test',
            sassPath: '<%= app.basePath %>/scss',
            cssPath: '<%= app.basePath %>/css'
        },

        watch: {
            options: {
                livereload: true
            },
            sass: {
                files: ['<%= app.cssPath %>/**/*.{scss,sass}'],
                tasks: ['sass']
            },
            css: {
                files: ['<%= app.cssPath %>/styles.css']
            },
            js: {
                files: [
                    '<%= app.jsPath %>/**/*.js',
                    '<%= app.testPath %>/**/*.js',
                    'Gruntfile.js'
                ],
                livereload: true,
                tasks: ['lint', 'karma']
            }
        },

        sass: {
            dist: {
                options: {
                    sourcemap: true,
                    style: 'compressed'
                },
                files: {
                    '<%= app.cssPath %>/styles.css': '<%= app.cssPath %>/styles.scss'
                }
            }
        },

        jslint: {
            client: {
                src: [
                    'Gruntfile.js',
                    '<%= app.jsPath %>/**/*.js',
                    '<%= app.testPath %>/**/*.js'
                ],
                directives: {
                    // angular: true,
                    todo: true,
                    unparam: true,
                    nomen: true,
                    node: true,
                    globals: ['angular', '_']
                }
            }
        },

        jscs: {
            all: {
                options: {
                    config: '.jscsrc'
                },
                src: [
                    'Gruntfile.js',
                    '<%= app.jsPath %>/**/*.js',
                    '<%= app.testPath %>/**/*.js'
                ]
            }
        },

        karma: {
            unit: {
                configFile: 'karma.conf.js',
                singleRun: true,
                autoWatch: false
            }
        },

        protractor_webdriver: {
            e2e: {
                options: {
                    path: './node_modules/protractor/bin/',
                    command: 'webdriver-manager start'
                }
            }
        },

        protractor: {
            options: {
                keepAlive: false,
                noColor: false
            },
            e2e: {
                options: {
                    configFile: 'protractor.conf.js'
                }
            }
        },

        shell: {
            webdriverUpdate: {
                options: {
                    stdout: true
                },
                command: './node_modules/protractor/bin/webdriver-manager update --standalone --chrome'
            }
        },

        express: {
            all: {
                options: {
                    port: 9000,
                    hostname: '0.0.0.0',
                    bases: '<%= app.basePath %>',
                    livereload: false
                }
            },
            test: {
                options: {
                    port: 9001,
                    hostname: '0.0.0.0',
                    bases: '<%= app.basePath %>',
                    livereload: false,
                    keepalive: false
                }
            }
        },

        open: {
            all: {
                path: 'http://localhost:<%= express.all.options.port%>'
            }
        }
    });

    // Load tasks
    require('load-grunt-tasks')(grunt);

    // Register tasks
    grunt.registerTask('default');
    grunt.registerTask('unit', ['karma']);
    grunt.registerTask('e2e', [
        'express:test',
        'shell:webdriverUpdate',
        'protractor_webdriver',
        'protractor'
    ]);
    grunt.registerTask('lint', ['jslint']);
    grunt.registerTask('test', ['lint', 'unit', 'e2e']);
    grunt.registerTask('server', [
        'express',
        'open',
        'watch'
    ]);

};
