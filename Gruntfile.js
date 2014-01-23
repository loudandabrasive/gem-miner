module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-ember-templates');

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		watch: {
			emberTemplates: {
				files: 'src/app/*.hbs',
				tasks: ['emberTemplates']
			}	
		},
		emberTemplates: {
			compile: {
				options: {
					templateBasePath: /src\/app\/templates\//
				},
				files: {
				"src/app/templates.js": ["src/app/templates/**/*.hbs"]
				}
			}	
		}
	});

	grunt.registerTask('default', 'emberTemplates');
};