var allNumber = [11, 121, 101, 251, 615, 16, 305, 82, 26, 92, 120, 23];
var maxNumber = 0;
for(i= 0; i < allNumber.length; i++){
    var container = allNumber[i];
  
    if(container > maxNumber){
     maxNumber = container;
    }
}
console.log(maxNumber);