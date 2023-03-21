const cardGame = document.querySelectorAll(".cardGame"); // Seclectionne toute les cartes de Jeu

cardGame.forEach((ev) => {
  // Parcours toute les cartes de Jeu
  ev.addEventListener("mousemove", (e) => {
    // Permet d'écouter l'évenement quand la souris bouge
    let evRect = ev.getBoundingClientRect(); // Recupération de l'objet DOMRect (Permet de recupérer X et Y et d'accéder à la largeur et la hauteur de l'élement)

    let x = e.clientX - evRect.x; // Connaitre la distance x de mon cursor par rapport à mon élément
    let y = e.clientY - evRect.y; // Connaitre la distance y de mon cursor par rapport à mon élément

    let midcardWidth = evRect.width / 2; // Largeur divisé par 2
    let midcardHeight = evRect.height / 2; // Hauteur divisé par 2

    let angleY = -(x - midcardWidth) / 8; // Position en x de la souris qui va modifier la rotation de l'axe Y
    let angleX = (y - midcardHeight) / 8; // Position en y de la souris qui va modifier la rotation de l'axe X

    let glowX = (x / evRect.width) * 100; // Position en x de la souris qui va modifier la position de mon effet glow (*100 pour obtenir un ratio)
    let glowY = (y / evRect.height) * 100; // Position en y de la souris qui va modifier la position de mon effet glow (*100 pour obtenir un ratio)

    ev.children[0].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.5)`; // On applique les angles au premier enfant en modifiant la propriété transform pour jouer sur nos rotations (Agrandissement du contenu avec le "scale")
    ev.children[1].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.5)`; // On applique les angles au deuxième enfant en modifiant la propriété transform pour jouer sur nos rotations (Agrandissement du contenu avec le "scale")
    ev.children[1].style.background = `radial-gradient(circle at ${glowX}% ${glowY}%, rgb(255, 255, 255,0.8), transparent)`; // On applique la position de la souris au deuxième enfant en modifiant la propriété background pour jouer sa position
  });
  ev.addEventListener("mouseleave", () => {
    // Permet d'écouter l'évenement quand la souris quitte mon élément
    ev.children[0].style.transform = "rotateX(0) rotateY(0)"; // Quand la souris quitte l'élément remise à 0
    ev.children[1].style.transform = "rotateX(0) rotateY(0)"; // Quand la souris quitte l'élément remise à 0
  });
});

const myaudio = document.querySelector("audio");
let isPlaying = false;

//Fonction pour savoir si l'audio est sur pause ou sur play
function tooglePlay() {
  isPlaying ? myaudio.pause() : myaudio.play();
}

//Fonction pour jouer la musique et régler le volume
myaudio.onplaying = function () {
  myaudio.volume = 0.1;
  isPlaying = true;
};
// Fonction pour mettre en pause la musique
myaudio.onpause = function () {
  isPlaying = false;
};
