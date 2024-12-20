


function shapeDraw(){
console.log ("shapeDraw");


var shap = document.querySelector("#shape");
var shapeSelect = shap.value;
var sizing = document.querySelector("#sizing");
console.log (sizing);
var size = sizing.value;
var polygon = [];



for(var x = 1; x <= size; x++){


if (shapeSelect == "Diamond" && x <= size/2){
    console.log ("Diamond up");
    console.log (x);
    var asterix = x;
    var space = 0;


    for(var space = x; x <= size/4; x++){
        polygon.push(" ");
    }
    for(var asterix = x; x <= size/2; x++){
        polygon.push("*");
    }
    polygon.push("                                                                 ");
    //push # of spaces (size/2 - x) into array, push # of asterixes (x) into other array
    //push array into further array
}

if (shapeSelect == "Diamond" && x > size/2){
    console.log ("Diamond");
    output.innerHTML = "It's a rhombus, my dude <br>" ;
    console.log (size - x + 1);
    var asterix = x;
    var space = 0;

    for(var space = x; x >= size/4; x++){
        polygon.push(" ");
    }
    for(var asterix = size - x + 1; x < size; x++){
        polygon.push("*");
    }
    polygon.push("                                                                 ");
}



if (shapeSelect == "Triangle"){
    console.log ("Triangle");
    output.innerHTML = "goodbye world <br>" ;
    var asterix = x;
    var space = 0;

}



if (shapeSelect == "Square"){
    console.log ("Square");
    output.innerHTML = "hello world <br>" ;
    var asterix = x;
    var space = 0;

    for(var asterix = size - x; x <= size; x++){
        polygon.push("*");
    }

    for(var x = 1; x <= size; x++){
        
        output.innerHTML += (polygon.join("")) + "<br>";

    }

    for(var i = 0; i < polygon.length; i++){

    console.log (polygon[i]);

}
}

// output.innerHTML += (polygon.join(""));

// for(var i = 0; i < polygon.length; i++){

// console.log (polygon[i]);
}

}

{/* <Header>Cool Header</Header>

<hr> 

<select name="shape" id="shape">
    <option value="">Choose shape</option>
    <option value="celsius">Square</option>
    <option value="kilo">Triangle</option>
    <option value="liter">Diamond</option>

</select>

<button onclick="shapeDraw();">Draw Now!</button>

<div id="output"> Shape = </div> */}
