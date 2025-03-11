var list1 = ["Inigo", "Buttercup", "Wesley"];
var list2 = ["Han Solo", "Luke", "Leia", "Inigo",   "Vader"];
var ul1, ul2;
//Goal:  To drag a character from one list to the other on the screen AND change which array it is in here in memory
//tasks: 
// ** add draggable attribute to all the draggable elements
// ** create the ondrag function that assigns the proper data to the dataTransfer event
// ** add an ondrag listener to those elements
// add an ondragover function/listener to the drop zones that prevents default behavior
// add an ondrop function/listener to drop zones that correctly shifts the element between lists

window.onload = function(){
    ul1 = document.querySelector("#list1");
    ul1.addEventListener("dragover", dragOverHandler);
    ul1.addEventListener("drop", dropHandler);
    ul2 = document.querySelector("#list2");
    ul2.addEventListener("dragover", dragOverHandler);
    ul2.addEventListener("drop", dropHandler);
    fillLists();
}
function dragHandler(ev){
   
    ev.dataTransfer.setData("name", this.innerText);
    ev.dataTransfer.setData("source", this.parentElement.id);
    ev.dataTransfer.setData("index", this.dataset.index);
   
}
function dragOverHandler(ev){
    ev.preventDefault();
    // console.log("dragOverHandler");
}
function dropHandler(ev){
    ev.preventDefault();
    let target = ev.target;
    while (!target.classList.contains("droppable")){
        target = target.parentElement;
    }
    if (ev.dataTransfer.getData("source") == target.id){
        return;
    }
    // console.log("dropHandler");
    const name = ev.dataTransfer.getData("name");
    const index = ev.dataTransfer.getData("index");

    let originList = list1;
    let destList = list2;
    if (target.id == "list1"){
        
        originList = list2;
        destList = list1;
    }
    destList.push(name);
    
    originList.splice(index, 1);
    fillLists();
}
function fillLists(){
    ul1.innerHTML = "";
    ul2.innerHTML = "";
    for (let i = 0; i < list1.length; i++){
        let character = list1[i];
        const li = createLI(character, i)
        ul1.appendChild(li);
    }   
    for (let i = 0; i < list2.length; i++){
        let character = list2[i];
        const li = createLI(character, i)
        ul2.appendChild(li);
    }   
}
function createLI(name, index){
    const li = document.createElement("li");
    li.innerText = name;
    //
    li.setAttribute("draggable", true);
    li.dataset.index = index;
    li.addEventListener("dragstart", dragHandler);
    //
    return li;
}
