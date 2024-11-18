const text = document.getElementById("text");
const green = document.getElementById("green");
const red = document.getElementById("red");
const blue = document.getElementById("blue");


green.addEventListener("click", handleGreen);
red.addEventListener("click", handleRed);
blue.addEventListener("click", handleBlue);


function handleGreen(event){
    event.preventDefault(); 
    text.style.color = "green";
}

function handleRed(event){
    event.preventDefault(); 
    text.style.color = "red";
}

function handleBlue(event){
    event.preventDefault(); 
    text.style.color = "blue";
}