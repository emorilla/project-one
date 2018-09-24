const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

// Compile Sass & Inject Into Browser
gulp.task('sass', function () {
  return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest('src/assets/css'))
    .pipe(browserSync.stream());
});

// Move JS Files to src/assets/js
gulp.task('js', function () {
  return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/popper.js/dist/umd/popper.min.js'])
    .pipe(gulp.dest('src/assets/js'))
    .pipe(browserSync.stream());
});

// Watch Sass & Server
gulp.task('serve', ['sass'], function () {
  browserSync.init({
    server: './src'
  });

  gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'], ['sass']);
  gulp.watch('src/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['js', 'serve']);