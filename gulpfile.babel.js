
import gulp from 'gulp';

// Plugins
import browserSync from 'browser-sync';

// Config
import path from "./gulp_config/config/path.js";
import app from "./gulp_config/config/app.js";

// Tasks
import styles from './gulp_config/task/styles.js';
import js from './gulp_config/task/js.js';
import img from './gulp_config/task/img.js';
import font from './gulp_config/task/font.js';
import svg from './gulp_config/task/svg.js';
import html from './gulp_config/task/html.js';
import clear from './gulp_config/task/clear.js';

// Server
const server = () => {
    browserSync.init({
        server: {
            host: 'localhost',
            port: 8080,
            open: true,
            baseDir: path.root,
        },
    });
}

// Watchers
const watcher = () => {
    gulp.watch(path.style.src, styles).on('all', browserSync.reload);
    gulp.watch(path.js.watch, js).on('all', browserSync.reload);
    gulp.watch(path.img.watch, img).on('all', browserSync.reload);
    gulp.watch([path.html.watchIndex, path.html.watch, path.html.src], html).on('all', browserSync.reload);
    gulp.watch(path.svg.watch, svg).on('all', browserSync.reload);
}

const build = gulp.series(
    clear,
    gulp.parallel(html, styles, js, img)
);

const dev = gulp.series(
    build,
    gulp.parallel(watcher, server)
);

// tasks
export { watcher };
export { styles };
export { html };
export { js };
export { img };
export { font };

// build and dev
export default app.isProd ? build : dev;