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


var l = 0;
var p = 23;
var x = 100;
//for loops are only numerical
for(var x = p - 1; x >= 2; x--){

    if(p%x != 0){
        console.log ("prime so far. x = " + x)
    }

    if(p%x == 0){
        console.log ("p ain't prime!!!!!!!! x = " + x)
        l = 5
    }


    if(l == 0 && x == 2){

        console.log ("PPPRRRRIIIMMMMEEEEEE")        
    }

    if(l == 5 && x == 2){

        console.log ("not")        
    }



}

//mod opertor %
//returns remainder of division

//10%2 == 0
//10%3 == 1
//10/3 == 3 r1