/**
  Gulpfile for Basic Web Service : x element task managing
  author : Ari Kekalainen <ari.kekalainen@gmail.com>
*/

var gulp = require('gulp');
var ts = require('gulp-typescript');
var tsConfig = require('./tsconfig.json');
var sequence = require("run-sequence");
var jade = require("gulp-jade");

var tsc = 'compile-ts';
var resourceToRelease = 'resources-to-release';
var jadec = 'jade';

// Source files
var sources = {
  tsFiles: ['./typescript/**/*.ts', "./bower_components/type-definitions/clientside.d.ts"],
  jadeFiles: ['./jade/**/*.jade']
};

var tsProject = ts.createProject(tsConfig.compilerOptions);

// TS compilation
gulp.task(tsc, function() {
  return gulp.src(sources.tsFiles)
      .pipe(ts(tsProject))
      .pipe(gulp.dest('release'));
});

// Jade
gulp.task(jadec, function() {
    return gulp.src(sources.jadeFiles)
        .pipe(jade())
        .pipe(gulp.dest('release'));
});
// Default task : do everything
gulp.task('default', function() {
  console.log("Gulp : Running default task : do everything !");

  sequence(
    // complile Ts files
    tsc,
    // Jade
    jadec
  );
});
