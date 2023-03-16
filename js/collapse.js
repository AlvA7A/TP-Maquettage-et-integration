const collapsible = document.getElementById("collapsible")
const content_collapse = document.getElementById("content_collapse")


collapsible.onclick = (e) => {
    console.log(`click!`)
    if (content_collapse.hidden === false ){
        content_collapse.hidden = true;
        collapsible.textContent= "Lire plus";
    }else{
        content_collapse.hidden = false;
        collapsible.textContent= "Voir moins";
    }
};
