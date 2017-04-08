module.exports = function(grunt){


	// configuration
	grunt.initConfig({
		concat: {
		    js: {
		      src: ['js/*.js'],
		      dest: 'builds/build.js',
		    },
		    css: {
		      src: ['css/*.css'],
		      dest: 'builds/build.css',
		    }
		},
		cssmin: {
		  target: {
		    files: [{
		      expand: true,
		      src: ['builds/*.css', '!*.min.css'],
		      dest: '',
		      ext: '.min.css'
		    }]
		  }
		},
		uglify: {
		    my_target: {
		      files: {
		        'js/app.js': ['js/app.js']
		      }
		    }
		  }

	});
	// load plugins
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// Register tasks
	grunt.registerTask('concat-js','concat:js');
	grunt.registerTask('concat-css','concat:css');
};