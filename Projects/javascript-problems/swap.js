var a = 5;
var b = 7;
//console.log("before swap a =", a,", b =", b);
var temp = a;
a = b;
b = temp;
//console.log("after swap a =", a,", b =", b);

var x = 12;
var y = 15;

x = x + y;

y = x - y;

x = x - y;

//console.log("after swap x =", x,", y =", y);

var p = 3;

var q = 4;

[p, q] = [q, p];

console.log("after swap p =", p,", q =", q);