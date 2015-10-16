'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    minifyCss = require('gulp-minify-css'),
    insert = require('gulp-insert'),
    del = require('del')
    ;

var header = '/*! ' + (new Date()).toISOString() + ' prune.css | Apache 2.0 License | github.com/Addvilz/prune.css */';

gulp.task('sass', function () {

    var files = [
        './node_modules/normalize.css/normalize.css',
        './src/sass/**/*.scss'
    ];

    var options = {
        precision: 8
    };

    gulp.src(files)
        .pipe(concat('prune.css'))
        .pipe(sass(options).on('error', sass.logError))
        .pipe(insert.prepend(header + "\n"))
        .pipe(gulp.dest('./dist/css'))
    ;
});

gulp.task('minify', ['cleanup:min'], function () {
    var options = {
        compatibility: 'ie8',
        keepSpecialComments: '*'
    };

    return gulp.src('./dist/css/prune.css')
        .pipe(minifyCss(options))
        .pipe(concat('prune.min.css'))
        .pipe(gulp.dest('./dist/css/'))
        ;
});

gulp.task('cleanup:min', function () {
    return del([
        './dist/css/prune.min.css'
    ]);
});

gulp.task('default', ['sass'], function () {
});