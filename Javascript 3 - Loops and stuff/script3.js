var myOutput;
window.onload = function(){
    myOutput = document.querySelector("header");
    myOutputTwo = document.querySelector("#factorlist");
}
var l = 0;
var p = 23;
var x = 100;
//"for" loops are only numerical


function primeFind(){


    var pBox = document.querySelector("#valueBox");
    var p = pBox.value
    myOutput.innerText = " ";
    myOutputTwo.innerText = " ";
    var bobby = "Factors of " + p + " are:";
    var pRoot = Math.ceil(Math.sqrt(p))
    var ybbob = ""

    for(var x = 2; x <= pRoot; x++){

    if(p%x != 0){
        console.log ("prime so far. x = " + x);
    }

    if(p%x == 0){
        console.log ("p ain't prime!!!!!!!! x = " + x);
        l = 5;


        bobby = bobby + ", " + x;
        console.log (bobby);
        if(p/x != pRoot){
            ybbob = ", " + (p/x) + ybbob;
            console.log (ybbob);
        }


        myOutput.innerText = p + " Is Not Prime";
        myOutputTwo.innerText = bobby + ybbob;
    }
//not n-1 ; sqrt(n) inclusive

    if(l == 0 && x > pRoot - 1){

        console.log ("PPPRRRRIIIMMMMEEEEEE");  
        console.log (" ");   
        myOutput.innerText = p + " is PRIME";
        myOutputTwo.innerText = p + " has no factors";
    }

    if(l == 5 && x > pRoot - 1){

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



// wrong:
//56, 1, 2, 6, 
//right:
//16, 323232, 47, 97, 7, 3, 4, 8, 9, 10, 



//things to do:
//  variable commas

//  first edit of bobby goes to var1; second, third, etc edits of bobby do x2, x3

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




