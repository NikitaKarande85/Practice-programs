var http=require('http');
var up=require('text-upper-case')

http.createServer(function(req,res){
    res.write(up.upperCase("My name is nikita"))  //uppercase
    res.end();
}).listen(3000)
