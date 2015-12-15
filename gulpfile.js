'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');


gulp.task('sass', function() {
  gulp.src('./sass/**/*.scss').
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});


gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('default', ['sass:watch'])
