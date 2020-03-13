var nameList = ["Abul", "Babul", "Cabul","Abul", "Dabul", "Ebul", "Mokbul", "Mokbul",];

var finalList = [];

for(var i = 0; i<nameList.length; i++){
    var name = nameList[i];
    var index = finalList.indexOf(name);

    if(index == -1){
        finalList.push(name);
    }
}
console.log(finalList);