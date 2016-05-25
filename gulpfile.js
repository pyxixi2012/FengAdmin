
var gulp   = require('gulp'),
    livereload = require('gulp-livereload'),
  	concat = require('gulp-concat'), //合并文件
  	jshint = require('gulp-jshint'), //检测js
  	uglify = require('gulp-uglify'),//js压缩
  	rename = require('gulp-rename'), //重命名
  	minifycss = require('gulp-minify-css'); //css压缩
 
    gulp.task('default', function(){
        gulp.start('styles','scripts');
    });