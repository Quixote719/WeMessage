//gulpfile.js
const gulp = require('gulp')
const path = require('path')
const shell = require('gulp-shell')
const del = require('del')
const rename = require('gulp-rename')

//目录常量
const SERVER_PATHS = {
    files: ['./server/**/*.js'],
    watchFiles: ['./server/**/*.js'],
    output: './build/server'
}

const STATIC_RES = {
    files: [path.resolve(__dirname, 'res', '**/*')],
    output: path.resolve(__dirname, 'build', 'www')
}

const PACKAGE_JSON = {
    files: [path.resolve(__dirname, 'package.json')],
    output: path.resolve(__dirname, 'build')
}

// gulp.task('copy-all', [
// 'copy-server',
// 'copy-resource',
// 'copy-template',
// 'copy-packageJson'
// ])

gulp.task('clean-build', function(cb) {
    return new Promise(resolve => {
        del([__dirname + '/build/**/*'], cb)
        resolve()
    })
})

//拷贝服务器文件
gulp.task('copy-server', () => {
    return gulp.src(SERVER_PATHS.files).pipe(gulp.dest(SERVER_PATHS.output))
})
//监视服务器文件变化
gulp.task(
    'watch-server',
    gulp.series('copy-server', () => {
        gulp.watch(SERVER_PATHS.watchFiles, ['copy-server'])
    })
)

//将res拷贝到build/www中
gulp.task('copy-resource', function() {
    return gulp.src(STATIC_RES.files).pipe(gulp.dest(STATIC_RES.output))
})

//将res和index.html拷贝到build/www中
gulp.task('copy-template', function() {
    return gulp
        .src(__dirname + '/index.html')
        .pipe(rename('__index__template__.html'))
        .pipe(gulp.dest(__dirname + '/build/www'))
})

//将res和index.html拷贝到build/www中
gulp.task('copy-packageJson', function() {
    return gulp.src(PACKAGE_JSON.files).pipe(gulp.dest(PACKAGE_JSON.output))
})

gulp.task(
    'git:diff',
    shell.task('git diff --name-status --cached HEAD > script/git_diff.log')
)

gulp.task(
    'copy-all',
    gulp.series(
        'copy-server',
        'copy-resource',
        'copy-template',
        'copy-packageJson',
        () => {
            return new Promise(resolve => {
                resolve()
            })
        }
    )
)
