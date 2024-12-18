var myOutput;
window.onload = function(){
    myOutput = document.querySelector("header");
    myOutputTwo = document.querySelector("#factorlist");
}
var l = 0;
var p = 23;
var x = 100;
//"for" loops are only numerical





var pBox = document.querySelector("#valueBox");
var p = pBox.value;
myOutput.innerText = " ";
myOutputTwo.innerText = " ";
var pRoot = Math.ceil(Math.sqrt(p));
var nums = [];



for(var x = 2; x <= pRoot; x++){

if(p%x == 0){
    console.log ("p ain't prime!!!!!!!! x = " + x);
    l = 5;

    nums.push(parseInt(x));
    nums.push(parseInt(p/x));

    myOutput.innerText = p + " Is Not Prime";
}




 //output if p ain't prime + reset l for next time
 if(l == 5 && x > pRoot - 1){


nums.sort(function(a, b){return a-b});


myOutputTwo.innerHTML = "Factors of " + p + " are: <br>" ;


for(var i = 0; i < nums.length; i++){

console.log(nums[i]);

nums.join(", ");
    //string of numbers:
myOutputTwo.innerHTML += (nums[i]);
    //blank:
// myOutputTwo.innerHTML += (nums[i].join(", "));
    //no p/x
// myOutputTwo.innerHTML += (nums.join(", ")[i]);
    //list seperated by commas = list item n+1 --> n+1, 1, n+1, 2, n+1, 3 ... n+1, n
// myOutputTwo.innerHTML += (nums.join(", ")) + (nums[i]);
    //writes list perfectly, but 4 times
// myOutputTwo.innerHTML += (nums.join(", "));
    //does notfix problem with 6/56; terrible thing at start
// myOutputTwo.innerHTML = myOutputTwo + (nums.join(", "));


}}}