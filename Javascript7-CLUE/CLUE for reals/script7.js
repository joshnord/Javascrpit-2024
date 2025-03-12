//array for grabbing cards by #
//array for accuse
//array for deleting cards from to deal -- grab from cards by #
//array from dealing -- 0-2 is playerA, 3-5 is playerB...
//arrays for what each player owns + knows



var garfunkel = "";


var roomChoice = "";


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
    cardNumber: 0
}
var plum = {
    cardName: "Pr. Plum",
    cardNumber: 1
}
var mustard = {
cardName: "Col. Mustard",
cardNumber: 2
}
var white = {
cardName: "Mrs. White",
cardNumber: 3
}
var green = {
cardName: "Mr. Green",
cardNumber: 4
}
var scarlet = {
cardName: "Ms. Scarlet",
cardNumber: 5
}
var knife = {
cardName: "Knife",
cardNumber: 6
}
var leadPipe = {
cardName: "Lead Pipe",
cardNumber: 7
}
var rope = {
cardName: "Rope",
cardNumber: 8
}
var revolver = {
cardName: "Revolver",
cardNumber: 9
}
var wrench = {
cardName: "Wrench",
cardNumber: 10
}
var candlestick = {
cardName: "Candlestick",
cardNumber: 11
}
var hall = {
cardName: "Hall",
cardNumber: 12
}
var lounge = {
cardName: "Lounge",
cardNumber: 13
}
var study = {
cardName: "Study",
cardNumber: 14
}
var library = {
cardName: "Library",
cardNumber: 15
}
var diningRoom = {
cardName: "Dining Room",
cardNumber: 16
}
var billardsRoom = {
cardName: "Billards Room",
cardNumber: 17
}
var ballroom = {
cardName: "Ballroom",
cardNumber: 18
}
var conservatory = {
cardName: "Conservatory",
cardNumber: 19
}
var kitchen = {
cardName: "Kitchen",
cardNumber: 20
}



//kinda weird this is just out in the open
//source of cards
var deckOne = [peacock, plum, mustard, white, green, scarlet,
knife, leadPipe, rope, revolver, wrench, candlestick,
hall, lounge, study, library, diningRoom, billardsRoom, ballroom, conservatory, kitchen
];
// var deckOne = [];
// deckOne.push(peacock, plum, mustard, white, green, scarlet,
// knife, leadPipe, rope, revolver, wrench, candlestick,
// hall, lounge, study, library, diningRoom, billardsRoom, ballroom, conservatory, kitchen
// );
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
    handZero.classList.add("isScarlet");
    handOne.classList.add("isScarlet");
    handTwo.classList.add("isScarlet");
    hideWelcome();
    deal();
    ScarletTurn.classList.remove("opacityCheck");
}
function chooseGreen(){
    playerA = playerChoiceArray[5];
    playerB = playerChoiceArray[0];
    playerC = playerChoiceArray[1];
    playerD = playerChoiceArray[2];
    playerE = playerChoiceArray[3];
    playerF = playerChoiceArray[4];
    handZero.classList.add("isGreen");
    handOne.classList.add("isGreen");
    handTwo.classList.add("isGreen");
    hideWelcome();
    deal();
    GreenTurn.classList.remove("opacityCheck");
}
function chooseWhite(){
    playerA = playerChoiceArray[4];
    playerB = playerChoiceArray[5];
    playerC = playerChoiceArray[0];
    playerD = playerChoiceArray[1];
    playerE = playerChoiceArray[2];
    playerF = playerChoiceArray[3];
    handZero.classList.add("isWhite");
    handOne.classList.add("isWhite");
    handTwo.classList.add("isWhite");
    hideWelcome();
    deal();
    WhiteTurn.classList.remove("opacityCheck");
}
function chooseMustard(){
    playerA = playerChoiceArray[3];
    playerB = playerChoiceArray[4];
    playerC = playerChoiceArray[5];
    playerD = playerChoiceArray[0];
    playerE = playerChoiceArray[1];
    playerF = playerChoiceArray[2];
    handZero.classList.add("isMustard");
    handOne.classList.add("isMustard");
    handTwo.classList.add("isMustard");
    hideWelcome();
    deal();
    MustardTurn.classList.remove("opacityCheck");
}
function choosePlum(){
    playerA = playerChoiceArray[2];
    playerB = playerChoiceArray[3];
    playerC = playerChoiceArray[4];
    playerD = playerChoiceArray[5];
    playerE = playerChoiceArray[0];
    playerF = playerChoiceArray[1];
    handZero.classList.add("isPlum");
    handOne.classList.add("isPlum");
    handTwo.classList.add("isPlum");
    hideWelcome();
    deal();
    PlumTurn.classList.remove("opacityCheck");
}
function choosePeacock(){
    playerA = playerChoiceArray[1];
    playerB = playerChoiceArray[2];
    playerC = playerChoiceArray[3];
    playerD = playerChoiceArray[4];
    playerE = playerChoiceArray[5];
    playerF = playerChoiceArray[0];
    handZero.classList.add("isPeacock");
    handOne.classList.add("isPeacock");
    handTwo.classList.add("isPeacock");
    hideWelcome();
    deal();
    PeacockTurn.classList.remove("opacityCheck");
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

    handZero.innerHTML = deckPlayerA[0].cardName;
    handOne.innerHTML = deckPlayerA[1].cardName;
    handTwo.innerHTML = deckPlayerA[2].cardName;
}


