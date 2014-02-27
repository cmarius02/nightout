var express = require('express');
var mongoose = require('mongoose');
var Users = mongoose.model('Food');
var fs = require('fs');
var app = express();

exports.index = function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var contents = fs.readFileSync("./public/index.html", "UTF-8");
  res.end(contents);
};

exports.api = function(req, res) {
  res.json({success: true});
};