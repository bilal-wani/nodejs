var http = require('http');
var fs = require('fs');
var index = fs.readFileSync('./../client/index.htm');

console.log("Server listening at port 8080");
http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/html'});
    res.end(index);
}).listen(8080);