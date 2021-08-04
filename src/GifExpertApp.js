//shortcut rafc ->  y genera el cuerpo del componetn
import React, { useState } from 'react'

import { AddCategory } from './componets/AddCategory';
import { GifGrid } from './componets/GifGrid';

//Para las pruebas unitarias, se vana  a poner default categories como prop de la app para asi tener control en als pruebas de lo que se envia
// export const GifExpertApp = () => {
export const GifExpertApp = ({ defaultCategories = []}) => { // un default de arreglo vacio 

    // const [categories, setCategories] = useState(['One Punch']);
    const [categories, setCategories] = useState( defaultCategories ); //asi podemos hacer la evaluacion como queresmo mostadno la lista de categorias. 

    return (
        <>
          <h2>GiftExpertApp</h2>   
          <AddCategory setCategories={setCategories}/> 
          <hr/>

          <ol>
              { 
                categories.map( category => <GifGrid category={category} key={category}/>)
              }
          </ol>
        </>
    )
}
