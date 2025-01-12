var http=require('http');

var data=[
    {
        name:"Nikita",
        city:"Pune"
    },
    {
        name:"Omkar",
        city:"Mumbai"
    },
]

http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'application\json'});  //JSON
    res.write(JSON.stringify(data))
    res.end()
}).listen(3900)