function hideWelcome(){
    welcomeScreen.classList.add("hidden");
    roomSuspectSelect.classList.add("notAllowed");
    console.log("playerA = " + playerA);
    disableSuspectSelect();
    stayChoice.classList.add("disabled");

    PeacockTurn.classList.add("opacityCheck", "isPeacock");
    PlumTurn.classList.add("opacityCheck", "isPlum");
    MustardTurn.classList.add("opacityCheck", "isMustard");
    WhiteTurn.classList.add("opacityCheck", "isWhite");
    GreenTurn.classList.add("opacityCheck", "isGreen");
    ScarletTurn.classList.add('opacityCheck', "isScarlet");

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
var moveValue = "";



var personChoice = "";
var weaponChoice = "";


var roomChoiceB = "";
var roomChoiceC = "";
var roomChoiceD = "";
var roomChoiceE = "";
var roomChoiceF = "";


function movePlayerN(bob){
newInfo.innerText = "";




 moveValue = getRandomInt(4);



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
        // if have 8 rooms = (getRandomInt(9) + 11);
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
        if (moveValue == 1){
        newInfo.innerText += "You rolled a 1" + "\n\n";
        }
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
// else if(bob == 'B'){
// locationPlayerB = locationPlayer;
// playerLocationB = playerLocation;
//     if (playerLocation == "Hallway"){
//     newInfo.innerText = playerB + " is in the " + "Hallway";
//     }
//     else {
//     newInfo.innerText = playerB + " is in the " + playerLocationB;
//     aiChooseSuspect(playerB);
//     }
// }


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
var g = "";


function playerSuspect(playerWhoseTurn){

    console.log("start of " + playerWhoseTurn + "'s interrogation")

    chooseRandomiser = getRandomInt(7);

    if (playerWhoseTurn == playerA){

        newInfo.innerText += ("\n\n" + playerA + " suspects " + personSuspect + " in the " + roomSuspect + " with the " + weaponSuspect);
        disableSuspectSelect();

    }
    else {

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
         g = (chooseRandomiser + y) % 3;
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
                    console.log("will push");
                        if (playerWhoseTurn == playerA){
                            deckPlayerA.push(deckQuestion[g]);
                            console.log("deckPlayerA = ", deckPlayerA);
                        }
                        else if (playerWhoseTurn == playerB){
                            deckPlayerB.push(deckQuestion[g]);
                            console.log("deckPlayerB = ", deckPlayerB);
                        }
                        else if (playerWhoseTurn == playerC){
                            deckPlayerC.push(deckQuestion[g]);
                            console.log("deckPlayerC = ", deckPlayerC);
                        }
                        else if (playerWhoseTurn == playerD){
                            deckPlayerD.push(deckQuestion[g]);
                            console.log("deckPlayerD = ", deckPlayerD);
                        }
                        else if (playerWhoseTurn == playerE){
                            deckPlayerE.push(deckQuestion[g]);
                            console.log("deckPlayerE = ", deckPlayerE);
                        }
                        else if (playerWhoseTurn == playerF){
                            deckPlayerF.push(deckQuestion[g]);
                            console.log("deckPlayerF = ", deckPlayerF);
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
alert (" YOU WIN! " +
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


var totalTurnCount = 1;

function nextTurn(){
    nextTurnButton.classList.add("disabled");
    console.log("totalTurnCount =  "+ totalTurnCount);
    if (totalTurnCount%6 == 0){
                if (playerA == "Mrs. Peacock"){
                    PeacockTurn.classList.remove("opacityCheck");
                }
                else if (playerA == "Pr. Plum"){
                    PlumTurn.classList.remove("opacityCheck");
                }
                else if (playerA == "Col. Mustard"){
                    MustardTurn.classList.remove("opacityCheck");
                }
                else if (playerA == "Mrs. White"){
                    WhiteTurn.classList.remove("opacityCheck");
                }
                else if (playerA == "Mr. Green"){
                    GreenTurn.classList.remove("opacityCheck");
                }
                else if (playerA == "Ms. Scarlet"){
                    ScarletTurn.classList.remove("opacityCheck");
                }
        beginTurnA();
    }
    else if (totalTurnCount%6 == 1){
        PeacockTurn.classList.add("opacityCheck");
        PlumTurn.classList.add("opacityCheck");
        MustardTurn.classList.add("opacityCheck");
        WhiteTurn.classList.add("opacityCheck");
        GreenTurn.classList.add("opacityCheck");
        ScarletTurn.classList.add("opacityCheck");
        if (playerB == "Mrs. Peacock"){
            PeacockTurn.classList.remove("opacityCheck");
        }
        else if (playerB == "Pr. Plum"){
            PlumTurn.classList.remove("opacityCheck");
        }
        else if (playerB == "Col. Mustard"){
            MustardTurn.classList.remove("opacityCheck");
        }
        else if (playerB == "Mrs. White"){
            WhiteTurn.classList.remove("opacityCheck");
        }
        else if (playerB == "Mr. Green"){
            GreenTurn.classList.remove("opacityCheck");
        }
        else if (playerB == "Ms. Scarlet"){
            ScarletTurn.classList.remove("opacityCheck");
        }
        endTurn();
        aiChooseSuspect(playerB);
    }
    else if (totalTurnCount%6 == 2){
        PeacockTurn.classList.add("opacityCheck");
        PlumTurn.classList.add("opacityCheck");
        MustardTurn.classList.add("opacityCheck");
        WhiteTurn.classList.add("opacityCheck");
        GreenTurn.classList.add("opacityCheck");
        ScarletTurn.classList.add("opacityCheck");
        if (playerC == "Mrs. Peacock"){
            PeacockTurn.classList.remove("opacityCheck");
        }
        else if (playerC == "Pr. Plum"){
            PlumTurn.classList.remove("opacityCheck");
        }
        else if (playerC == "Col. Mustard"){
            MustardTurn.classList.remove("opacityCheck");
        }
        else if (playerC == "Mrs. White"){
            WhiteTurn.classList.remove("opacityCheck");
        }
        else if (playerC == "Mr. Green"){
            GreenTurn.classList.remove("opacityCheck");
        }
        else if (playerC == "Ms. Scarlet"){
            ScarletTurn.classList.remove("opacityCheck");
        }
        aiChooseSuspect(playerC);
    }
    else if (totalTurnCount%6 == 3){
        PeacockTurn.classList.add("opacityCheck");
        PlumTurn.classList.add("opacityCheck");
        MustardTurn.classList.add("opacityCheck");
        WhiteTurn.classList.add("opacityCheck");
        GreenTurn.classList.add("opacityCheck");
        ScarletTurn.classList.add("opacityCheck");
        if (playerD == "Mrs. Peacock"){
            PeacockTurn.classList.remove("opacityCheck");
        }
        else if (playerD == "Pr. Plum"){
            PlumTurn.classList.remove("opacityCheck");
        }
        else if (playerD == "Col. Mustard"){
            MustardTurn.classList.remove("opacityCheck");
        }
        else if (playerD == "Mrs. White"){
            WhiteTurn.classList.remove("opacityCheck");
        }
        else if (playerD == "Mr. Green"){
            GreenTurn.classList.remove("opacityCheck");
        }
        else if (playerD == "Ms. Scarlet"){
            ScarletTurn.classList.remove("opacityCheck");
        }
        aiChooseSuspect(playerD);
    }
    else if (totalTurnCount%6 == 4){
        PeacockTurn.classList.add("opacityCheck");
        PlumTurn.classList.add("opacityCheck");
        MustardTurn.classList.add("opacityCheck");
        WhiteTurn.classList.add("opacityCheck");
        GreenTurn.classList.add("opacityCheck");
        ScarletTurn.classList.add("opacityCheck");
        if (playerE == "Mrs. Peacock"){
            PeacockTurn.classList.remove("opacityCheck");
        }
        else if (playerE == "Pr. Plum"){
            PlumTurn.classList.remove("opacityCheck");
        }
        else if (playerE == "Col. Mustard"){
            MustardTurn.classList.remove("opacityCheck");
        }
        else if (playerE == "Mrs. White"){
            WhiteTurn.classList.remove("opacityCheck");
        }
        else if (playerE == "Mr. Green"){
            GreenTurn.classList.remove("opacityCheck");
        }
        else if (playerE == "Ms. Scarlet"){
            ScarletTurn.classList.remove("opacityCheck");
        }
        aiChooseSuspect(playerE);
    }
    else if (totalTurnCount%6 == 5){
        PeacockTurn.classList.add("opacityCheck");
        PlumTurn.classList.add("opacityCheck");
        MustardTurn.classList.add("opacityCheck");
        WhiteTurn.classList.add("opacityCheck");
        GreenTurn.classList.add("opacityCheck");
        ScarletTurn.classList.add("opacityCheck");
        if (playerF == "Mrs. Peacock"){
            PeacockTurn.classList.remove("opacityCheck");
        }
        else if (playerF == "Pr. Plum"){
            PlumTurn.classList.remove("opacityCheck");
        }
        else if (playerF == "Col. Mustard"){
            MustardTurn.classList.remove("opacityCheck");
        }
        else if (playerF == "Mrs. White"){
            WhiteTurn.classList.remove("opacityCheck");
        }
        else if (playerF == "Mr. Green"){
            GreenTurn.classList.remove("opacityCheck");
        }
        else if (playerF == "Ms. Scarlet"){
            ScarletTurn.classList.remove("opacityCheck");
        }
        aiChooseSuspect(playerF);
    }
    totalTurnCount = totalTurnCount + 1;
    console.log("totalTurnCount =  "+ totalTurnCount);
    console.log("");console.log("");console.log("");console.log("");console.log("");
    console.log("");console.log("");console.log("");console.log("");console.log("");
    nextTurnButton.classList.remove("disabled");
    // console.log(playerA)
}

function endTurn(){
moveHide();
roomTwo.value = "";
disableSuspectSelect();
}
function beginTurnA(){
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











var awooga = "";
// var
// var
// var
var roomChoiceQ = "";

function aiChooseSuspect(rob){

    console.log("");console.log("");console.log("");console.log("");console.log("");
    console.log("");console.log("");console.log("");console.log("");console.log("");

    deckOne = [peacock, plum, mustard, white, green, scarlet,
    knife, leadPipe, rope, revolver, wrench, candlestick,
    hall, lounge, study, library, diningRoom, billardsRoom, ballroom, conservatory, kitchen
    ];
if(rob == playerB){
findGarfunkelRoom(deckPlayerB);
roomChoiceB = roomChoiceQ;
console.log("roomChoiceB = " + roomChoiceB);
movePlayerN("B");

    locationPlayerB = locationPlayer;
    playerLocationB = playerLocation;
        if (playerLocation == "Hallway"){
        newInfo.innerText = playerB + " is in the " + "Hallway";
        }
        else {
        newInfo.innerText = playerB + " is in the " + playerLocationB;
        aiChooseSuspectContinue(rob);
        }
}
else if(rob == playerC){
findGarfunkelRoom(deckPlayerC);
roomChoiceC = roomChoiceQ;
console.log("roomChoiceC = " + roomChoiceC);
movePlayerN("C");

    locationPlayerC = locationPlayer;
    playerLocationC = playerLocation;
        if (playerLocation == "Hallway"){
        newInfo.innerText = playerC + " is in the " + "Hallway";
        }
        else {
        newInfo.innerText = playerC + " is in the " + playerLocationC;
        aiChooseSuspectContinue(rob);
        }
}
else if(rob == playerD){
findGarfunkelRoom(deckPlayerD);
roomChoiceD = roomChoiceQ;
console.log("roomChoiceD = " + roomChoiceD);
movePlayerN("D");

    locationPlayerD = locationPlayer;
    playerLocationD = playerLocation;
        if (playerLocation == "Hallway"){
        newInfo.innerText = playerD + " is in the " + "Hallway";
        }
        else {
        newInfo.innerText = playerD + " is in the " + playerLocationD;
        aiChooseSuspectContinue(rob);
        }
}
else if(rob == playerE){
findGarfunkelRoom(deckPlayerE);
roomChoiceE = roomChoiceQ;
console.log("roomChoiceE = " + roomChoiceE);
movePlayerN("E");

    locationPlayerE = locationPlayer;
    playerLocationE = playerLocation;
        if (playerLocation == "Hallway"){
        newInfo.innerText = playerE + " is in the " + "Hallway";
        }
        else {
        newInfo.innerText = playerE + " is in the " + playerLocationE;
        aiChooseSuspectContinue(rob);
        }
}
else if(rob == playerF){
findGarfunkelRoom(deckPlayerF);
roomChoiceF = roomChoiceQ;
console.log("roomChoiceF = " + roomChoiceF);
movePlayerN("F");

    locationPlayerF = locationPlayer;
    playerLocationF = playerLocation;
        if (playerLocation == "Hallway"){
        newInfo.innerText = playerF + " is in the " + "Hallway";
        }
        else {
        newInfo.innerText = playerF + " is in the " + playerLocationF;
        aiChooseSuspectContinue(rob);
        }
}
   
}


function aiChooseSuspectContinue(rob){
if(rob == playerB){
    findGarfunkelPerson(deckPlayerB);
    personChoice = garfunkel;
    findGarfunkelWeapon(deckPlayerB);
    weaponChoice = garfunkel;
}
else if(rob == playerC){
    findGarfunkelPerson(deckPlayerC);
    personChoice = garfunkel;
    findGarfunkelWeapon(deckPlayerC);
    weaponChoice = garfunkel;
}
else if(rob == playerD){
    findGarfunkelPerson(deckPlayerD);
    personChoice = garfunkel;
    findGarfunkelWeapon(deckPlayerD);
    weaponChoice = garfunkel;
}
else if(rob == playerE){
    findGarfunkelPerson(deckPlayerE);
    personChoice = garfunkel;
    findGarfunkelWeapon(deckPlayerE);
    weaponChoice = garfunkel;
}
else if(rob == playerF){
    findGarfunkelPerson(deckPlayerF);
    personChoice = garfunkel;
    findGarfunkelWeapon(deckPlayerF);
    weaponChoice = garfunkel;
}


console.log("weaponChoice = " + weaponChoice);
console.log("personChoice = " + personChoice);
console.log("roomChoice = " + roomChoice);
roomSuspectAI = playerLocation;
personSuspectAI = deckOne[personChoice].cardName;
weaponSuspectAI = deckOne[weaponChoice].cardName;


newInfo.innerText = rob + " is in the " + playerLocation;
console.log("personSuspectAI, weaponSuspectAI, roomSuspectAI = " +
    personSuspectAI, weaponSuspectAI, roomSuspectAI);
playerSuspect(rob);


}











function findGarfunkelRoom(gladys){
console.log("findGarfunkelRoom")
    let oof = getRandomInt(21);
    garfunkel = "";
        for(var jared = 0; jared <= 20; jared++){
            let gorgon = 0;
            for (var h = gladys.length - 1; h >= 0; h--){ ////////////////////////////////////////////////////////////////
                awooga = gladys[h];
                    console.log("h = " + h);
                    console.log("awooga = " , awooga);
                    console.log(deckOne[(jared + oof) % 21]);
                if (deckOne[(jared + oof) % 21] == awooga){
                gorgon = 5;
                }
            }
                console.log("gorgon = " + gorgon);
            if(gorgon != 5 && 11 < ((jared + oof) % 21) && ((jared + oof) % 21) < 21){
                console.log("WOW!");
                console.log(((jared + oof) % 21) + " -- ((jared + oof) % 21)");
                garfunkel = ((jared + oof) % 21);
                console.log("garf = " + garfunkel);
            }
        }
    console.log("");console.log("");console.log("");console.log("");console.log("");
    console.log("");console.log("");console.log("");console.log("");console.log("");
    roomChoiceQ = garfunkel;
    console.log(deckPlayerB);
    console.log("");console.log("");console.log("");console.log("");console.log("");
    console.log("");console.log("");console.log("");console.log("");console.log("");
}


function findGarfunkelWeapon(gladys){
console.log("findGarfunkelRoom")
    let oof = getRandomInt(21);
    garfunkel = "";
        for(var jared = 0; jared <= 20; jared++){
            let gorgon = 0;
            for (var h = gladys.length - 1; h >= 0; h--){ ////////////////////////////////////////////////////////////////
                awooga = gladys[h];
                    console.log("h = " + h);
                    console.log("awooga = " , awooga);
                    console.log(deckOne[(jared + oof) % 21]);
                if (deckOne[(jared + oof) % 21] == awooga){
                gorgon = 5;
                }
            }
                console.log("gorgon = " + gorgon);
            if(gorgon != 5 && 5 < ((jared + oof) % 21) && ((jared + oof) % 21) < 12){
                console.log("WOW!");
                console.log(((jared + oof) % 21) + " -- ((jared + oof) % 21)");
                garfunkel = ((jared + oof) % 21);
                console.log("garf = " + garfunkel);
            }
        }
    console.log("");console.log("");console.log("");console.log("");console.log("");
    console.log("");console.log("");console.log("");console.log("");console.log("");
    // roomChoiceQ = garfunkel;
    console.log(deckPlayerB);
    console.log("");console.log("");console.log("");console.log("");console.log("");
    console.log("");console.log("");console.log("");console.log("");console.log("");
}


function findGarfunkelPerson(gladys){
console.log("findGarfunkelRoom")
    let oof = getRandomInt(21);
    garfunkel = "";
        for(var jared = 0; jared <= 20; jared++){
            let gorgon = 0;
            for (var h = gladys.length - 1; h >= 0; h--){ ////////////////////////////////////////////////////////////////
                awooga = gladys[h];
                    console.log("h = " + h);
                    console.log("awooga = " , awooga);
                    console.log(deckOne[(jared + oof) % 21]);
                if (deckOne[(jared + oof) % 21] == awooga){
                gorgon = 5;
                }
            }
                console.log("gorgon = " + gorgon);
            if(gorgon != 5 && -1 < ((jared + oof) % 21) && ((jared + oof) % 21) < 6){
                console.log("WOW!");
                console.log(((jared + oof) % 21) + " -- ((jared + oof) % 21)");
                garfunkel = ((jared + oof) % 21);
                console.log("garf = " + garfunkel);
            }
        }
    console.log("");console.log("");console.log("");console.log("");console.log("");
    console.log("");console.log("");console.log("");console.log("");console.log("");
    // roomChoiceQ = garfunkel;
    console.log(deckPlayerB);
    console.log("");console.log("");console.log("");console.log("");console.log("");
    console.log("");console.log("");console.log("");console.log("");console.log("");
}