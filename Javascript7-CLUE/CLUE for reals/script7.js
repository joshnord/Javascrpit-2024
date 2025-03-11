//array for grabbing cards by #
//array for accuse
//array for deleting cards from to deal -- grab from cards by #
//array from dealing -- 0-2 is playerA, 3-5 is playerB...
//arrays for what each player owns + knows



var jeremy = "Mrs. Peacock";
var garage = "Conservatory";
var table = "Wrench";


var bobert = 0;


var turnCount = 0;

var realPerson = 30;
var realRoom = 30;
var realWeapon = 30;

var newLocation = "roommm";
var newHand = "";
var newCharInfo = "";

var personSuspect = "";
var roomSuspect = "";
var weaponSuspect = "";


function getRandomInt(max) {
return Math.floor(Math.random() * max + 1);
}
    
    
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



//kinda weird this is just out in the open
//source of cards
var deckOne = [];
deckOne.push(peacock, plum, mustard, white, green, scarlet,
knife, leadPipe, rope, revolver, wrench, candlestick,
hall, lounge, study, library, diningRoom, billardsRoom, ballroom, conservatory, kitchen
);
var deckTwo = deckOne;
for(var i = 0; i < deckOne.length; i++){
console.log("deckOne = ", deckOne[i]);
}



var deckThree = [];
var deckPlayerA = [];
var deckPlayerB = [];
var deckPlayerC = [];
var deckPlayerD = [];
var deckPlayerE = [];
var deckPlayerF = [];



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



var accusePersonNumber = "";
var accuseWeaponNumber = "";
var accuseRoomNumber = "";

function deal(){

accusePersonNumber = getRandomInt(6) - 1;
accuseWeaponNumber = getRandomInt(6) + 5;
accuseRoomNumber = getRandomInt(9) + 11;
//give 3 to holder of each kind
accuseContainer.person = deckOne[accusePersonNumber];
accuseContainer.weapon = deckOne[accuseWeaponNumber];
accuseContainer.room = deckOne[accuseRoomNumber];
console.log(accuseContainer);
deckTwo.splice(accuseRoomNumber, 1);
deckTwo.splice(accuseWeaponNumber, 1);
deckTwo.splice(accusePersonNumber, 1);
console.log("deckTwo = ", deckTwo);
//accused chosen and removed

for(let q = deckTwo.length; q > 0; q--){
var george = getRandomInt(q) - 1;
deckThree.push(deckTwo[george]);
deckTwo.splice(george, 1);
}
//randomly added to deck 3
console.log("deckThree = ", deckThree);


deckPlayerA = [deckThree[0], deckThree[1], deckThree[2]];
deckPlayerB = [deckThree[3], deckThree[4], deckThree[5]];
deckPlayerC = [deckThree[6], deckThree[7], deckThree[8]];
deckPlayerD = [deckThree[9], deckThree[10], deckThree[11]];
deckPlayerE = [deckThree[12], deckThree[13], deckThree[14]];
deckPlayerF = [deckThree[15], deckThree[16], deckThree[17]];
console.log("");
console.log("accuseContainer = " , accuseContainer);
console.log( "deckPlayerA = " , deckPlayerA);
console.log( "deckPlayerB = " , deckPlayerB);
console.log( "deckPlayerC = " , deckPlayerC);
console.log( "deckPlayerD = " , deckPlayerD);
console.log( "deckPlayerE = " , deckPlayerE);
console.log( "deckPlayerF = " , deckPlayerF);
console.log("");
console.log("");
console.log("");
console.log("");
}





function hideWelcome(){
welcomeScreen.classList.add("hidden");
roomSuspectSelect.classList.add("notAllowed");
console.log("playerA = " + playerA);
disableSuspectSelect();
stayChoice.classList.add("disabled");
}



function expandAllInfo(){
alert("hi");
}


var locationPlayer = "";
//"room", "hallway"
var playerLocation = "";
//specific
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
//TODO: make roomChoice(letter) a variable which changes each turn based on info




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
    if (bob == "A"){
        newInfo.innerText += "\n\n" + "You rolled a 1";
    }
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
console.log(moveValue + "; located at " + locationPlayer + ": " + roomChoice);
playerLocation = roomChoice;
}
else if (locationPlayer == "Hallway"){
console.log(moveValue + "; located at " + locationPlayer);
playerLocation = "Hallway";
}
else if (locationPlayer == "Room" && moveValue == 1){
console.log(moveValue + "; located at " + locationPlayer);
playerLocation = playerLocation;
}
}
else{
console.log("select different target");
}



