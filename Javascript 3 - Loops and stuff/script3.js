
var myHeader;
window.onload = function(){
    myHeader = document.querySelector("header");
}
var l = 0;
var p = 23;
var x = 100;
//"for" loops are only numerical


function primeFind(){


    var pBox = document.querySelector("#valueBox");
    var p = pBox.value
    myHeader.innerText = " ";

    var bobby = "Factors of " + p + " are:";
    var pRoot = Math.ceil(Math.sqrt(p))


for(var x = pRoot; x >= 2; x--){

    if(p%x != 0){
        console.log ("prime so far. x = " + x);
    }

    if(p%x == 0){
        console.log ("p ain't prime!!!!!!!! x = " + x);
        l = 5;
        bobby = bobby + ", " + x + ", " + (p/x);
        console.log (bobby);
        myHeader.innerText = bobby;   
    }
//not n-1 ; sqrt(n) inclusive

    if(l == 0 && x == 2){

        console.log ("PPPRRRRIIIMMMMEEEEEE");   
        myHeader.innerText = p + " is PRIME";

    }

    if(l == 5 && x == 2){

        console.log ("not");    
        l = 0;

    }



}   }

//mod opertor %
//returns remainder of division

//10%2 == 0
//10%3 == 1
//10/3 == 3 r1