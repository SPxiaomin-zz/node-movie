const gulp = require('gulp');
const nodemon = require('gulp-nodemon');

gulp.task('server', () => {
    nodemon({
        script: 'app.js'
    });
});
