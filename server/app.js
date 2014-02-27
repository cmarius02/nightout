var express = require('express')
  , db = require('./model/db')
  , fs = require('fs')
  , http = require('http')
  , https = require('https')
  , mongoose = require('mongoose');

// DB reference
var app = module.exports = express();


app.configure(function() {
	app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
	app.use(express.bodyParser());

	app.use(express.cookieParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(express.static(__dirname + '/public'));
});


// Routes
var routes = require('./routes');

app.get('/', routes.index);
app.get('/api', routes.api);


app.use(function(req, res) {
	res.status(404).end('404: File not found');
});

// Launch server
app.listen(process.env.PORT || 7000);
