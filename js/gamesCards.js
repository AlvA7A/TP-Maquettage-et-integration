const cardGame = document.querySelectorAll(".cardGame");

cardGame.forEach((ev) => {
  ev.addEventListener("mousemove", (e) => {
    let evRect = ev.getBoundingClientRect();

    let x = e.clientX - evRect.x;
    let y = e.clientY - evRect.y;

    let midcardWidth = evRect.width / 2;
    let midcardHeight = evRect.height / 2;

    let angleY = (x - midcardWidth) / 8;
    let angleX = (y - midcardWidth) / 8;

    ev.children[0].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`;
  });
});
