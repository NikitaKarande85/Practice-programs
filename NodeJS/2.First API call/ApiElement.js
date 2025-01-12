var http=require('http');

http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'})   //Element
    res.write("<input type='text' />");
    res.end();
}).listen(3000)