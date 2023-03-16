const cardGame = document.querySelectorAll(".cardGame"); // Seclectionne toute les cartes de Jeu

cardGame.forEach((ev) => {
  ev.addEventListener("mousemove", (e) => {
    let evRect = ev.getBoundingClientRect(); // Recupération de l'objet DOMRect (Permet de recupérer X et Y et d'accéder à la largeur et la hauteur de l'élement)

    let x = e.clientX - evRect.x;
    let y = e.clientY - evRect.y;

    let midcardWidth = evRect.width / 2;
    let midcardHeight = evRect.height / 2;

    let angleY = (x - midcardWidth) / 8;
    let angleX = (y - midcardWidth) / 8;

    ev.children[0].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`;
  });
  ev.addEventListener("mouseleave", () => {
    ev.children[0].style.transform = "rotateX(0) rotateY(0)";
  });
});
