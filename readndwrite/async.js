//importing module

var fs=require("fs");


//reading file async
fs.readFile("demo.txt" , "utf8", function(err,data){
    console.log(data);
})

console.log("hello arbaaz");