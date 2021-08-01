import React from 'react'
import { shallow} from 'enzyme'
import { GifGridItem } from '../../componets/GifGridItem';

describe('Pruebas en <GifGridItem/> Component', () => {


    test('Debe hacer algo', ()=>{
        const image = {
            id:1,
            title: 'Hola soy Goku',
            url: 'https://p325k7wa.twic.pics/high/dragon-ball/dragonball-project-z/00-page-setup/dbzk_banner_final.jpg?twic=v1/dpr=2/cover=4060x1380/step=10/quality=80'
        }
        const wrapper = shallow(<GifGridItem image={image}/>); //simular click o tener el documto como queremos 
        expect(wrapper).toMatchSnapshot(); //Tira la foto
    })

});

