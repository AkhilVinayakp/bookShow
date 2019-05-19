var express =require('express');
var app=new express();
var ejs=require('ejs');
var engine=require('ejs-mate');
app.engine('ejs',engine);
app.set('view engine','ejs');
app.use(express.static('public'));
app.get('/',(req,res,next)=>{
    res.render('index');
})
app.listen(3000,function(){
    console.log("this is just a test request listening ,,,,,,,,,,");
})
