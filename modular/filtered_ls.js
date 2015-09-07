
var mymodule = require("./mod.js");

var dir_name = process.argv[2];
var ext = process.argv[3];

mymodule(dir_name, ext, logFile)

function logFile(error, files) {
	if (error) return console.error(error);
	else { files.forEach(function(f) { console.log(f) }) }
}


