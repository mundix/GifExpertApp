import React from 'react';
import { shallow } from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';


describe('Probando el app <GifExpertApp />', () => {


    test('Prueba Mostrando el app correctamente', () => {
        const wrapper = shallow(<GifExpertApp/>);
        expect(wrapper).toMatchSnapshot();
    });

    
    test('Debe mostrar una lista de categorias', () => {
        
        const categories = ['One Punch', 'Dragon Ball'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);

        expect(wrapper).toMatchSnapshot();
        // console.log(wrapper.find('GifGrid').length);
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    });
    

});
