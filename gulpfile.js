var gulp = require('gulp');
//var rimraf = require('gulp-rimraf');
var rename = require('gulp-rename');
var sass = require('gulp-sass');

gulp.task('copy', [], function() {

    //copy lodash for navigation use
    gulp.src('bower_components/lodash/lodash.js')
        .pipe(gulp.dest('src/main/webapp/resources/lib/'));

    // copy styleguide
    gulp.src(['bower_components/style-guide-bower/css/*.scss', '!bower_components/style-guide-bower/css/project.scss'])
        .pipe(gulp.dest('src/main/webapp/resources/css/'));

    //styleguide fonts
    gulp.src('bower_components/style-guide-bower/fonts/*.*')
        .pipe(gulp.dest('src/main/webapp/resources/fonts/'));
    gulp.src('bower_components/style-guide-bower/fonts/bootstrap/*.*')
        .pipe(gulp.dest('src/main/webapp/resources/fonts/bootstrap/'));

    //sidemenu directive from style-guide
    gulp.src('bower_components/style-guide-bower/scripts/directives/uc-sidemenu.js')
        .pipe(gulp.dest('src/main/webapp/resources/lib/'));

    //services from style-guide
    gulp.src('bower_components/style-guide-bower/scripts/services/*.js')
        .pipe(gulp.dest('src/main/webapp/resources/common/services/'));

    //bootstrap sass components
    gulp.src('bower_components/bootstrap-sass/assets/stylesheets/bootstrap/**')
        .pipe(gulp.dest('./src/main/webapp/resources/css/bootstrap/'));

    gulp.src('bower_components/angular/angular.js')
        .pipe(gulp.dest('src/main/webapp/resources/lib/'));

    gulp.src('bower_components/angular-animate/angular-animate.js')
        .pipe(gulp.dest('src/main/webapp/resources/lib/'));

    gulp.src('bower_components/angular-cookies/angular-cookies.js')
        .pipe(gulp.dest('src/main/webapp/resources/lib/'));

    gulp.src('bower_components/angular-mocks/angular-mocks.js')
        .pipe(gulp.dest('src/main/webapp/resources/lib/'));

    gulp.src('bower_components/angular-resource/angular-resource.js')
        .pipe(gulp.dest('src/main/webapp/resources/lib/'));

    gulp.src('bower_components/angular-route/angular-route.js')
        .pipe(gulp.dest('src/main/webapp/resources/lib/'));

    gulp.src('bower_components/angular-touch/angular-touch.js')
        .pipe(gulp.dest('src/main/webapp/resources/lib/'));

    gulp.src('bower_components/angular-scenario/angular-scenario.js')
        .pipe(gulp.dest('src/main/webapp/resources/lib/'));

    gulp.src('bower_components/angular-loader/angular-loader.js')
        .pipe(gulp.dest('src/main/webapp/resources/lib/'));

    gulp.src('bower_components/angular-sanitize/angular-sanitize.js')
        .pipe(gulp.dest('src/main/webapp/resources/lib/'));

    gulp.src('bower_components/its/public/img/*.*')
        .pipe(gulp.dest('src/main/webapp/resources/img/'));

    gulp.src('bower_components/momentjs/moment.js')
        .pipe(gulp.dest('src/main/webapp/resources/lib/'));




    gulp.src('bower_components/angular-ui-bootstrap-bower/ui-bootstrap-tpls.js')
        .pipe(gulp.dest('src/main/webapp/resources/lib/'));

    //gulp.src('bower_components/angular-ui-bootstrap-bower/angular-ui-bootstrap-bower.js')
    //    .pipe(gulp.dest('src/main/webapp/resources/lib/'));


    //gulp.src('bower_components/lodash/lodash.js')
    //    .pipe(gulp.dest('src/main/webapp/resources/lib/'));
    //
    //gulp.src('bower_components/style-guide-bower/css/*.scss')
    //    .pipe(gulp.dest('src/main/webapp/resources/css/'));
    //
    //gulp.src('bower_components/style-guide-bower/fonts/*.*')
    //    .pipe(gulp.dest('src/main/webapp/resources/fonts/'));
    //gulp.src('bower_components/style-guide-bower/fonts/bootstrap/*.*')
    //    .pipe(gulp.dest('src/main/webapp/resources/fonts/bootstrap/'));
    //
    //gulp.src('bower_components/style-guide-bower/scripts/directives/uc-sidemenu.js')
    //    .pipe(gulp.dest('src/main/webapp/resources/lib/'));
    //
    //gulp.src('bower_components/bootstrap-sass/assets/stylesheets/bootstrap/**')
    //    .pipe(gulp.dest('./src/main/webapp/resources/css/bootstrap/'));
});

gulp.task('sass', [], function() {
    gulp.src(['src/main/webapp/resources/css/**.scss',
        '!./src/main/webapp/resources/css/**-old.scss'])
        .pipe(sass())
//        .pipe(cssmin())
        .pipe(rename('project.css'))
        .pipe(gulp.dest('src/main/webapp/resources/css/'));
});

/*gulp.task('clean', function () {
    return gulp.src(
        ['src/main/webapp/resources/lib/angular.js',
        'src/main/webapp/resources/lib/angular-animate.js',
        'src/main/webapp/resources/lib/angular-cookies.js',
        'src/main/webapp/resources/lib/angular-mocks.js',
        'src/main/webapp/resources/lib/angular-resource.js',
        'src/main/webapp/resources/lib/angular-route.js',
        'src/main/webapp/resources/lib/angular-touch.js',
        'src/main/webapp/resources/lib/angular-scenario.js',
        'src/main/webapp/resources/lib/angular-loader.js',
        'src/main/webapp/resources/lib/angular-sanitize.js'
        ], {read: false})
        .pipe(rimraf());
});*/
