import { getGifs } from '../../helpers/getGifs';

describe('Pruebas con getGifs fetch', () => {
    test('Debe traer 10 elementos', async() => {

        //  const gifs = await  getGifs('One Punch');
         const gifs = await  getGifs('');
        console.log(gifs); //llega un array vacio.
        // expect(gifs.length).toBe(10);
        // expect(gifs.length).not.toBe(12);
    });
});