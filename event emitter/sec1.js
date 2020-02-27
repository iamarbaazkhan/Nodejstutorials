//Event emitter are basically the publisher and subsciber model which we see in the youtube channel let see an example 

//importing event module

var events = require ("events");

// insitante events object for emitter
var emitter= new events.EventEmitter();

//creating a  function for emitter 

emitter.on("publishVideo", function(message){
    console.log(message);
})

//running the emitter
emitter.emit("publishVideo" , "Your video has been published");