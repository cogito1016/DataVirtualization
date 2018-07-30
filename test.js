var a = 'b\n'+',c\n';
var b = 'b,c';
var b = b.split(',');

var c = a.split(',');

for(var i=0; i<c.length;i++)
{
    c[i]=c[i].slice(0,-1);
}

console.log(c);
console.log(b);