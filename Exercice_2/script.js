const text = document.getElementById("text");
const affiche = document.getElementById("affiche");
const masque = document.getElementById("masque");

affiche.addEventListener("click", (event) => {
    event.preventDefault(); 
    text.style.display = "block"; 
  });

  masque.addEventListener("click", (event) => {
    event.preventDefault(); 
    text.style.display = "none"; 
  });