console.log("playerLocation = " + playerLocation + ", locationPlayer = " + locationPlayer);
console.log("player" + bob + " rolled a " + moveValue);
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
else if (playerLocation == 20){
playerLocation = "Kitchen";
}




///////////////////////
if(bob == 'A'){
locationPlayerA = locationPlayer;
playerLocationA = playerLocation;
// var realTurnNumber = document.querySelector("#realTurnNumber");
// realTurnNumber.innerText = parseInt(realTurnNumber.innerText) + 1;
roomSuspectSelect.innerText = playerLocationA;
    if (playerLocationA == "Hallway"){
    newInfo.innerText += playerA + " is in the " + "Hallway";
    stayChoice.classList.add("disabled");
    increaseTurnCount();
    moveHide();
    }
    else {
    stayChoice.classList.remove("disabled");
    // roomSuspectSelect.optionValue = playerLocationA;
    endMove();
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


function increaseTurnCount(){
turnCount = turnCount + 1;
console.log(turnCount);
realTurnNumber.innerText = turnCount;
}

function endMove(){
// personSuspectSelect.classList.remove("disabled");
// roomSuspectSelect.classList.remove("disabled");
// weaponSuspectSelect.classList.remove("disabled");
newInfo.innerText = playerA + " is in the " + playerLocationA;
blockSubSuspect.classList.remove("disabled");
moveHide();
increaseTurnCount();
}





function questionA(){
let accuse = document.querySelector("#accuse");
console.log(accuse.checked);
personSuspect = document.querySelector("#personSuspectSelect").value;
// roomSuspect = document.querySelector("#roomSuspectSelect").innerText;
roomSuspect = playerLocationA;
weaponSuspect = document.querySelector("#weaponSuspectSelect").value;

    if (accuse.checked != true){
        if (playerLocationA != "Hallway"){
        playerSuspect(playerA);
        console.log("playerSuspect()");
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


var deckQuestion = [];
var benjamin = "";
var chooseRandomiser = 5;


function playerSuspect(playerWhoseTurn){

    console.log("start of " + playerWhoseTurn + "'s interrogation")

    chooseRandomiser = getRandomInt(7);

    if (playerWhoseTurn == playerA){

        newInfo.innerText += ("\n\n" + playerA + " suspects " + personSuspect + " in the " + roomSuspect + " with the " + weaponSuspect);
        disableSuspectSelect();

    }
    else {

        let personSuspectAI = jeremy;
        let roomSuspectAI = garage;
        let weaponSuspectAI = table;
        newInfo.innerText += ("\n\n" + playerWhoseTurn + " suspects " + personSuspectAI + " in the " + roomSuspectAI + " with the " + weaponSuspectAI);

        personSuspect = personSuspectAI;
        roomSuspect = roomSuspectAI;
        weaponSuspect = weaponSuspectAI;

    }
findPlayerX();
bobert = 0;

console.log("playerX = " + playerX);
console.log("personSuspect = " + personSuspect);
console.log("roomSuspect = " + roomSuspect);
console.log("weaponSuspect = " + weaponSuspect);

       
       

for(var r = 0; r <= 5; r++){
        benjamin = playerChoiceArray[(playerXFinder + r) % 6];
        console.log("");
        console.log("");
        console.log("playerWhoseTurn = " , playerWhoseTurn);
        console.log("benjamin = " , benjamin);
        console.log("r = " , r);
    if (playerWhoseTurn != benjamin){
        console.log("can question");
            if(benjamin == playerA){
                deckQuestion = deckPlayerA;
            }
            else if(benjamin == playerB){
                deckQuestion = deckPlayerB;
            }
            else if(benjamin == playerC){
                deckQuestion = deckPlayerC;
            }
            else if(benjamin == playerD){
                deckQuestion = deckPlayerD;
            }
            else if(benjamin == playerE){
                deckQuestion = deckPlayerE;
            }
            else if(benjamin == playerF){
                deckQuestion = deckPlayerF;
            }
        console.log("deckQuestion = " , deckQuestion);
        console.log("pre-for loop bobert = " + bobert);
        for(var y = 0; y <= 2; y++){
        console.log("bobert = " + bobert);
        let g = (chooseRandomiser + y) % 3;
        console.log(deckQuestion[g].cardName + " (deckQuestion[y].cardName)");
        console.log("g = " + g + "; y = " + y);
            if (deckQuestion[g].cardName == personSuspect
                || deckQuestion[g].cardName == roomSuspect
                || deckQuestion[g].cardName == weaponSuspect){
                console.log("");
                console.log("");
                console.log("found!");
                console.log("");
                console.log("");
                if (bobert != 1){
                    if (playerWhoseTurn == playerA){
                        newInfo.innerText += "\n\n" + benjamin + " shows you the " + deckQuestion[g].cardName + " card";
                    }
                    else {
                        newInfo.innerText += "\n\n" + benjamin + " shows " + playerWhoseTurn + " a card";
                    }
                        if (playerWhoseTurn == playerA){
                            deckPlayerA.push[deckQuestion[g].cardName];
                        }
                        else if (playerWhoseTurn == playerB){
                            deckPlayerB.push[deckQuestion[g].cardName];
                        }
                        else if (playerWhoseTurn == playerC){
                            deckPlayerC.push[deckQuestion[g].cardName];
                        }
                        else if (playerWhoseTurn == playerD){
                            deckPlayerD.push[deckQuestion[g].cardName];
                        }
                        else if (playerWhoseTurn == playerE){
                            deckPlayerE.push[deckQuestion[g].cardName];
                        }
                        else if (playerWhoseTurn == playerF){
                            deckPlayerF.push[deckQuestion[g].cardName];
                        }
                    
                }
                bobert = 1;
            }
        }
    if (bobert != 1 && playerWhoseTurn == playerA){
        newInfo.innerText += "\n\n" + benjamin + " cannot show you anything";
    }
    else if (bobert != 1){
        newInfo.innerText += "\n\n" + benjamin + " does not show them anything";
    }
    }
}

//if the questioned person is playerA, give them options
//if the questioned person is players B-F, choose first card in array

console.log("deck" + playerA + "= " );
console.log(deckPlayerA);
console.log("deck" + playerB + "= " );
console.log(deckPlayerB);
console.log("deck" + playerC + "= " );
console.log(deckPlayerC);
console.log("deck" + playerD + "= " );
console.log(deckPlayerD);
console.log("deck" + playerE + "= " );
console.log(deckPlayerE);
console.log("deck" + playerF + "= " );
console.log(deckPlayerF);

}


function accusePlz(){


console.log(personSuspect);
console.log(accuseContainer.person.cardName);
console.log(roomSuspect);
console.log(accuseContainer.room.cardName);
console.log(weaponSuspect);
console.log(accuseContainer.weapon.cardName);



if (personSuspect == accuseContainer.person.cardName &&
roomSuspect == accuseContainer.room.cardName &&
weaponSuspect == accuseContainer.weapon.cardName){
alert (" you win! " +
accuseContainer.person.cardName + " killed Mr. Body in the " + accuseContainer.room.cardName + " with the " + accuseContainer.weapon.cardName);
}
else {
newInfo.innerText= "you accused. u r sad now :(";
alert ("you lose :(");
}


}


var playerX = "";
var playerXFinder = "";

function findPlayerX(){
playerXFinder = turnCount % 6;
console.log ("playerXFinder = " + playerXFinder);
playerX = playerChoiceArray[playerXFinder];
}



// if roomTwo is a non-default value, class disabled is turned off
// roomTwo is reset to default at end of turn
// and disabled until turn start
function endTurn(){
alert("helour");
moveHide();
roomTwo.value = "";
disableSuspectSelect();
}
function beginTurn(){
moveShow();
disableSuspectSelect();
}
function moveHide(){
blockMoveSelect.classList.add("disabled");
blockMoveDisplay.classList.add("disabled");
}
function moveShow(){
blockMoveSelect.classList.remove("disabled");
blockMoveDisplay.classList.remove("disabled");
}
function disableSuspectSelect(){
// personSuspectSelect.classList.add("disabled");
// roomSuspectSelect.classList.add("disabled");
// weaponSuspectSelect.classList.add("disabled");
blockSubSuspect.classList.add("disabled");
// console.log("disableSuspectSelect");
}






function personExpand(){
alert("hellllo");
}

function roomExpand(){

}

function weaponExpand(){

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