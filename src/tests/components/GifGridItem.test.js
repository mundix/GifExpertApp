import React from 'react'
import { shallow} from 'enzyme'
import { GifGridItem } from '../../componets/GifGridItem';

//Para tirar un snapshoot nuevo presionar "U" en la linea de commando corriento el yarn run test 

describe('Pruebas en <GifGridItem/> Component', () => {

    const  title = 'Hola soy Goku';
    const url = 'https://p325k7wa.twic.pics/high/dragon-ball/dragonball-project-z/00-page-setup/dbzk_banner_final.jpg?twic=v1/dpr=2/cover=4060x1380/step=10/quality=80'
    const wrapper = shallow(<GifGridItem title={title} url={url}/>); //simular click o tener el documto como queremos 

    test('Debe hacer algo', ()=>{
        
        expect(wrapper).toMatchSnapshot(); //Tira la foto
    });

    test('Debe de tener un parrafo con el titulo ', () => {
       
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);    

    });
    
    test('Debe tener la imagen igual al url y alt de los props',  () => {
        const img = wrapper.find('img');
        const url = img.props().src;
        const alt = img.props().alt;
        // console.log(img.html()); //Obtuiene el HTML del elem DOM
        // console.log(img.props().src); //Obtiene las propiedades del Elem DOM
        expect(url).toBe(url);
        expect(alt).toBe(alt);
    })
    
    test('Debe tener animate__fadeIn', () => {
        const img = wrapper.find('div');
        const className = img.props().className;
        // console.log(el);
        expect(className.includes('animate__fadeIn')).toBe(true);

    });
    
});

