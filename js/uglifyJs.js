/**
 * Minifie tous les fichiers JS dans le répertoire 'js' en gardant les commentaires
 * et en créant un source map pour chaque fichier minifié.
 * Les fichiers minifiés sont enregistrés dans le repertoire 'jsMin' avec l'extension '.min.js'.
**/

const fs = require('fs');
const UglifyJS = require('uglify-js');

//parcours tous les fichier dans le dissier "js"
fs.readdirSync('../js').forEach(file => {
    //Vérifie si le fichier se termine par '.js'
  if (file.endsWith('.js')) {
    const inputFilePath = `../js/${file}`;
    const outputFilePath = `../jsMin/${file.replace(/\.js$/, '.min.js')}`;
    const sourceMapFilePath = `../jsMin/${file.replace(/\.js$/, '.min.js.map')}`;
    
    const { code, map } = UglifyJS.minify(fs.readFileSync(inputFilePath, 'utf8'), {
      mangle: true,
      output: {
        comments : true,
      },
      sourceMap: {
        filename: outputFilePath,
      },
    });

    fs.writeFileSync(outputFilePath, code);
    fs.writeFileSync(sourceMapFilePath, map);
  }
});

//pour exécuter : node uglifyJs.js