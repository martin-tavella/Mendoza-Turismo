//Función Ver más---------------------------
// let cardsParent2 = document.getElementById("cardsParent2");

let verMasAct = document.getElementById("verMasAct");

verMasAct.addEventListener("click", function() {
    newCardsAct();
})


function newCardsAct() {
    let cardsParent2 = document.getElementById("cardsParent2");
    const newCardActDiv1 = document.createElement("div");
    newCardActDiv1.setAttribute("class", "card");
    const newCardActImg1 = document.createElement("img");
    newCardActImg1.setAttribute("src", "https://www.kintun.com/pics/actividadesimagenes/32243.jpg");
    const newCardActH51 = document.createElement("h5");
    newCardActH51.innerHTML = "Rafting Nocturno"
    const newCardActP1 = document.createElement("p");
    newCardActP1.innerHTML = "Mayores de 18 años";
    cardsParent2.appendChild(newCardActDiv1);
    newCardActDiv1.appendChild(newCardActImg1);
    newCardActDiv1.appendChild(newCardActH51);
    newCardActDiv1.appendChild(newCardActP1);

}
