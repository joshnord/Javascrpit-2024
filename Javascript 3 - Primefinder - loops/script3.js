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
    var p = pBox.value;
    myOutput.innerText = " ";
    myOutputTwo.innerText = " ";
    var pRoot = Math.ceil(Math.sqrt(p));
    var nums = [];



    for(var x = 2; x <= pRoot; x++){

      

    //if remainder
    if(p%x != 0){
        console.log ("prime so far. x = " + x);
    }



    //output if p is not prime; if no remainder; factorizing
    if(p%x == 0){
        console.log ("p ain't prime!!!!!!!! x = " + x);
        //permanent indicator that it's not prime
        l = 5;
        
            //normal push case
            if(x-1 != p/x && x != Math.sqrt(p)){
            nums.push(parseInt(x));
            nums.push(parseInt(p/x));
            }
            //preventing repeats for perfect squares
            if(x == Math.sqrt(p)){
            nums.push(parseInt(x));
            console.log("trigger square");
            }
            //alerting of prevented repeats for numbers like 6, 56, & 72
            if(x-1 == p/x){
            console.log("triggered");
            }


        console.log(nums[i]);

        myOutput.innerText = p + " Is Not Prime";
    }


    //output if p is prime
    if(l == 0 && x > pRoot - 1){

        console.log ("PPPRRRRIIIMMMMEEEEEE");  
        console.log (" ");   
        myOutput.innerText = p + " is PRIME";
        myOutputTwo.innerText = p + " has no factors";
    }

    //output if p ain't prime + reset l for next time
    if(l == 5 && x > pRoot - 1){

        console.log ("not");    
        console.log (" ");  
        //resetting primeness indicator to prepare for new number
        l = 0;


        // output of factors is here 
        nums.sort(function(a, b){return a-b});


        myOutputTwo.innerHTML = "Factors of " + p + " are: <br>" ;
       
        myOutputTwo.innerHTML += (nums.join(", "));

        for(var i = 0; i < nums.length; i++){

        console.log(nums[i]);
    
        }
        
        

    }

}


//if p = 1 or 2

if(p == 1){
    console.log ("PPPRRRRIIIMMMMEEEEEE");  
    console.log (" ");   
    myOutput.innerText = p + " is PRIME";
    myOutputTwo.innerText = p + " has no factors";
}  

if(p == 2){
    console.log ("PPPRRRRIIIMMMMEEEEEE");  
    console.log (" ");   
    myOutput.innerText = p + " is PRIME";
    myOutputTwo.innerText = p + " has no factors";
}  

}











// Examples:


//mod opertor %
//returns remainder of division

//10%2 == 0
//10%3 == 1
//10/3 == 3 r1


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




