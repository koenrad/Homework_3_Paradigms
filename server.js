// MEAN Stack RESTful API Tutorial - Contact List App

var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('web', ['site']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/site', function (req, res) {
  console.log('I received a GET request');
  
  db.site.find(function (err, docs) {
    console.log(docs);
    res.json(docs);
  });
});

app.listen(80);
console.log("Server running on port 80");