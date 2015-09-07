var fs = require('fs');

// var buf = fs.openSync(process.argv[2], 'r');

var buf = fs.readFileSync(process.argv[2]);

var s = buf.toString()

var a = s.split("\n").length - 1;

console.log(a);