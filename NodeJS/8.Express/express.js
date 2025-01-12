// install express
//npm i express

var express=require('express');

const app=express();

app.get('/abc',function(req,res){
    res.send("Hello express js")
}).listen(3000)