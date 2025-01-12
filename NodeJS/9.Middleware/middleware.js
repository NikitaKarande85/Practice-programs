
var express=require('express');

const app=express();
const router=express.Router()

const checkUrl=function(req,res,next){  //middleware
    console.log("Current url is:",req.originalUrl);
    next();  //middleware
}
app.use(checkUrl); //middleware

app.get('/',function(req,res){
    res.send("Hello default")
})
router.get('/home',checkUrl,function(req,res){
    // res.send("Hello home")
    res.sendFile(__dirname+"/Home.html")
})
app.get('/about',function(req,res){
    res.send("Hello about get")
})
app.post('/about',function(req,res){
    res.send("Hello about post")
})

app.use('/',router)
app.listen(3000);
