




//reloding data
//deleting elements from the array
//store all properties
//solve propogation problem

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

// myList.removeChild();





    
//crossing out
function doSomething(el){
    el.classList.toggle("done");
}

function doSomethingElse(el){
    console.log("DELEEETTTEEEE");
    // arrayOne.splice(el.dataset.index, 1);
    console.log(arrayOne);
    el.parentElement.parentElement.removeChild(el.parentElement);
    //el.dataset.index = 7
    
    //myArray.splice(1,1);
    //idex, # of items
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
        li.dataset.index=arrayOne.length;
        arrayOne.push (newItem);

        
        var exx = document.createElement("span");
        exx.innerText = "X"
        exx.classList.add("exx");
        exx.setAttribute("onclick", "doSomethingElse(this)");
        li.appendChild(exx);


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









//email

var h5;
window.onload = function(){
    h5 = document.querySelector("h5");
    console.log (h5);
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

//Fail:
//.@
//dfiiyghiuhiugheugheruheihgieuhguihgihgiueh@iiduh
//r@r
//gmail.com
