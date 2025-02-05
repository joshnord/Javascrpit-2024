



var tapeRolls = [];
var txtNewName, txtNewLength, optNewType
window.onload = function(){

    txtNewName = document.querySelector("#newRollName");
    txtNewLength = document.querySelector("#newRollLength");
    optNewType = document.querySelector("#newRollType");
}

function saveNewRoll(){

    let newName = txtNewName.value;
    let newLength = txtNewLength.value;
    let newType = optNewType.value;

    let newRoll = {
        name: newName, 
        length: newLength,
        type: newType,

    }
    console.log(newRoll);
    tapeRolls.push(newRoll);




    leftBar.innerHTML = "";
    listRolls();

}


function listRolls(){
    //loo phrough everything in rolls

    let leftBar = document.querySelector("#leftBar");
    //loop through tape rlls for each, create element   add a click event to get details   add a data-index property     //add add an appropriatte class   //add to to rolls
    for (var i=0; i < tapeRolls.length; i++){
            let divRoll = document.createElement("div");
            divRoll.dataset.index = i;


            divRoll.innerText = tapeRolls[i].name;

            divRoll.classList.add("tape");
            divRoll.classList.add(tapeRolls[i].type)

            leftBar.appendChild(divRoll);
    }

}


