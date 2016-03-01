var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./dev"
        }
    });

    gulp.watch("dev/*").on('change', browserSync.reload);
});