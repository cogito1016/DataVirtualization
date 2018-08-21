var express = require('express');
var app = require('express')();
var bodyParser = require('body-parser');
app.use(express.static('public'));

//DB Connection
//Needs a tables & databases named 'o2'
//install Mysql!
var mysql      = require('mysql');
var dbconfig =  require('./config/database.js');
var connection = mysql.createConnection(dbconfig);

//Template Engine
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/', function(req, res){
    var arr='';
    connection.query('SELECT * from topic', function(err, rows) {
        if(err)
            console.log(err);
        console.log('The solution is: ', rows);

        for(var i=0;i<rows.length;i++)
            arr+=rows[i].title;

        res.render('DB_apply.ejs', {
            array: arr
        });
    });
});
app.listen(3000, function () {
    console.log("server starting on localhost:3000");
});



