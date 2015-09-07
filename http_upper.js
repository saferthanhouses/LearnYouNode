var http = require('http');
var port = process.argv[2];
var map = require('through2-map');

var server = http.createServer(function(req, res){
	// console.log(req.method);
	if (req.method == 'POST') {
		// console.log("GET - TRUE")
		req.pipe(
			map(function(chunk){
				// console.log("something");
				return chunk.toString().toUpperCase();
				})
			).pipe(res);
	}
	else { res.end() }
})

server.listen(port);

// Example solution

var http = require('http')
var map = require('through2-map')

var server = http.createServer(function (req, res) {
  if (req.method != 'POST')
    return res.end('send me a POST\n')	// return res.end to close the program

  req.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase()
  })).pipe(res)
})

server.listen(Number(process.argv[2]))
