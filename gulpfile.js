var gulp = require("gulp"),
    less = require("gulp-less"),
    browserSync = require("browser-sync"),
    sourcemaps = require('gulp-sourcemaps'),
    fileinclude  = require('gulp-file-include'),
    path = {
        HTML : "./*.html",
        INCLUDE : "include/*.html",
        LESSFILE : "less/*.less",
        LESS : "less/feng.less",
        LESSBOOTSTRAPFILE : "less/bootstrap/**/*.less",
        LESSBOOTSTRAP : "less/bootstrap/bootstrap.less",
        IMAGES : "images/*",
        JS : "js/**/*.js"
    };

gulp.task("serve", ["less", "lessbootstrap", "js-watch", "images","include", "html"], function() {
    browserSync.init({
        server : "./dist/"
    });

    gulp.watch(path.LESSFILE, ["less"]);
    gulp.watch(path.LESSBOOTSTRAPFILE, ["lessbootstrap"]);
    gulp.watch(path.JS, ["js-watch"]);
    gulp.watch(path.IMAGES, ["images"]);
    gulp.watch(path.HTML, ["html"]);
    gulp.watch(path.HTML, ["include"]);
    gulp.watch(path.INCLUDE, ["html"]);
    gulp.watch(path.INCLUDE, ["include"]);
    gulp.watch(path.HTML).on("change", function() {
        browserSync.reload;
    });
});

gulp.task("less", function() {
    gulp.src(path.LESS)
        .pipe(less())
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
});

gulp.task("lessbootstrap", function() {
    gulp.src(path.LESSBOOTSTRAP)
        .pipe(less())
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
})

gulp.task("js-watch", function() {
    gulp.src(path.JS)
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream());
});

gulp.task("images", function() {
    gulp.src(path.IMAGES)
        .pipe(gulp.dest('dist/images'))
        .pipe(browserSync.stream());
});

gulp.task("html", function() {
    gulp.src(path.HTML)
    .pipe(browserSync.stream());
});

gulp.task('include', function() {
    gulp.src(path.HTML)
        .pipe(fileinclude({
          prefix: '@@',
          basepath: 'include/'
        }))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream());
});

gulp.task("default", ["serve"]);
