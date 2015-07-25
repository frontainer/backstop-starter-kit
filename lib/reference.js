var exec = require('child_process').exec;
var fs = require('fs-extra');

var COMMAND = 'cd ./node_modules/backstopjs && gulp reference';

console.log(COMMAND);
console.log('saving...');
exec(COMMAND,function(err, stdout, stderr) {
	if (err) {
		throw new Error(err);
	}
	console.log(stdout);

	fs.copySync('./node_modules/backstopjs/bitmaps_reference/', './backup/');
	console.log('backup done');
});