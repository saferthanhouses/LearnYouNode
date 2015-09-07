var fs = require('fs');
var path = require('path');

var dir_name = process.argv[2];
var ext = process.argv[3];

fs.readdir(process.argv[2], function(err, contents) {
	if (err) return console.error(err);
	else {
		contents.forEach(function(f) {
			if (path.extname(f) == "." + ext) { console.log(f)}
		})
	}
})