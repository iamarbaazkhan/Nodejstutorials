//Unlink is use to delete any file from the directory


var fs=require("fs");


fs.unlink("demo.txt" , function(){
    console.log("this directories are deleted");
})