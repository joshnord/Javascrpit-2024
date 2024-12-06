



var userName = "Reginald the Fierce";
console.log(userName);
console.log("Hello " + userName);

userName = "Bobby";
console.log(userName);
console.log("Hello " + userName);



var visitCount = 103;
visitCount = visitCount + "1";
console.log ("You are visitor number " + visitCount);



var visitCount = 103;
visitCount = visitCount + 1;
console.log ("You are visitor number " + visitCount);

var visitCount = 103;
visitCount = visitCount - 1;
console.log ("You are visitor number " + visitCount);

var visitCount = 103;
visitCount = visitCount * 1;
console.log ("You are visitor number " + visitCount);

var visitCount = 103;
visitCount = visitCount / 1;
console.log ("You are visitor number " + visitCount);




var thingOne = 1;
var thingTwo = 2;
var thingThree = 3;
var thingFour = 4;
var thingFive = 5;
var thingSix = 6;

visitCount = thingFour * (thingFive - thingSix / thingFour);

console.log ("You are visitor number " + visitCount);

visitCount = ( thingFour/thingTwo * (thingFive - thingSix / thingFour) ) * thingThree / ((thingOne - thingTwo)/ - thingSix) - (thingSix * thingTwo + thingFive * thingTwo);

console.log ("You are visitor number " + visitCount);




function greet(){
    var txtName = document.querySelector("#userName");
    alert("Greetings " + txtName.value + "!");
    var myHeader = document.querySelector("header");
    myHeader.innerText = "Hello " + txtName.value;

}


function count(){
    var numberCount = document.querySelector("numberCountt");
    console.log (numberCount);
    numberCount = numberCount + 1;
    console.log (numberCount);
    var myCount = document.querySelector("#numberCountt");
    myCount.innerText = numberCount;
}
    
    