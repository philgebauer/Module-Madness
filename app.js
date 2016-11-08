
var write = require('./moduleThree');
// var moduleThree = require ("./moduleThree");

var http = require('http');
var portDecision = 3000;

console.log(write.write());
console.log(write.numChange());



http.createServer(function(req, res) {
  res.writeHead(200);
  res.write(write.write() + write.numChange());
  res.end();
}).listen(portDecision);
