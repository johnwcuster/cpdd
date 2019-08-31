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
    return src(['index.html', 'index2.html'])
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
