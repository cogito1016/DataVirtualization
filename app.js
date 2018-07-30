//This is main application Or Entry application

//load express package ! to express variation.
var express = require('express');

//return application using call 'express' method
var app = express();


//To catch path, loading moudle 'path'
var path = require("path");
//To read file, loading moudle 'File'
var fs = require("fs");

var filePath = path.join(__dirname, "2017car.csv");

module.export=function(filePath){
    var data=fs.readFileSync(filePath,{encoding:"utf8"});
    var rows = data.split("\n");
    var result=[];

    for(var rowIndex in rows){
        var row = rows[rowIndex].split(",");

        if(rowIndex ==="0"){var columns = row;}
        else{
            var data={};
            for(var columnIndex in columns ){
                var column = columns[columnIndex];
                data[column]=row[columnIndex];
            }
            result.puysh(data);
        }
    }

    console.log(result);
}

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

//Listening Part
//listen 3000port & if connected, print 'Connected 3000 port'
app.listen(3000,function (){
    console.log("Connected 3000 port");
});




