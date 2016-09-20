module.exports = function (grunt) {
    var browsers = [{
        browserName: "internet explorer",
        version: "7",
        platform: "XP"
    },
    {
        browserName: "internet explorer",
        version: "6",
        platform: "XP"
    },
    {
        browserName: "internet explorer",
        version: "8",
        platform: "WIN7"
    },
    {
        browserName: "internet explorer",
        version: "8",
        platform: "XP"
    },
    {
        browserName: "internet explorer",
        platform: "VISTA",
        version: "9"
    },
    {
        browserName: "internet explorer",
        version: "9",
        platform: "WIN7"
    },
    {
        browserName: "firefox",
        version: "4",
        platform: "XP"
    },
    {
        browserName: "firefox",
        version: "5",
        platform: "XP"
    },
    {
        browserName: "chrome",
        platform: "XP"
    },
    {
        browserName: "chrome",
        platform: "linux"
    },
    {
        browserName: "internet explorer",
        platform: "WIN8",
        version: "10"
    }];
    grunt.initConfig({

    uglify: {
        files: {
            src: 'src/jquery.pretty-placeholder.js',
            dest: 'bin/',
            expand: true,
            flatten: true,
            ext: '.pretty-placeholder.min.js'
        }
    },
    'saucelabs-jasmine': {
        all: {
            options: {
                urls: ["http://127.0.0.1:9999/test/SpecRunner.html"], 
                tunnelTimeout: 5,
                build: process.env.TRAVIS_JOB_ID,
                concurrency: 3,
                browsers: browsers,
                testname: "jQuery Pretty Placeholder",
                tags: ["master"]
            }
        }
    },
    connect: {
      server: {
        options: {
          base: "",
          port: 9999
        }
      }
    },
    watch: {},
    copy: {
      main: {
        files: [
          {expand: true, flatten: true, src: ['src/*.js'], dest: 'bin/', filter: 'isFile'}
        ]
      }
    },
    jshint: {
        all: ['Gruntfile.js', 'spec/*.js', 'src/*.js']
    },
    clean: ["bin/"]
});

// load plugins
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-saucelabs');
grunt.loadNpmTasks('grunt-contrib-connect');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-clean');

// register at least this one task
grunt.registerTask('default', [ 'clean', 'jshint', 'uglify', 'copy' ]);
grunt.registerTask('dev', ['connect', 'watch']);
grunt.registerTask("test", ["connect", 'jshint', "saucelabs-jasmine"]);
};