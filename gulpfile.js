const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const terser = require('gulp-terser');
const del = require('del');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const sourcemaps = require('gulp-sourcemaps');
const image = require('gulp-image');
const browserSync = require('browser-sync').create();




//scss файлы
const cssFiles = [
    './src/scss/main.scss',
    './src/scss/media.scss'
];

//js файлы
const jsFiles = [
    './src/js/lib.js',
    './src/js/main.js',
    './src/js/less6.js',
    './src/js/less8.js',
    './src/js/less9.js',
    './src/js/less10.js',
    './src/js/less11.js',
    './src/js/less12.js',
    './src/js/less13func.js',
    './src/js/less14callback.js',
    './src/js/less16this.js',
    './src/js/less17arrows.js'
];
//стили
function styles() {
    return gulp.src(cssFiles)
        .pipe(sourcemaps.init())
        .pipe(concat('style.scss'))
        .pipe(sass().on('error', sass.logError))

        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))

        .pipe(cleanCSS({
            level: 2
        }))
        .pipe(sourcemaps.write())
        //выходная папка для CSS файла
        .pipe(gulp.dest('./build/css'))
        .pipe(browserSync.stream());
}

//скрипты

function scripts() {
    return gulp.src(jsFiles)
        .pipe(sourcemaps.init())
        .pipe(concat('script.js'))
        //минификация
        .pipe(terser())
        .pipe(sourcemaps.write('./'))
        //выходная папка для JS файла
        .pipe(gulp.dest('./build/js'))
        .pipe(browserSync.stream());
}
//сжатие пикч
function images() {
    return gulp.src('./src/img/**')
    .pipe(image())
    .pipe(gulp.dest('./build/img/'))
}

//удалить лишние файлы
function clean(){
    return del(['build/*'])
}

//просмотр файлов
function watch(){
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('./src/img/**', images);
    gulp.watch('./src/scss/**/*.css', styles);
    gulp.watch('./src/scss/**/*.sass', styles);
    gulp.watch('./src/scss/**/*.scss', styles);
    gulp.watch('./src/js/**/*.js', scripts);
    gulp.watch("./*.html").on('change', browserSync.reload);

}

gulp.task('styles', styles);
gulp.task('scripts', scripts);
gulp.task('images', images);
gulp.task('watch', watch);
gulp.task('build', gulp.series(clean, gulp.parallel(styles, scripts, images)));
gulp.task('dev', gulp.series('build','watch'));