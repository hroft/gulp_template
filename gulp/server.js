var gulp = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "dist/"
        },
        files: ['dist/**/*.*']
    });
});