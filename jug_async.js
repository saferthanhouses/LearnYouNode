var http = require('http');
var concatStream = require('concat-stream')
var _ = require("lodash");

var urls = [process.argv[2], process.argv[3], process.argv[4]];
var end = 0

_.forEach(urls, function(url, key) {
		http.get(url, function(res) {
			// res.setEncoding('utf-8');
			res.on('error', function(e) {console.error(e)});
			//res.pipe(concatStream(function(data) {data = data.toString(); result.push(data); complete()}));	
			// res.on('data', function(data) {r+=data})
			res.pipe(concatStream(function(data) {
				data = data.toString();
				end++; 
				//console.log(end);
				urls[key] = data
				complete()
			}))
			// res.on('end', function() { end++; console.log(end); complete() })
			
	})
})


function complete() {
	if (end===3) {
		_.forEach(urls, function(r){console.log(r)})
	}
}