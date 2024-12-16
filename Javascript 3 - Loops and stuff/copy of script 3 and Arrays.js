var myOutput;
window.onload = function(){
    myOutput = document.querySelector("header");
}
var l = 0;
var p = 23;
var x = 100;
//"for" loops are only numerical


function primeFind(){


    var pBox = document.querySelector("#valueBox");
    var p = pBox.value
    myOutput.innerText = " ";

    var bobby = "Factors of " + p + " are:";
    var pRoot = Math.ceil(Math.sqrt(p))


//  for(var x = pRoot; x >= 2; x--){
    for(var x = 2; x <= pRoot + 1; x++){

    if(p%x != 0){
        console.log ("prime so far. x = " + x);
    }

    if(p%x == 0){
        console.log ("p ain't prime!!!!!!!! x = " + x);
        l = 5;
        bobby = bobby + ", " + x + ", " + (p/x);
        console.log (bobby);
        myOutput.innerText = bobby;   
    }
//not n-1 ; sqrt(n) inclusive

    if(l == 0 && x > pRoot){

        console.log ("PPPRRRRIIIMMMMEEEEEE");  
        console.log (" ");   
        myOutput.innerText = p + " is PRIME";


    }

    if(l == 5 && x > pRoot){

        console.log ("not");    
        console.log (" ");  
        l = 0;

    }



}   }

//mod opertor %
//returns remainder of division

//10%2 == 0
//10%3 == 1
//10/3 == 3 r1






//  ARRAY NOTES!!!!!!!!!

var names = ["Reginald", "Archie"];

names.push("Betty");

console.log(names[0] + ": names[0]")
console.log(names[1] + ": names[1]")


names.sort();

for(var i = 0; i < names.length; i++){
console.log(names[i])

}


//things to do:
//  eliminate copies
//  variable commas

//  first edit of bobby goes to var1; second, third, etc edits of bobby do x2, x3
//  organize by size and delete repeats
//  then, it all becomes normal bobby 



function exampleArray(){


console.log("--- Now Numbers --");

var nums = []

nums.push(parseInt(l));
nums.push(parseInt(p));
nums.push(parseInt(x));
//want to names.push x in every instance that it's a factor


nums.sort(function(a, b){return a-b});

for(var i = 0; i < nums.length; i++){
console.log(nums[i])
}

}