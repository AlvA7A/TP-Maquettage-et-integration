/**
 * Permet d'optimiser les images
 * 
 * @returns l'image entre 50% et 60% de sa taille original
**/

import imagemin from 'imagemin';
import imageminPngquant from 'imagemin-pngquant';
import imageminMozjpeg from 'imagemin-mozjpeg';

const files = await imagemin(['../images/**/*.(jpg|png)'], { //récupère toutes les images des sous-dossiers "images"
	destination: '../assets/images',
	plugins: [
		imageminMozjpeg(),
		imageminPngquant({
			quality: [0.5, 0.6]
		})
	]
});

console.log(files);
//=> [{data: <Buffer 89 50 4e …>, destinationPath: 'build/images/foo.jpg'}, …]