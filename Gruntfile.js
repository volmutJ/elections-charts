/*jshint camelcase: false */
/*global module:false */
module.exports = function(grunt) {

    grunt.initConfig({
        uglify: {
            'dist/built.min.js': 'dist/built.js'
        },

        /*
         A simple ordered concatenation strategy.
         This will start at app/app.js and begin
         adding dependencies in the correct order
         writing their string contents into
         'build/application.js'

         Additionally it will wrap them in evals
         with @ sourceURL statements so errors, log
         statements and debugging will reference
         the source files by line number.

         You would set this option to false for
         production.
         */
        neuter: {
            options: {
                includeSourceURL: true
            },
            'build/application.js': 'js/app.js'
        },

        /*
         Watch files for changes.

         Changes in dependencies or js directories
         will trigger the neuter task.

         Changes to any templates will trigger the emberTemplates
         task (which writes a new compiled file into dependencies/)
         and then neuter all the files again.
         */
        watch: {
            application_code: {
                files: ['dependencies/**/*.js', 'js/**/*.js'],
                tasks: ['neuter']
            },
            handlebars_templates: {
                files: ['js/**/*.hbs'],
                tasks: ['emberTemplates', 'neuter']
            }
        },

        /*
         Reads the projects .jshintrc file and applies coding
         standards. Doesn't lint the dependencies (dependencies).
         */
        jshint: {
            all: ['Gruntfile.js', 'js/**/*.js', '!dependencies/*.*'],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        /*
         Finds Handlebars templates and precompiles them into functions.
         The provides two benefits:

         1. Templates render much faster
         2. We only need to include the handlebars-runtime microlib
         and not the entire Handlebars parser.

         Files will be written out to dependencies/compiled/templates.js
         which is required within the project files so will end up
         as part of our application.

         The compiled result will be stored in
         Ember.TEMPLATES keyed on their file path (with the 'app/templates' stripped)
         */
        emberTemplates: {
            options: {
                templateName: function(sourceFile) {
                    return sourceFile.replace(/js\/templates\//, '');
                }
            },
            'dependencies/compiled/templates.js': ["js/templates/**/*.hbs"]
        }
    });

    // grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-neuter');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-ember-templates');

    /*
     Default task. Compiles templates, neuters application code, and begins
     watching for changes.
     */
    grunt.registerTask('default', ['emberTemplates', 'neuter', 'watch']);
};
