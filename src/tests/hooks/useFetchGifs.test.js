// se instalo : yarn add --dev @testing-library/react-hooks para hacer mejores pruebas de este link
// https://react-hooks-testing-library.com/installation 

import { useFetchGifs } from  '../../hooks/useFetchGifs';
import {renderHook} from '@testing-library/react-hooks';

describe('Pruebas en hook useFetchGifs', () => {
    
    test('Debe de retornar el estado incial', () => {
        
        // const category = 'One Punch';
        // const  { data, loading } = useFetchGifs ( category );

        //voy a usar una funcion renderHook , crea un componete virtual por asi decir y colocar nuestro componente Hook 
        //, y se llama una funciona anomina y se ejecuta el hook como esperabamos
        // const resp = renderHook( () => { useFetchGifs('One Punch')});
        const { result } = renderHook( () => useFetchGifs('One Punch') );
        const { data, loading } = result.current;

        expect(data) . toEqual([]);
        expect(loading) . toBe(true);

    })
    
});