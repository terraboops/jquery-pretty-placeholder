module.exports = function (grunt) {
    grunt.initConfig({

    clean: ["bin/"],
    // define source files and their destinations
    uglify: {
        files: { 
            src: 'src/jquery.sexy-placeholder.js',  // source files mask
            dest: 'bin/',    // destination folder
            expand: true,    // allow dynamic building
            flatten: true,   // remove all unnecessary nesting
            ext: '.sexy-placeholder.min.js'   // replace .js to .min.js
        }
    },
    watch: {
        js:  { files: 'js/*.js', tasks: [ 'uglify' ] },
    },
    copy: {
      main: {
        files: [
          {expand: true, flatten: true, src: ['src/*.js'], dest: 'bin/', filter: 'isFile'}
        ]
      }
    },
    jshint: {
        all: ['Gruntfile.js', 'src/*.js']
    }
});

// load plugins
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-clean');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-contrib-jshint');

// register at least this one task
grunt.registerTask('default', [ 'clean', 'jshint', 'uglify', 'copy' ]);

};