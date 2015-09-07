var fs = require('fs');
var path = require('path');


function export_function(directory, extension, callback) {
	fs.readdir(directory, 
		function(error, contents) {
			if (error) callback(error);
			else {
				var filtered = [];
				contents.forEach(function(f) {
					if (path.extname(f) == "." + extension) {
						filtered.push(f);
					}})
				callback(null, filtered);
			}
		})
}
	


module.exports = export_function;