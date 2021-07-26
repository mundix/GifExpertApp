//shortcut rafc ->  y genera el cuerpo del componetn
import React, { useState } from 'react'

import { AddCategory } from './componets/AddCategory';
import { GifGrid } from './componets/GifGrid';

export const GifExpertApp = () => {


    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    // const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);
    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     // setCategories( (c) => c + 'HunterXHunter');
    //     // setCategories([...categories, 'HunterXHunter']);
    //     setCategories(cats => [...cats, 'HunterXHunter']);
    //     // setCategories(['HunterXHunter',...categories ]);
    //     // categories.push('HunterXHunter');
    //     // console.log(categories);
    // }

    return (
        <>
          <h2>GiftExpertApp</h2>   
          {/* Estoy enviando la referencia de las categorias con setCategory */}
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
