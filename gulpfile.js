var gulp = require('gulp');
var tsc = require('gulp-typescript-compiler');
var browserSync = require('browser-sync');

gulp.task('browser-sync', function() {
  browserSync.init(null, {
    server: {
      baseDir: "./"
    }
  });
});

gulp.task('typescript', function() {
  return gulp
    .src('app/main.ts', {read: false})
    .pipe(tsc({
      resolve: true
    }))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('default', ['typescript', 'browser-sync'], function() {
  gulp.watch('app/**/*.ts', ['typescript']);
});
