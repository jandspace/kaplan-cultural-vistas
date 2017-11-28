
var projectName = "038_staffsupport";
var lang = "en";


var gulp = require('gulp'),
i18n = require('gulp-i18n-localize');


gulp.task('localize', function () {
    return gulp.src('elandww/master/index.html')
        .pipe(i18n({
            locales: ['en'],
            localeDir: 'gulp/locales'
        }))
        .pipe(gulp.dest('elandww/transilation'));
});






