const cardGame = document.querySelectorAll(".cardGame"); // Seclectionne toute les cartes de Jeu

cardGame.forEach((ev) => {
  ev.addEventListener("mousemove", (e) => {
    let evRect = ev.getBoundingClientRect(); // Recupération de l'objet DOMRect (Permet de recupérer X et Y et d'accéder à la largeur et la hauteur de l'élement)

    let x = e.clientX - evRect.x;
    let y = e.clientY - evRect.y;

    let midcardWidth = evRect.width / 2; // Largeur divisé par 2
    let midcardHeight = evRect.height / 2; // Hauteur divisé par 2

    let angleY = -(x - midcardWidth) / 8; // Position en x de la souris qui va modifier la rotation de l'axe Y
    let angleX = (y - midcardWidth) / 8; // Position en y de la souris qui va modifier la rotation de l'axe X

    let glowX = x / evRect.width * 100
    let glowY = y / evRect.height * 100

    ev.children[0].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`;
    ev.children[1].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`;
    ev.children[1].style.background = `radial-gradient(circle at ${glowX}% ${glowY}%, rgb(255, 255, 255,0.8), transparent)`
  });
  ev.addEventListener("mouseleave", () => {
    ev.children[0].style.transform = "rotateX(0) rotateY(0)";
    ev.children[1].style.transform = "rotateX(0) rotateY(0)";
  });
});

const img = document.getElementById("rondou")
const myaudio = document.querySelector("audio")

myaudio.volume=0.1;
img.addEventListener("click", startmusic)

function startmusic() {
    myaudio.play();
}