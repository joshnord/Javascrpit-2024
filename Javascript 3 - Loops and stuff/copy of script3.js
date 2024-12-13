// var n = 1;

// while(n <= 10){
//     console.log(n);
//     n = n + 1;
// }

var n = 0;

while(n < 100){
    n += 12;
    console.log(n);
    
}
//   n++;         n += 1;        n = n + 1;



var b = 1;

//for loops are only numerical
for(var b = 0; b <= 10; b++){

console.log ("b = " + b);

}



var q = 1;

//for loops are only numerical
for(var q = 100; q >= 0; q--){

console.log ("q = " + q);

}



//start of important stuff:







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
    myHeader.innerText = "Factors of " + p + " are ";





for(var x = Math.sqrt(p); x >= 2; x--){

    if(p%x != 0){
        console.log ("prime so far. x = " + x);
    }

    if(p%x == 0){
        console.log ("p ain't prime!!!!!!!! x = " + x);
        l = 5;
        myHeader.innerText = document.querySelector("header") + ", " + x;    
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