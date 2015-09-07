var fs = require('fs');
var source = process.argv[2];
var destination = "newFile.txt";

///// vars done /////

var writable = fs.createWriteStream(destination);
fs.createReadStream(source).pipe(writable);

