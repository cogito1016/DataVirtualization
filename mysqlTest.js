//Needs a tables & databases named 'o2'
//install Mysql!

var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '111111',
    database : 'o2',
    port : '3306'
});

connection.connect();

/*
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
});

connection.end();*/

var sql = 'SELECT * FROM topic';
connection.query(sql,function(err,rows,fields){
    if(err){
        console.log(err);
    }
    else
    {
        for(var i=0; i<rows.length;i++)
            console.log('rows',rows[i].title);
        //console.log('fields',fields);
    }

});

connection.end();