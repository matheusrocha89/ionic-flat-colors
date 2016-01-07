'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var minify = require('gulp-minify');

gulp.task('js-concat', function() {
  return gulp.src('app/**/*.js')
    .pipe(concat('all.js'))
    .pipe(minify())
    .pipe(gulp.dest('js/'));
})

gulp.task('sass', function() {
  gulp.src('./sass/ionic-flat-doc.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'js-concat']);
