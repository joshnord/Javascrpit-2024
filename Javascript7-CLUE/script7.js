






// list of all items can be static'
// who has hand must be... objects?


// list of all possible cards in an array, numbered 0-20

// choose random # from 0-5, 6-14, 15-20 ==> this is truth
// go by character --> choose random 18/player# cards (default 4)
// each card: delete from "deck" array and add player-name to card-object





//necessary arrays:
//origin
//deck, for dealing -- only used to deal; populated from origin every time
//


function getRandomInt(max) {
    return Math.floor(Math.random() * max + 1);
  }




var locationPlayer = "Hallway";
function move(){
    var moveValue = getRandomInt(4);
    
    if (moveValue == 1){
        locationPlayer = locationPlayer;
    }
    else if ((moveValue == 2 || moveValue == 3) && locationPlayer == "Hallway"){
        locationPlayer = "Room";
    }
    else if ((moveValue == 2 || moveValue == 3) && locationPlayer == "Room"){
        locationPlayer = "Hallway";
    }
    else if (moveValue == 4){
        locationPlayer = "Room";
    }
    alert(moveValue + "loated at" + locationPlayer);
}




function question(){
    let accuse = document.querySelector("#accuse");
    console.log(accuse.checked);
    
    if (accuse.checked != true){
        if (location != "Hallway"){
        playerOneSuspect()
        console.log("playerOneSuspect()");
        }
        else{
        console.log("location = hallway");
        }
    }
    else{
        accusePlz()
        console.log("accuse");
    }
}
function playerOneSuspect(){
    newInfo.innerText= "hello world";


}
function accusePlz(){


}



function personExpand(){
    alert("hellllo");

}


function roomExpand(){


}


function weaponExpand(){


}



// if roomTwo is a non-default value, class disabled is turned off 
// roomTwo is reset to default at end of turn 
// and disabled until turn start
function endTurn(){
    alert("helour");

    roomTwo.classList.add("disabled");
    roomTwo.value = "";

}









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
