import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from "../../componets/AddCategory";

describe('Pruebas en <AddCategory/>', () => {


    const setCategories = () => {}; //creo la funcion vacia para enviarla
    const wrapper = shallow(<AddCategory setCategories={setCategories}/>) ; //debo nmandar una function como argumento

   
    test('Debe mostrarse correctamente ', () => {
       
        expect(wrapper).toMatchSnapshot();

    });
    
    //Vamos a simular enviando el formulario 
    test('Debe de cambiar la caja de text ', () => {
       
        const input = wrapper.find('input');
        //hay que enviar el evento de input change para el handleInputChangte method 
        const value = 'Hola Mundo';
        // input.simulate('change');
         //asi se manda el valor , se manda un argumento tipo objetio target con los valores 
        input.simulate('change', {
                                    target: {
                                            value:value
                                        }
                                    }
                                );
                                
        expect(wrapper.find('p').text().trim()).toBe(value);

    });
    

});
