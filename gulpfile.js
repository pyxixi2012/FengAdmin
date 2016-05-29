var gulp = require("gulp"),
    less = require("gulp-less"),
    browserSync = require("browser-sync"),
    sourcemaps = require('gulp-sourcemaps'),
    path = {
        HTML : "./*.html",
        LESSFILE : "less/*.less",
        LESS : "less/feng.less",
        LESSBOOTSTRAPFILE : "less/bootstrap/**/*.less",
        LESSBOOTSTRAP : "less/bootstrap.less",
        CSS : "css",
        JS : "js/*.js"
    };

gulp.task("serve", ["less", "lessbootstrap", "js-watch", "html"], function() {
    browserSync.init({
        server : "./"
    });

    gulp.watch(path.LESSFILE, ["less"]);
    gulp.watch(path.LESSBOOTSTRAPFILE, ["lessbootstrap"]);
    gulp.watch(path.JS, ["js-watch"]);
    gulp.watch(path.HTML, ["html"]);
    gulp.watch(path.HTML).on("change", function() {
        browserSync.reload;
    });
});

gulp.task("less", function() {
    gulp.src(path.LESS)
        .pipe(less())
        .pipe(gulp.dest(path.CSS))
        .pipe(browserSync.stream());
});

gulp.task("lessbootstrap", function() {
    gulp.src(path.LESSBOOTSTRAP)
        .pipe(less())
        .pipe(gulp.dest(path.CSS))
        .pipe(browserSync.stream());
})

gulp.task("js-watch", function() {
    gulp.src(path.JS)
    .pipe(browserSync.stream());
});

gulp.task("html", function() {
    gulp.src(path.HTML)
    .pipe(browserSync.stream());
});

gulp.task("default", ["serve"]);
