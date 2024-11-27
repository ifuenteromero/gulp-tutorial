'use strict';
import gulp from 'gulp';

import { parallel, series } from 'gulp';
// import prettier from 'gulp-prettier';
import gulpSass from 'gulp-sass';
import * as dartSass from 'sass';

const sass = gulpSass(dartSass);

function printName(cb) {
	// place code for your default task here
	console.log('Hello Gulp again');
	cb();
}

function printAge(cb) {
	cb();
	console.log('I am 41 years old');
}

const print = parallel(printName, printAge);

function buildStyles() {
	return (
		gulp
			.src('./src/scss/**/*.scss')
			.pipe(sass({ style: 'compressed' }).on('error', sass.logError))
			// .pipe(prettier({ tabWidth: 4, useTabs: true }))
			.pipe(gulp.dest('./public/css'))
	);
}

export { buildStyles, print, printAge, printName };

// gulp printName
// gulp --tasks

export default series(printAge, printName);
