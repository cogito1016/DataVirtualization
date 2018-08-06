
var fs = require('fs');
var express = require('express');
var app = express();

app.listen(1234,function(){
    console.log("Wating connect...");
});

fs.exists('./public/GoogleMapAPI.html',function(exists){
    console.log(exists? 'Yes':'No');
});

app.get('/',function(req,res){
    fs.readFile('./public/GoogleMapAPI.html',function(err,data){
        res.writeHead(200,{'Context-Type':'text/html'});
        res.end(data);
    });
});










