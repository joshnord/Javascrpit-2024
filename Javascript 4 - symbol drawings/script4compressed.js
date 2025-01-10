function shapeDraw(){
        var shap = document.querySelector("#shape");
        var shapeSelect = shap.value;
        var sizing = document.querySelector("#sizing");
        var size = sizing.value;
    function squareDraw(size){
        output.innerHTML = "hello world <br>" ;
        var asterix = x;
        for(var x = 1; x <= size; x++){
            output.innerHTML +=  "<br>";
        for(var asterix = 1; asterix <= size; asterix++){
            output.innerHTML += "*";
        } }
    }   
    function triangleDraw(size){
        output.innerHTML = "hello world <br>" ;
        var asterix = x;
        for(var x = 1; x <= size; x++){
            output.innerHTML +=  "<br>";
        for(var asterix = x; asterix <= size; asterix++){
            output.innerHTML += "*";
        } }
    }
    function rhombusDraw(size){
        output.innerHTML = "It's a rhombus, my dude <br>" ;
        var current = "|";
        if (size % 2 != 0 && size != 1){
            for(var x = 1; x <= Math.ceil(size/2); x++){
                for(var space = 1 ; space <= (Math.ceil(size/2) - x); space++){
                    current += "&nbsp;";
                }
                for(var asterix = 1; asterix <= 2 * x - 1; asterix++){
                    current += "*"  ;
                }
                for(var space = 1 ; space <= (Math.ceil(size/2) - x); space++){
                    current += "&nbsp;";
                }
                output.innerHTML += current + "|<br>|";
                current = "";
                }
            for(var x = Math.floor(size/2); x >= 1; x--){  
                for(var space = 1 ; space <= (Math.ceil(size/2) - x); space++){
                    current += "&nbsp;";
                }
                for(var asterix = 1; asterix <= 2 * x - 1; asterix++){
                    current += "*"  ;
                }
                for(var space = 1 ; space <= (Math.ceil(size/2) - x); space++){
                    current += "&nbsp;";
                }
                if(x != 1){
                output.innerHTML += current + "|<br>|";
                current = "";
                }
                if(x == 1){
                output.innerHTML += current + "|";
                current = "";
                } }       
        }
        if (size % 2 == 0){
            for(var x = 1; x <= Math.ceil(size/2); x++){
                for(var space = 1 ; space <= (Math.ceil(size/2) - x); space++){
                    current += "&nbsp;";
                }
                for(var asterix = 0; asterix <= 2 * x - 1; asterix++){
                    current += "*"  ;
                }
                for(var space = 1 ; space <= (Math.ceil(size/2) - x); space++){
                    current += "&nbsp;";
                }
                output.innerHTML += current + "|<br>|";
                current = "";
                }
            for(var x = Math.ceil(size/2); x >= 1; x--){ 
                for(var space = 1 ; space <= (Math.ceil(size/2) - x); space++){
                    current += "&nbsp;";
                }
                for(var asterix = 0; asterix <= 2 * x - 1; asterix++){
                    current += "*"  ;
                }
                for(var space = 1 ; space <= (Math.ceil(size/2) - x); space++){
                    current += "&nbsp;";
                }
                if(x != 1){
                output.innerHTML += current + "|<br>|";
                current = "";
                }
                if(x == 1){
                output.innerHTML += current + "|";
                current = "";
                } }
        }
        if(size == 1){
            output.innerHTML += "|*|"
        }
    }
    for(var x = 1; x <= size; x++){
        if (shapeSelect == "Diamond"){
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
    
    