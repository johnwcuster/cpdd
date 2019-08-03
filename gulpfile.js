"use strict";

var gulp = require("gulp"),
  // autoprefixer = require("autoprefixer"),
  // cleanCSS = require("gulp-clean-css"),
  // cssnano = require("gulp-cssnano"),
  del = require("del"),
  eslint = require("gulp-eslint"),
  postcss = require("gulp-postcss"),
  sourcemaps = require("gulp-sourcemaps"),
  sass = require("gulp-sass");


gulp.task("sass", function () {
  return gulp.src("./src/scss/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass.sync().on("error", sass.logError))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("./src/css"));
});


gulp.task("watchSass", function () {
  gulp.watch("./src/scss/**/*.scss", ["sass"]);
});


gulp.task("postcss", ["sass"], function () {
  return gulp.src("./src/css/**/*.css")
    .pipe( sourcemaps.init() )
    .pipe( postcss([ require("autoprefixer"), require("cssnano") ]) )
    .pipe( sourcemaps.write(".") )
    .pipe( gulp.dest("../aiddata4/css/dist") );
});

gulp.task("eslint", function(){
  return gulp.src("./src/js/**/*.js")
    .pipe(eslint({ fix: true }))
    .pipe(eslint.format())
    .pipe(gulp.dest("./src/js/."));
});

gulp.task("writeJS", ["eslint"], function(){
  return gulp.src("./src/js/**/*.js")
    .pipe(gulp.dest("./src/js/**/*.js"))
});

gulp.task("clean", function() {
  del(["dist", "./src/css/*"]);
  del(["dist", "./*.css"]);
  del(["dist", "./*.css.map"]);
});

gulp.task("default", ["clean"], function() {
  gulp.start("sass");
  gulp.start("postcss");
  gulp.start("writeJS");
});




