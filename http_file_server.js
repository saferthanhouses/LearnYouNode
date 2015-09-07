/*var http = require('http');
var fs = require('fs');

var port = process.argv[2];
var file = process.argv[3];

//////////////////////////////////////


var server = http.createServer(function(request, response) { 	// called once for each connection received.
	var f = fs.createReadStream(file);	// what to do with a readStream - stream is an emmitter of events
	f.on('open', function(data) { 
		f.pipe(response); // stream gets piped straight into the response? 
		// What is response? How do things get 'piped' into that 'stream'?

		// pipe is a method that pulls all the data out of a readable stream
		// and writes it to the supplied destination

	});	// readable streams emit 'data' events when a listener is added
	f.on('error', function(er) { res.end(er)} )
})

server.listen(port);

*/

var http = require('http')
var fs = require('fs')

var server = http.createServer(function (req, res) {
  res.writeHead(200, { 'content-type': 'text/plain' })

  fs.createReadStream(process.argv[3]).pipe(res)
})

server.listen(Number(process.argv[2]))
/*

/////////////////////////////////////

var server = http.createServer(function(req, res) {
	var body = "";
	req.on('data', function(chunk) {
		body+=chunk
	})
	req.on('end', function(){
		try {
			JSON.parse(body);
		}
		catch(er){
			res.statusCode = 400;
			return res.end('error' + er.message);
		}
	})
	res.write(data)
	res.end();
})
*/