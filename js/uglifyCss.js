/**
 * Minifie tous les fichiers CSS dans le répertoire 'css' en gardant les commentaires
 * Les fichiers minifiés sont enregistrés dans le repertoire 'cssMin' avec l'extension '.min.css'.
**/

const fs = require('fs');
const UglifyCSS = require('uglifycss');

//parcours tous les fichier dans le dissier "css"
fs.readdirSync('../css').forEach(file => {
    //Vérifie si le fichier se termine par '.css'
  if (file.endsWith('.css')) {
    const inputFilePath = `../css/${file}`;
    const outputFilePath = `../cssMin/${file.replace(/\.css$/, '.min.css')}`;
    
    const code = UglifyCSS.processFiles([inputFilePath], {
      maxLineLen: 500,
      expandVars: true,
      uglyComments: true,
    });

    fs.writeFileSync(outputFilePath, code);
  }
});

//pour exécuter : node uglifyCss.css