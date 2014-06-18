var gulp = require('gulp');
var tsc = require('gulp-typescript-compiler');

gulp.task('typescript', function() {
  return gulp
    .src('app/main.ts', {read: false})
    .pipe(tsc({
      resolve: true
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', function() {
  gulp.watch('app/**/*.ts', ['typescript']);
});
