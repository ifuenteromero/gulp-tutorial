import { parallel, series } from 'gulp';

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

export { print, printAge, printName };

// gulp printName
// gulp --tasks

export default series(printAge, printName);
