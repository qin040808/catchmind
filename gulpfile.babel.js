import gulp from "gulp";
import gulpSass from "gulp-sass";
import nodeSass from "node-sass";
import autoPrefixer from "gulp-autoprefixer";
import minifyCSS from "gulp-csso";

const sass = gulpSass(nodeSass);

export function styles() {
    return gulp
        .src("assets/scss/styles.scss")
        .pipe(sass())
        .pipe(autoPrefixer({
            cascade: false,
        }))
        .pipe(minifyCSS())
        .pipe(gulp.dest("src/static/styles"));
}
