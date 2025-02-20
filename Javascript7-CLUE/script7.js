
var realPerson = 30;
var realRoom = 30;
var realWeapon = 30;

var newLocation = "roommm";
var newHand = "";
var newCharInfo = "";




var accuseContainer = {
    person: realPerson,
    room: realRoom,
    weapon: realWeapon,
}

var charOne = {
    name: "White", 
    number: 21,
    location: newLocation,//hall or roomTwo.value
    cards: newHand,
    knowledge: newCharInfo
}
var charTwo = {
    name: "Peacock", 
    number: 22,
    location: newLocation,//hall or roomTwo.value
    cards: newHand,
    knowledge: newCharInfo
}
var charThree = {
    name: "Scarlet", 
    number: 23,
    location: newLocation,//hall or roomTwo.value
    cards: newHand,
    knowledge: newCharInfo
}
var charFour = {
    name: "Green", 
    number: 24,
    location: newLocation,//hall or roomTwo.value
    cards: newHand,
    knowledge: newCharInfo
}
var charFive = {
    name: "Plum", 
    number: 25,
    location: newLocation,//hall or roomTwo.value
    cards: newHand,
    knowledge: newCharInfo
}
var charSix = {
    name: "Mustard", 
    number: 26,
    location: newLocation,//hall or roomTwo.value
    cards: newHand,
    knowledge: newCharInfo
}



var peacock = {
    cardName: "Mrs. Peacock", 
    cardNumber: 0,
}
var plum = {
    cardName: "Pr. Plum", 
    cardNumber: 1,
}
var mustard = {
    cardName: "Col Mustard", 
    cardNumber: 2,
}
var white = {
    cardName: "Mrs. White", 
    cardNumber: 3,
}
var green = {
    cardName: "Mr. Green", 
    cardNumber: 4,
}
var scarlet = {
    cardName: "Ms. Scarlet", 
    cardNumber: 5,
}

var knife = {
    cardName: "Knife", 
    cardNumber: 6,
}
var leadPipe = {
    cardName: "Lead Pipe", 
    cardNumber: 7,
}
var rope = {
    cardName: "Rope", 
    cardNumber: 8,
}
var revolver = {
    cardName: "Revolver", 
    cardNumber: 9,
}
var wrench = {
    cardName: "Wrench", 
    cardNumber: 10,
}
var candlestick = {
    cardName: "Candlestick", 
    cardNumber: 11,
}

var hall = {
    cardName: "Hall", 
    cardNumber: 12,
}
var lounge = {
    cardName: "Lounge", 
    cardNumber: 13,
}
var study = {
    cardName: "Study", 
    cardNumber: 14,
}
var library = {
    cardName: "Library", 
    cardNumber: 15,
}
var diningRoom = {
    cardName: "Dining Room", 
    cardNumber: 16,
}
var billardsRoom = {
    cardName: "Billards Room", 
    cardNumber: 17,
}
var Ballroom = {
    cardName: "Ballroom", 
    cardNumber: 18,
}
var conservatory = {
    cardName: "Conservatory", 
    cardNumber: 19,
}
var kitchen = {
    cardName: "Kitchen", 
    cardNumber: 20,
}









function getRandomInt(max) {
    return Math.floor(Math.random() * max + 1);
}






function deal(){
    //give 3 to holder of each kind 

    accuseContainer.person = (getRandomInt(6) - 1);
    accuseContainer.weapon = (getRandomInt(6) + 5);  
    accuseContainer.room = (getRandomInt(9) + 11);

console.log(accuseContainer)

    

}



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



function expandAllInfo(){
alert("hi");
}














var locationPlayer = "Hallway";
var playerLocation = "Hallway";
function move(){
    var moveValue = getRandomInt(4);
   if (roomTwo.value != "" && roomTwo.value != playerLocation){ 
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
    if (locationPlayer == "Room" && moveValue != 1){
    alert(moveValue + "; located at " + locationPlayer + ": " + roomTwo.value);
    playerLocation = roomTwo.value;
    }
    else if (locationPlayer == "Hallway"){
    alert(moveValue + "; located at " + locationPlayer);
    playerLocation = "Hallway";
    }
    else if (locationPlayer == "Room" && moveValue == 1){
    alert(moveValue + "; located at " + locationPlayer);
    playerLocation = "Room";
    }
   }
   else{
    alert ("select different target");
   }
   
}




function question(){
    let accuse = document.querySelector("#accuse");
    console.log(accuse.checked);
    
    if (accuse.checked != true){
        if (location != "Hallway"){
        playerOneSuspect();
        console.log("playerOneSuspect()");
        }
        else{
        console.log("location = hallway");
        }
    }
    else{
        accusePlz();
        console.log("accuse");
    }
}
function playerOneSuspect(){
    newInfo.innerText= "hello world";


}
function accusePlz(){
    newInfo.innerText= "you accused. u r sad now :(";

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
