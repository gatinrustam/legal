import gulp from 'gulp';
import path from "../config/path.js";
import newer from "gulp-newer";

const img = () => {
    return gulp.src(path.img.src, {encoding: false})
        .pipe(newer(path.img.dest))
        .pipe(gulp.dest(path.img.dest));
}

export default img;