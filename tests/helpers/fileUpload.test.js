import { v2 as cloudinary } from 'cloudinary';
import { fileUpload } from '../../src/helpers/fileUpload';

cloudinary.config({
  cloud_name: 'ddgey3osi',
  api_key: '955682443545367',
  api_secret: 'ExeWVJKVWFlywzUjjDyKnMjXvkg',
  secure: true,
});

describe('Pruebas en fileUpload', () => {
  test('debe de subir el archivo correctamente a cloudinary', async () => {
    const imageURL =
      'https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067__340.png';
    const resp = await fetch(imageURL);
    const blob = await resp.blob();
    const file = new File([blob], 'foto.jpg');
    const url = await fileUpload(file);
    expect(typeof url).toBe('string');
    
    // Limpieza de la imagen que se crea para no almacenar basura en la nube
    const segments = url.split('/');
    const imageID = segments[segments.length - 1].replace('.png', '');
    await cloudinary.api.delete_resources([`journal-app/${imageID}`], {
      resource_type: 'image',
    });
  });

  test('debe de retornar null', async () => {
    const file = new File([], 'foto.jpg');
    const url = await fileUpload(file);
    expect(url).toBeNull();
  });
});
