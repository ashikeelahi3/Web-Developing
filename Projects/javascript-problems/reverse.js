function reverseString(str){
    var reverse = [];
    for(var i= 0; i<str.length; i++){
        var char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}

var Alien = "Hello Alien brother, how are you?";
var forAlien = reverseString(Alien);
console.log(forAlien);

var food = reverseString("I am very hungry, please give me some food.");
console.log(food);