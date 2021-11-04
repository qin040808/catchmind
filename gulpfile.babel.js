import gulp from "gulp";
import gulpSass from "gulp-sass";
import nodeSass from "node-sass";
import autoPrefixer from "gulp-autoprefixer";
import minifyCSS from "gulp-csso";
import del from "del";
import bro from "gulp-bro";
import babel from "babelify";

const sass = gulpSass(nodeSass);

function clean() {
    return del(["src/static"]);
}

function styles() {
    return gulp
        .src("assets/scss/styles.scss")
        .pipe(sass())
        .pipe(autoPrefixer({
            cascade: false,
        }))
        .pipe(minifyCSS())
        .pipe(gulp.dest("src/static/styles"));
}

function watchMan() {
    gulp.watch("assets/scss/**/*.scss", styles);
}

const dev = gulp.series([clean, styles, watchMan]);
export default dev;