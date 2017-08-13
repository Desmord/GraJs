const gulp = require('gulp');
const del = require('del');
const browserSync = require('browser-sync');
const plumber = require('gulp-plumber');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const gulpAutoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');
const htmlmin = require('gulp-htmlmin');
const runSequence = require('run-sequence');



gulp.task('cleanJs', () => {
    return del('build/js/*.js');
});


gulp.task('updateJs', () => {

    console.log('Uaktualnianie plików Js.');

    return gulp.src(['dev/js/mainJs.js', 'dev/js/minrorJs.js'])
        .pipe(plumber())
        .pipe(babel({
            presets: ['es2015'],
            //minified: true
        }))
        .pipe(concat('mainJs.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build/js'));

});


gulp.task('watchJs', () => {

    console.log('Uruchamianie obserwowania plików Js.');

    gulp.watch('dev/js/*', ['updateJs', browserSync.reload]);

});

//-----------------------------------------------------------------

gulp.task('cleanScss', () => {
    return del('build/sass/*.scss');
});

gulp.task('updateScss', () => {

    console.log('Uaktualnianie plików Scss.')

    return gulp.src('dev/sass/mainScss.scss')
        .pipe(plumber())
        .pipe(sass.sync())
        .pipe(gulpAutoprefixer({
            browsers: ['last 5 versions', 'IE 9']
        }))
        .pipe(cssmin())
        .pipe(gulp.dest('build/css'))
        .pipe(browserSync.stream());

});


gulp.task('watchScss', () => {

    console.log('Uruchamianie obserwowania plików Scss.');

    gulp.watch('dev/sass/*', ['updateScss']);

});

//--------------------------------------------------------

gulp.task('cleanHTML', () => {
    return del('build/*');
});


gulp.task('updateHTML', () => {

    console.log('Uaktualnianie pliku index.html.');

    return gulp.src('dev/index.html')
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('build/'));

});


gulp.task('watchHTML', () => {

    console.log('Uruchamianie obserwowania pliku index.html.');

    gulp.watch('dev/index.html', ['updateHTML', browserSync.reload]);

});

//---------------------------------------------------------------
gulp.task('serwer', () => {

	console.log('Uruchamianie automatycznego odswieżania plików.');

	browserSync.init({
		server: 'build/'
	});

});



gulp.task('build', () => {
	runSequence('cleanHTML','cleanScss','cleanJs','updateHTML','updateScss','updateJs','watchScss','watchJs','watchHTML','serwer');
});
