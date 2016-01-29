/*eslint-disable*/

var gulp = require('gulp');
var jspm = require('jspm');
var BrowserSync = require('browser-sync');
var replace = require('gulp-replace');

var browserSync = BrowserSync.create();
var dist = './dist';

gulp.task('jspm-bundle', function(done) {
  jspm.setPackagePath('.');
  jspm.bundleSFX('src/index', dist+'/main.js', {
    sourceMaps: false,
    minify: true,
    mangle: true
  }).then(() => {
      done();
  });
});

gulp.task('html-build', function() {
  gulp.src('index.html')
        .pipe(replace('<script type="text/javascript" src="jspm_packages/system.js"></script>', ''))
        .pipe(replace('<script type="text/javascript" src="config.js"></script>', ''))
        .pipe(replace('<script>System.import("src/index.js");</script>', '<script type="text/javascript" src="main.js"></script>'))
        .pipe(gulp.dest(dist));
});

gulp.task('server', function() {
    browserSync.init({
        server: './',
    });
    gulp.watch(['*.html', '*.css', 'app/**/*.js']
      , browserSync.reload);
});

gulp.task('build', ['jspm-bundle', 'html-build']);
