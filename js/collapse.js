const collapsible = document.getElementById("collapsible");
const content_collapse = document.getElementById("content_collapse");
console.log(`collabs`, collapsible);
collapsible.onclick = (e) => {
  if (collapsible.textContent == "Voir plus +") {
    content_collapse.style = "display : inline";
    collapsible.textContent = "Voir moins -";
    console.log(`click! diplay none`);
  } else {
    content_collapse.style = "display : none";
    collapsible.textContent = "Voir plus +";
    console.log(`click! display inline`);
  }

  //   if (content_collapse.style === false) {
  //     content_collapse.hidden = true;
  //     collapsible.textContent = "Lire plus +";
  //   } else {
  //     content_collapse.hidden = false;
  //     collapsible.textContent = "Voir moins -";
  //   }
};
