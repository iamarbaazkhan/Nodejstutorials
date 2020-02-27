//Importing a package 
var http= require('http');
var fs= require('fs');

var server=http.createServer(function(request,response){
       
    //server head 
     response.writeHead(200,{'Content-Type':'text/html'});
     //pipe is shortcut to get the data from the response 
     var readStream = fs.createReadStream('index.html');
     readStream.pipe(response);     

  
});

server.listen(3000,"127.0.0.1");


