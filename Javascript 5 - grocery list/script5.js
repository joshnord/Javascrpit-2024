

var arrayOne = [];  

var shouldHide = false;


//hiding & unhiding
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
    
//crossing out
function doSomething(el){
    el.classList.toggle("done");
}

//adding to list
function addItem(){
    
    var newItemBox = document.querySelector("#newItem");
    var newItem = newItemBox.value.trim();
// (&& = and; ||  = or)

    // var p = newItemBox.value;
    // console.log (p);
    // p.trim();
    //  && newItem != p
    if (newItem != ""){
        console.log ("success!");
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
    //clear inner value oon enter
    newItemBox.value = "";
    newItemBox.focus();
}