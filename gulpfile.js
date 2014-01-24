var gulp = require('gulp');
var concat = require('gulp-concat');
var handlebars = require('gulp-ember-handlebars');

gulp.task('vendor', function(){
	gulp.src(['src/vendor/jquery.js', 'src/vendor/handlebars.js', 'src/vendor/ember.js', 
		'src/vendor/ember-data.js', 'src/vendor/ember-localstorage-adapter.js'])
		.pipe(concat('vendor.js'))
		.pipe(gulp.dest('src/'));
});

gulp.task('scripts', function(){
	gulp.src(['src/app/**/*.js'])
		.pipe(concat('all.js'))
		.pipe(gulp.dest('src/'));
});

gulp.task('templates', function(){
	gulp.src(['src/app/templates/**/*.hbs'])
		.pipe(handlebars({ }))
		.pipe(concat('templates.js'))
		.pipe(gulp.dest('src/'));
});

gulp.task('default', function() {
	gulp.run('vendor', 'scripts', 'templates');
});
