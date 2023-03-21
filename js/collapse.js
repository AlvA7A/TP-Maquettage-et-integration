/**
 * Associe l'affichage/masquage d'un contenu au click sur un bouton.
 * @param {String} buttonClass - La classe CSS des boutons à associer à l'affichage/masquage du contenu.
 * @param {String} contentClass - La classe CSS des contenus à afficher/masquer.
 * modifie la valeur "display" de l'élément "content_collapse"
 * modifie le texte de l'élément "collapsible"
 */

function toggleCollapse(buttonClass, contentClass) {
  //récupère les éléments qui contiennent la classe buttonClass
  let buttons = document.querySelectorAll(`.${buttonClass}`);

  buttons.forEach((button, i) => {
    //récupère les éléments qui contiennent la classe contentClass
    let content = document.querySelectorAll(`.${contentClass}`)[i];
    //évènements au click
    button.addEventListener("click", () => {
      if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        button.textContent = "Voir moins -";
      } else {
        content.style.display = "none";
        button.textContent = "Voir plus +";
      }
    });
  });
}

toggleCollapse("collapsible", "content_collapse");
