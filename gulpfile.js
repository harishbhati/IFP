var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
     gulp.src(['src/scss/*.scss'])
       	 .pipe(sass({
            sourceComments: true,
            outputStyle: 'expanded',
            errLogToConsole: true
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task( 'watch', ['sass'], function () {
    var sassWatcher = gulp.watch(['src/scss/*.scss'], ['sass']);
});
gulp.task('default', ['sass', 'watch' ])