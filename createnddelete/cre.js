var fs= require("fs");

//appendfile is used to create file
//mkdir for mke dir
//rmdir for rm dir

fs.appendFile("demo.txt" , "Hello txt" , function(err){
  
    console.log("Created new file");
})

