var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

app.get('/', (req, res) => {
	res.send('ok');
});

// error handlers
//need to figure out error handling

module.exports = app;