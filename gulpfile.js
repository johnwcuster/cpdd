// initialize modules
const {src, dest, watch, series, parallel} = require("gulp"),
  autoprefixer = require("autoprefixer"),
  // cleanCSS = require("gulp-clean-css"),
  cssnano = require("cssnano"),
  concat = require("gulp-concat"),
//  eslint = require("gulp-eslint"),
  postcss = require("gulp-postcss"),
  replace = require("gulp-replace"),
  sass = require("gulp-sass"),
  // scss_lint = require("gulp-stylelint"),
  sourcemaps = require("gulp-sourcemaps"),
  uglify = require("gulp-uglify");

// file path variables
const files = {
  scssPath: "./src/scss/**/*.scss",
  jsPath: "./src/js/**/*.js"
}

// sass task
function scssTask(){
    return src(files.scssPath)
        .pipe(sourcemaps.init())
        .pipe(sass())
        // .pipe(scss_lint({
        //   reporters: [
        //     {formatter: 'string', console: true}
        //   ]
        // }))
        .pipe(postcss([ autoprefixer(), cssnano() ]))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('dist')
    );
}

// JS Task
function jsTask(){
    return src([files.jsPath])
        .pipe(concat('all.js'))
        // .pipe(uglify())
        .pipe(dest('dist')
    );
}

// Cache busting task
var cbString = new Date().getTime();
function cacheBustTask(){
    return src(['index.html'])
        .pipe(replace(/\?cb=\d+/g, '?cb=' + cbString))
        .pipe(dest('.'));
}


// Watch Task
function watchTask(){
    watch(
        [files.scssPath, files.jsPath],
        parallel(scssTask, jsTask)
    );
}

// Default Task
exports.default = series(
  parallel(scssTask, jsTask),
  cacheBustTask,
  watchTask
);


// "use strict";
//
// const gulp = require("gulp"),
//   // autoprefixer = require("autoprefixer"),
//   // cleanCSS = require("gulp-clean-css"),
//   // cssnano = require("gulp-cssnano"),
//   del = require("del"),
//   eslint = require("gulp-eslint"),
//   postcss = require("gulp-postcss"),
//   sourcemaps = require("gulp-sourcemaps"),
//   sass = require("gulp-sass");
//
//
// gulp.task("sass", function (done) {
//   return gulp.src("./src/scss/**/*.scss")
//     .pipe(sourcemaps.init())
//     .pipe(sass.sync().on("error", sass.logError))
//     .pipe(sourcemaps.write("."))
//     .pipe(gulp.dest("./src/css"));
//     done();
// });
//
//
// gulp.task("watchSass", function (done) {
//   gulp.watch("./src/scss/**/*.scss", ["sass"]);
//   done();
// });
//
//
// // problem
// // gulp.task("postcss", ["sass"], function () {
// //   return gulp.src("./src/css/**/*.css")
// //     .pipe( sourcemaps.init() )
// //     .pipe( postcss([ require("autoprefixer"), require("cssnano") ]) )
// //     .pipe( sourcemaps.write(".") )
// //     .pipe( gulp.dest("./src/css") );
// // });
//
// gulp.task("postcss", gulp.series("sass", function(done){
//   return gulp.src("./src/css/**/*.css")
//     .pipe( sourcemaps.init() )
//     .pipe( postcss([ require("autoprefixer"), require("cssnano") ]) )
//     .pipe( sourcemaps.write(".") )
//     .pipe( gulp.dest("./src/css") );
//     done();
// }));
//
//
// gulp.task("eslint", function(done){
//   return gulp.src("./src/js/**/*.js")
//     .pipe(eslint({ fix: true }))
//     .pipe(eslint.format())
//     .pipe(gulp.dest("./src/js/."));
//     done();
// });
//
// // problem
// // gulp.task("writeJS", ["eslint"], function(){
// //   return gulp.src("./src/js/**/*.js")
// //     .pipe(gulp.dest("./src/js/**/*.js"))
// // });
//
// gulp.task("writeJS", gulp.series("eslint", function(done){
//   return gulp.src("./src/js/**/*.js")
//     .pipe(gulp.dest("./src/js/**/*.js"))
//     done();
// }));
//
//
// gulp.task("clean", function(done) {
//   del(["dist", "./src/css/*"]);
//   del(["dist", "./*.css"]);
//   del(["dist", "./*.css.map"]);
//   done();
// });
//
// // problem
// //
// // gulp.task("default", ["clean"], function() {
// //   gulp.start("sass");
// //   gulp.start("postcss");
// //   gulp.start("writeJS");
// // });
// //
// gulp.task("default", gulp.series("clean", function(done){
//   gulp.parallel(gulp.series("sass", "postcss"), "writeJS");
//   // gulp.start("sass");
//   // gulp.start("postcss");
//   // gulp.start("writeJS");
//   done();
// }));
