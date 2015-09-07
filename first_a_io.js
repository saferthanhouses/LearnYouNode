var fs = require('fs');

fs.readFile(process.argv[2], function(err, fileContents) {
	var s = fileContents.toString().split('\n').length - 1;
	console.log(s);
})