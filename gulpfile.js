var gulp = require('gulp');
var webpackStream = require('webpack-stream');
var nodemon = require('gulp-nodemon');
var shell = require('gulp-shell');

var buildConfig = require('./webpack.config.production');
var devConfig = require('./webpack.config');

gulp.task('serve:dist', function() {

	return gulp.src('./app/index.js')
		.pipe(webpackStream( buildConfig ))
		.pipe(gulp.dest('./public/dist/'))
		.pipe(shell([
			'heroku local',
			'open http://localhost:5000'
		]))
	;
});

gulp.task('serve', function() {
	var browserSync = require('browser-sync').create();
	var reload      = browserSync.reload;
	var webpack = require('webpack');
	var devMiddleware = require('webpack-dev-middleware');
	var hotMiddleware = require('webpack-hot-middleware');
	var compiler = webpack(devConfig);

	require('dotenv').load();

	nodemon({
		script: 'keystone.js',
		ext: 'js html',
		env: process.env,
		ignore: ['./app', './public']
	});
	
	setTimeout(function(){
		console.log('🔥  Realod');
		browserSync.init({
			open: true,
			proxy: {
				target: 'http://localhost:3000',
				ws: true,
				middleware: [
					devMiddleware(compiler, {
						// output: {
						// 	path: devConfig.BUILD_DIR,
						// 	filename: 'bundle.js'
						// },

						publicPath: devConfig.output.publicPath,
						historyApiFallback: true,
						stats: {
					      // Config for minimal console.log mess.
					      assets: false,
					      colors: true,
					      version: false,
					      hash: false,
					      timings: true,
					      chunks: false,
					      chunkModules: true
					    },
					}),
					hotMiddleware(compiler),
				]
			},
			port: 5000
		});
	},10000);


	

});


