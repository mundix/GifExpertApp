import React from 'react'
import { shallow} from 'enzyme'
import { GifGridItem } from '../../componets/GifGridItem';

//Para tirar un snapshoot nuevo presionar "U" en la linea de commando corriento el yarn run test 

describe('Pruebas en <GifGridItem/> Component', () => {


    test('Debe hacer algo', ()=>{
        const  title = 'Hola soy Goku';
        const url = 'https://p325k7wa.twic.pics/high/dragon-ball/dragonball-project-z/00-page-setup/dbzk_banner_final.jpg?twic=v1/dpr=2/cover=4060x1380/step=10/quality=80'
        const wrapper = shallow(<GifGridItem title={title} url={url}/>); //simular click o tener el documto como queremos 
        expect(wrapper).toMatchSnapshot(); //Tira la foto
    })

});

