var http = require("http");
var fs = require("fs");

var server = http.createServer(function(request, response) {
  if ((request.url === "/home") | (request.url === "/profile")) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("This is Homepage");
  } else if (request.url === "/about") {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("This is Profile");
  }else{
    response.writeHead(404, { "Content-Type": "text/html" });
    fs.createReadStream("index.html").pipe(response);
  }
});

server.listen(3000, "127.0.0.1");
console.log("Simple routing is running");
