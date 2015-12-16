'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var minify = require('gulp-minify-css');
var rename = require('gulp-rename');


gulp.task('sass', function() {
  gulp.src('./sass/ionic-flat.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('css-minify', function() {
  gulp.src('./dist/css/ionic-flat.css')
    .pipe(minify())
    .pipe(rename({
      'suffix': '.min'
    }))
    .pipe(gulp.dest('./dist/css/'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'css-minify'])
