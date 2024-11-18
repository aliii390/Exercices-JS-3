const img = document.getElementById("image1");

img.addEventListener("mouseover", handleOver);
img.addEventListener("mouseout", handleFinal);

function handleOver(){
    img.style.border = "5px solid red";
}

function handleFinal(event){
    event.target.style.border = "0px"

}