import React, { useState, useEffect } from 'react'
import { getGifs } from '../Helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( {category}) => {

    const [images, setImages] = useState([]);
    
    useEffect( () => {
        getGifs(category)
        .then( setImages); //lo mismo de abajo
        // .then( imgs => setImages(imgs));
    }, []);

    return (
        <>
            <h3>{ category }</h3>
            <div className='card-grid'>
                    {
                        images.map(img => (
                            <GifGridItem 
                            {...img}
                            key={img.id}/>
                        ))
                    }
            </div>
        </>
    )
}
