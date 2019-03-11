// gulpfile.js
var gulp = require('gulp')
var sass = require('gulp-sass')

// var concat = require('gulp-concat'), 
//     uglify = require('gulp-uglify'), 
//     rename = require('gulp-rename'), 
//     sourcemaps = require('gulp-sourcemaps') 



// 일반 컴파일
gulp.task('sass', function () {
  return gulp
    .src('./assets/sass/**/*.scss')  // 입력 경로
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/css'));  // 출력 경로
});

// 런타임 중 파일 감시
gulp.task('sass:watch', function () {
  gulp.watch('./assets/sass/**/*.scss', ['sass']);  // 입력 경로와 파일 변경 감지 시 실행할 Actions(Task Name)
});