import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from "../../componets/AddCategory";

describe('Pruebas en <AddCategory/>', () => {

    const setCategories = () => {}; //creo la funcion vacia para enviarla
   
    test('Debe mostrarse correctamente ', () => {
       
        const wrapper = shallow(<AddCategory setCategories={setCategories}/>) ; //debo nmandar una function como argumento
        expect(wrapper).toMatchSnapshot();
    });
    
    //Vamos a simular enviando el formulario 

});
