'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var cnf = require('../package.json').config;
var notify = require("gulp-notify");
var plumber = require('gulp-plumber');
var fileinclude = require('gulp-file-include');


gulp.task('html', function() {
    return gulp.src(cnf.src.html)
        .pipe(plumber((plumber({ errorHandler: notify.onError("Error: <%= error.message %>") }))))
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest(cnf.dist.html));
});

gulp.task('html:watch', function() {
    gulp.watch('src/**/*.html', ['html']);
});