"use strict"


var express = require('express'),
  hbs = require('hbs'),
  fs = require('fs'),
  //sift = require('sift'),
  //MongoClient = require('mongodb').MongoClient,
  //Server = require('mongodb').Server,
  //async = require('async'),
  //openingsData = addRegression(require('./openings')),
  //combinedData = require('./combined'),
  //salaryData = require('./salary'),
  //industryData = require('./industry'),
  db;

var port = process.env.PORT || 5000;


// init express app, hbs templating engine and static dir
var app = express();
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));



//hbs helpers
hbs.registerHelper('insert_obj', function(obj) {
  return new hbs.SafeString(JSON.stringify(obj));
});

//BEGIN routes


app.get('/viz1', function(req, res) {
  res.render('viz1_template', {});

});


app.get('/viz2', function(req, res) {
  res.render('viz2_template', {});

});

app.get('/viz3', function(req, res) {
  res.render('viz3_template', {});

});


app.get('/', function(req, res) {

  res.render('index_template', {});
});

app.get('/viz4', function(req, res) {
  res.render('viz4_template', {});
});

var listen = function(callback) {
  app.listen(port, function() {
    console.log("Listening on " + port);
  });
}

listen();

//async.series([connectDB, listen]);
