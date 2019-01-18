const gulp = require('gulp')

require('./tasks/dist-post-process')
require('./tasks/ts-types')
require('./tasks/package-meta')
require('./tasks/archive')

// assumes a clean build already happened
gulp.task('dist', [
  'dist-post-process',
  'ts-types',
  'package-meta'
])

// require('./tasks/lint')
// require('./tasks/bump')
// require('./tasks/example-repos')
// // group these somewhat unrelated tasks together for CI
// gulp.task('lint-and-example-repos', [ 'lint', 'example-repos:build' ])
