var gulp = require("gulp"),
    sass = require("gulp-sass"),
    sourcemaps = require("gulp-sourcemaps"),
    autoprefixer = require("gulp-autoprefixer"),
    rename = require("gulp-rename");
function convert_to_css(done) {
  gulp.src("./scss/style.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({
      errorLogToConsole: true,
      outputStyle: "compressed"
    }))
    .on("error", console.error.bind(console))
    .pipe(autoprefixer({
      browsers: ["last 4 versions"],
      cascade: false
    }))
    .pipe(rename({
      suffix: ".min"
    }))
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest("./css/"));
  done();
}
