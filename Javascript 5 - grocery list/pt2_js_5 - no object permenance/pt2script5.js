




var arrayOne = [];  

var shouldHide = false;
//crossing out
function doSomething(el){
    el.classList.toggle("done");
}
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



//SHOULD delete element
function doSomethingElse(event){
    // alert(this.innerHTML);
    // console.log("alert(this.innerHTML);" + this.innerHTML);
    console.log("rfnr");
    event.stopPropagation(); //this is undefined
    arrayOne.splice(this.parentElement.dataset.index, 1);
    console.log(arrayOne);
    redo();
}

//SHOULD delete all ELEMENTS and repopulate from array    (called everytime I add something)
                                                        //seperate function with a for loop and for eah one creates the item

                        // function doSomethingElse(el){
                        //     el.parentElement.parentElement.removeChild(el.parentElement);
                        //     //el.dataset.index = 7
                        //     //myArray.splice(1,1);
                        // }

                        // myList.removeChild();
function redo(){
    
    
    document.querySelector("#list").innerHTML = "";
//    return 
    
    for (var t = 0; t < arrayOne.length; t++){
            
        
        console.log ("redo!");
        var li = document.createElement("li");
        li.innerText = arrayOne[t];
        // li.innerText = newItem;
        li.setAttribute("onclick", "doSomething(this)");
        li.dataset.index=t;
        // li.dataset.index=arrayOne.length;
        // arrayOne.push (newItem);


        var exx = document.createElement("span");
        exx.innerText = "X";
        exx.classList.add("exx");
        // exx.setAttribute("onclick", "doSomethingElse(this)");
        exx.addEventListener("click", doSomethingElse);
        li.appendChild(exx);


        //add item to list
        var myList = document.querySelector("#list");
        myList.appendChild(li);
        //good!
        //remove item: removes from array
    }
    saveData();
}

function saveData(){
    let jTasks = JSON.stringify(arrayOne);
    console.log(jTasks);
    localStorage.setItem("taks", jTasks)
    // .setItem(key)   


}
function loadData(){
    let jTasks = localStorage.getItem("taks");
    if (jTasks != null){
        arrayOne = JSON.parse(jTasks);
    }
    redo();


}

// localStorage.setItem("key", value)
// .setItem(key)
// convert arrays to strings
// JSON
// stringify
// let jTasks = JSON.stringify(arrayOne)




//adding to list
function addItem(){
    
    
    var newItemBox = document.querySelector("#newItem");
    var newItem = newItemBox.value.trim();
// (&& = and; ||  = or)

    if (newItem != ""){

        console.log ("success!");
        // var li = document.createElement("li");
        // li.innerText = newItem;
        // li.setAttribute("onclick", "doSomething(this)");
        // li.dataset.index=arrayOne.length;
        arrayOne.push (newItem);
        console.log("arrayOne pre-redo = " + arrayOne + "   newItem = " + newItem)
        redo();

        
        // var exx = document.createElement("span");
        // exx.innerText = "X";
        // exx.classList.add("exx");
        // // exx.setAttribute("onclick", "doSomethingElse(this)");
        // exx.addEventListener("click", doSomethingElse);
        // li.appendChild(exx);


        // //add item to list
        // var myList = document.querySelector("#list");
        // myList.appendChild(li);


            for(var i = 0; i < arrayOne.length; i++){
            
            console.log (arrayOne[i]);
            }
    }
    //clear inner value oon enter
    newItemBox.value = "";
    newItemBox.focus();


    saveData();
}









//email

var h5;
window.onload = function(){
    h5 = document.querySelector("h5");
    console.log (h5);
    loadData();
}

function emailInput(){
// emailin' stuff
//    https://www.w3schools.com/js/js_string_search.asp
var emailI = document.querySelector("#email").value;
    console.log("email = " + emailI);
var atLocate = emailI.indexOf("@");
    console.log(atLocate);
var dotLocate = emailI.lastIndexOf(".");
    console.log(atLocate);
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

//Pass:
//bob@gmail.com
//dogernorgn@gmail.com
//dogern.orgn@gmail.com
//dogern.orgn@gma.il.com
//dogern.orgn@gmail.co@m
//dogern@.orgn@gmail.co@m
//@.@
//.@.
//@.
//jnrefrorfjn@sadness.ord


//Fail:
//.@
//dfiiyghiuhiugheugheruheihgieuhguihgihgiueh@iiduh
//r@r
//gmail.com
