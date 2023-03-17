/**
 * Au click :
 * Permet de voir la partie cacher du texte
 * et changer le texte du bouton en fonction de ce qui est affiché ou non
 * @returns un style display et un textContent
**/

const collapsible = document.getElementById("collapsible");
const content_collapse = document.getElementById("content_collapse");


collapsible.onclick = (e) => {
  if (collapsible.textContent == "Voir plus +") {
    content_collapse.style = "display : inline";
    collapsible.textContent = "Voir moins -";
  } else {
    content_collapse.style = "display : none";
    collapsible.textContent = "Voir plus +";
  }
};
