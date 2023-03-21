/**
 * Utilise uglifycss
 * Minifie tous les fichiers CSS dans le répertoire 'css' et les enregistre dans le dossier cssMin.
 * @param {String} imputFilePath - chemin d'accès du fichier d'entrée à compresser.
 * @param {String} outputFilePath - chemin d'accès du fichier de sortie à compresser.
 * Utilise le module fs pour parcourir le dossier "css".
 * Les fichiers minifiés sont enregistrés dans le repertoire 'cssMin' avec l'extension '.min.css'.
 **/

const fs = require("fs");
const UglifyCSS = require("uglifycss");

//parcours tous les fichier dans le dossier "css"
fs.readdirSync("../css").forEach((file) => {
  //Vérifie si le fichier se termine par '.css'
  if (file.endsWith(".css")) {
    const inputFilePath = `../css/${file}`;
    const outputFilePath = `../cssMin/${file.replace(/\.css$/, ".min.css")}`;

    const code = UglifyCSS.processFiles([inputFilePath], {
      //longueur max ligne de sortie
      maxLineLen: 500,
      //indique que les variables doivent être développées
      expandVars: true,
    });
    /**
     * Méthode qui permet d'écrire des données dans un fichier de manière synchrone
     * Elle prend en entrée le chemin d'accès du fichier dans lequel on souhaite écrire les données
     * et les données à écrire
     **/
    fs.writeFileSync(outputFilePath, code);
  }
});

//pour exécuter : node uglifyCss.css
