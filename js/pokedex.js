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
function creaPokeHtml(pokemon) {
    const article = createMarkup("article", "", sectionPoke, [
        { name: "class", value: "border w-75" },
    ]);

    for (const type of pokemon.types) {
        const talent = createMarkup("div", "", sectionType, []);
        createMarkup("img", "", divType, [{ name: "src", value: type.image }]);
        createMarkup("h4", type.name, divType, []);
    }
    const sectionTalent = createMarkup("section", "", article, []);
    if (pokemon.talents.length === 1) {
        createMarkup("h3", "Talent", sectionTalent, []);
        createMarkup("p", pokemon.talents[0].name, sectionTalent, []);
    } else {
        createMarkup("h3", "Talents", sectionTalent, []);
        for (const talent of pokemon.talents) {
            createMarkup("p", talent.name, sectionTalent, []);
        }
    }
    const sectionStats = createMarkup("section", "", article, []);
    createMarkup("h3", "Statistiques", sectionStats, []);
    article.innerHTML = `
    <div>
        <h4>No.</h4>
        <span>${pad(pokemon.pokedexId, 3)}</span>
    </div>
    <div>
        <img src=${pokemon.sprites.regular}>
    </div>
    <section>
        <h3>Pokémon</h3>
        <div>
            <p>${pokemon.name.fr}</p>
            <span>FR</span>
        </div>
        <div>
            <p>${pokemon.name.en}</p>
            <span>EN</span>
        </div>
    </section>
    <section>
        <h3>Type</h3>
        <div>
            <img src="https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/types/plante.png">
            <h4>Plante</h4>
        </div>
        <div>
            <img src="https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/types/poison.png">
            <h4>Poison</h4>
        </div>
    </section>
    <section>
        <h3>Talents</h3>
        <p>Engrais</p>
        <p>Chlorophylle</p>
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
