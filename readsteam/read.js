var http = require('http');
var fs = require('fs');

var readStream = fs.createReadStream("demo.txt");
var chunks_count=0;
readStream.on('data',function(d){
    console.log('this is function'+d);
    chunks_count++;
    console.log(chunks_count);
});
