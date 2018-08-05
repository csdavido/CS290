/*
CS 290, Week 5: GET and POST checker
checkGetPost.js
Author: David Rider
July 23, 2018
*/
var express = require('express');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout: 'main'});
var bodyParser = require('body-parser');

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 45123);

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/',function(req,res){
  var qParams = [];
  for (var p in req.query) {
    qParams.push({'name': p, 'value': req.query[p]});
  }
  var context = {};
  context.type  = 'GET';
  context.dataList = qParams;
  res.render('checkGetPost', context);
});

app.post('/',function(req,res){
  var qParams = [];
  for (var p in req.body) {
    qParams.push({'name': p, 'value': req.body[p]});
  };
  var context = {};
  context.type  = 'POST';
  context.dataList = qParams;
  res.render('checkGetPost', context);
});

app.use(function(req,res){
  res.type('text/plain');
  res.status(404);
  res.send('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.send('500');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});