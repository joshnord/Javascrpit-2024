



var userName = "Reginald the Fierce";
console.log(userName);
console.log("Hello " + userName);

userName = "Bobby";
console.log(userName);
console.log("Hello " + userName);

function greet(){
    var txtName = document.querySelector("#userName");
    alert("Greetings " + txtName.value + "!");
    var myHeader = document.querySelector("header");
    myHeader.innerText = "Hello " + txtName.value;

}



var number = document.querySelector("#numberCountt");

function count(){

    number = number + 1;
    console.log (number);
    numberCountt.value = number;
}

//the problem here is actually that the vlaue is continuous; 
//if you edit it it does reverts to the previous. 
//For example, when the counter says 18, and you edit it to say 178, 
//then click count, it will go to 19. This is a problem.