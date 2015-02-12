var express = require('express'), 
	path = require('path'),
	errorhandler = require('errorhandler'),
	routes = require('./routes'),
	app = express();

// serve static files

app.use(express.static(path.join(__dirname, '../client')));
app.use(errorhandler());

app.get('/',routes.index);
// insert RESTful routes here:
// app.get('/posts',...
// etc

var server = app.listen(3000, function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log('App started, listening at http://%s:%s',host,port);
});



