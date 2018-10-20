var express = require('express');
var app = express();
var path = require('path');
let reqpath = path.join(__dirname,'../');

var fs = require('fs');

app.get('/', function (req, res) {
  res.sendFile(reqpath+'/html/index.html');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

