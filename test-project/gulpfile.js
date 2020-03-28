'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
const changed = require('gulp-changed');


var SCSS_SRC = 'src/assets/scss/**/*.scss'
var SCSS_DEST = 'src/assets/css'



gulp.task('compile_scss', function () {

    return gulp.src(SCSS_SRC)
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(changed(SCSS_DEST))
        .pipe(gulp.dest(SCSS_DEST));


});
// gulp.task('compile_scss', function () {
//     return gulp.src('./sass/**/*.scss')
//         .pipe(sass().on('error', sass.logError))
//         .pipe(gulp.dest('./css'));
// });

gulp.task('watch_scss', function () {
    gulp.watch(SCSS_SRC, gulp.series("compile_scss"))
    console.log('running');

});


gulp.task('default', gulp.series("watch_scss"));