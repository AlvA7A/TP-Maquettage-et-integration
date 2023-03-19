/**
 * Associe l'affichage/masquage d'un contenu au click sur un bouton.
 * @param {string} buttonClass - La classe CSS des boutons à associer à l'affichage/masquage du contenu.
 * @param {string} contentClass - La classe CSS des contenus à afficher/masquer.
 * modifie la valeur "display" de l'élément "content_collapse"
 * modifie le texte de l'élément "collapsible"
 */

function toggleCollapse(buttonClass, contentClass) {
  let buttons = document.querySelectorAll(`.${buttonClass}`);
  buttons.forEach((button, i) => {
    let content = document.querySelectorAll(`.${contentClass}`)[i];
    button.addEventListener("click", () => {
      console.log(`DISPLAY`, content.style.display);
      if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        buttons.textContent = "Voir moins -";
      } else {
        content.style.display = "none";
        buttons.textContent = "Voir plus +";
      }
    });
  });
}

toggleCollapse("collapsible", "content_collapse");
