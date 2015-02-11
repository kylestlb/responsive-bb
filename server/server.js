var express = require('express')
var app = express()

// for now, send message to client (eventually routing will
// be done in client and express will only be used for initial
// server side rendering & restful API

app.get('/',function(req,res){
	res.send('bonjour world');
});

var server = app.listen(3000, function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log('App started, listening at http://%s:%s',host,port);
});



