




var arrayOne = [];  


var hideThing = false;


//hiding & unhiding - triggered by button ----- just do redo
function doOtherThing(){
    if(hideThing == false){
        hideThing = true;
    }
    else{
        hideThing = false;
    }
    redo();

}








//load and save via JSON

function saveData(){
    let jTasks = JSON.stringify(arrayOne);
    console.log(jTasks);
    localStorage.setItem("taks", jTasks);

}
function loadData(){
    let jTasks = localStorage.getItem("taks");
    if (jTasks != null){
        arrayOne = JSON.parse(jTasks);
    }
    redo();

}








//reads input, gives to array, does "redo()"

function addItem(){
    
    var newItemBox = document.querySelector("#newItem");
    var newItem = newItemBox.value.trim();

    if (newItem != ""){
        console.log ("success!");

        let newerItem = {
            name: newItem,
            doneness: false, 
        }
        arrayOne.push(newerItem);
        // arrayOne.push (newItem);

        //creats items as newItem used to do
        redo();

            for(var i = 0; i < arrayOne.length; i++){
                console.log (arrayOne[i]);
            }
    }
    //clear input and save
    newItemBox.value = "";
    newItemBox.focus();
    saveData();
}




//deletes list, adds li and exx for every array member

function redo(){
    //deletes ALL elements in table 
    document.querySelector("#list").innerHTML = "";
    console.log ("redo!");  
    //adds li and exx -- counts from arrayOne[0] to arrayOne[length]
    for (var t = 0; t < arrayOne.length; t++){
        var li = document.createElement("li");
        li.innerText = arrayOne[t].name;     // li.innerText = newItem;
        li.setAttribute("onclick", "doSomething(this)");
        li.dataset.index = t;             // li.dataset.index = arrayOne.length;    //TODO: check if necessary
        
        if(arrayOne[t].doneness == true){
            li.classList.add(hideThing?"hide":"done");
        }

        var exx = document.createElement("span");
        exx.innerText = "X";
        exx.classList.add("exx");
        exx.addEventListener("click", doSomethingElse);

        var myList = document.querySelector("#list");
        li.appendChild(exx);
        myList.appendChild(li);



        

        // if(arrayOne[t].doneness == true){
        //     
        // }
        // if(arrayOne[i].doneness == false){
        //     arrayOne[i].classList.remove("hide");
        // }


    }
    
    saveData();
}




//deletes li.parent from array and repopulates list

function doSomethingElse(event){
    event.stopPropagation();
    arrayOne.splice(this.parentElement.dataset.index, 1);
    console.log(arrayOne);
    redo();
}


//crossing out - triggered by clicking li

function doSomething(el){
    arrayOne[el.dataset.index].doneness = !arrayOne[el.dataset.index].doneness;
    redo();
    }











//Make h5 available + load data from previous interation

var h5;
window.onload = function(){
    h5 = document.querySelector("h5");
    loadData();
}

//Email

function emailInput(){
var emailI = document.querySelector("#email").value;
var atLocate = emailI.indexOf("@");
var dotLocate = emailI.lastIndexOf(".");
var userName = "";
    if (atLocate != -1 && atLocate < dotLocate){
        userNameI = emailI.slice(0, atLocate);
        userName = userNameI[0].toUpperCase()+userNameI.substr(1);
        console.log("username = " + userName);
        h5.innerHTML = "Hello " + userName.trim();
    }
    if (atLocate == -1 || atLocate >= dotLocate){
        h5.innerHTML = "Hello new friend! <br> <br> CONGRATULATIONS <br><br> YOU HAVE PASSED MY TEST <br><br> I know you now to be " + emailI.trim() + "! <br> <br> ERROR: not an email";
    }
    if(emailI.trim() == ""){
        h5.innerHTML = "Hello new friend! <br> <br> CONGRATULATIONS <br><br> YOU HAVE PASSED MY TEST <br><br> I know you now to be nameless! <br> <br> ERROR: not an email";
    }
saveData();
}

