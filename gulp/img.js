var gulp = require('gulp');
var cnf = require('../package.json').config;
var notify = require("gulp-notify");
var plumber = require('gulp-plumber');
var imagemin = require('gulp-imagemin');


gulp.task('img', function() {
    gulp.src(cnf.src.img.noCompress)
        .pipe(imagemin([
            imagemin.gifsicle({ interlaced: true }),
            imagemin.jpegtran({ progressive: true }),
            imagemin.optipng({ optimizationLevel: 5 }),
            imagemin.svgo({
                plugins: [
                    { removeViewBox: false },
                    { cleanupIDs: false }
                ]
            })
        ]))
        .pipe(gulp.dest(cnf.dist.img));
    gulp.src(cnf.src.img.compress)
        .pipe(gulp.dest(cnf.dist.img));
});

// gulp.task('img:watch', function() {
//     gulp.watch([cnf.src.img, 'src/img/**/*.*'], ['img']);
// });
gulp.task('img:watch', function() {
    gulp.watch('./src/img/**/*.*', ['img']);
});