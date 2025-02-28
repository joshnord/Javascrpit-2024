//array for grabbing cards by #
//array for deleting cards from to deal -- grab from cards by #
//array from dealing -- 1-3 is accuse, 4-6 is player A...
//arrays for what each player knows






var turnCount = 0;

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
    cardName: "Col. Mustard", 
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
var ballroom = {
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



var playerChoiceArray = ["Ms. Scarlet", "Mrs. Peacock", 
"Pr. Plum", "Col. Mustard", "Mrs. White", "Mr. Green"]
    var playerA = "";
    var playerB = "";
    var playerC = "";
    var playerD = "";
    var playerE = "";
    var playerF = "";
function chooseScarlet(){
    playerA = playerChoiceArray[0];
    playerB = playerChoiceArray[1];
    playerC = playerChoiceArray[2];
    playerD = playerChoiceArray[3];
    playerE = playerChoiceArray[4];
    playerF = playerChoiceArray[5];
    hideWelcome();
    deal();
}
function chooseGreen(){
    playerA = playerChoiceArray[5];
    playerB = playerChoiceArray[0];
    playerC = playerChoiceArray[1];
    playerD = playerChoiceArray[2];
    playerE = playerChoiceArray[3];
    playerF = playerChoiceArray[4];
    hideWelcome();
    deal();
}
function chooseWhite(){
    playerA = playerChoiceArray[4];
    playerB = playerChoiceArray[5];
    playerC = playerChoiceArray[0];
    playerD = playerChoiceArray[1];
    playerE = playerChoiceArray[2];
    playerF = playerChoiceArray[3];
    hideWelcome();
    deal();
}
function chooseMustard(){
    playerA = playerChoiceArray[3];
    playerB = playerChoiceArray[4];
    playerC = playerChoiceArray[5];
    playerD = playerChoiceArray[0];
    playerE = playerChoiceArray[1];
    playerF = playerChoiceArray[2];
    hideWelcome();
    deal();
}
function choosePlum(){
    playerA = playerChoiceArray[2];
    playerB = playerChoiceArray[3];
    playerC = playerChoiceArray[4];
    playerD = playerChoiceArray[5];
    playerE = playerChoiceArray[0];
    playerF = playerChoiceArray[1];
    hideWelcome();
    deal();
}
function choosePeacock(){
    playerA = playerChoiceArray[1];
    playerB = playerChoiceArray[2];
    playerC = playerChoiceArray[3];
    playerD = playerChoiceArray[4];
    playerE = playerChoiceArray[5];
    playerF = playerChoiceArray[0];
    hideWelcome();
    deal();
}



function hideWelcome(){

    welcomeScreen.classList.add("hidden");
    console.log("playerA = " + playerA);
}



function deal(){

    //give 3 to holder of each kind 
    accuseContainer.person = (getRandomInt(6) - 1);
    accuseContainer.weapon = (getRandomInt(6) + 5);  
    accuseContainer.room = (getRandomInt(9) + 11);

    console.log(accuseContainer);
    //truth set


    

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












var locationPlayer = "";
var playerLocation = "";
var locationPlayerA = "Hallway";
var playerLocationA = "Hallway";
var locationPlayerB = "Hallway";
var playerLocationB = "Hallway";
var locationPlayerC = "Hallway";
var playerLocationC = "Hallway";
var locationPlayerD = "Hallway";
var playerLocationD = "Hallway";
var locationPlayerE = "Hallway";
var playerLocationE = "Hallway";
var locationPlayerF = "Hallway";
var playerLocationF = "Hallway";




function movePlayerN(bob){
     
    
    newInfo.innerText = "";


    var moveValue = getRandomInt(4);
    
        
        var roomChoiceB = (getRandomInt(9) + 11);
        var roomChoiceC = (getRandomInt(9) + 11);
        var roomChoiceD = (getRandomInt(9) + 11);
        var roomChoiceE = (getRandomInt(9) + 11);
        var roomChoiceF = (getRandomInt(9) + 11);

    if(bob == 'A'){
        locationPlayer = locationPlayerA;
        playerLocation = playerLocationA;
        roomChoice = roomTwo.value;
    }
    else if(bob == 'B'){
        locationPlayer = locationPlayerB;
        playerLocation = playerLocationB;
        roomChoice = roomChoiceB;
    }
    else if(bob == 'C'){
        locationPlayer = locationPlayerC;
        playerLocation = playerLocationC;
        roomChoice = roomChoiceC;
    }    
    else if(bob == 'D'){
        locationPlayer = locationPlayerD;
        playerLocation = playerLocationD;
        roomChoice = roomChoiceD;
    }
    else if(bob == 'E'){
        locationPlayer = locationPlayerE;
        playerLocation = playerLocationE;
        roomChoice = roomChoiceE;
    }
    else if(bob == 'F'){
        locationPlayer = locationPlayerF;
        playerLocation = playerLocationF;
        roomChoice = roomChoiceF;
    }



            //roomTwo.value is Player 1 specific
        if (roomChoice != "" && roomChoice != playerLocation){ 
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
            alert(moveValue + "; located at " + locationPlayer + ": " + roomChoice);
            playerLocation = roomChoice;
            }
            else if (locationPlayer == "Hallway"){
            alert(moveValue + "; located at " + locationPlayer);
            playerLocation = "Hallway";
            }
            else if (locationPlayer == "Room" && moveValue == 1){
            alert(moveValue + "; located at " + locationPlayer);
            playerLocation = playerLocation;
            }
        }
        else{
            alert ("select different target");
        }

    console.log("playerLocation = " + playerLocation + ", locationPlayer = " + locationPlayer);
    console.log(bob);
//playerLocation is name of location
//location player is type of location


            if (playerLocation == 12){
                playerLocation = "Hall";
            }
            else if (playerLocation == 13){
                playerLocation = "Lounge";
            }
            else if (playerLocation == 14){
                playerLocation = "Study";
            }
            else if (playerLocation == 15){
                playerLocation = "Library";
            }
            else if (playerLocation == 16){
                playerLocation = "Dining Room";
            }
            else if (playerLocation == 17){
                playerLocation = "Billards Room";
            }
            else if (playerLocation == 18){
                playerLocation = "Ballroom";
            }
            else if (playerLocation == 19){
                playerLocation = "Conservatory";
            }
            else if (playerLocation == "Kitchen"){
                playerLocation = 20;
            }


   ///////////////////////
        if(bob == 'A'){
            locationPlayerA = locationPlayer;
            playerLocationA = playerLocation;
            turnCount = turnCount + 1;
            console.log(turnCount)
            realTurnNumber.innerText = turnCount;
            // var realTurnNumber = document.querySelector("#realTurnNumber");
            // realTurnNumber.innerText = parseInt(realTurnNumber.innerText) + 1;

            if (playerLocation == "Hallway"){
            newInfo.innerText += playerA + " is in the " + "Hallway";
            }
            else {
            newInfo.innerText += playerA + " is in the " + playerLocationA;
            }
        }
        else if(bob == 'B'){
            locationPlayerB = locationPlayer;
            playerLocationB = playerLocation;

            if (playerLocation == "Hallway"){
            newInfo.innerText = playerB + " is in the " + "Hallway";
            }
            else {
            newInfo.innerText = playerB + " is in the " + playerLocationB;
            }
        }        
        else if(bob == 'C'){
            locationPlayerC = locationPlayer;
            playerLocationC = playerLocation;

            if (playerLocation == "Hallway"){
            newInfo.innerText = playerC + " is in the " + "Hallway";
            }
            else {
            newInfo.innerText = playerC + " is in the " + playerLocationC;
            }
        }
        else if(bob == 'D'){
            locationPlayerD = locationPlayer;
            playerLocationD = playerLocation;

            if (playerLocation == "Hallway"){
            newInfo.innerText = playerD + " is in the " + "Hallway";
            }
            else {
            newInfo.innerText = playerD + " is in the " + playerLocationD;
            }
        }
        else if(bob == 'E'){
            locationPlayerE = locationPlayer;
            playerLocationE = playerLocation;

            if (playerLocation == "Hallway"){
            newInfo.innerText = playerE + " is in the " + "Hallway";
            }
            else {
            newInfo.innerText = playerE + " is in the " + playerLocationE;
            }
        }
        else if(bob == 'F'){
            locationPlayerF = locationPlayer;
            playerLocationF = playerLocation;

            if (playerLocation == "Hallway"){
            newInfo.innerText = playerF + " is in the " + "Hallway";
            }
            else {
            newInfo.innerText = playerF + " is in the " + playerLocationF;
            }
        }


   
}











function questionA(){
    let accuse = document.querySelector("#accuse");
    console.log(accuse.checked);
    
    if (accuse.checked != true){
        if (playerLocationA != "Hallway"){
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
    newInfo.innerText += ("\n" + playerA + " accused " + "Jeremy" + " in the " + "Garage" + " with the " + "table");



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
    "Col. Mustard",
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
// Col. Mustard
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
