var http = require('http');
var concatStream = require('concat-stream');
var url = process.argv[2];

http.get(url, function(res) { 
	res.on('error', function(e) { console.log(e) }) 
	// concatStream has a stream piped into it.
	res.pipe(concatStream(function(data) {  // once the stream has ended a callback is fired with the data
		d = data.toString()		// data.toString() to convert from a buffer.
		console.log(d.split('').length);
		console.log(d);
	}));
})



