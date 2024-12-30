var http=require('http');
http.createServer(function(req,res){
    res.write("Hello my frist program");
    res.end();
}).listen(5000)