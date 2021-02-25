var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

gulp.task('browserSync', function(){
  
  browserSync.init({
    server: "./"
  });
	gulp.watch('src/sass/**/*.scss', gulp.series('sass'));
});

gulp.task('sass', function () {
  return gulp.src('src/sass/**/*.scss')
    .pipe(sass({
        outputStyle: 'expanded'
      }).on('error', sass.logError))
    .pipe(autoprefixer(['last 99 versions'], { cascade: true }))
    .pipe(gulp.dest('src/'))
    .pipe(browserSync.stream());
});

gulp.task('default', gulp.series('browserSync'));