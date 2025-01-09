

function shapeDraw(){
console.log ("shapeDraw");


var shap = document.querySelector("#shape");
var shapeSelect = shap.value;
var sizing = document.querySelector("#sizing");
var size = sizing.value;





function squareDraw(size){
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





function triangleDraw(size){
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





function rhombusDraw(size){

    console.log ("diagmk6ed");
    output.innerHTML = "It's a rhombus, my dude <br>" ;
    var current = "|";
    if (size % 2 != 0){
        // size is odd or decimal 
                                                                        // var asterix = "";
                                                                        // var space = "";
        
        //inputs each column one at a time:
        for(var x = 1; x <= Math.ceil(size/2); x++){
            //x is one for first line, 2 for second, until x = size. 
           
         
               
                            console.log ("var x = 1; x <= size; x++");
            for(var space = 1 ; space <= (Math.ceil(size/2) - x); space++){
                current += "&nbsp;";
                console.log ('space current =' + current);
            }
            //creates asterixes in line:
            for(var asterix = 1; asterix <= 2 * x - 1; asterix++){
                // (2 * x) - 1 = 9 ---- peak # a=of asterixes
                current += "*"  ;
                console.log ('asterix current = ' + current);
            }
            for(var space = 1 ; space <= (Math.ceil(size/2) - x); space++){
                current += "&nbsp;";
                console.log ('space current =' + current);
            }
            output.innerHTML += current + "|<br>|";
            console.log ('post-output current = ' + current + " line number = " + x);
            current = "";
            console.log ('reset current = ' + current);
            }

            
        for(var x = Math.floor(size/2); x >= 1; x--){ 
               
            for(var space = 1 ; space <= (Math.ceil(size/2) - x); space++){
                current += "&nbsp;";
                console.log ('space current =' + current);
            }
            //creates asterixes in line:
            for(var asterix = 1; asterix <= 2 * x - 1; asterix++){
                // (2 * x) - 1 = 9 ---- peak # a=of asterixes
                current += "*"  ;
                console.log ('asterix current = ' + current);
            }
            for(var space = 1 ; space <= (Math.ceil(size/2) - x); space++){
                current += "&nbsp;";
                console.log ('space current =' + current);
            }
            if(x != 1){
            output.innerHTML += current + "|<br>|";
            console.log ('post-output current = ' + current + " line number = " + x);
            current = "";
            console.log ('reset current = ' + current);
            }
            if(x == 1){
            output.innerHTML += current + "|";
            console.log ('post-output current = ' + current + " line number = " + x);
            current = "";
            console.log ('reset current = ' + current);  
            }
            }
            
    }


    if (size % 2 == 0){

        for(var x = 1; x <= Math.ceil(size/2); x++){
            //x is one for first line, 2 for second, until x = size. 
           
         
               
                            console.log ("var x = 1; x <= size; x++");
            for(var space = 1 ; space <= (Math.ceil(size/2) - x); space++){
                current += "&nbsp;";
                console.log ('space current =' + current);
            }
            //creates asterixes in line:
            for(var asterix = 0; asterix <= 2 * x - 1; asterix++){
                // (2 * x) - 1 = 9 ---- peak # a=of asterixes
                current += "*"  ;
                console.log ('asterix current = ' + current);
            }
            for(var space = 1 ; space <= (Math.ceil(size/2) - x); space++){
                current += "&nbsp;";
                console.log ('space current =' + current);
            }
            output.innerHTML += current + "|<br>|";
            console.log ('post-output current = ' + current + " line number = " + x);
            current = "";
            console.log ('reset current = ' + current);
            }

            
        for(var x = Math.ceil(size/2); x >= 1; x--){ 
               
            for(var space = 1 ; space <= (Math.ceil(size/2) - x); space++){
                current += "&nbsp;";
                console.log ('space current =' + current);
            }
            //creates asterixes in line:
            for(var asterix = 0; asterix <= 2 * x - 1; asterix++){
                // (2 * x) - 1 = 9 ---- peak # a=of asterixes
                current += "*"  ;
                console.log ('asterix current = ' + current);
            }
            for(var space = 1 ; space <= (Math.ceil(size/2) - x); space++){
                current += "&nbsp;";
                console.log ('space current =' + current);
            }
            if(x != 1){
            output.innerHTML += current + "|<br>|";
            console.log ('post-output current = ' + current + " line number = " + x);
            current = "";
            console.log ('reset current = ' + current);
            }
            if(x == 1){
            output.innerHTML += current + "|";
            console.log ('post-output current = ' + current + " line number = " + x);
            current = "";
            console.log ('reset current = ' + current);  
            }
            }


    }

    // && size%2 == 0

    //     ( (size/2) ) ==> add " " this many times
    //     add "**" once

    //     ( (size/2) ) - 1
    //     "**"         + "**"

    //     asterix <= size
}




//actual thing that draws
for(var x = 1; x <= size; x++){

    if (shapeSelect == "Diamond"){
        //dorpdown = diamond ==> this triggers
        rhombusDraw(size);
    }

    if (shapeSelect == "Triangle"){
        triangleDraw(size);
    }

    if (shapeSelect == "Square"){
        squareDraw(size);
    }

}

}

