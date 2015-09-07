/*
var url = require('url');
var http = require('http');
var port = process.argv[2];

var server = http.createServer(function(req, res) {
	var path = url.parse(req.url, true).pathname;
	var iso_time = url.parse(req.url, true).query['iso'];
	var date = new Date(iso_time);

	if (req.method!=="GET") { return res.end("send me a GET request!")}

	if (path == "/api/parsetime") {
		res.writeHead(200, {'Content-Type': 'application/json'});
		res.end(JSON.stringify(
        {"hour": date.getHours(),
         "minute" : date.getMinutes(),
         "second" : date.getSeconds()
        }))
	}
	else if (path == "/api/unixtime") {
    console.log(date);
		res.writeHead(200, {'Content-Type': 'application/json'});
		res.end(JSON.stringify({"unixtime": date.getTime()}))
	}
	else {
		res.writeHead(404)
		return res.end("Not Found");
	}
})

server.listen(port);


// Example Solution
*/
  var http = require('http')
    var url = require('url')
    
 // seperate the parsetime and unix time into separate functions
    function parsetime (time) {
      return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
      }
    }
    
    function unixtime (time) {
      return { unixtime : time.getTime() }
    }
    
    var server = http.createServer(function (req, res) {

      // cors stuff;
      res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept') 
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    


      var parsedUrl = url.parse(req.url, true)
      var time = new Date() //parsedUrl.query.iso
      var result
    
    // use regular expressions to assign the correct result depending on the url
      if (/^\/api\/parsetime/.test(req.url))
        result = parsetime(time)
      else if (/^\/api\/unixtime/.test(req.url))
        result = unixtime(time)
    
    // so it can have a single response function.
      if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
      } else {
        res.writeHead(404)
        res.end()
      }
    })
    server.listen(Number(process.argv[2]))


// Figure out whether the date object is returning 
// the date it is made with or just the current date

//