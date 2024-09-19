import gulp from 'gulp';
import path from "../config/path.js";

const svg = () => {
    return gulp.src(path.svg.src)
        .pipe(gulp.dest(path.svg.dest));
}

export default svg;