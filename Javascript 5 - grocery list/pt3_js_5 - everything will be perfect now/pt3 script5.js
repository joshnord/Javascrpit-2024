




var arrayOne = [];  





 

//TODO: ensure this works with objects

var shouldHide = false;
//crossing out - triggered by clicking li
function doSomething(el){
    el.classList.toggle("done");
}
//hiding & unhiding - triggered by button
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





            // //TODO: new item or li?
            //     let newerItem = {
            //         doneness: isDone, 
            //         hideness: isHide,
            //     }
            //     arrayOne.push(newerItem);

            // // leftBar.innerHTML = "";
            // // listRolls();

            // // // look at listRolls to understand more








//deletes li.parent from array and repopulates list
function doSomethingElse(event){
    event.stopPropagation();
    arrayOne.splice(this.parentElement.dataset.index, 1);
    console.log(arrayOne);
    redo();
}



//TODO: check if better 
                        // function doSomethingElse(el){
                        //     el.parentElement.parentElement.removeChild(el.parentElement);
                        //     //el.dataset.index = 7
                        //     //myArray.splice(1,1);
                        // }

                        // myList.removeChild();





//deletes list, adds li and exx for every array member

function redo(){
    //deletes ALL elements in table 
    document.querySelector("#list").innerHTML = "";
    console.log ("redo!");  
    //adds li and exx -- counts from arrayOne[0] to arrayOne[length]
    for (var t = 0; t < arrayOne.length; t++){
        var li = document.createElement("li");
        li.innerText = arrayOne[t];     // li.innerText = newItem;
        li.setAttribute("onclick", "doSomething(this)");
        li.dataset.index = t;             // li.dataset.index = arrayOne.length;    //TODO: check if necessary

        var exx = document.createElement("span");
        exx.innerText = "X";
        exx.classList.add("exx");
        exx.addEventListener("click", doSomethingElse);

        var myList = document.querySelector("#list");
        li.appendChild(exx);
        myList.appendChild(li);
    }
    saveData();
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
        arrayOne.push (newItem);
        
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

