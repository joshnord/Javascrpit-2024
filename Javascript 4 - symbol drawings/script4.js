


function shapeDraw(){
console.log ("shapeDraw");


var shap = document.querySelector("#shape");
var shapeSelect = shap.value;
var sizing = document.querySelector("#sizing");
var size = sizing.value;
//var polygon = [];

//NO ARRAYS JOSH
//do it with *math*

for(var x = 1; x <= size; x++){


// if (shapeSelect == "Diamond" && x <= size/2){
//     console.log ("Diamond up");
//     console.log (x);
//     var asterix = x;
//     var space = 0;


//     for(var space = x; x <= size/4; x++){
//         polygon.push(" ");
//     }
//     for(var asterix = x; x <= size/2; x++){
//         polygon.push("*");
//     }
//     polygon.push("                                                                 ");
//     //push # of spaces (size/2 - x) into array, push # of asterixes (x) into other array
//     //push array into further array
// }

// if (shapeSelect == "Diamond" && x > size/2){
//     console.log ("Diamond");
//     output.innerHTML = "It's a rhombus, my dude <br>" ;
//     console.log (size - x + 1);
//     var asterix = x;
//     var space = 0;

//     for(var space = x; x >= size/4; x++){
//         polygon.push(" ");
//     }
//     for(var asterix = size - x + 1; x < size; x++){
//         polygon.push("*");
//     }
//     polygon.push("                                                                 ");
// }



if (shapeSelect == "Diamond"){
    //dorpdown = diamond ==> this triggers

    if (size % 2 != 0){
        // size is odd or decimal 
                                                                        // var asterix = "";
                                                                        // var space = "";
        var current = "";
        //inputs each column one at a time:
        for(var x = 1; x <= size; x++){
            //x is one for first line, 2 for second, until x = size. 
            output.innerHTML +=  "<br>";
               
            //creates spaces in line:
            for(var space = ( (size/2) - .5 ); space >= 0; space--){
                current =+ " "  ;
                console.log ('current = ' + current);
                output.innerHTML += current
            }
            //creates asterixes in line:
            for(var asterix = (2 * x) - 1; asterix <= (2 * size) - 1; asterix++){
                current =+ "*"  ;
                console.log ('current = ' + current);
                output.innerHTML += current
            }
            current == "";
            console.log ('current = ' + current);
        }

    }


    if (size % 2 == 0){

        output.innerHTML += "This is even :(";

    }
    // && size%2 != 0


    //     ( (size/2) - .5 ) ==> add " " this many times
    //     add "*" once
    //     add this line

    //    current == 
    //     ( (size/2) - .5 ) - 1
    //     "*"               + "**"
    //     add this line

    //     asterix <= size



    // && size%2 == 0

    //     ( (size/2) ) ==> add " " this many times
    //     add "**" once

    //     ( (size/2) ) - 1
    //     "**"         + "**"

    //     asterix <= size



    console.log ("Triangle eeeeeeeeeeeeeeeeeeeeeeeee");
    output.innerHTML = "It's a rhombus, my dude <br>" ;
    var asterix = x;

    // top bit (middle to top): size; size - 2; size - 4...

    for(var x = size; x >= 1; x--){
        output.innerHTML +=  "<br>";
       //creates lines
    for(var asterix = x; asterix <= size; asterix++){
        output.innerHTML += "*";
     
    }
    }



    //inputs each column one at a time
    for(var x = size; x >= size; x--){
        output.innerHTML +=  "<br>";
       //creates lines
    for(var asterix = x; asterix <= size; asterix++){
        output.innerHTML += "*";
     
    }
    }
}






if (shapeSelect == "Triangle"){
    console.log ("Triangle ee");
    output.innerHTML = "hello world <br>" ;
    var asterix = x;
    //inputs each column one at a time
    for(var x = 1; x <= size; x++){
        output.innerHTML +=  "<br>";
       //creates lines
    for(var asterix = x; asterix <= size; asterix++){
        output.innerHTML += "*";
     
    }
    }
}


if (shapeSelect == "Square"){
    console.log ("Square");
    output.innerHTML = "hello world <br>" ;
    var asterix = x;


   
    //inputs each column one at a time
    for(var x = 1; x <= size; x++){
        output.innerHTML +=  "<br>";
       //creates lines
    for(var asterix = 1; asterix <= size; asterix++){
        output.innerHTML += "*";
     
    }
    }
}

// if (shapeSelect == "Square"){
//     console.log ("Square");
//     output.innerHTML = "hello world <br>" ;
//     var asterix = x;

//     //creates lines
//     for(var asterix = x; x <= size; x++){
//         polygon.push("*");
//     }
//     //inputs each column one at a time
//     for(var x = 1; x <= size; x++){
//         output.innerHTML += (polygon.join("")) + "<br>";
//     }
// }

// if (shapeSelect == "Triangle"){
//     console.log ("Triangle");
//     output.innerHTML = "goodbye world <br>" ;
//     //creates lines
//     //inputs each column one at a time
//     for(var x = 1; x <= size; x++){
//         polygon.push("*");
//         output.innerHTML += (polygon.join("")) + "<br>";
//     }
// }

}

}

