//This is main application Or Entry application
//load express package ! to express variation.
var fs = require("fs");
//To catch path, loading moudle 'path'
var path = require("path");
var express = require('express');
//return application using call 'express' method
var app = express();

//Jade <-> express Connecting!!
//사용할 템플릿 엔진을 express에 알려주는 부분
app.set('view engine','pug');
//basic directory is 'views'
//템플릿 파일을 /views디렉토리에 넣겠다
app.set('views','./views');
//Routing '/template address'
app.get('/template',function(req,res){
    //not 'send' use 'render', because template engine!
    //Send after the rendering 'temp' template file.
    res.render('template', {time:Date()});
    //Hello is object
    //Hello object - > template.pug
    //then, template.pug can to use Hello obejct !
});


//File Existing ??
fs.exists('./public/GoogleMapAPI.html',function(exists){
    console.log(exists? 'Yes':'no');
});

//Load File Part
//Add this sentence 'use method'
app.use(express.static('public'));

//Router Part
//If user connect home, run function(req,res)...
app.get('/',function(req,res){
    res.send('hello home page');
});
app.get('/login',function(req,res){
    res.send('Login please');
});


//static version
app.get('/map',function(req,res){

    fs.readFile('./public/GoogleMapAPI.html',function(err,data){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(data);
    })
    //res.send('hello home page');
});

//Listening Part
//listen 3000port & if connected, print 'Connected 3000 port'
app.listen(3000,function (){
    console.log("Connected 3000 port");
});
