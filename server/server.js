var express = require('express'), 
	path = require('path'),
	errorhandler = require('errorhandler'),
	routes = require('./routes'),
	bodyParser = require('body-parser'),
//	React = require('react'),
//	App = require('../client/App.jsx'),
	app = express();

require('node-jsx').install({extension: '.jsx'});


// serve static files

app.use(express.static(path.join(__dirname, '../')));
app.use(errorhandler());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/',routes.index);
// insert RESTful routes here:
// app.get('/posts',...
// etc

var server = app.listen(3000, function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log('App started, listening at http://%s:%s',host,port);
});



