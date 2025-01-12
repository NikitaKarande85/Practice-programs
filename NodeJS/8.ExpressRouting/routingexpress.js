// install express

var express=require('express');

const app=express();

app.get('/',function(req,res){
    res.send("Hello default")
})
app.get('/home',function(req,res){
    res.send("Hello home")
})
app.get('/about',function(req,res){
    res.send("Hello about get")
})
app.post('/about',function(req,res){
    res.send("Hello about post")
})

app.listen(3000)