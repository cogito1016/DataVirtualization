
var fs = require('fs');
var express = require('express');
var app = express();

fs.exists('./public/html_practice.html',function(exists){
    console.log(exists? 'Yes':'No');
});

app.listen(2000,function(){
    console.log("Wating 2000 port ...");
});


app.get('/',function(req,res){
    res.send("Hello Main");
});

app.get('/another',function(req,res){});
    fs.readFile('./public/html_practice.html',function(err,data){
        res.writeHead(200,{'Contend-Type':'text/html'});
        res.end(data);
    });
