import gulp from "gulp";
import gulpSass from "gulp-sass";
import nodeSass from "node-sass";

const sass = gulpSass(nodeSass);

export function styles() {
    return gulp
        .src("assets/scss/styles.scss")
        .pipe(sass())
        .pipe(gulp.dest("src/static/styles"));
}
