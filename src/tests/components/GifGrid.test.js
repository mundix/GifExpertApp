import React from 'react';
import { shallow } from 'enzyme';
import { GifGrid } from '../../componets/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
//Si hago esto en cada test debo usar esta funcion falsead
jest.mock('../../hooks/useFetchGifs'); //esto ayuda a usar el useFetch y controlar la informacion quee sto va a responder 


describe('Pruebas en el archivo <GifGrid/>', () => {

    const category = 'Batman';

    test('Mostrando contenido', () => {
      
          useFetchGifs.mockReturnValue({
            data: [],
             loading: true
          });

        const wrapper =  shallow(<GifGrid category={category}/>);
        expect(wrapper).toMatchSnapshot();
        
    })
    
    //probar mi useFetch que debe mostar item cuanod se cargan imagenes 
    test('Debe de mostar items cuando se carga imagenes useFetch', async () => {
        //probar de mi custom hook regreso la informacion cuando ya la cargo. 
        // useFetchGifs
        const gifs = [
            {
              id: "ABC",
              url: "https://localhost/img.jpg",
              title: "Title",
            },
            {
              id: "123",
              url: "https://localhost/img.jpg",
              title: "Title",
            },
          ];
      
          useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,
          });

        const wrapper =  shallow(<GifGrid category={category}/>);
        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);


    })
    

});
