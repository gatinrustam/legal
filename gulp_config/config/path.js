const pathSrc = './src';
const pathDest = '../public';

export default {
    root: pathDest,
    html: {
        src: pathSrc + '/*.html',
        watch: pathSrc + '/html/**/*.html',
        watchIndex: pathSrc + '*.html',
        dest: pathDest
    },
    style: {
        src: [pathSrc + '/css/**/*.scss'],
        watch: pathSrc + '/css/**/*.scss',
        dest: pathDest + '/css/'
    },
    js: {
        src: pathSrc + '/js/**/*.js',
        watch: pathSrc + '/js/**/*.js',
        dest: pathDest + '/js/'
    },
    svg: {
        src: pathSrc + '/svg-icon/*.svg',
        watch: pathSrc + '/svg-icon/*.svg',
        dest: pathDest + '/svg-icon/'
    },
    img: {
        src: pathSrc + '/images/**/*.{png,jpg,jpeg,svg,mp4}',
        watch: pathSrc + '/images/**/*.{png,jpg,jpeg,svg,mp4}',
        dest: pathDest + '/images/'
    },
    font: {
        src: pathSrc + '/fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}',
        watch: pathSrc + '/fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}',
        dest: pathDest + '/fonts/'
    },
};