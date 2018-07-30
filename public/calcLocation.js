
//To catch path, loading moudle 'path'
var path = require("path");
//To read file, loading moudle 'File'
var fs = require("fs");
var filePath = path.join(__dirname, 'cardata.csv');

fs.exists(filePath,function(exists){
    console.log(exists ? " it's there": "no exists!");
});


var data=fs.readFileSync(filePath,{encoding:"utf8"});

var rows = data.split("\n");

var kyung=[];
var wi=[];
var result;

var i = 0;

console.log(rows.length);

for(var row in rows )
{
    result = rows[row].split(',');
    kyung[i]= result[0];
    wi[i]=result[1];
    i++;
}

console.log(kyung[0]);
console.log(wi[0]);

fs.writeFile('./kuyng.txt',kyung+",",function(err){
    if(err) throw err;
    console.log('File Write completed');
})
fs.writeFile('./wi.txt',wi+",",function(err){
    if(err) throw err;
    console.log('File Write completed');
})