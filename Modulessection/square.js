// see how exporting works 

var calcSquare=function(number){
    console.log(number*number);
}

var calcCube=function(n){
    console.log(n*n*n);
}

module.exports.calcSquare=calcSquare;
module.exports.calcCube=calcCube;