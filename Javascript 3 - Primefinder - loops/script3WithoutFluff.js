var myOutput;
window.onload = function(){
    myOutput = document.querySelector("header");
    myOutputTwo = document.querySelector("#factorlist");
}
var l = 0;
var p = 23;
var x = 100;
function primeFind(){
    var pBox = document.querySelector("#valueBox");
    var p = pBox.value;
    myOutput.innerText = " ";
    myOutputTwo.innerText = " ";
    var pRoot = Math.ceil(Math.sqrt(p));
    var nums = [];
    for(var x = 2; x <= pRoot; x++){
    if(p%x != 0){
    }
    if(p%x == 0){
        l = 5;
            if(x-1 != p/x && x != Math.sqrt(p)){
            nums.push(parseInt(x));
            nums.push(parseInt(p/x));
            }
            if(x == Math.sqrt(p)){
            nums.push(parseInt(x));
            }
        myOutput.innerText = p + " Is Not Prime";
    }
    if(l == 0 && x > pRoot - 1){
        myOutput.innerText = p + " is PRIME";
        myOutputTwo.innerText = p + " has no factors";
    }
    if(l == 5 && x > pRoot - 1){
        l = 0;
        nums.sort(function(a, b){return a-b});
        myOutputTwo.innerHTML = "Factors of " + p + " are: <br>" ;  
        myOutputTwo.innerHTML += (nums.join(", "));
        for(var i = 0; i < nums.length; i++){
}   }   }
if(p == 1){   
    myOutput.innerText = p + " is PRIME";
    myOutputTwo.innerText = p + " has no factors";
}  
if(p == 2){
    myOutput.innerText = p + " is PRIME";
    myOutputTwo.innerText = p + " has no factors";
}   }
