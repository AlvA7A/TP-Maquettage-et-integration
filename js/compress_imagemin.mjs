/**
 * Comprime toutes les images JPG et PNG dans un dossier spécifié en utilisant imagemin et des plugins spécifiques pour chaque type d'image.
 * @function compressImages
 * @async
 * @param {Object} - src, dest
 * @param {string} src - chemin vers le dossier contenant les images à compresser.
 * @param {string} dest - chemin vers le dossier de destination pour les images compressées.
 * @param {number} [options.mozjpeg] qualité de l'image compressée
 * @returns les images compressés vers la destination.
**/

import imagemin from "imagemin";
import imageminPngquant from "imagemin-pngquant";
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminWebp from 'imagemin-webp';

const compressImages = async () => {
  //récupère toutes les images des sous-dossiers "images"
  const files = await imagemin(["../images/**/*.(jpg|png)"], {
    destination: "../assets/images",
    plugins: [
      imageminMozjpeg(),
      imageminPngquant({
        quality: [0.5, 0.6],
      })
    ],
  });
};

compressImages();

//pour exécuter : node compress_imagemin.mjs
