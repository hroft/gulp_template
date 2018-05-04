'use strict';
var gulp = require('gulp');
var cnf = require('../package.json').config;
var notify = require("gulp-notify");
var plumber = require('gulp-plumber');
var cssnano = require('gulp-cssnano');
var rename = require("gulp-rename");
var importCss = require('gulp-import-css');
var babel = require('gulp-babel');
var include = require("gulp-include");
var uglify = require('gulp-uglify');

gulp.task('libs', function() {
    gulp.src(cnf.libs.css)
        .pipe(plumber((plumber({ errorHandler: notify.onError("Error: <%= error.message %>") }))))
        .pipe(importCss())
        .pipe(cssnano())
        .pipe(rename({
            dirname: "",
            basename: "libs",
            prefix: "",
            suffix: ".min",
            extname: ".css"
        }))
        .pipe(gulp.dest(cnf.dist.css));
    gulp.src(cnf.libs.js)
        .pipe(plumber((plumber({ errorHandler: notify.onError("Error: <%= error.message %>") }))))
        .pipe(babel())
        .pipe(include({
            extensions: "js",
            hardFail: true
        }))
        .pipe(uglify())
        .pipe(gulp.dest(cnf.dist.js))
});

gulp.task('libs:watch', function() {
    gulp.watch(['./src/css/libs/**/*.css', 'src/js/libs/**/*.js'], ['libs']);
    // gulp.watch([cnf.libs.js, cnf.libs.css], ['libs']);
});