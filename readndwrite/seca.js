//importing module

var fs = require("fs");

//reading the file
var r = fs.readFileSync("demo.txt", "utf8");

//writing the file and making changes
fs.writeFileSync("demo.txt","The code is cooking");
console.log(r);
