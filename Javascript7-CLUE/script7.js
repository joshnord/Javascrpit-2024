function playerOneSuspect(){
    newInfo.innerText= "hello world";


}



function personExpand(){


}


function roomExpand(){


}


function weaponExpand(){


}





// Mrs. Peacock
// Pr. Plum
// Col Mustard
// Mrs. White
// Mr. Green
// Ms. Scarlet

// Hall
// Lounge
// Study
// Library
// Dining Room
// Billards Room
// Ballroom
// Conservatory
// Kitchen

// Knife
// Lead Pipe
// Rope
// Revolver
// Wrench
// Candlestick






var cardName, cardOwner


    // cardName = "";
    // cardOwner = "";


window.onload = function createArrays(){
    arrayPeople = ["Mrs. Peacock",
    "Pr. Plum",
    "Col Mustard",
    "Mrs. White",
    "Mr. Green",
    "Ms. Scarlet"
    ];
    arrayRooms = [
    "Hall",
    "Lounge",
    "Study",
    "Library",
    "Dining Room",
    "Billards Room",
    "Ballroom",
    "Conservatory",
    "Kitchen"
    ];
    arrayWeapons = [
    "Knife",
    "Lead Pipe",
    "Rope",
    "Revolver",
    "Wrench",
    "Candlestick"
    ];
    
}





// // everything past this is weird


// function openWeapons(){
//     //deletes ALL elements in table 
//     document.querySelector("#weaponMenu").innerHTML = "";
//     console.log ("redo!");  

//     for (var t = 0; t < arrayWeapons.length; t++){

//             //sublist maybe a ul?
//             // ul    //start hidden, positioned absolute -- object is position relative
//                 // li -> person1
//                 // li -> person2


//         var weapon = document.createElement("weapon");
//         weapon.innerText = arrayWeapons[t].name; 
//         weapon.setAttribute("onclick", "doSomething(this)");
//         weapon.dataset.index = t;  
        
//         if(arrayOne[t].doneness == true){
//             weapon.classList.add(hideThing?"hide":"done");
//         }

//         var exx = document.createElement("span");
//         exx.innerText = "X";
//         exx.classList.add("exx");
//         exx.addEventListener("click", doSomethingElse);

//         var myList = document.querySelector("#list");
//         weapon.appendChild(exx);
//         myList.appendChild(weapon);



        

//         // if(arrayOne[t].doneness == true){
//         //     
//         // }
//         // if(arrayOne[i].doneness == false){
//         //     arrayOne[i].classList.remove("hide");
//         // }


//     }
    
//     saveData();
// }






// function weaponExpand(){




//     let newName = cardName.value;
//     let newOwner = cardOwner.value;

//     let newWeapon = {
//         name: newName, 
//         owner: newOwner,

//     }




//     weaponMenu.innerHTML = "";
//     listObjects(Weapons); //not perfect method here

// }


// function listObjects(){
//     //loo phrough everything in rolls

//     let leftBar = document.querySelector("#leftBar");
//     //loop through tape rlls for each, create element   add a click event to get details   add a data-index property     //add add an appropriatte class   //add to to rolls
//     for (var i=0; i < tapeRolls.length; i++){
//             let divRoll = document.createElement("div");
//             divRoll.dataset.index = i;


//             divRoll.innerText = tapeRolls[i].name;

//             divRoll.classList.add("tape");
//             divRoll.classList.add(tapeRolls[i].type)

//             leftBar.appendChild(divRoll);
//     }

// }


