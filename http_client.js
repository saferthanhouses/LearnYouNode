
var http = require('http');

var url = process.argv[2];

http.get(url, function(res) {
	// the res object is a node stream object. Node stream objects can be 
	// treated as objects that emit events. Of most interest here are 'data',
	// 'error' and 'end'. 
	var stuff = ""
	res.setEncoding('utf-8');
	res.on('error', function(err) { console.error(err) })
	res.on('data', function(d) { stuff +=d })
	res.on('end', function(e) { console.log(stuff)})
})