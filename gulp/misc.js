export const miscTask = () => {
  return app.gulp
    .src(app.paths.src.misc, { encoding: false })
    .pipe(app.gulp.dest(app.paths.dist.misc))
    .pipe(app.plugins.browserSync.stream());
};
