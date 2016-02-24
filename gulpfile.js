var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./dev"
        }
    });

    gulp.watch("dev/*").on('change', browserSync.reload);
});