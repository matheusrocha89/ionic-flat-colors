'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var nano = require('gulp-cssnano');
var rename = require('gulp-rename');


gulp.task('sass', function() {
  return gulp.src('./sass/ionic-flat.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(nano())
    .pipe(gulp.dest('./dist/css/'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('default', ['sass'])
