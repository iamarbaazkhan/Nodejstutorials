//importing a module 

var http = require('http');

//creating a  server

var server = http.createServer(function(request,response){

    response.writeHead(200,{'Content-Type':'text/plain'});
    response.end("Hello this is my first node js server");
});

server.listen(3000,"127.0.0.1");

console.log("Node js  server is running.........")