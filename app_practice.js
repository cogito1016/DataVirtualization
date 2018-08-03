var fs = require('fs');
var express = require('express');
var app = express();

fs.exists("./public/GoogleMapAPI.html",function(exists){
    console.log(exists? 'Yes':'No');
});

app.listen(1234,function(){
    console.log("1234 Connecting ....");
});

app.get('/',function(req,res){
    res.send("Hello this is main homepage");
});

app.get('/another',function(req,res){
    fs.readFile('./public/html_practice.html',function(err,data){
        res.writeHead(200,{'Contend-Type':'text/html'});
        res.end(data);
    })
})
