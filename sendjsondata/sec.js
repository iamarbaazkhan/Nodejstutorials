var http = require("http");
var fs = require("fs");

var server = http.createServer(function(request, response) {
  response.writeHead(200, { "Content-Type": "application/json" });
  //Creating JSON object
  var studentObject = {
    name: "Arbaaz",
    age: "21"
  };
  //stringify use to convert json object into string
  response.end(JSON.stringify(studentObject));
});

server.listen(3000, "127.0.0.1");
console.log("Json object is running");
