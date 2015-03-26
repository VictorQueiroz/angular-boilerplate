var _ = require('underscore');
var gulp = require('gulp');
var jade = require('gulp-jade');
var sass = require('gulp-ruby-sass');
var concat = require('gulp-concat');
var wiredep = require('wiredep').stream;
var livereload = require('gulp-livereload');
var ngTemplates = require('gulp-ng-templates');

var paths = {
  scripts: ['sources/scripts/**/*.js'],
  templates: ['sources/scripts/**/*.jade'],
  stylesheets: ['sources/{stylesheets,scripts}/**/*.scss']
};

gulp.task('scripts', function () {
  gulp.src(paths.scripts)
    .pipe(concat('app.js'))
    .pipe(gulp.dest('public/js'));
});

gulp.task('stylesheets', function () {
  gulp.src('sources/stylesheets/app.scss')
    .pipe(sass())
    .pipe(gulp.dest('public/css'));
});

gulp.task('templates', function () {
  gulp.src(paths.templates)
    .pipe(jade())
    .pipe(ngTemplates({
      module: 'app',
      filename: 'templates.js',
      standalone: false
    }))
    .pipe(gulp.dest('public/js'));
});

gulp.task('watch', function () {
  _.forEach(paths, function (value, key) {
    gulp.watch(value, [key]);
  });
});

gulp.task('livereload', function () {
  livereload.listen();

  gulp.watch('public/{css,js}/**/*.{js,css}').on('change', livereload.changed);
});

gulp.task('wiredep', function () {
  gulp.src('app/views/index.html')
    .pipe(wiredep({
      exclude: ['public/lib/bootstrap-sass-official/assets/javascripts/bootstrap.js'],
      ignorePath: '../../public/'
    }))
    .pipe(gulp.dest('app/views'));
});

gulp.task('default', ['watch', 'livereload', 'wiredep']);
