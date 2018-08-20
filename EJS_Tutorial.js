var express = require('express');
var app = require('express')();
var bodyParser = require('body-parser');
app.use(express.static('public'));

var http = require('http').Server(app);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


app.get('/', function (req, res) {

    var testArray = [1, 2, 3, 4, 5];

    res.render('index', {
        count: 5,
        str: "simple string",
        array: testArray
    });
});

http.listen(3000, function () {
    console.log("server starting on localhost:3000");
});