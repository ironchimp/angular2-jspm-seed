var gulp = require('gulp');

gulp.task('default', gulp.series(
  'build'
  // ,gulp.parallel('browser-sync', 'watch', 'test')
));

gulp.task('dev', gulp.series(
    'build'
    ,gulp.parallel('browser-sync', 'watch')
));
