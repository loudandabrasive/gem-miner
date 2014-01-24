var gulp = require('gulp');
var concat = require('gulp-concat');
var handlebars = require('gulp-ember-handlebars');

gulp.task('templates', function(){
	gulp.src(['src/app/templates/**/*.hbs'])
		.pipe(handlebars({ }))
		.pipe(concat('templates.js'))
		.pipe(gulp.dest('src/app/'));
});

gulp.task('default', function() {
	gulp.run('templates');
});
