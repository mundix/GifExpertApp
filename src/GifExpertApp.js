//shortcut rafc ->  y genera el cuerpo del componetn
import React, { useState } from 'react'

import { AddCategory } from './componets/AddCategory';
import { GifGrid } from './componets/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

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
