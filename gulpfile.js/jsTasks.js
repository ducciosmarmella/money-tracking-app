const gulp = require("gulp");
const paths = require("./paths");

const copyJs = function() {

    const jsIndex = paths.getJsEntryPath();
    const utilsIndex = paths.getJsEntryPath("/utils.js");
    const modelsIndex = paths.getJsEntryPath("/models/Wallet.js");
    return gulp.src([jsIndex, utilsIndex, modelsIndex], { base: paths.getSrcFolder()})
        .pipe(gulp.dest(paths.getDistFolder()));

};
const watchJS = function(cb) {
    gulp.watch(paths.getJsEntryPath("/**/*"), copyJs);
    cb();
};
module.exports = {
    copyJs: copyJs,
    watchJS: watchJS
}