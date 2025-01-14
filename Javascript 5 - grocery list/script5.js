

var arrayOne = [];  

var shouldHide = false;


function doOtherThing(){

    shouldHide = !shouldHide;

    var n = document.querySelectorAll (".done");
    console.log(n);

    for (var q = 0; q < n.length; q++){
        if(shouldHide ){
            n[q].classList.add("hide");
        }
        else{
            n[q].classList.remove("hide");
        }
    }
}
    

function doSomething(el){
    el.classList.toggle("done");
}

    
function addItem(){
    
    var newItemBox = document.querySelector("#newItem");
    var newItem = newItemBox.value;
    
    var li = document.createElement("li");
    li.innerText = newItem;

    li.setAttribute("onclick", "doSomething(this)");

    arrayOne.push (newItem);
    //add item to list
    var myList = document.querySelector("#list");
    myList.appendChild(li);


    for(var i = 0; i < arrayOne.length; i++){
    
    console.log (arrayOne[i]);
    }
}