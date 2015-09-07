var port_no = process.argv[2];
var net = require('net');

var twoDigits = function(no) { // takes in a number and returns an int
	// function that zeros the number to two digits
	if (no.toString().length!==2) {
		no = no.toString().split('');
		no.unshift('0');
		no = no.join('');
	}
	return no;
}

var server = net.createServer(function(socket) {  
// create a tcp server and assign it to the variable server.
	// every connection received by the server triggers a callback
	// the socket object is a node duplex stream - it can be read and written to.


	var data, day, month, year, hour, minute, date = new Date();
	// intialize a bunch of variables to hold the date and data 

	year = date.getFullYear().toString();
	month = twoDigits(date.getMonth()+1);     
	day = twoDigits(date.getDate());
	hour = twoDigits(date.getHours());
	minutes = twoDigits(date.getMinutes());
	     // TODO: month,day,hour and minute must be zero-filled to two digits     var data =
    
	// concatenate the dates and assign to data.
    data = year +  "-" + month + "-" + day + " " + hour + ":" + minutes + "\n";     
	
	// close the socket and push the data to it     
	socket.end(data); 
}) 

// must call the server.
server.listen(port_no);


// Example Answer 

  var net = require('net')
    

    // simpler zero-ing function - nice and succinct.
    function zeroFill(i) {
      // if i is less than ten return '0' + i else just '' + i 
      return (i < 10 ? '0' : '') + i
    }
    
    // separate function to produce the date string
    function now () {
      var d = new Date()
      // uses a nice return statement instead of assigning a variable.
      return d.getFullYear() + '-'
        + zeroFill(d.getMonth() + 1) + '-'
        + zeroFill(d.getDate()) + ' '
        + zeroFill(d.getHours()) + ':'
        + zeroFill(d.getMinutes())
    }
    
    var server = net.createServer(function (socket) {
      socket.end(now() + '\n')
    })
    
    server.listen(Number(process.argv[2]))
