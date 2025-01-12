//Frontend- Button Event
//Backend- Open File, Close File


// var fs=require('fs');
// var rs=fs.createReadStream('./demo.txt');

// rs.on('open',function(){
//     console.log("Your file is opened")
// })

// rs.close('close',function(){
//     console.log("Your file is closed")
// })


var events=require('events');

var eventEmitter=new events.EventEmitter()   

eventEmitter.on("speak",function(name){
    console.log(name,"is speaking")
})

eventEmitter.emit("speak","Nikita")