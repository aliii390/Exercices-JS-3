const mdp = document.getElementById("password");

const confirm = document.getElementById("confirmPassword");

const btn = document.getElementById("button");

let flag = "salut"

btn.addEventListener("click", handleClick);

function handleClick(){

    if(mdp.value === flag && confirm.value === flag){
        mdp.style.border = "3px solid green";
        confirm.style.border = "3px solid green";
    } else{
        mdp.style.border = "3px solid red";
        confirm.style.border = "3px solid red";
    }

}
