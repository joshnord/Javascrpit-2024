
var metValue = 0;
var impValue = 0;
// var numberValue = 0;
// window.onload = function(){
//     //happens after the page has loaded 
//     numberValue = document.querySelector("#valueBox");
// }





function convert(){
//we should only do the functon "convert" when button "Convert" is pressed

    var interim = document.querySelector("#valueBox");
    var cVal = interim.value;
    console.log ("cVal = " + cVal);

    var convers = document.querySelector("#conversion");
    var conv = convers.value;
    console.log ("conv = " + conv);




if (conv == "celsius"){
    console.log ("option = " + conv);
    
    metValue = (parseInt(valueBox.value) - 32) * 5 / 9;
    impValue = (parseInt(valueBox.value) / 5) * 9 + 32;

    console.log ("new metValue = " + metValue);
    console.log ("new impValue = " + impValue);

    var hTwo = document.querySelector("h2");
    hTwo.innerText = valueBox.value + " Degrees Fahrenheit = " + metValue.toFixed(1) + " Degrees Celsius" +"\n"+ valueBox.value + " Degrees Celsius = " + impValue.toFixed(1) + " Degrees Fahrenheit";
// I want to make "# of decimal places" a feild and put it into "metValue.toFixed(1)"      
// or, harder still, to take # of decimal places from "valueBox.value"
}

if (conv == "kilo"){
    console.log ("option = " + conv);

    metValue = parseInt(valueBox.value) * 0.453592;
    impValue = parseInt(valueBox.value) / 0.453592;

    console.log ("new metValue = " + metValue);
    console.log ("new impValue = " + impValue);

    var hTwo = document.querySelector("h2");
    hTwo.innerText = valueBox.value + " Pounds = " + metValue.toFixed(1) + " Kilograms" + "\n" + valueBox.value + " Kilograms = " + impValue.toFixed(1) + " Pounds";
}

if (conv == "liter"){
    console.log ("option = " + conv);

    metValue = parseInt(valueBox.value) * 3.78541;   
    impValue = parseInt(valueBox.value) / 3.78541;

    console.log ("new metValue = " + metValue);
    console.log ("new impValue = " + impValue);

    var hTwo = document.querySelector("h2");
    hTwo.innerText = valueBox.value + " US Gallons = " + metValue.toFixed(1) + " Liters" + "\n" + valueBox.value + " Liters = " + impValue.toFixed(1) + " US Gallons";
}}

