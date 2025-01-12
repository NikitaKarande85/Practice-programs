// - npm i ejs

var express=require('express');
const app=express();

app.set('view engine','ejs')
app.get('/profile/:name',function(req,res){
    //views/profile - create folter
    res.render('Profile',{name:req.params.name})
})

app.listen(3000);
