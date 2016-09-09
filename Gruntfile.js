module.exports = function(grunt) {

grunt.initConfig({
  concat: {
    vendorjs: {
      src: ['node_modules/jquery/dist/jquery.js', 'node_modules/bootstrap/dist/js/bootstrap.js'],
      dest: 'build/js/vendor.js',
    },
    js: {
      src: ['js/main.js', 'js/about-us.js', 'js/contact-us.js', 'js/index.js', 'js/our-work.js', 'js/services.js'],
      dest: 'build/js/scripts.js',
    },
    vendorcss: {
      src: ['node_modules/bootstrap/dist/css/bootstrap.css'],
      dest: 'build/css/vendor.css',
    },
    css: {
      src: ['css/current/main.css', 'css/current/about-us.css', 'css/current/contact-us.css', 'css/current/index.css', 'css/current/our-work.css', 'css/current/services.css'],
      dest: 'build/css/styles.css',
    },
  },
    watch: {
  js: {
    files: ['js/**/*.js'],
    tasks: ['concat'],
  },
  css: {
    files: ['css/current/**/*.css'],
    tasks: ['concat'],
  },
},

  uglify: {
    js: {
      files: {
        'dist/scripts.min.js': ['build/js/scripts.js', 'build/js/vendor.js']
      },
    },
  },
  cssmin: {
  target: {
    files: [{
      expand: true,
      cwd: 'build/css',
      src: ['vendor.css', 'styles.css'],
      dest: 'dist',
      ext: '.min.css'
    }],
  },
},

});

grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);

grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-cssmin');


};