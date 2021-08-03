import React from 'react';
import '@testing-library/jest-dom'; //importado para tener la ayuda.

import { shallow } from 'enzyme';
import { AddCategory } from "../../componets/AddCategory";

describe('Pruebas en <AddCategory/>', () => {


    //Esta funcion  no tengo manera de saber si se llamo o con que argumento se hiso , pero jest ofrece fuera de la caja
    // const setCategories = () => {}; //creo la funcion vacia para enviarla
    const setCategories = jest.fn(); //Asi debe quedar para hacer las evaluaciones de lugar. 
    // const wrapper = shallow(<AddCategory setCategories={setCategories}/>) ; //debo nmandar una function como argumento
    // let wrapper; //para poder poner el componete como estaba originalmente
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>) ; //para poder tener  las docs 

    //simular que el formulario esta en blanco , el beforeEach es un ciclo de pruebas 
    beforeEach(() => {
        //si estamos functions y otros mocks en jest  
        jest.clearAllMocks(); // Esto es para qeu todo se limpie , hay que poner el componet comoe staba originalmente
        wrapper = shallow(<AddCategory setCategories={setCategories}/>) ;

    });

   
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

    //Simulando el submit del formulario
    test('No debe postear la informacion son submit ', () => {
        //tengo que proveed los argumento trasnformados en elementos 
        //preventDefault(){} forma corta de preventDefault: () => {}
        //ya estamos simulando el submit , hay que evaluar si tenemos un inputValue , si no tiene valor no deberia llamar 
        wrapper.find('form').simulate('submit', { preventDefault(){}}); 
        expect(setCategories).not.toHaveBeenCalled(); //esto verifica que no se llamo la funcuino 

    });

    test('Debe llamar el setCategories y limpiar la caja de texto', () => {
        // 1. Simluar el inputChange
        // 2. simular el submit
        // 3. setCategories se debe haber llamado

    });


    test('Simulando el inputChange ', () => {
        const value = 'hola mundo';
        wrapper.find('input').simulate('change', {target: { value}});

        wrapper.find('form').simulate('submit', {preventDefault(){}});

        expect(setCategories).toHaveBeenCalled();
        // expect(setCategories).toHaveBeenCalledTimes(2); //si se espera que se llamara 2 veces. 
        // expect(setCategories).toHaveBeenCalledWith(expect.any(Function)); //espera cualquier tipo de function 

        // 4. el valor del input debe estar '' 
        expect(wrapper.find('input').prop('value')).toBe('');

    })
    
    // test('Debe llamar a setCategories ', () => {
    //     expect(setCategories).toHaveBeenCalled();
    // })
    
    

});
