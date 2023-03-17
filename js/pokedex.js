/**
 * Crée un élément du dom, lui ajoute du texte, le place comme dernier
 * enfant de parent et ajoute un attribut en utilisant le paramètre attribute
 * @param {String} markup_name
 * @param {String} text
 * @param {domElement} parent
 * @param {Object} attribute  (doit comprendre les propriétés name et value)
 * @param {Array} attributes
 * @returns domElement
 */
function createMarkup(markup_name, text, parent, attributes) {
    const markup = document.createElement(markup_name);
    markup.textContent = text;
    parent.appendChild(markup);
    for (let attribute of attributes) {
        if (attribute && attribute.hasOwnProperty("name")) {
            // console.log(attribute);
            markup.setAttribute(attribute.name, attribute.value);
        }
    }
    return markup;
}
function pad(num, size) {
    let s = "00" + num;
    return s.slice(s.length - size);
}

// INUTILE IDIOT MOI mais c bo
/**
 * @param {int} pokedexId
 * @param {JS Object} name {fr,en,jg}
 * @param {JS Object} sprites => {regular,shiny}
 * @param {Array of JS Object} types => [{name, image}]
 * @param {Array of JS Object} talents => [{name, tc}]
 * @param {JS Object} stats => {hp,atk,def,spe_atk,spe_def,vit}
 */
// class Pokemon {
//   constructor(pokedexId, name, sprites, types, talents, stats) {
//     this.pokedexId = pokedexId;
//     this.name = name;
//     this.sprites = sprites;
//     this.types = types;
//     this.talents = talents;
//     this.stats = stats;
//   }
// }
function creaPokeHtml(pokemon, id) {
    const article = createMarkup("article", "", sectionPoke, [
        { name: "class", value: "card-pokedex" },
    ]);
    let types = ``;
    // Voir operateur ternaire
    if (pokemon.pokedexId === 125) {
        types += `<div>
            <img src="https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/types/electrik.png">
            <h4>Electrique</h4>
        </div>`;
    } else {
        for (const type of pokemon.types) {
            types += `<div>
            <img src=${type.image}>
            <h4>${type.name}</h4>
        </div>`;
        }
    }
    let talents = ``;
    if (pokemon.talents.length === 1) {
        talents = `<h3>Talent</h3>
        <p>${pokemon.talents[0].name}</p>`;
    } else {
        talents = `<h3>Talents</h3>`;
        for (const talent of pokemon.talents) {
            talents += `
            <p>${talent.name}</p>`;
        }
    }
    article.innerHTML = `
    <div class="cont-pokedex-01">
        <h3 class="h3-pokedex">No.</h3>
        <p class="text-pokedex-01">${pad(pokemon.pokedexId, 3)}</p>
    </div>
    <div class="cont-pokedex-02">
        <img src=${pokemon.sprites.regular} class="img-pokemon">
    </div>
    <section class="cont-pokedex-03">
        <h3 class="h3-pokedex">Pokémon</h3>
        <div class="nom-poke">
            <p class="para-pokedex">${pokemon.name.fr}</p>
            <span class="span-pokedex">FR</span>
        </div>
        <div class="nom-poke">
            <p class="para-pokedex">${pokemon.name.en}</p>
            <span class="span-pokedex">EN</span>
        </div>
    </section>
    <section>
        <h3>Type</h3>
        ${types}
    </section>
    <section>
        ${talents}
    </section>
    <section>
        <h3>Statistiques</h3>
    </section>`;
}
const sectionPoke = createMarkup("section", "", document.querySelector("main"), []);
// Api n°3
const pokedex = fetch("https://api-pokemon-fr.vercel.app/api/v1/gen/1")
    .then(function (response) {
        if (response.status !== 200) {
            throw new Error("Le serveur n'a pas répondu correctement");
        } else return response.json();
    })
    .then(function (pokedex) {
        console.log("Pokedex : ", pokedex);
        for (let pokemon of pokedex) {
            //   console.log(pokemon.name.fr);
            creaPokeHtml(pokemon);
        }
        return pokedex;
    })

    .catch((error) => {
        console.log("Erreur attrapée : ", error);
    });
