

var arrayOne = [];  


// function doSomething(el){
//     alert (el.html);
//     } 

function doOtherThing(){

    // doOtherThingg();
var n = document.querySelectorAll (".done");
console.log(n);
// All

// .classList
for (var i = 0; i<n.length; i++){

console.log (n[i].innerText);
n[i].classList.toggle("hide");

}

}

//boolean hidden = false;
//function hide{
    //hidden = !hidden;
//}
//if(hidden)

function doSomething(el){
    el.classList.toggle("done");
    
// function doOtherThingg(){
//     el.classList.toggle("hide");

// }
}

    //    li onclick = doSomething(this);
function addItem(){
    
    //get value of textbox (v)
    //add value to array
    // // var li document.createElement ("li");
    // li.innerText = v; 
    // li.classList.append("NewItem");
    // var myList = document.querySelector("#list");
    // myList.appendChild(li);
    var newItemBox = document.querySelector("#newItem");
    var newItem = newItemBox.value;
        // alert("something stupid = " + newItem)
        
    
    //createl list ite
    var li = document.createElement("li");
    li.innerText = newItem;

    li.setAttribute("onclick", "doSomething(this)")

// classlist.add
// claslist. remove

//.clsslist 
// onclick can be done to any element
// .toggle




    // li.classList.add ("done");

    arrayOne.push (newItem);
    //add item to list
    var myList = document.querySelector("#list");
    myList.appendChild(li);



    for(var i = 0; i < arrayOne.length; i++){
    
    console.log (arrayOne[i]);
    }

}

