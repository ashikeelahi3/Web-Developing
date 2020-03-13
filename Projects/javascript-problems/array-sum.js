
function getArraySum(sobarTaka){
    var sum = 0;
    for(i = 0; i < sobarTaka.length; i++){
        sum = sum + sobarTaka[i];
    }
    return sum;
}

var sobarTaka = [500, 250, 360, 220, 658, 350];
var result = getArraySum(sobarTaka);
console.log("Total result is: ", result);

