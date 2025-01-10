

var arrayOne = [];  



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


    // li.classList.add ("done");

    arrayOne.push (newItem);
    //add item to list
    var myList = document.querySelector("#list");
    myList.appendChild(li);



    for(var i = 0; i < arrayOne.length; i++){
    
    console.log (arrayOne[i]);
    }
}