/**
 * Utilise uglify-js
 * Minifie tous les fichiers js dans le répertoire 'js' et les enregistre dans le dossier cssMin.
 * et en créant un source map pour chaque fichier minifié.
 * @param {String} imputFilePath - chemin d'accès du fichier d'entrée à compresser.
 * @param {String} outputFilePath - chemin d'accès du fichier de sortie à compresser
 * Utilise le module fs pour parcourir le dossier "js".
 * Les fichiers minifiés sont enregistrés dans le repertoire 'jsMin' avec l'extension '.min.js'.
 **/

const fs = require("fs");
const UglifyJS = require("uglify-js");

//parcours tous les fichier dans le dissier "js"
fs.readdirSync("../js").forEach((file) => {
  //Vérifie si le fichier se termine par '.js'
  if (file.endsWith(".js")) {
    const inputFilePath = `../js/${file}`;
    const outputFilePath = `../jsMin/${file.replace(/\.js$/, ".min.js")}`;

    const code = UglifyJS.minify(fs.readFileSync(inputFilePath, "utf8"), {
      //permet de renommer les noms de variables afin de les raccourcir et rendre le code plus compact
      mangle: true,
    });
    /**
     * Méthode qui permet d'écrire des données dans un fichier de manière synchrone
     * Elle prend en entrée le chemin d'accès du fichier dans lequel on souhaite écrire les données
     * et les données à écrire
     **/
    fs.writeFileSync(outputFilePath, code.code);
  }
});

//pour exécuter : node uglifyJs.js
