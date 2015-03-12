module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			dist: {
				src: ['public/js/app.js', 'public/js/layout.js'],
				dest: 'public/js/build/prod.js'
			}
		},
		jshint: {
			myFiles: ['public/js/*.js']
		},
		uglify: {
			build: {
				src: 'public/js/build/prod.js',
				dest: 'public/js/build/prod.min.js'
			}
		},
		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'public/img/',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'public/img/build/'
				}]
			}
		},
		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: {
					'public/css/build/main.css': 'public/css/main.scss'
				}
			}
		},
		watch: {
			scripts: {
				files: ['public/js/*.js'],
				tasks: ['concat', 'uglify', 'jshint']
			},
			images: {
				files: ['public/img/**/*.{png,jpg,gif}'],
				tasks: ['imagemin']
			},
			css: {
				files: ['public/css/*.scss'],
				tasks: ['sass']
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.registerTask('default', ['watch']);
}