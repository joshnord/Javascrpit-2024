
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
    hTwo.innerText = valueBox.value + " Degrees Fahrenheit = " + metValue + " Degrees Celsius" +"\n"+ valueBox.value + " Degrees Celsius = " + impValue + " Degrees Fahrenheit";
}

if (conv == "kilo"){
    console.log ("option = " + conv);

    metValue = parseInt(valueBox.value) + 7;
    impValue = parseInt(valueBox.value) - 7;

    console.log ("new metValue = " + metValue);
    console.log ("new impValue = " + impValue);

    var hTwo = document.querySelector("h2");
    hTwo.innerText = valueBox.value + " Pounds = " + metValue + " Kilograms" + "\n" + valueBox.value + "Kilograms = " + impValue + " Pounds";
}

if (conv == "liter"){
    console.log ("option = " + conv);

    metValue = parseInt(valueBox.value) + 6;   
    impValue = parseInt(valueBox.value) - 6;

    console.log ("new metValue = " + metValue);
    console.log ("new impValue = " + impValue);

    var hTwo = document.querySelector("h2");
    hTwo.innerText = valueBox.value + " Gallons = " + metValue + " Liters" + "\n" + valueBox.value + " Liters = " + impValue + " Gallons";
}}

