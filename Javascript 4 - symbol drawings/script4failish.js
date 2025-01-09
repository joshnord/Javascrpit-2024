

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
    
        if (size % 2 != 0){
            // size is odd or decimal 
                                                                            // var asterix = "";
                                                                            // var space = "";
            var current = "";
            //inputs each column one at a time:
            for(var x = 1; x <= size; x++){
                //x is one for first line, 2 for second, until x = size. 
               
             
                   
                                console.log ("var x = 1; x <= size; x++");
    
                //creates spaces in line:
                for(var space = ( (size/2) - .5 ); space >= 0; space--){
                    //if size is 5, space is 2     space is greater or equal to 0    space counts from [2] to 0
                    current = ""  ;
                    
                    current += " "  ;
                    console.log ('space current =' + current + "!");
                    // output.innerHTML += current
                
                //creates asterixes in line:
                for(var asterix = (x) - 1; asterix <= (size/2) - 1;  asterix++){
                    // (2 * x) - 1 = 9 ---- peak # a=of asterixes
                    current += "*"  ;
                    console.log ('asterix current = ' + current);
                    
                }
                output.innerHTML += current + "<br>";
                }
    
                console.log ('post-output current = ' + current);
                current == "";
                console.log ('reset current = ' + current);
            }
    
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
    
        if (size % 2 == 0){
    
            output.innerHTML += "This is even :(";
    
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
    
    