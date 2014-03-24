module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    jasmine : {
      src : ['jquery/jquery-1.8.3.min.js', 'ri.js'],
      options : {
        specs : 'jasmine/spec/**/*.js',
        template: require('grunt-template-jasmine-requirejs'),
        templateOptions: {
          requireConfig: {
            baseUrl: ''
          }
        }
      }
    },
    jshint: {
      all: [
        'Gruntfile.js',
        'ri.js',
        'jasmine/spec/**/*.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('test', ['jasmine']);

  grunt.registerTask('default', ['test']);

};